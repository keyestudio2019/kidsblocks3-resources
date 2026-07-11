/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4285F4';
    const secondaryColour = '#3367D6';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    // 1. 初始化 TinyVision
    Blockly.Blocks.tinyvision_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RX',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TX',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BAUD',
                        options: [
                            ['9600',   '9600'],
                            ['57600',  '57600'],
                            ['115200', '115200']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // 2. 设置模式
    Blockly.Blocks.tinyvision_set_mode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_SET_MODE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TINYVISION_MODE_FACE, 'face'],
                            [Blockly.Msg.TINYVISION_MODE_COLOR, 'color'],
                            [Blockly.Msg.TINYVISION_MODE_QR, 'qr'],
                            [Blockly.Msg.TINYVISION_MODE_CARD, 'card']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // 3. 读取串口数据
    Blockly.Blocks.tinyvision_read_serial = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_READ_SERIAL,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // 4. 获取人脸坐标
    Blockly.Blocks.tinyvision_get_face_coord = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_GET_FACE_COORD,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COORD',
                        options: [
                            ['X', 'X'],
                            ['Y', 'Y']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // 5. 人脸是否有效
    Blockly.Blocks.tinyvision_is_face_valid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_IS_FACE_VALID,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // 6. 颜色识别结果 —— 固定 4 种颜色
    Blockly.Blocks.tinyvision_get_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_GET_COLOR,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // 7. 判断识别到的颜色是否为指定颜色
    Blockly.Blocks.tinyvision_is_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_IS_COLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.TINYVISION_COLOR_RED,    'RED'],
                            [Blockly.Msg.TINYVISION_COLOR_YELLOW, 'YELLOW'],
                            [Blockly.Msg.TINYVISION_COLOR_BLUE,   'BLUE'],
                            [Blockly.Msg.TINYVISION_COLOR_GREEN,  'GREEN']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // 8. 获取二维码识别结果
    Blockly.Blocks.tinyvision_get_qrcode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_GET_QRCODE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // 9. 卡片识别结果 —— 固定 5 种卡片
    Blockly.Blocks.tinyvision_get_card = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_GET_CARD,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    // 10. 判断识别到的卡片是否为指定卡片
    Blockly.Blocks.tinyvision_is_card = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TINYVISION_IS_CARD,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CARD',
                        options: [
                            [Blockly.Msg.TINYVISION_CARD_STRAIGHT, 'STRAIGHT'],
                            [Blockly.Msg.TINYVISION_CARD_UTURN,    'UTURN'],
                            [Blockly.Msg.TINYVISION_CARD_LEFT,     'LEFT'],
                            [Blockly.Msg.TINYVISION_CARD_RIGHT,    'RIGHT'],
                            [Blockly.Msg.TINYVISION_CARD_PARKING,  'PARKING']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
