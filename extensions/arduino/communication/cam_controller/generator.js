/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    // ════════════════════════════════════════════════════════════
    // Block 1: camctrl_serial_init — 初始化串口
    // 写入：setups_
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_serial_init = function (block) {
        const baud = block.getFieldValue('baud');
        Blockly.Arduino.setups_['camctrl_serial'] = `Serial.begin(${baud});\n`;
        return '';
    };

    // ════════════════════════════════════════════════════════════
    // Block 2: camctrl_button_init — 初始化按键引脚（内部上拉）
    // 写入：setups_
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_button_init = function (block) {
        const pin = block.getFieldValue('pin');
        Blockly.Arduino.setups_[`camctrl_btn_pin_${pin}`] =
            `pinMode(${pin}, INPUT_PULLUP);\n`;
        return '';
    };

    // ════════════════════════════════════════════════════════════
    // Block 3: camctrl_button_toggle — 按键切换发送 cmdA/cmdB（带消抖）
    // 对应 sketch_jun5d 完整逻辑
    // 写入：definitions_ / loop 内语句
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_button_toggle = function (block) {
        const pin  = block.getFieldValue('pin');
        const cmdA = block.getFieldValue('cmdA');
        const cmdB = block.getFieldValue('cmdB');

        // 每个引脚独立的状态变量（支持多按键）
        Blockly.Arduino.definitions_[`camctrl_toggle_vars_${pin}`] =
            `bool   camctrl_state_${pin}    = false;\n` +
            `int    camctrl_lastBtn_${pin}  = HIGH;\n` +
            `unsigned long camctrl_debounce_${pin} = 0;\n`;

        return (
            `{\n` +
            `  int _reading = digitalRead(${pin});\n` +
            `  if (_reading != camctrl_lastBtn_${pin}) camctrl_debounce_${pin} = millis();\n` +
            `  if ((millis() - camctrl_debounce_${pin}) > 50) {\n` +
            `    if (_reading == LOW && camctrl_state_${pin} == false) {\n` +
            `      Serial.print('${cmdA}');\n` +
            `      camctrl_state_${pin} = true;\n` +
            `      delay(200);\n` +
            `    } else if (_reading == LOW && camctrl_state_${pin} == true) {\n` +
            `      Serial.print('${cmdB}');\n` +
            `      camctrl_state_${pin} = false;\n` +
            `      delay(200);\n` +
            `    }\n` +
            `  }\n` +
            `  camctrl_lastBtn_${pin} = _reading;\n` +
            `}\n`
        );
    };

    // ════════════════════════════════════════════════════════════
    // Block 4: camctrl_button_send — 按键按下时发送固定指令（单次触发）
    // 对应 sketch_jun5b 简单版本
    // 写入：definitions_ / loop 内语句
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_button_send = function (block) {
        const pin = block.getFieldValue('pin');
        const cmd = block.getFieldValue('cmd');

        Blockly.Arduino.definitions_[`camctrl_send_laststate_${pin}`] =
            `int camctrl_lastState_${pin} = HIGH;\n`;

        return (
            `{\n` +
            `  int _nowState = digitalRead(${pin});\n` +
            `  if (_nowState == LOW && camctrl_lastState_${pin} == HIGH) {\n` +
            `    Serial.println('${cmd}');\n` +
            `    delay(20);\n` +
            `  }\n` +
            `  camctrl_lastState_${pin} = _nowState;\n` +
            `}\n`
        );
    };

    // ════════════════════════════════════════════════════════════
    // Block 5: camctrl_send_cmd — 直接发送串口指令
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_send_cmd = function (block) {
        const cmd = block.getFieldValue('cmd');
        return `Serial.print('${cmd}');\n`;
    };

    // ════════════════════════════════════════════════════════════
    // Block 6: camctrl_read_serial — 读取串口回传数据（值块）
    // 返回 Serial.readStringUntil('\n')
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.camctrl_read_serial = function (block) {
        return ['Serial.readStringUntil(\'\\n\')', Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}
exports = addGenerator;
