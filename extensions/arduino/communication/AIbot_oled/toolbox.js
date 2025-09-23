/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox() {

    return `
    <category name="%{BKY_AI_BOT_CATEGORY}" id="AI_BOT_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
        <block type="AIbot_init_wifi" id="AIbot_init_wifi">
            <value name="wifi_ssid">
                <shadow type="text">
                   <field name="TEXT">Your WIFI Name</field>
                </shadow>
            </value>
            <value name="wifi_pwd">
                <shadow type="text">
                   <field name="TEXT">Your WIFI Password</field>
                </shadow>
            </value>
        </block>
        <block type="AIbot_init_std" id="AIbot_init_std">
            <field name="MIC_BCLK">5</field>
            <field name="MIC_WS">4</field>
            <field name="MIC_DIN">6</field>
            <field name="SPK_BCLK">15</field>
            <field name="SPK_WS">16</field>
            <field name="SPK_DOUT">7</field>
        </block>
        <block type="AIbot_init_oled" id="AIbot_init_oled">
            <field name="SDA">9</field>
            <field name="SCL">8</field>
        </block>
    </category>
    <category name="%{BKY_DISPLAY_CATEGORY}"  id="DISPLAY_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
        <block type="AIbot_oled_show_status">
            <value name="ai_vox_status">
                <shadow type="text">
                    <field name="TEXT">test</field>
                </shadow>
            </value>
        </block>
        <block type="AIbot_oled_show_chat_message">
            <value name="ai_vox_chat_message">
                <shadow type="text">
                    <field name="TEXT">test</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_oled_show_emotion">
            <value name="ai_vox_emotion">
                <shadow type="text">
                    <field name="TEXT">test</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="%{BKY_REGISTER_CATEGORY}"  id="REGISTER_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
        <!-- 注册 LED 设备 -->
        <block type="AIbot_register_led_driver_status">
            <value name="driver_name">
                <shadow type="text">
                    <field name="TEXT">LED</field>
                </shadow>
            </value>
            <value name="driver_num">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="driver_properties">
                <shadow type="text">
                    <field name="TEXT">LED State</field>
                </shadow>
            </value>
            <value name="driver_open">
                <shadow type="text">
                    <field name="TEXT">Open LED</field>
                </shadow>
            </value>
            <value name="driver_close">
                <shadow type="text">
                    <field name="TEXT">Close LED</field>
                </shadow>
            </value>
        </block>

        <!-- 注册 舵机 设备 -->
        <block type="AIbot_register_servo_driver_status">
            <value name="driver_name">
                <shadow type="text">
                    <field name="TEXT">Servo</field>
                </shadow>
            </value>
            <value name="driver_num">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="driver_properties">
                <shadow type="text">
                    <field name="TEXT">Set servo angle</field>
                </shadow>
            </value>
        </block>

        <!-- 注册 超声波 设备 -->
        <block type="AIbot_register_ultrasonic_sensor_driver_status">
            <value name="driver_name">
                <shadow type="text">
                    <field name="TEXT">distance</field>
                </shadow>
            </value>
            <value name="driver_properties">
                <shadow type="text">
                    <field name="TEXT">Ultrasonic distance</field>
                </shadow>
            </value>
        </block>

        <!-- 注册 DHT11 设备 -->
        <block type="AIbot_register_dht11_sensor_driver_status">
            <value name="dht11_temp_name">
                <shadow type="text">
                    <field name="TEXT">temp</field>
                </shadow>
            </value>
            <value name="temp_properties">
                <shadow type="text">
                    <field name="TEXT">Tempature</field>
                </shadow>
            </value>
            <value name="dht11_humidity_name">
                <shadow type="text">
                    <field name="TEXT">humi</field>
                </shadow>
            </value>
            <value name="humidity_properties">
                <shadow type="text">
                    <field name="TEXT">Humidity</field>
                </shadow>
            </value>
        </block>

        <!-- 注册 模拟传感器 设备 -->
        <block type="AIbot_register_analog_sensor_driver_status">
            <value name="aivox_analog_name">
                <shadow type="text">
                    <field name="TEXT">light</field>
                </shadow>
            </value>
            <value name="aivox_analog_desc">
                <shadow type="text">
                    <field name="TEXT">Light sensor</field>
                </shadow>
            </value>
            <value name="aivox_analog_status">
                <shadow type="text">
                    <field name="TEXT">Light current value</field>
                </shadow>
            </value>
        </block>

        <!-- 注册 WS2812 设备 -->
        <block type="AIbot_register_ws2812_driver_status">
            <value name="aivox_ws2812_name">
                <shadow type="text">
                    <field name="TEXT">RGB</field>
                </shadow>
            </value>
            <value name="aivox_ws2812_num">
                <shadow type="math_number">
                    <field name="NUM">8</field>
                </shadow>
            </value>
        </block>
    </category>
        <!-- 事件与数据块 -->
    <category name="%{BKY_EVENT_CATEGORY}"  id="EVENT_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
        <block type="AIbot_loop"></block>
        <block type="AIbot_event_is_activation"></block>
        <block type="AIbot_get_activation_message"></block>
        <block type="AIbot_get_activation_code"></block>
        <block type="AIbot_event_is_state_change"></block>
        <block type="AIbot_get_new_state"></block>
        <block type="AIbot_get_old_state"></block>
        <block type="AIbot_state_enum"></block>
        <block type="AIbot_event_is_emotion"></block>
        <block type="AIbot_get_emotion"></block>
        <block type="AIbot_event_is_chat_message"></block>
        <block type="AIbot_get_chat_role"></block>
        <block type="AIbot_chat_role_enum"></block>
        <block type="AIbot_get_chat_content"></block>
        <block type="AIbot_event_is_iot_message"></block>
        <block type="AIbot_get_iot_message_event_name"></block>
        <block type="AIbot_get_iot_led_message_event_function"></block>
        <block type="AIbot_get_iot_servo_message_event_function"></block>
        <block type="AIbot_get_iot_servo_message"></block>
    </category>
        <!-- 更新设备状态 -->
    <category name="%{BKY_STATE_CATEGORY}"  id="STATE_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">
        <block type="AIbot_update_led_iot_state">
            <value name="aivox_drive">
                <shadow type="text">
                    <field name="TEXT">LED</field>
                </shadow>
            </value>
            <value name="aivox_drive_state">
                <shadow type="logic_boolean">
                    <field name="BOOL">true</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_update_servo_iot_state">
            <value name="aivox_drive">
                <shadow type="text">
                    <field name="TEXT">servo</field>
                </shadow>
            </value>
            <value name="aivox_drive_state">
                <shadow type="math_number">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_update_all_servo_iot_state">
            <value name="aivox_servo_num">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
            <value name="aivox_drive_state">
                <shadow type="math_number">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_update_ultrasonic_iot_state">
            <value name="aivox_ultrasonic">
                <shadow type="text">
                    <field name="TEXT">ultrasonic</field>
                </shadow>
            </value>
            <value name="aivox_ultrasonic_distance">
                <shadow type="math_number">
                    <field name="NUM">12345678</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_update_dht11_iot_state">
            <value name="aivox_dht11">
                <shadow type="text">
                    <field name="TEXT">dht11</field>
                </shadow>
            </value>
            <value name="aivox_dnt11_value">
                <shadow type="text">
                    <field name="TEXT">12345678</field>
                </shadow>
            </value>
        </block>

        <block type="AIbot_update_analog_sensor_iot_state">
            <value name="aivox_analog_sensor_name">
                <shadow type="text">
                    <field name="TEXT">analog</field>
                </shadow>
            </value>
            <value name="aivox_analog_sensor_value">
                <shadow type="text">
                    <field name="TEXT">12345678</field>
                </shadow>
            </value>
        </block>

    </category>
    `;
}

exports = addToolbox;