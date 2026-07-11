function addGenerator(Blockly) {

    Blockly.Arduino['AIbot_register_mcp_ws2812_rgb_service'] = function(block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"RGB"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) ||
            '"Control a WS2812 RGB LED strip. Set brightness and dynamic effects. Supported effects: \'static\', \'blink\', \'breath\', \'rainbow\', \'flow\', \'rainbow_cycle\', \'chase\', \'off\', \'on\'."';
        const serviceNameClean = serviceName.replace(/"/g, '');

        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }

        const setupCode = `
    ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",
        ${description},
        {
            {"brightness", ai_vox::ParamSchema<int64_t>{.default_value = 100, .min = 0, .max = 255}},
            {"effect", ai_vox::ParamSchema<std::string>{.default_value = "static"}}
        }
    );
    `;
        Blockly.Arduino.setups_[`AIbot_mcp_register_${serviceNameClean}`] = setupCode;
        return '';
    };

    Blockly.Arduino['AIbot_get_ws2812_rgb_mcp_name'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"RGB"';
        const code = `("self.${mcpName.replace(/"/g, '')}.get" == name)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['AIbot_get_ws2812_rgb_param_value'] = function(block) {
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"brightness"';
        const paramNameClean = paramName.replace(/"/g, '');

        let code;
        let type;

        if (paramNameClean.toLowerCase() === 'brightness') {
            code = `std::get<int64_t>(param.at(${paramName}))`;
            type = Blockly.Arduino.ORDER_ATOMIC;
        } else if (paramNameClean.toLowerCase() === 'effect') {
            code = `std::get<std::string>(param.at(${paramName}))`;
            type = Blockly.Arduino.ORDER_ATOMIC;
        } else {
            code = '""';
            type = Blockly.Arduino.ORDER_ATOMIC;
        }

        const safeCode = `(param.count(${paramName}) ? ${code} : ${paramNameClean.toLowerCase() === 'brightness' ? '100' : '"static"'})`;

        return [safeCode, type];
    };

    Blockly.Arduino['AIbot_update_ws2812_rgb_state'] = function(block) {
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"brightness"';
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const paramNameClean = paramName.replace(/"/g, '').toLowerCase();

        let code = '';
        if (paramNameClean === 'brightness') {
            code = `g_requested_brightness = ${value};\n`;
        } else if (paramNameClean === 'effect') {
            code = `g_requested_effect = ${value};\n`;
        }
        return code;
    };

    Blockly.Arduino['AIbot_response_ws2812_rgb_result'] = function(block) {
        const code =
`g_new_led_request = true;
ai_vox_engine.SendMcpCallResponse(id, true);
`;
        return code;
    };

    Blockly.Arduino['ws2812_rgb_control'] = function(block) {
        const pin = block.getFieldValue('PIN') || '2';
        const numLeds = Blockly.Arduino.valueToCode(block, 'NUM_LEDS', Blockly.Arduino.ORDER_ATOMIC) || '4';

        Blockly.Arduino.includes_['AIbot_ws2812_neo_pixel'] = '#include <Adafruit_NeoPixel.h>';
        Blockly.Arduino.includes_['AIbot_ws2812_string_h'] = '#include <string.h>';

        const definitions = `
#define LED_PIN ${pin}
#define LED_COUNT ${numLeds}
Adafruit_NeoPixel strip_0(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

const int RAINBOW_SPEED         = 15;
const int BLINK_SPEED           = 500;
const int BREATH_SPEED          = 20;
const int FLOW_SPEED            = 100;
const int CHASE_SPEED           = 40;

volatile bool g_new_led_request = false;
std::string g_requested_effect = "off";
int g_requested_brightness = 100;
std::string g_active_effect = "off";
std::string g_last_on_effect = "static";
unsigned long g_last_update_time = 0;

uint16_t g_rainbow_j = 0;
bool g_blink_state = false;
int g_breath_value = 0;
int g_breath_direction = 5;
int g_flow_pixel_pos = 0;

int g_chase_pos = 0;
int g_chase_dir = 1;
uint8_t* g_chase_leds = nullptr; 
`;
        Blockly.Arduino.definitions_['AIbot_ws2812_engine_definitions'] = definitions;

        const setupCode = `
strip_0.begin();

if (g_chase_leds != nullptr) {
  free(g_chase_leds);
  g_chase_leds = nullptr;
}
g_chase_leds = (uint8_t*)malloc(LED_COUNT * sizeof(uint8_t));
if (g_chase_leds != nullptr) {
  memset(g_chase_leds, 0, LED_COUNT * sizeof(uint8_t));
}
`;
        Blockly.Arduino.setups_['AIbot_ws2812_engine_setup'] = setupCode;

        const loopCode = `
if (g_new_led_request) {
  g_new_led_request = false;
  processNewLedRequest();
}
updateLedAnimations();
`;
        Blockly.Arduino.loops_['AIbot_ws2812_engine_loop'] = loopCode;

        const processNewLedRequestFunc = `
void processNewLedRequest() {
    Serial.printf("\\n>> RGB_ENGINE: Processing new request: effect='%s', brightness=%d\\n", g_requested_effect.c_str(), g_requested_brightness);
    std::string effect = g_requested_effect;
    for (auto &c : effect) c = tolower(c);
    if (effect.find("关") != std::string::npos) effect = "off";
    if (effect.find("开") != std::string::npos) effect = "on";
    if (effect.find("彩虹") != std::string::npos && effect.find("循环") == std::string::npos) effect = "rainbow";
    if (effect.find("呼吸") != std::string::npos) effect = "breath";
    if (effect.find("闪") != std::string::npos) effect = "blink";
    if (effect.find("常亮") != std::string::npos) effect = "static";
    if (effect.find("流水") != std::string::npos) effect = "flow";
    if (effect.find("彩虹循环") != std::string::npos || effect.find("彩虹渐变") != std::string::npos) effect = "rainbow_cycle";
    if (effect.find("影院") != std::string::npos || effect.find("追光") != std::string::npos || effect.find("chase") != std::string::npos) effect = "chase";
    if (effect == "on") { effect = g_last_on_effect; }
    strip_0.setBrightness(constrain(g_requested_brightness, 0, 255));
    g_active_effect = effect;
    if (effect != "off") { g_last_on_effect = effect; }
    if (effect == "off") { strip_0.clear(); strip_0.show(); }
    else if (effect == "static") { strip_0.fill(strip_0.Color(255, 255, 255)); strip_0.show(); }
    else {
        g_last_update_time = millis(); g_rainbow_j = 0; g_blink_state = false; g_breath_value = 0; g_breath_direction = 5; g_flow_pixel_pos = 0;
        g_chase_pos = 0; g_chase_dir = 1;
        if (g_chase_leds != nullptr) {
            free(g_chase_leds);
            g_chase_leds = nullptr;
        }
        g_chase_leds = (uint8_t*)malloc(LED_COUNT * sizeof(uint8_t));
        if (g_chase_leds != nullptr) {
          memset(g_chase_leds, 0, LED_COUNT * sizeof(uint8_t));
        }

    }
}
`;

        const updateLedAnimationsFunc = `
void updateLedAnimations() {
    if (g_active_effect == "off" || g_active_effect == "static") return;
    unsigned long current_time = millis();
    if (g_active_effect == "rainbow") { if (current_time - g_last_update_time > RAINBOW_SPEED) { g_last_update_time = current_time; g_rainbow_j++; for (int i=0; i<LED_COUNT; i++) { strip_0.setPixelColor(i, strip_0.gamma32(strip_0.ColorHSV(((i * 256 / LED_COUNT) + g_rainbow_j) * 256))); } strip_0.show(); }
    } else if (g_active_effect == "blink") { if (current_time - g_last_update_time > BLINK_SPEED) { g_last_update_time = current_time; g_blink_state = !g_blink_state; if (g_blink_state) strip_0.fill(strip_0.Color(255, 255, 255)); else strip_0.clear(); strip_0.show(); }
    } else if (g_active_effect == "breath") {
        if (current_time - g_last_update_time > BREATH_SPEED) {
            g_last_update_time = current_time;
            g_breath_value += g_breath_direction;
            if (g_breath_value >= 255) {
                g_breath_value = 255;
                g_breath_direction = -5; 
            } else if (g_breath_value <= 0) {
                g_breath_value = 0;
                g_breath_direction = 5;
            }

            strip_0.fill(strip_0.Color(g_breath_value, 0, 0));
            strip_0.show();
        }
    } else if (g_active_effect == "flow") { if (current_time - g_last_update_time > FLOW_SPEED) { g_last_update_time = current_time; g_flow_pixel_pos = (g_flow_pixel_pos + 1) % LED_COUNT; strip_0.clear(); strip_0.setPixelColor(g_flow_pixel_pos, strip_0.Color(100, 100, 255)); strip_0.show(); }
    } else if (g_active_effect == "rainbow_cycle") { if (current_time - g_last_update_time > RAINBOW_SPEED) { g_last_update_time = current_time; g_rainbow_j++; strip_0.fill(strip_0.ColorHSV(g_rainbow_j * 256)); strip_0.show(); }
    }
    else if (g_active_effect == "chase") { if (current_time - g_last_update_time > CHASE_SPEED) {
            g_last_update_time = current_time;
            if(g_chase_leds != nullptr){
              for (int i = 0; i < LED_COUNT; i++) {
                  if (g_chase_leds[i] > 0) g_chase_leds[i] = max(0, g_chase_leds[i] - 48);
              }
              g_chase_leds[g_chase_pos] = 255;
              for (int i = 0; i < LED_COUNT; i++) {
                  strip_0.setPixelColor(i, strip_0.Color(g_chase_leds[i], 0, 0));
              }
            }
            strip_0.show();
            g_chase_pos += g_chase_dir;
            if (g_chase_pos >= LED_COUNT) {
                g_chase_pos = max(0, LED_COUNT - 2);
                g_chase_dir = -1;
            } else if (g_chase_pos < 0) {
                g_chase_pos = min(LED_COUNT - 1, 1);
                g_chase_dir = 1;
            }
        }
    }
}
`;

        Blockly.Arduino.definitions_['processNewLedRequestFunc'] = processNewLedRequestFunc;
        Blockly.Arduino.definitions_['updateLedAnimationsFunc'] = updateLedAnimationsFunc;

        return '';
    };

    return Blockly;
}

exports = addGenerator;