/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.joyStick_i2c = function (block) {
        Blockly.Arduino.definitions_.include_joystick = '#include <Rocker.h>';
        Blockly.Arduino.definitions_.joystick_data = 'ROCKER rocker;';
        Blockly.Arduino.setups_.joystick_init = 'rocker.begin();\n';
        const val = this.getFieldValue('VAL');
        return [`${val}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.joyStick_data = function () {
        return 'rocker.measure();\n';
    };

    return Blockly;
}

exports = addGenerator;
