/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#42CCFF">
    <block type="KS_variables_declare" id="KS_variables_declare"><value name="VAR"><shadow type="text"><field name="TEXT">item</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="KS_variables_get" id="KS_variables_get"><value name="VAR"><shadow type="text"><field name="TEXT">item</field></shadow></value></block>
    <block type="KS_variables_set" id="KS_variables_set"><value name="VAR"><shadow type="text"><field name="TEXT">item</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="KS_variables_change" id="KS_variables_change"><value name="VAR"><shadow type="text"><field name="TEXT">item</field></shadow></value></block>
    <block type="KS_variables_stringSet" id="KS_variables_stringSet"><value name="VAR"><shadow type="text"><field name="TEXT">item</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
</category>

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#800000" secondaryColour="#800000">
    <block type="KS_CHAR" id="KS_CHAR"><value name="VAR"><shadow type="text"><field name="TEXT">a</field></shadow></value></block>
    <block type="KS_STRING" id="KS_STRING"><value name="VAR"><shadow type="text"><field name="TEXT">hello</field></shadow></value></block>
    <block type="KS_data" id="KS_data"><value name="VAR"><shadow type="text"><field name="TEXT">123</field></shadow></value></block>
</category>

<category name="%{BKY_KS_TIME_LABEL}" id="KS_TIME_LABEL" colour="#41be8a" secondaryColour="#41be8a">
    <block type="KS_millis" id="KS_millis"></block>
    <block type="KS_micros" id="KS_micros"></block>
</category>

<category name="%{BKY_EASYPLUG_EXECUTE_CATEGORY}" id="EASYPLUG_EXECUTE_CATEGORY" colour="#00A0E9" secondaryColour="#0079AF">
    <block type="easyplug_led_set" id="easyplug_led_set"><field name="COLOR">WHITE</field><field name="PIN">9</field><field name="STATE">HIGH</field></block>
    <block type="easyplug_led_brightness" id="easyplug_led_brightness"><field name="PIN">9</field><value name="val"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block>
    <block type="easyplug_switch_module_set" id="easyplug_switch_module_set"><field name="MODULE">ACTIVE_BUZZER</field><field name="PIN">9</field><field name="STATE">HIGH</field></block>
    <block type="easyplug_passive_buzzer_tone" id="easyplug_passive_buzzer_tone"><field name="PIN">2</field></block>
    <block type="easyplug_passive_buzzer_tone_d" id="easyplug_passive_buzzer_tone_d"><field name="PIN">2</field></block>
    <block type="easyplug_passive_buzzer_music" id="easyplug_passive_buzzer_music"><field name="PIN">2</field></block>
    <block type="easyplug_passive_buzzer_notone" id="easyplug_passive_buzzer_notone"><field name="PIN">2</field></block>
    <block type="easyplug_servo_angle" id="easyplug_servo_angle"><field name="pin">9</field><value name="angle"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="time"><shadow type="math_number"><field name="NUM">500</field></shadow></value></block>
    <block type="easyplug_fan_set" id="easyplug_fan_set"><field name="PIN_A">3</field><field name="PIN_B">4</field><field name="DIRECTION">FORWARD</field></block>

    <block type="easyplug_rgb2812_init" id="easyplug_rgb2812_init"><field name="PIN">9</field></block>
    <block type="easyplug_rgb2812_set" id="easyplug_rgb2812_set"><field name="PIN">9</field><value name="INDEX"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="easyplug_rgb2812_clear" id="easyplug_rgb2812_clear"><field name="PIN">9</field></block>
    <block type="easyplug_rgb2812_brightness" id="easyplug_rgb2812_brightness"><field name="PIN">9</field><value name="BRIGHTNESS"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block>
    <block type="easyplug_rgb2812_fill" id="easyplug_rgb2812_fill"><field name="PIN">9</field><value name="R"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="easyplug_rgb2812_rainbow" id="easyplug_rgb2812_rainbow"><field name="PIN">9</field><value name="CYCLES"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="SPEED"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block>
