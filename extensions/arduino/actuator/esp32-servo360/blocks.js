/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const forwardLabel = (Blockly.Msg && Blockly.Msg.KS_SERVO360_FORWARD) || '正转';
    const reverseLabel = (Blockly.Msg && Blockly.Msg.KS_SERVO360_REVERSE) || '反转';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const ledcChannels = [
        ['CH0 (LT0)', '0'],
        ['CH1 (LT0)', '1'],
        ['CH2 (LT1)', '2'],
        ['CH3 (LT1)', '3'],
        ['CH4 (LT2)', '4'],
        ['CH5 (LT2)', '5'],
        ['CH6 (LT3)', '6'],
        ['CH7 (LT3)', '7'],
        ['CH8 (HT0)', '8'],
        ['CH9 (HT0)', '9'],
        ['CH10 (HT1)', '10'],
        ['CH11 (HT1)', '11'],
        ['CH12 (HT2)', '12'],
        ['CH13 (HT2)', '13'],
        ['CH14 (HT3)', '14'],
        ['CH15 (HT3)', '15']
    ];

    Blockly.Blocks.ks_servo360_speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_SERVO360_SPEED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: ledcChannels
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [forwardLabel, '1'],
                            [reverseLabel, '-1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ks_servo360_turn_angle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_SERVO360_TURN_ANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CH',
                        options: ledcChannels
                    },
                    {
                        type: 'input_value',
                        name: 'angle'
                    },
                    {
                        type: 'input_value',
                        name: 'delay'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
