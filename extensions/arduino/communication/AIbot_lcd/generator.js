/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly){Blockly.Arduino["AIbot_init_wifi"]=function(block){const wifi_ssid=Blockly.Arduino.valueToCode(block,"wifi_ssid",Blockly.Arduino.ORDER_ATOMIC)||'""';const wifi_pwd=Blockly.Arduino.valueToCode(block,"wifi_pwd",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.includes_.AIbot_wifi_init='#include <WiFi.h>\n#include <driver/spi_common.h>\n#include <esp_heap_caps.h>\n';Blockly.Arduino.definitions_.AIbot_wifi_ssid_define=`#define WIFI_SSID ${wifi_ssid}\n`;Blockly.Arduino.definitions_.AIbot_wifi_pwd_define=`#define WIFI_PASSWORD ${wifi_pwd}\n`;Blockly.Arduino.setups_.AIbot_serial="Serial.begin(115200);";Blockly.Arduino.setups_.AIbot_init_display="InitDisplay();";Blockly.Arduino.setups_.AIbot_wifi_connecting='g_display->ShowStatus("Wifi connecting...");';Blockly.Arduino.setups_.AIbot_wifi='WiFi.useStaticBuffers(true);\n'+'WiFi.begin(WIFI_SSID, WIFI_PASSWORD);\n'+'while (WiFi.status() != WL_CONNECTED) {\n'+'  delay(1000);\n'+'  Serial.printf("Connecting to WiFi, ssid: %s", WIFI_SSID);\n'+'}\n';return""};Blockly.Arduino["AIbot_init_std"]=function(block){const micBclk=block.getFieldValue("MIC_BCLK");const micWs=block.getFieldValue("MIC_WS");const micDin=block.getFieldValue("MIC_DIN");const spkBclk=block.getFieldValue("SPK_BCLK");const spkWs=block.getFieldValue("SPK_WS");const spkDout=block.getFieldValue("SPK_DOUT");const triggerPin=block.getFieldValue("TRIGGER_PIN");Blockly.Arduino.includes_.AIbot_include_aivox_engine='#include "ai_vox_engine.h"';Blockly.Arduino.includes_.AIbot_include_aivox_observer='#include "ai_vox_observer.h"';Blockly.Arduino.includes_.AIbot_include_i2s_std_input='#include "audio_input_device_sph0645.h"';Blockly.Arduino.includes_.AIbot_include_i2s_std_output='#include "i2s_std_audio_output_device.h"';Blockly.Arduino.definitions_.AIbot_aivox_observer="auto g_observer = std::make_shared<ai_vox::Observer>();";Blockly.Arduino.definitions_.AIbot_kMicPinBclk=`constexpr gpio_num_t kMicPinBclk = GPIO_NUM_${micBclk};`;Blockly.Arduino.definitions_.AIbot_kMicPinWs=`constexpr gpio_num_t kMicPinWs = GPIO_NUM_${micWs};`;Blockly.Arduino.definitions_.AIbot_kMicPinDin=`constexpr gpio_num_t kMicPinDin = GPIO_NUM_${micDin};`;Blockly.Arduino.definitions_.AIbot_kSpeakerPinBclk=`constexpr gpio_num_t kSpeakerPinBclk = GPIO_NUM_${spkBclk};`;Blockly.Arduino.definitions_.AIbot_kSpeakerPinWs=`constexpr gpio_num_t kSpeakerPinWs = GPIO_NUM_${spkWs};`;Blockly.Arduino.definitions_.AIbot_kSpeakerPinDout=`constexpr gpio_num_t kSpeakerPinDout = GPIO_NUM_${spkDout};`;Blockly.Arduino.definitions_.AIbot_kTriggerPin=`constexpr gpio_num_t kTriggerPin = GPIO_NUM_${triggerPin};`;Blockly.Arduino.definitions_.AIbot_input_device=`auto audio_input_device = std::make_shared<AudioInputDeviceSph0645>(kMicPinBclk, kMicPinWs, kMicPinDin);`;Blockly.Arduino.definitions_.AIbot_output_device=`auto audio_output_device = std::make_shared<ai_vox::I2sStdAudioOutputDevice>(kSpeakerPinBclk, kSpeakerPinWs, kSpeakerPinDout);`;Blockly.Arduino.setups_.AIbot_start='auto& ai_vox_engine = ai_vox::Engine::GetInstance();\n'+'ai_vox_engine.SetObserver(g_observer);\n'+'ai_vox_engine.SetTrigger(kTriggerPin);\n'+'ai_vox_engine.Start(audio_input_device, audio_output_device);\n';return""};Blockly.Arduino["AIbot_init_lcd"]=function(block){const backLight=block.getFieldValue("backLight");const mosi=block.getFieldValue("MOSI");const clk=block.getFieldValue("CLK");const dc=block.getFieldValue("DC");const rst=block.getFieldValue("RST");const cs=block.getFieldValue("CS");const width=240;const height=240;Blockly.Arduino.includes_.AIbot_include_aivox_esp_lcd_panel_io="#include <esp_lcd_panel_io.h>";Blockly.Arduino.includes_.AIbot_include_aivox_esp_lcd_panel_ops="#include <esp_lcd_panel_ops.h>";Blockly.Arduino.includes_.AIbot_include_aivox_esp_lcd_panel_vendor="#include <esp_lcd_panel_vendor.h>";Blockly.Arduino.includes_.AIbot_include_aivox_display='#include "display.h"';Blockly.Arduino.definitions_.AIbot_aivox_backLight=`constexpr gpio_num_t kDisplayBacklightPin = GPIO_NUM_${backLight};`;Blockly.Arduino.definitions_.AIbot_aivox_mosi=`constexpr gpio_num_t kDisplayMosiPin = GPIO_NUM_${mosi};`;Blockly.Arduino.definitions_.AIbot_aivox_clk=`constexpr gpio_num_t kDisplayClkPin = GPIO_NUM_${clk};`;Blockly.Arduino.definitions_.AIbot_aivox_dc=`constexpr gpio_num_t kDisplayDcPin = GPIO_NUM_${dc};`;Blockly.Arduino.definitions_.AIbot_aivox_rst=`constexpr gpio_num_t kDisplayRstPin = GPIO_NUM_${rst};`;Blockly.Arduino.definitions_.AIbot_aivox_cs=`constexpr gpio_num_t kDisplayCsPin = GPIO_NUM_${cs};`;Blockly.Arduino.definitions_.AIbot_aivox_kDisplaySpiMode="constexpr auto kDisplaySpiMode = 0;";Blockly.Arduino.definitions_.AIbot_aivox_width=`constexpr uint32_t kDisplayWidth = ${width};`;Blockly.Arduino.definitions_.AIbot_aivox_height=`constexpr uint32_t kDisplayHeight = ${height};`;Blockly.Arduino.definitions_.AIbot_aivox_kDisplayMirrorX="constexpr bool kDisplayMirrorX = false;";Blockly.Arduino.definitions_.AIbot_aivox_kDisplayMirrorY="constexpr bool kDisplayMirrorY = false;";Blockly.Arduino.definitions_.AIbot_aivox_kDisplayInvertColor="constexpr bool kDisplayInvertColor = true;";Blockly.Arduino.definitions_.AIbot_aivox_kDisplaySwapXY="constexpr bool kDisplaySwapXY = false;";Blockly.Arduino.definitions_.AIbot_aivox_kDisplayRgbElementOrder="constexpr auto kDisplayRgbElementOrder = LCD_RGB_ELEMENT_ORDER_RGB;";Blockly.Arduino.definitions_.AIbot_aivox_init_display_obj="std::unique_ptr<Display> g_display;";Blockly.Arduino.definitions_.AIbot_aivox_initDisplay=`void InitDisplay() {
    pinMode(kDisplayBacklightPin, OUTPUT);
    analogWrite(kDisplayBacklightPin, 255);
    spi_bus_config_t buscfg{
        .mosi_io_num = kDisplayMosiPin,
        .miso_io_num = GPIO_NUM_NC,
        .sclk_io_num = kDisplayClkPin,
        .quadwp_io_num = GPIO_NUM_NC,
        .quadhd_io_num = GPIO_NUM_NC,
        .max_transfer_sz = kDisplayWidth * kDisplayHeight * sizeof(uint16_t),
    };
    ESP_ERROR_CHECK(spi_bus_initialize(SPI3_HOST, &buscfg, SPI_DMA_CH_AUTO));
    esp_lcd_panel_io_handle_t panel_io = nullptr;
    esp_lcd_panel_handle_t panel = nullptr;
    esp_lcd_panel_io_spi_config_t io_config = {};
    io_config.cs_gpio_num = kDisplayCsPin;
    io_config.dc_gpio_num = kDisplayDcPin;
    io_config.spi_mode = kDisplaySpiMode;
    io_config.pclk_hz = 40 * 1000 * 1000;
    io_config.trans_queue_depth = 10;
    io_config.lcd_cmd_bits = 8;
    io_config.lcd_param_bits = 8;
    ESP_ERROR_CHECK(esp_lcd_new_panel_io_spi(SPI3_HOST, &io_config, &panel_io));
    esp_lcd_panel_dev_config_t panel_config = {};
    panel_config.reset_gpio_num = kDisplayRstPin;
    panel_config.rgb_ele_order = kDisplayRgbElementOrder;
    panel_config.bits_per_pixel = 16;
    ESP_ERROR_CHECK(esp_lcd_new_panel_st7789(panel_io, &panel_config, &panel));
    esp_lcd_panel_reset(panel);
    esp_lcd_panel_init(panel);
    esp_lcd_panel_invert_color(panel, kDisplayInvertColor);
    esp_lcd_panel_swap_xy(panel, kDisplaySwapXY);
    esp_lcd_panel_mirror(panel, kDisplayMirrorX, kDisplayMirrorY);
    g_display = std::make_unique<Display>(panel_io, panel, kDisplayWidth, kDisplayHeight, 0, 0, kDisplayMirrorX, kDisplayMirrorY, kDisplaySwapXY);
    g_display->Start();
    }`;Blockly.Arduino.setups_.AIbot_wifi_connected='g_display->ShowStatus("Wifi connected");';return""};Blockly.Arduino["AIbot_set_ota_link"]=function(block){const ota_link=Blockly.Arduino.valueToCode(block,"ota_link",Blockly.Arduino.ORDER_ATOMIC)||'""';const code=`ai_vox_engine->SetOtaUrl(${ota_link});\n`;return code};Blockly.Arduino["AIbot_lcd_show_status"]=function(block){const ai_vox_status=Blockly.Arduino.valueToCode(block,"ai_vox_status",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_display->ShowStatus(${ai_vox_status});\n`};Blockly.Arduino["AIbot_lcd_show_chat_message"]=function(block){const display_role=block.getFieldValue("ai_vox_display_role");const ai_vox_chat_message=Blockly.Arduino.valueToCode(block,"ai_vox_chat_message",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_display->SetChatMessage(${display_role}, ${ai_vox_chat_message});\n`};Blockly.Arduino["AIbot_lcd_show_emotion"]=function(block){const ai_vox_emotion=Blockly.Arduino.valueToCode(block,"ai_vox_emotion",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_display->SetEmotion(${ai_vox_emotion});\n`};Blockly.Arduino["AIbot_loop"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");const loopCode=` const auto events = g_observer->PopEvents();
for (auto& event : events) {
${statements_do}
}
taskYIELD();
`;return loopCode};Blockly.Arduino["AIbot_event_is_activation"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");return`if (auto activation_event = std::get_if<ai_vox::Observer::ActivationEvent>(&event)) {\n${statements_do}}\n`};Blockly.Arduino["AIbot_get_activation_message"]=function(block){return["activation_event->message.c_str()",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_get_activation_code"]=function(block){return["activation_event->code.c_str()",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_event_is_state_change"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");return`if (auto state_changed_event = std::get_if<ai_vox::Observer::StateChangedEvent>(&event)) {\n${statements_do}}\n`};Blockly.Arduino["AIbot_get_new_state"]=function(block){return["state_changed_event->new_state",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_get_old_state"]=function(block){return["state_changed_event->old_state",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_state_enum"]=function(block){const state=block.getFieldValue("STATE");return[state,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino["AIbot_event_is_emotion"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");return`if (auto emotion_event = std::get_if<ai_vox::Observer::EmotionEvent>(&event)) {\n${statements_do}}\n`};Blockly.Arduino["AIbot_get_emotion"]=function(block){return["emotion_event->emotion.c_str()",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_event_is_chat_message"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");return`if (auto chat_message_event = std::get_if<ai_vox::Observer::ChatMessageEvent>(&event)) {\n${statements_do}}\n`};Blockly.Arduino["AIbot_get_chat_role"]=function(block){return["chat_message_event->role",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_chat_role_enum"]=function(block){const role=block.getFieldValue("chat_role");return[role,Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino["AIbot_get_chat_content"]=function(block){return["chat_message_event->content.c_str()",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_event_is_iot_message"]=function(block){const statements_do=Blockly.Arduino.statementToCode(block,"DO");return`if (auto iot_message_event = std::get_if<ai_vox::Observer::IotMessageEvent>(&event)) {\n${statements_do}}\n`};Blockly.Arduino["AIbot_get_iot_message_event_name"]=function(block){return["iot_message_event->name",Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_get_iot_led_message_event_function"]=function(block){const event_function=block.getFieldValue("event_fuction");return[`(iot_message_event->function == "${event_function}")`,Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_get_iot_servo_message_event_function"]=function(block){const event_function=block.getFieldValue("event_fuction");return[`(iot_message_event->function == "${event_function}")`,Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_get_iot_servo_message"]=function(block){const iot_servo_msg=block.getFieldValue("iot_servo_msg");if(!Blockly.Arduino.definitions_.AIbot_get_iot_servo_message){Blockly.Arduino.definitions_.AIbot_get_iot_servo_message=`int getIotServoMessage(auto iotEvent, int type){
    int res = 0;
    if(type == 1) {
        auto it = iotEvent->parameters.find("index");
        res = std::get<int64_t>(it->second);
    } else if(type == 2) {
        auto it = iotEvent->parameters.find("angle_value");
        res = std::get<int64_t>(it->second);
    }
    return res;
}`}return[`getIotServoMessage(iot_message_event, ${iot_servo_msg})`,Blockly.Arduino.ORDER_MEMBER]};Blockly.Arduino["AIbot_register_led_driver_status"]=function(block){const driverName=Blockly.Arduino.valueToCode(block,"driver_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const name=driverName.replace(/"/g,"");const driver_num=Blockly.Arduino.valueToCode(block,"driver_num",Blockly.Arduino.ORDER_ATOMIC)||'""';const properties=Blockly.Arduino.valueToCode(block,"driver_properties",Blockly.Arduino.ORDER_ATOMIC)||'""';const open=Blockly.Arduino.valueToCode(block,"driver_open",Blockly.Arduino.ORDER_ATOMIC)||'""';const close=Blockly.Arduino.valueToCode(block,"driver_close",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_[`AIbot_led_entity_${name}`]=`std::shared_ptr<ai_vox::iot::Entity> g_${name}_iot_entity;`;Blockly.Arduino.definitions_[`AIbot_led_init_${name}`]=`void InitDigitalControl${name}Iot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> ${name}_properties({
    { ${driverName}, ${properties}, ai_vox::iot::ValueType::kBool }
});
std::vector<ai_vox::iot::Function> ${name}_functions({
    {"TurnOn",  ${open},  {}},
    {"TurnOff", ${close}, {}},
});
g_${name}_iot_entity = std::make_shared<ai_vox::iot::Entity>(${driverName}, ${properties}, std::move(${name}_properties), std::move(${name}_functions));
g_${name}_iot_entity->UpdateState(${driverName}, false);
ai_vox_engine.RegisterIotEntity(g_${name}_iot_entity);
}`;Blockly.Arduino.setups_[`AIbot_register_led_${name}`]=`InitDigitalControl${name}Iot();`;return""};Blockly.Arduino["AIbot_register_servo_driver_status"]=function(block){const driverName=Blockly.Arduino.valueToCode(block,"driver_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const driver_num=Blockly.Arduino.valueToCode(block,"driver_num",Blockly.Arduino.ORDER_ATOMIC)||'""';const properties=Blockly.Arduino.valueToCode(block,"driver_properties",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_.AIbot_servo_entity="std::shared_ptr<ai_vox::iot::Entity> g_servo_iot_entity;";Blockly.Arduino.definitions_.AIbot_servo_init=`void InitServoControlIot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> servo_iot_properties;
for (uint32_t i = 1; i <= ${driver_num}; i++) {
    std::string property_name = std::to_string(i) + "号舵机";
    std::string property_describe = std::to_string(i) + "号" + ${properties};
    servo_iot_properties.push_back({ std::move(property_name), std::move(property_describe), ai_vox::iot::ValueType::kNumber });
}
std::vector<ai_vox::iot::Function> servo_iot_functions({
    {"SetOneServo", "设置单个舵机角度",
        {{"angle_value", "舵机角度(0-180之间的整数)", ai_vox::iot::ValueType::kNumber, true},
        {"index", "舵机编号", ai_vox::iot::ValueType::kNumber, true}}},
    {"SetAllServos", "设置所有舵机角度",
        {{"angle_value", "舵机角度(0-180之间的整数)", ai_vox::iot::ValueType::kNumber, true}}}
});
g_servo_iot_entity = std::make_shared<ai_vox::iot::Entity>("Servo", ${properties}, std::move(servo_iot_properties), std::move(servo_iot_functions));
for (uint32_t i = 1; i <= ${driver_num}; i++) {
    std::string property_name = std::to_string(i) + "号舵机";
    g_servo_iot_entity->UpdateState(std::move(property_name), 0);
}
ai_vox_engine.RegisterIotEntity(g_servo_iot_entity);
}`;Blockly.Arduino.setups_.AIbot_register_servo="InitServoControlIot();";return""};Blockly.Arduino["AIbot_register_ultrasonic_sensor_driver_status"]=function(block){const driverName=Blockly.Arduino.valueToCode(block,"driver_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const properties=Blockly.Arduino.valueToCode(block,"driver_properties",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_.AIbot_ultrasonic_entity="std::shared_ptr<ai_vox::iot::Entity> g_us04_ultrasonic_sensor_iot_entity;";Blockly.Arduino.definitions_.AIbot_ultrasonic_init=`void InitUltrasonicSensorIot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> us04_ultrasonic_sensor_iot_properties({
    { ${driverName}, ${properties}, ai_vox::iot::ValueType::kString }
});
std::vector<ai_vox::iot::Function> us04_ultrasonic_sensor_iot_functions({});
g_us04_ultrasonic_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>(${driverName}, "超声波传感器",
    std::move(us04_ultrasonic_sensor_iot_properties), std::move(us04_ultrasonic_sensor_iot_functions));
g_us04_ultrasonic_sensor_iot_entity->UpdateState("distance", "0");
ai_vox_engine.RegisterIotEntity(g_us04_ultrasonic_sensor_iot_entity);
}`;Blockly.Arduino.setups_.AIbot_register_ultrasonic="InitUltrasonicSensorIot();";return""};Blockly.Arduino["AIbot_register_dht11_sensor_driver_status"]=function(block){const dht11_temp_name=Blockly.Arduino.valueToCode(block,"dht11_temp_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const temp_properties=Blockly.Arduino.valueToCode(block,"temp_properties",Blockly.Arduino.ORDER_ATOMIC)||'""';const dht11_humidity_name=Blockly.Arduino.valueToCode(block,"dht11_humidity_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const humidity_properties=Blockly.Arduino.valueToCode(block,"humidity_properties",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_.AIbot_dht11_entity="std::shared_ptr<ai_vox::iot::Entity> g_dht11_sensor_iot_entity;";Blockly.Arduino.definitions_.AIbot_dht11_init=`void InitDht11SensorIot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> dht11_sensor_iot_properties({
    { ${dht11_temp_name}, ${temp_properties}, ai_vox::iot::ValueType::kString },
    { ${dht11_humidity_name}, ${humidity_properties}, ai_vox::iot::ValueType::kString }
});
std::vector<ai_vox::iot::Function> dht11_sensor_iot_functions({});
g_dht11_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>("DHT11Sensor", "DHT11温湿度传感器",
    std::move(dht11_sensor_iot_properties), std::move(dht11_sensor_iot_functions));
g_dht11_sensor_iot_entity->UpdateState(${dht11_temp_name}, "0");
g_dht11_sensor_iot_entity->UpdateState(${dht11_humidity_name}, "0");
ai_vox_engine.RegisterIotEntity(g_dht11_sensor_iot_entity);
}`;Blockly.Arduino.setups_.AIbot_register_dht11="InitDht11SensorIot();";return""};Blockly.Arduino["AIbot_register_analog_sensor_driver_status"]=function(block){const aivox_analog_name=Blockly.Arduino.valueToCode(block,"aivox_analog_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const analog_name=aivox_analog_name.replace(/"/g,"");const aivox_analog_desc=Blockly.Arduino.valueToCode(block,"aivox_analog_desc",Blockly.Arduino.ORDER_ATOMIC)||'""';const aivox_analog_status=Blockly.Arduino.valueToCode(block,"aivox_analog_status",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_[`AIbot_${analog_name}_entity`]=`std::shared_ptr<ai_vox::iot::Entity> g_${analog_name}_sensor_iot_entity;`;Blockly.Arduino.definitions_[`AIbot_${analog_name}_init`]=`void Init${analog_name}SensorIot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> ${analog_name}_sensor_iot_properties({
    { ${aivox_analog_name}, ${aivox_analog_status}, ai_vox::iot::ValueType::kString }
});
std::vector<ai_vox::iot::Function> ${analog_name}_sensor_iot_functions({});
g_${analog_name}_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>(${aivox_analog_name}, ${aivox_analog_desc},
    std::move(${analog_name}_sensor_iot_properties), std::move(${analog_name}_sensor_iot_functions));
g_${analog_name}_sensor_iot_entity->UpdateState(${aivox_analog_name}, "0");
ai_vox_engine.RegisterIotEntity(g_${analog_name}_sensor_iot_entity);
}`;Blockly.Arduino.setups_[`AIbot_register_${analog_name}`]=`Init${analog_name}SensorIot();`;return""};Blockly.Arduino["AIbot_register_ws2812_driver_status"]=function(block){const aivox_ws2812_name=Blockly.Arduino.valueToCode(block,"aivox_ws2812_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const ws2812_name=aivox_ws2812_name.replace(/"/g,"");const aivox_ws2812_num=Blockly.Arduino.valueToCode(block,"aivox_ws2812_num",Blockly.Arduino.ORDER_ATOMIC)||'""';Blockly.Arduino.definitions_[`AIbot_${ws2812_name}_entity`]=`std::shared_ptr<ai_vox::iot::Entity> g_${ws2812_name}_iot_entity;`;Blockly.Arduino.definitions_[`AIbot_${ws2812_name}_init`]=`void Init${ws2812_name}Iot() {
auto& ai_vox_engine = ai_vox::Engine::GetInstance();
std::vector<ai_vox::iot::Property> ${ws2812_name}_properties({
    { "brightness", "亮度(0-255)", ai_vox::iot::ValueType::kNumber },
    { "LedNums", "灯的数量", ai_vox::iot::ValueType::kNumber }
});
for (uint32_t i = 1; i <= ${aivox_ws2812_num}; ++i) {
    const std::string property_name = "color" + std::to_string(i);
    const std::string property_describe = std::to_string(i) + "号灯颜色";
    ${ws2812_name}_properties.push_back({ std::move(property_name), std::move(property_describe), ai_vox::iot::ValueType::kString });
}
std::vector<ai_vox::iot::Function>  ${ws2812_name}_functions({
    {"SetIndexColor", "设置指定LED颜色",
        {{"index","LED索引(1-总数)",ai_vox::iot::ValueType::kNumber,true},
        {"red","红色值(0-255)",ai_vox::iot::ValueType::kNumber,true},
        {"green","绿色值(0-255)",ai_vox::iot::ValueType::kNumber,true},
        {"blue","蓝色值(0-255)",ai_vox::iot::ValueType::kNumber,true}}},
    {"SetRangeIndexsColor", "设置连续LED范围颜色",
        {{"start","起始LED索引(1-总数)",ai_vox::iot::ValueType::kNumber,true},
        {"end","结束LED索引(1-总数)",ai_vox::iot::ValueType::kNumber,true},
        {"red","红色值(0-255)",ai_vox::iot::ValueType::kNumber,true},
        {"green","绿色值(0-255)",ai_vox::iot::ValueType::kNumber,true},
        {"blue","蓝色值(0-255)",ai_vox::iot::ValueType::kNumber,true}}},
    {"SetBrightness", "设置亮度", {{"brightness","亮度值(0-255)",ai_vox::iot::ValueType::kNumber,true}}},
    {"Clear", "清除所有LED", {}},
});
g_${ws2812_name}_iot_entity = std::make_shared<ai_vox::iot::Entity>(${aivox_ws2812_name}, "RGB灯环",
    std::move(${ws2812_name}_properties), std::move(${ws2812_name}_functions));
g_${ws2812_name}_iot_entity->UpdateState("brightness", 128);
g_${ws2812_name}_iot_entity->UpdateState("LedNums", ${aivox_ws2812_num});
for (uint32_t i = 1; i <= ${aivox_ws2812_num}; ++i) {
    const std::string property_name = "color" + std::to_string(i);
    g_${ws2812_name}_iot_entity->UpdateState(property_name, R"({"red":0,"green":0,"blue":0})");
}
ai_vox_engine.RegisterIotEntity(g_${ws2812_name}_iot_entity);
}`;Blockly.Arduino.setups_[`AIbot_register_${ws2812_name}`]=`Init${ws2812_name}Iot();`;return""};Blockly.Arduino["AIbot_update_led_iot_state"]=function(block){const aivox_drive=Blockly.Arduino.valueToCode(block,"aivox_drive",Blockly.Arduino.ORDER_ATOMIC)||'""';const name=aivox_drive.replace(/"/g,"");const aivox_drive_state=this.getFieldValue("aivox_drive_state");return`g_${name}_iot_entity->UpdateState(${aivox_drive}, ${aivox_drive_state});\n`};Blockly.Arduino["AIbot_update_servo_iot_state"]=function(block){const aivox_drive=Blockly.Arduino.valueToCode(block,"aivox_drive",Blockly.Arduino.ORDER_ATOMIC)||'""';const aivox_drive_state=Blockly.Arduino.valueToCode(block,"aivox_drive_state",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_servo_iot_entity->UpdateState(${aivox_drive}, ${aivox_drive_state});\n`};Blockly.Arduino["AIbot_update_all_servo_iot_state"]=function(block){const aivox_servo_num=Blockly.Arduino.valueToCode(block,"aivox_servo_num",Blockly.Arduino.ORDER_ATOMIC)||'""';const aivox_drive_state=Blockly.Arduino.valueToCode(block,"aivox_drive_state",Blockly.Arduino.ORDER_ATOMIC)||'""';return`for (uint32_t i = 1; i <= ${aivox_servo_num}; i++) {\n  g_servo_iot_entity->UpdateState(std::to_string(i) + "号舵机", ${aivox_drive_state});\n}\n`};Blockly.Arduino["AIbot_update_ultrasonic_iot_state"]=function(block){const aivox_ultrasonic=Blockly.Arduino.valueToCode(block,"aivox_ultrasonic",Blockly.Arduino.ORDER_ATOMIC)||'""';const aivox_ultrasonic_distance=Blockly.Arduino.valueToCode(block,"aivox_ultrasonic_distance",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_us04_ultrasonic_sensor_iot_entity->UpdateState(${aivox_ultrasonic}, std::to_string(${aivox_ultrasonic_distance}));\n`};Blockly.Arduino["AIbot_update_dht11_iot_state"]=function(block){const aivox_dht11=Blockly.Arduino.valueToCode(block,"aivox_dht11",Blockly.Arduino.ORDER_ATOMIC)||'""';const aivox_dnt11_value=Blockly.Arduino.valueToCode(block,"aivox_dnt11_value",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_dht11_sensor_iot_entity->UpdateState(${aivox_dht11}, std::to_string(${aivox_dnt11_value}));\n`};Blockly.Arduino["AIbot_update_analog_sensor_iot_state"]=function(block){const aivox_analog_sensor_name=Blockly.Arduino.valueToCode(block,"aivox_analog_sensor_name",Blockly.Arduino.ORDER_ATOMIC)||'""';const analog_name=aivox_analog_sensor_name.replace(/"/g,"");const aivox_analog_sensor_value=Blockly.Arduino.valueToCode(block,"aivox_analog_sensor_value",Blockly.Arduino.ORDER_ATOMIC)||'""';return`g_${analog_name}_sensor_iot_entity->UpdateState(${aivox_analog_sensor_name}, std::to_string(${aivox_analog_sensor_value}));\n`};return Blockly}exports=addGenerator;