</category>

<category name="%{BKY_EASYPLUG_DIGITAL_CATEGORY}" id="EASYPLUG_DIGITAL_CATEGORY" colour="#8A6A00" secondaryColour="#5D4700">
    <block type="easyplug_digital_sensor_triggered" id="easyplug_digital_sensor_triggered"><field name="SENSOR">BUTTON</field><field name="PIN">9</field></block>
    <block type="easyplug_dht11_read" id="easyplug_dht11_read"><field name="MEASURE">TEMPERATURE</field><field name="PIN">9</field></block>
    <block type="easyplug_ds18b20_temperature" id="easyplug_ds18b20_temperature"><field name="PIN">9</field></block>
</category>

<category name="%{BKY_EASYPLUG_ANALOG_CATEGORY}" id="EASYPLUG_ANALOG_CATEGORY" colour="#E50012" secondaryColour="#A9000D">
    <block type="easyplug_analog_sensor_read" id="easyplug_analog_sensor_read"><field name="SENSOR">SOUND</field><field name="PIN">A0</field></block>
    <block type="easyplug_analog_temperature_read" id="easyplug_analog_temperature_read"><field name="MODEL">THERMISTOR</field><field name="PIN">A0</field></block>
</category>

<category name="%{BKY_EASYPLUG_MOTION_CATEGORY}" id="EASYPLUG_MOTION_CATEGORY" colour="#AB47BC" secondaryColour="#8E24AA">
    <block type="easyplug_joystick_axis" id="easyplug_joystick_axis"><field name="AXIS">A6</field></block>
    <block type="easyplug_joystick_pressed" id="easyplug_joystick_pressed"></block>
    <block type="easyplug_adxl345_axis" id="easyplug_adxl345_axis"><field name="AXIS">X</field></block>
    <block type="easyplug_ultrasonic_distance" id="easyplug_ultrasonic_distance"><field name="TRIG">3</field><field name="ECHO">4</field><field name="UNIT">CM</field></block>
</category>

