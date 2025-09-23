function addGenerator(t){t.Arduino["AIbot_init_wifi"]=function(e){const i=t.Arduino.valueToCode(e,"wifi_ssid",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"wifi_pwd",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.includes_.AIbot_wifi_init="#include <WiFi.h>\n#include <driver/spi_common.h>\n#include <esp_heap_caps.h>\n";t.Arduino.definitions_.AIbot_wifi_ssid_define=`#define WIFI_SSID ${i}\n`;t.Arduino.definitions_.AIbot_wifi_pwd_define=`#define WIFI_PASSWORD ${n}\n`;t.Arduino.setups_.AIbot_serial="Serial.begin(115200);";t.Arduino.setups_.AIbot_init_display="InitDisplay();";t.Arduino.setups_.AIbot_wifi_connecting='g_display->ShowStatus("Wifi connecting...");';t.Arduino.setups_.AIbot_wifi='WiFi.useStaticBuffers(true);\nWiFi.begin(WIFI_SSID, WIFI_PASSWORD);\nwhile (WiFi.status() != WL_CONNECTED) {\n  delay(1000);\n  Serial.printf("Connecting to WiFi, ssid: %s", WIFI_SSID);\n}\n';return""};t.Arduino["AIbot_init_std"]=function(e){const i=e.getFieldValue("MIC_BCLK"),n=e.getFieldValue("MIC_WS"),o=e.getFieldValue("MIC_DIN"),r=e.getFieldValue("SPK_BCLK"),a=e.getFieldValue("SPK_WS"),d=e.getFieldValue("SPK_DOUT"),s=e.getFieldValue("TRIGGER_PIN");t.Arduino.includes_.AIbot_include_aivox_engine='#include "ai_vox_engine.h"';t.Arduino.includes_.AIbot_include_aivox_observer='#include "ai_vox_observer.h"';t.Arduino.includes_.AIbot_include_i2s_std_input='#include "audio_input_device_sph0645.h"';t.Arduino.includes_.AIbot_include_i2s_std_output='#include "i2s_std_audio_output_device.h"';t.Arduino.definitions_.AIbot_aivox_observer="auto g_observer = std::make_shared<ai_vox::Observer>();";t.Arduino.definitions_.AIbot_kMicPinBclk=`constexpr gpio_num_t kMicPinBclk = GPIO_NUM_${i};`;t.Arduino.definitions_.AIbot_kMicPinWs=`constexpr gpio_num_t kMicPinWs = GPIO_NUM_${n};`;t.Arduino.definitions_.AIbot_kMicPinDin=`constexpr gpio_num_t kMicPinDin = GPIO_NUM_${o};`;t.Arduino.definitions_.AIbot_kSpeakerPinBclk=`constexpr gpio_num_t kSpeakerPinBclk = GPIO_NUM_${r};`;t.Arduino.definitions_.AIbot_kSpeakerPinWs=`constexpr gpio_num_t kSpeakerPinWs = GPIO_NUM_${a};`;t.Arduino.definitions_.AIbot_kSpeakerPinDout=`constexpr gpio_num_t kSpeakerPinDout = GPIO_NUM_${d};`;t.Arduino.definitions_.AIbot_kTriggerPin=`constexpr gpio_num_t kTriggerPin = GPIO_NUM_${s};`;t.Arduino.definitions_.AIbot_input_device="auto audio_input_device = std::make_shared<AudioInputDeviceSph0645>(kMicPinBclk, kMicPinWs, kMicPinDin);";t.Arduino.definitions_.AIbot_output_device="auto audio_output_device = std::make_shared<ai_vox::I2sStdAudioOutputDevice>(kSpeakerPinBclk, kSpeakerPinWs, kSpeakerPinDout);";t.Arduino.setups_.AIbot_start="auto& ai_vox_engine = ai_vox::Engine::GetInstance();\nai_vox_engine.SetObserver(g_observer);\nai_vox_engine.SetTrigger(kTriggerPin);\nai_vox_engine.Start(audio_input_device, audio_output_device);\n";return""};t.Arduino["AIbot_init_oled"]=function(e){const i=e.getFieldValue("SDA"),n=e.getFieldValue("SCL"),o=e.getFieldValue("I2C_PORT")||"0",r=e.getFieldValue("I2C_ADDR")||"0x3C",a=e.getFieldValue("WIDTH")||"128",d=e.getFieldValue("HEIGHT")||"64",s=e.getFieldValue("MIRROR_X")==="TRUE"?"false":"true",l=e.getFieldValue("MIRROR_Y")==="TRUE"?"false":"true";t.Arduino.includes_.AIbot_include_i2c_master="#include <driver/i2c_master.h>";t.Arduino.includes_.AIbot_include_esp_lcd_io_i2c="#include <esp_lcd_io_i2c.h>";t.Arduino.includes_.AIbot_include_esp_lcd_panel_ops="#include <esp_lcd_panel_ops.h>";t.Arduino.includes_.AIbot_include_esp_lcd_panel_ssd1306="#include <esp_lcd_panel_ssd1306.h>";t.Arduino.includes_.AIbot_include_display='#include "display.h"';t.Arduino.definitions_.AIbot_oled_sda=`constexpr gpio_num_t kI2cPinSda = GPIO_NUM_${i};`;t.Arduino.definitions_.AIbot_oled_scl=`constexpr gpio_num_t kI2cPinScl = GPIO_NUM_${n};`;t.Arduino.definitions_.AIbot_oled_port=`constexpr i2c_port_t kI2cPort = I2C_NUM_${o};`;t.Arduino.definitions_.AIbot_oled_addr=`constexpr uint8_t kOledI2cAddr = ${r};`;t.Arduino.definitions_.AIbot_oled_width=`constexpr int kDisplayWidth  = ${a};`;t.Arduino.definitions_.AIbot_oled_height=`constexpr int kDisplayHeight = ${d};`;t.Arduino.definitions_.AIbot_oled_mirrorx=`constexpr bool kDisplayMirrorX = ${s};`;t.Arduino.definitions_.AIbot_oled_mirrory=`constexpr bool kDisplayMirrorY = ${l};`;t.Arduino.definitions_.AIbot_oled_display_obj="std::unique_ptr<Display> g_display;";t.Arduino.definitions_.AIbot_oled_InitDisplay=`void InitDisplay() {
                i2c_master_bus_handle_t display_i2c_bus;
                i2c_master_bus_config_t bus_config = {
                    .i2c_port = kI2cPort,
                    .sda_io_num = kI2cPinSda,
                    .scl_io_num = kI2cPinScl,
                    .clk_source = I2C_CLK_SRC_DEFAULT,
                    .glitch_ignore_cnt = 7,
                    .intr_priority = 0,
                    .trans_queue_depth = 0,
                    .flags = {
                        .enable_internal_pullup = 1,
                        .allow_pd = false,
                    },
                };
                ESP_ERROR_CHECK(i2c_new_master_bus(&bus_config, &display_i2c_bus));
            
                esp_lcd_panel_io_handle_t panel_io = nullptr;
                esp_lcd_panel_io_i2c_config_t io_config = {
                    .dev_addr = kOledI2cAddr,
                    .on_color_trans_done = nullptr,
                    .user_ctx = nullptr,
                    .control_phase_bytes = 1,
                    .dc_bit_offset = 6,
                    .lcd_cmd_bits = 8,
                    .lcd_param_bits = 8,
                    .flags = {
                        .dc_low_on_data = 0,
                        .disable_control_phase = 0,
                    },
                    .scl_speed_hz = 400 * 1000,
                };
                ESP_ERROR_CHECK(esp_lcd_new_panel_io_i2c_v2(display_i2c_bus, &io_config, &panel_io));
            
                esp_lcd_panel_handle_t panel = nullptr;
                esp_lcd_panel_dev_config_t panel_config = {};
                panel_config.reset_gpio_num = -1;
                panel_config.bits_per_pixel = 1;
            
                esp_lcd_panel_ssd1306_config_t ssd1306_config = {
                    .height = static_cast<uint8_t>(kDisplayHeight),
                };
                panel_config.vendor_config = &ssd1306_config;
            
                ESP_ERROR_CHECK(esp_lcd_new_panel_ssd1306(panel_io, &panel_config, &panel));
                ESP_ERROR_CHECK(esp_lcd_panel_reset(panel));
                ESP_ERROR_CHECK(esp_lcd_panel_init(panel));
                ESP_ERROR_CHECK(esp_lcd_panel_disp_on_off(panel, true));
            
                g_display = std::make_unique<Display>(panel_io,panel,kDisplayWidth,kDisplayHeight,kDisplayMirrorX,kDisplayMirrorY);
                g_display->Start();
            }`;t.Arduino.setups_.AIbot_oled_setup_call='g_display->ShowStatus("OLED Ready");';return""};t.Arduino["AIbot_set_ota_link"]=function(e){const i=t.Arduino.valueToCode(e,"ota_link",t.Arduino.ORDER_ATOMIC)||'""';return`ai_vox_engine->SetOtaUrl(${i});\n`};t.Arduino["AIbot_oled_show_status"]=function(e){const i=t.Arduino.valueToCode(e,"ai_vox_status",t.Arduino.ORDER_ATOMIC)||'""';return`g_display->ShowStatus(${i});\n`};t.Arduino["AIbot_oled_show_chat_message"]=function(e){const i=e.getFieldValue("ai_vox_display_role"),n=t.Arduino.valueToCode(e,"ai_vox_chat_message",t.Arduino.ORDER_ATOMIC)||'""';return`g_display->SetChatMessage(${i}, ${n});\n`};t.Arduino["AIbot_oled_show_emotion"]=function(e){const i=t.Arduino.valueToCode(e,"ai_vox_emotion",t.Arduino.ORDER_ATOMIC)||'""';return`g_display->SetEmotion(${i});\n`};t.Arduino["AIbot_loop"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return` const auto events = g_observer->PopEvents();
        for (auto& event : events) {
      ${i}
        }
        taskYIELD();
      `};t.Arduino["AIbot_event_is_activation"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return`if (auto activation_event = std::get_if<ai_vox::Observer::ActivationEvent>(&event)) {\n${i}}\n`};t.Arduino["AIbot_get_activation_message"]=function(e){return["activation_event->message.c_str()",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_get_activation_code"]=function(e){return["activation_event->code.c_str()",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_event_is_state_change"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return`if (auto state_changed_event = std::get_if<ai_vox::Observer::StateChangedEvent>(&event)) {\n${i}}\n`};t.Arduino["AIbot_get_new_state"]=function(e){return["state_changed_event->new_state",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_get_old_state"]=function(e){return["state_changed_event->old_state",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_state_enum"]=function(e){const i=e.getFieldValue("STATE");return[i,t.Arduino.ORDER_ATOMIC]};t.Arduino["AIbot_event_is_emotion"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return`if (auto emotion_event = std::get_if<ai_vox::Observer::EmotionEvent>(&event)) {\n${i}}\n`};t.Arduino["AIbot_get_emotion"]=function(e){return["emotion_event->emotion.c_str()",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_event_is_chat_message"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return`if (auto chat_message_event = std::get_if<ai_vox::Observer::ChatMessageEvent>(&event)) {\n${i}}\n`};t.Arduino["AIbot_get_chat_role"]=function(e){return["chat_message_event->role",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_chat_role_enum"]=function(e){const i=e.getFieldValue("chat_role");return[i,t.Arduino.ORDER_ATOMIC]};t.Arduino["AIbot_get_chat_content"]=function(e){return["chat_message_event->content.c_str()",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_event_is_iot_message"]=function(e){const i=t.Arduino.statementToCode(e,"DO");return`if (auto iot_message_event = std::get_if<ai_vox::Observer::IotMessageEvent>(&event)) {\n${i}}\n`};t.Arduino["AIbot_get_iot_message_event_name"]=function(e){return["iot_message_event->name",t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_get_iot_led_message_event_function"]=function(e){const i=e.getFieldValue("event_fuction");return[`(iot_message_event->function == "${i}")`,t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_get_iot_servo_message_event_function"]=function(e){const i=e.getFieldValue("event_fuction");return[`(iot_message_event->function == "${i}")`,t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_get_iot_servo_message"]=function(e){const i=e.getFieldValue("iot_servo_msg");if(!t.Arduino.definitions_.AIbot_get_iot_servo_message){t.Arduino.definitions_.AIbot_get_iot_servo_message=`int getIotServoMessage(auto iotEvent, int type){
            int res = 0;
            if(type == 1) {
                auto it = iotEvent->parameters.find("index");
                res = std::get<int64_t>(it->second);
            } else if(type == 2) {
                auto it = iotEvent->parameters.find("angle_value");
                res = std::get<int64_t>(it->second);
            }
            return res;
        }`}return[`getIotServoMessage(iot_message_event, ${i})`,t.Arduino.ORDER_MEMBER]};t.Arduino["AIbot_register_led_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"driver_name",t.Arduino.ORDER_ATOMIC)||'""',n=i.replace(/"/g,""),o=t.Arduino.valueToCode(e,"driver_num",t.Arduino.ORDER_ATOMIC)||'""',r=t.Arduino.valueToCode(e,"driver_properties",t.Arduino.ORDER_ATOMIC)||'""',a=t.Arduino.valueToCode(e,"driver_open",t.Arduino.ORDER_ATOMIC)||'""',d=t.Arduino.valueToCode(e,"driver_close",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_[`AIbot_led_entity_${n}`]=`std::shared_ptr<ai_vox::iot::Entity> g_${n}_iot_entity;`;t.Arduino.definitions_[`AIbot_led_init_${n}`]=`void InitDigitalControl${n}Iot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> ${n}_properties({
            { ${i}, ${r}, ai_vox::iot::ValueType::kBool }
        });
        std::vector<ai_vox::iot::Function> ${n}_functions({
            {"TurnOn",  ${a},  {}},
            {"TurnOff", ${d}, {}},
        });
        g_${n}_iot_entity = std::make_shared<ai_vox::iot::Entity>(${i}, ${r}, std::move(${n}_properties), std::move(${n}_functions));
        g_${n}_iot_entity->UpdateState(${i}, false);
        ai_vox_engine.RegisterIotEntity(g_${n}_iot_entity);
        }`;t.Arduino.setups_[`AIbot_register_led_${n}`]=`InitDigitalControl${n}Iot();`;return""};t.Arduino["AIbot_register_servo_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"driver_name",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"driver_num",t.Arduino.ORDER_ATOMIC)||'""',o=t.Arduino.valueToCode(e,"driver_properties",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_.AIbot_servo_entity="std::shared_ptr<ai_vox::iot::Entity> g_servo_iot_entity;";t.Arduino.definitions_.AIbot_servo_init=`void InitServoControlIot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> servo_iot_properties;
        for (uint32_t i = 1; i <= ${n}; i++) {
            std::string property_name = std::to_string(i) + "号舵机";
            std::string property_describe = std::to_string(i) + "号" + ${o};
            servo_iot_properties.push_back({ std::move(property_name), std::move(property_describe), ai_vox::iot::ValueType::kNumber });
        }
        std::vector<ai_vox::iot::Function> servo_iot_functions({
            {"SetOneServo", "设置单个舵机角度",
                {{"angle_value", "舵机角度(0-180之间的整数)", ai_vox::iot::ValueType::kNumber, true},
                {"index", "舵机编号", ai_vox::iot::ValueType::kNumber, true}}},
            {"SetAllServos", "设置所有舵机角度",
                {{"angle_value", "舵机角度(0-180之间的整数)", ai_vox::iot::ValueType::kNumber, true}}}
        });
        g_servo_iot_entity = std::make_shared<ai_vox::iot::Entity>("Servo", ${o}, std::move(servo_iot_properties), std::move(servo_iot_functions));
        for (uint32_t i = 1; i <= ${n}; i++) {
            std::string property_name = std::to_string(i) + "号舵机";
            g_servo_iot_entity->UpdateState(std::move(property_name), 0);
        }
        ai_vox_engine.RegisterIotEntity(g_servo_iot_entity);
        }`;t.Arduino.setups_.AIbot_register_servo="InitServoControlIot();";return""};t.Arduino["AIbot_register_ultrasonic_sensor_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"driver_name",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"driver_properties",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_.AIbot_ultrasonic_entity="std::shared_ptr<ai_vox::iot::Entity> g_us04_ultrasonic_sensor_iot_entity;";t.Arduino.definitions_.AIbot_ultrasonic_init=`void InitUltrasonicSensorIot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> us04_ultrasonic_sensor_iot_properties({
            { ${i}, ${n}, ai_vox::iot::ValueType::kString }
        });
        std::vector<ai_vox::iot::Function> us04_ultrasonic_sensor_iot_functions({});
        g_us04_ultrasonic_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>(${i}, "超声波传感器",
            std::move(us04_ultrasonic_sensor_iot_properties), std::move(us04_ultrasonic_sensor_iot_functions));
        g_us04_ultrasonic_sensor_iot_entity->UpdateState("distance", "0");
        ai_vox_engine.RegisterIotEntity(g_us04_ultrasonic_sensor_iot_entity);
        }`;t.Arduino.setups_.AIbot_register_ultrasonic="InitUltrasonicSensorIot();";return""};t.Arduino["AIbot_register_dht11_sensor_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"dht11_temp_name",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"temp_properties",t.Arduino.ORDER_ATOMIC)||'""',o=t.Arduino.valueToCode(e,"dht11_humidity_name",t.Arduino.ORDER_ATOMIC)||'""',r=t.Arduino.valueToCode(e,"humidity_properties",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_.AIbot_dht11_entity="std::shared_ptr<ai_vox::iot::Entity> g_dht11_sensor_iot_entity;";t.Arduino.definitions_.AIbot_dht11_init=`void InitDht11SensorIot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> dht11_sensor_iot_properties({
            { ${i}, ${n}, ai_vox::iot::ValueType::kString },
            { ${o}, ${r}, ai_vox::iot::ValueType::kString }
        });
        std::vector<ai_vox::iot::Function> dht11_sensor_iot_functions({});
        g_dht11_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>("DHT11Sensor", "DHT11温湿度传感器",
            std::move(dht11_sensor_iot_properties), std::move(dht11_sensor_iot_functions));
        g_dht11_sensor_iot_entity->UpdateState(${i}, "0");
        g_dht11_sensor_iot_entity->UpdateState(${o}, "0");
        ai_vox_engine.RegisterIotEntity(g_dht11_sensor_iot_entity);
        }`;t.Arduino.setups_.AIbot_register_dht11="InitDht11SensorIot();";return""};t.Arduino["AIbot_register_analog_sensor_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_analog_name",t.Arduino.ORDER_ATOMIC)||'""',n=i.replace(/"/g,""),o=t.Arduino.valueToCode(e,"aivox_analog_desc",t.Arduino.ORDER_ATOMIC)||'""',r=t.Arduino.valueToCode(e,"aivox_analog_status",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_[`AIbot_${n}_entity`]=`std::shared_ptr<ai_vox::iot::Entity> g_${n}_sensor_iot_entity;`;t.Arduino.definitions_[`AIbot_${n}_init`]=`void Init${n}SensorIot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> ${n}_sensor_iot_properties({
            { ${i}, ${r}, ai_vox::iot::ValueType::kString }
        });
        std::vector<ai_vox::iot::Function> ${n}_sensor_iot_functions({});
        g_${n}_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>(${i}, ${o},
            std::move(${n}_sensor_iot_properties), std::move(${n}_sensor_iot_functions));
        g_${n}_sensor_iot_entity->UpdateState(${i}, "0");
        ai_vox_engine.RegisterIotEntity(g_${n}_sensor_iot_entity);
        }`;t.Arduino.setups_[`AIbot_register_${n}`]=`Init${n}SensorIot();`;return""};t.Arduino["AIbot_register_ws2812_driver_status"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_ws2812_name",t.Arduino.ORDER_ATOMIC)||'""',n=i.replace(/"/g,""),o=t.Arduino.valueToCode(e,"aivox_ws2812_num",t.Arduino.ORDER_ATOMIC)||'""';t.Arduino.definitions_[`AIbot_${n}_entity`]=`std::shared_ptr<ai_vox::iot::Entity> g_${n}_iot_entity;`;t.Arduino.definitions_[`AIbot_${n}_init`]=`void Init${n}Iot() {
        auto& ai_vox_engine = ai_vox::Engine::GetInstance();
        std::vector<ai_vox::iot::Property> ${n}_properties({
            { "brightness", "亮度(0-255)", ai_vox::iot::ValueType::kNumber },
            { "LedNums", "灯的数量", ai_vox::iot::ValueType::kNumber }
        });
        for (uint32_t i = 1; i <= ${o}; ++i) {
            const std::string property_name = "color" + std::to_string(i);
            const std::string property_describe = std::to_string(i) + "号灯颜色";
            ${n}_properties.push_back({ std::move(property_name), std::move(property_describe), ai_vox::iot::ValueType::kString });
        }
        std::vector<ai_vox::iot::Function>  ${n}_functions({
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
        g_${n}_iot_entity = std::make_shared<ai_vox::iot::Entity>(${i}, "RGB灯环",
            std::move(${n}_properties), std::move(${n}_functions));
        g_${n}_iot_entity->UpdateState("brightness", 128);
        g_${n}_iot_entity->UpdateState("LedNums", ${o});
        for (uint32_t i = 1; i <= ${o}; ++i) {
            const std::string property_name = "color" + std::to_string(i);
            g_${n}_iot_entity->UpdateState(property_name, R"({"red":0,"green":0,"blue":0})");
        }
        ai_vox_engine.RegisterIotEntity(g_${n}_iot_entity);
        }`;t.Arduino.setups_[`AIbot_register_${n}`]=`Init${n}Iot();`;return""};t.Arduino["AIbot_update_led_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_drive",t.Arduino.ORDER_ATOMIC)||'""',n=i.replace(/"/g,""),o=this.getFieldValue("aivox_drive_state");return`g_${n}_iot_entity->UpdateState(${i}, ${o});\n`};t.Arduino["AIbot_update_servo_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_drive",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"aivox_drive_state",t.Arduino.ORDER_ATOMIC)||'""';return`g_servo_iot_entity->UpdateState(${i}, ${n});\n`};t.Arduino["AIbot_update_all_servo_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_servo_num",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"aivox_drive_state",t.Arduino.ORDER_ATOMIC)||'""';return`for (uint32_t i = 1; i <= ${i}; i++) {\n  g_servo_iot_entity->UpdateState(std::to_string(i) + "号舵机", ${n});\n}\n`};t.Arduino["AIbot_update_ultrasonic_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_ultrasonic",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"aivox_ultrasonic_distance",t.Arduino.ORDER_ATOMIC)||'""';return`g_us04_ultrasonic_sensor_iot_entity->UpdateState(${i}, std::to_string(${n}));\n`};t.Arduino["AIbot_update_dht11_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_dht11",t.Arduino.ORDER_ATOMIC)||'""',n=t.Arduino.valueToCode(e,"aivox_dnt11_value",t.Arduino.ORDER_ATOMIC)||'""';return`g_dht11_sensor_iot_entity->UpdateState(${i}, std::to_string(${n}));\n`};t.Arduino["AIbot_update_analog_sensor_iot_state"]=function(e){const i=t.Arduino.valueToCode(e,"aivox_analog_sensor_name",t.Arduino.ORDER_ATOMIC)||'""',n=i.replace(/"/g,""),o=t.Arduino.valueToCode(e,"aivox_analog_sensor_value",t.Arduino.ORDER_ATOMIC)||'""';return`g_${n}_sensor_iot_entity->UpdateState(${i}, std::to_string(${o}));\n`};return t}exports=addGenerator;