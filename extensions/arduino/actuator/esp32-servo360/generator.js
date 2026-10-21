/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    const addServoDefinition = function (pin, channel) {
        Blockly.Arduino.definitions_.servo360 = 'const int servopin = '+pin+';\n'+
        'int set_speed(int speed)\n'+
        '{\n'+
        '  speed = constrain(speed, -200, 200);\n'+
        '  int servo_speed = map(speed, -200, 200, 46, 108);\n'+
        '  return servo_speed;\n'+
        '}\n'+
        'int set_angle(int angle)\n'+
        '{\n'+
        '  angle = constrain(angle, 0, 180);\n'+
        '  int servo_angle = map(angle, 0, 180, 25, 128);\n'+
        '  return servo_angle;\n'+
        '}\n';
        Blockly.Arduino.setups_.servo360_init = 'ledcAttachChannel('+pin+',50,10,'+channel+');';
    };

    Blockly.Arduino.ks_servo360_speed = function(block) {
        var arg0 = block.getFieldValue('pin') || '0';
        var arg1 = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
        var arg2 = block.getFieldValue('CH') || '0';
        var arg3 = block.getFieldValue('DIRECTION') || '1';
        addServoDefinition(arg0, arg2);
        return 'ledcWrite('+arg0+', set_speed(constrain(abs('+arg1+'), 0, 200) * '+arg3+'));\n';
      };

    Blockly.Arduino.ks_servo360_turn_angle = function(block) {
        var arg0 = block.getFieldValue('pin') || '0';
        var arg1 = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 90;
        var arg2 = block.getFieldValue('CH') || '0';
        var arg3 = Blockly.Arduino.valueToCode(block, 'delay', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 200;
        addServoDefinition(arg0, arg2);
        return 'ledcWrite('+arg0+', set_angle('+arg1+'));\n'+
            'delay((unsigned long)constrain('+arg3+', 0, 60000));\n'+
            'ledcWrite('+arg0+', set_angle(90));\n';
      };

    return Blockly;
}

exports = addGenerator;