<category name="%{BKY_EASYPLUG_DISPLAY_CATEGORY}" id="EASYPLUG_DISPLAY_CATEGORY" colour="#009944" secondaryColour="#006B30">
    <block type="easyplug_tm1650_init" id="easyplug_tm1650_init"></block>
    <block type="easyplug_tm1650_show" id="easyplug_tm1650_show"><value name="TEXT"><shadow type="text"><field name="TEXT">1234</field></shadow></value></block>
    <block type="easyplug_tm1650_brightness" id="easyplug_tm1650_brightness"><value name="VALUE"><shadow type="math_number"><field name="NUM">7</field></shadow></value></block>
    <block type="easyplug_tm1650_clear" id="easyplug_tm1650_clear"></block>
    <block type="easyplug_matrix_init" id="easyplug_matrix_init"></block>
    <block type="easyplug_matrix_pixel" id="easyplug_matrix_pixel"><value name="xVal"><shadow type="math_whole_number"><field name="NUM">0</field></shadow></value><value name="yVal"><shadow type="math_whole_number"><field name="NUM">0</field></shadow></value><field name="state">HIGH</field></block>
    <block type="easyplug_matrix_text" id="easyplug_matrix_text"><value name="TEXT"><shadow type="text"><field name="TEXT">A</field></shadow></value></block>
    <block type="easyplug_matrix_scroll" id="easyplug_matrix_scroll"><value name="MESSAGE"><shadow type="text"><field name="TEXT">ABCD1234</field></shadow></value><value name="SPEED"><shadow type="math_whole_number"><field name="NUM">300</field></shadow></value></block>
    <block type="easyplug_matrix_pattern" id="easyplug_matrix_pattern"><value name="MATRIX_EIGHT"><shadow type="matrix_eight"><field name="MATRIX_EIGHT">0000000000</field></shadow></value><value name="NUMBER"><shadow type="math_whole_number"><field name="NUM">1</field></shadow></value><value name="VAR"><shadow type="text"><field name="TEXT">matrix1</field></shadow></value></block>
    <block type="easyplug_matrix_icon" id="easyplug_matrix_icon"><field name="face">matrix_smile</field></block>
    <block type="easyplug_matrix_refresh" id="easyplug_matrix_refresh"></block>
    <block type="easyplug_matrix_clear" id="easyplug_matrix_clear"></block>
    <block type="easyplug_lcd1602_init" id="easyplug_lcd1602_init"><field name="ADDRESS">0x27</field></block>
    <block type="easyplug_lcd1602_cursor" id="easyplug_lcd1602_cursor"><value name="COL"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="ROW"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="easyplug_lcd1602_print" id="easyplug_lcd1602_print"><value name="TEXT"><shadow type="text"><field name="TEXT">Hello</field></shadow></value></block>
    <block type="easyplug_lcd1602_clear" id="easyplug_lcd1602_clear"></block>
    <block type="easyplug_oled_init" id="easyplug_oled_init"><field name="ADDRESS">0x3C</field></block>
    <block type="easyplug_oled_text" id="easyplug_oled_text"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TEXT"><shadow type="text"><field name="TEXT">Hello</field></shadow></value></block>
    <block type="easyplug_oled_clear" id="easyplug_oled_clear"></block>
    <block type="easyplug_oled_refresh" id="easyplug_oled_refresh"></block>
    <block type="easyplug_oled_draw_line" id="easyplug_oled_draw_line"><value name="X0"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y0"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="X1"><shadow type="math_number"><field name="NUM">32</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">16</field></shadow></value><field name="COLOUR">SSD1306_WHITE</field></block>
    <block type="easyplug_oled_draw_rect" id="easyplug_oled_draw_rect"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="W"><shadow type="math_number"><field name="NUM">32</field></shadow></value><value name="H"><shadow type="math_number"><field name="NUM">16</field></shadow></value><field name="COLOUR">SSD1306_WHITE</field></block>
    <block type="easyplug_oled_fill_rect" id="easyplug_oled_fill_rect"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="W"><shadow type="math_number"><field name="NUM">32</field></shadow></value><value name="H"><shadow type="math_number"><field name="NUM">16</field></shadow></value><field name="COLOUR">SSD1306_WHITE</field></block>
    <block type="easyplug_oled_draw_circle" id="easyplug_oled_draw_circle"><value name="X"><shadow type="math_number"><field name="NUM">16</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">16</field></shadow></value><value name="R"><shadow type="math_number"><field name="NUM">8</field></shadow></value><field name="COLOUR">SSD1306_WHITE</field></block>
    <block type="easyplug_oled_fill_circle" id="easyplug_oled_fill_circle"><value name="X"><shadow type="math_number"><field name="NUM">16</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">16</field></shadow></value><value name="R"><shadow type="math_number"><field name="NUM">8</field></shadow></value><field name="COLOUR">SSD1306_WHITE</field></block>
</category>

<category name="%{BKY_EASYPLUG_SPECIAL_CATEGORY}" id="EASYPLUG_SPECIAL_CATEGORY" colour="#F7931E" secondaryColour="#B85E00">
    <block type="easyplug_ir_init" id="easyplug_ir_init"><field name="PIN">9</field></block>
    <block type="easyplug_ir_available" id="easyplug_ir_available"><field name="PIN">9</field></block>
    <block type="easyplug_ir_value" id="easyplug_ir_value"><field name="PIN">9</field></block>
    <block type="easyplug_ir_resume" id="easyplug_ir_resume"><field name="PIN">9</field></block>
    <block type="easyplug_ds3231_set" id="easyplug_ds3231_set"><value name="YEAR"><shadow type="math_number"><field name="NUM">2026</field></shadow></value><value name="MONTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="DAY"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HOUR"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="MINUTE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="SECOND"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>
    <block type="easyplug_ds3231_read" id="easyplug_ds3231_read"><field name="PART">HOUR</field></block>
</category>
`;
}

exports = addToolbox;
