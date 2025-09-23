/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ks_servo270_angle = function(block) {
        var arg0 = block.getFieldValue('pin') || '0';
        var arg1 = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        var arg2 = block.getFieldValue('CH') || '0';
        Blockly.Arduino.definitions_[`servo`] = 'const int servopin = '+arg0+';\n'+
        'int set_angle(int angle)\n'+
        '{\n'+
        '  int servo_angle = map(angle, 0, 270, 25, 128);\n'+
        '  return servo_angle;\n'+
        '}\n';
        Blockly.Arduino.setups_[`servo_init`] = 'ledcAttachChannel('+arg0+',50,10,'+arg2+');';
        return 'ledcWrite('+arg0+', set_angle('+arg1+'));\n';
      };

    return Blockly;
}

exports = addGenerator;
