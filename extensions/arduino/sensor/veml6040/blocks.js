/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6B6B';
    const secondaryColour = '#CC4444';

    // 动态获取当前板子支持的数字引脚列表（与 T18B20 参考写法一致）
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    // VEML6040 色轮 SVG 图标（base64）
    const veml6040IconUrl = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSIxMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTMgMiBBMTEgMTEgMCAwIDEgMjQgMTMiIHN0cm9rZT0iI0ZGNDQ0NCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI0IDEzIEExMSAxMSAwIDAgMSAxMyAyNCIgc3Ryb2tlPSIjNDRGRjQ0IiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTMgMjQgQTExIDExIDAgMCAxIDIgMTMiIHN0cm9rZT0iIzQ0NDRGRiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIgMTMgQTExIDExIDAgMCAxIDEzIDIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMyIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==';

    // ── Block 1: 初始化传感器（语句块）──────────────────────────
    // 对应 setup() 中的 begin() + setConfiguration()
    Blockly.Blocks.veml6040_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 2: 读取 R/G/B/W 原始通道值（数值块）──────────────
    // 对应 getRed() / getGreen() / getBlue() / getWhite()
    Blockly.Blocks.veml6040_read_raw = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_READ_RAW,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'channel',
                        options: [
                            ['R', 'RGBWSensor.getRed()'],
                            ['G', 'RGBWSensor.getGreen()'],
                            ['B', 'RGBWSensor.getBlue()'],
                            ['W', 'RGBWSensor.getWhite()']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ── Block 3: 更新 RGB888（语句块）───────────────────────────
    // 对应 GETRGB888(r, g, b)，把原始值归一化到 0-255 存入 .R/.G/.B
    // 必须先调用此块，再读取 RGB888 分量
    Blockly.Blocks.veml6040_update_rgb888 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_UPDATE_RGB888,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 4: 读取 RGB888 映射后的分量（数值块）──────────────
    // 对应 RGBWSensor.R / .G / .B（需先调用 veml6040_update_rgb888）
    Blockly.Blocks.veml6040_read_rgb888 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_READ_RGB888,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'component',
                        options: [
                            ['R', 'RGBWSensor.R'],
                            ['G', 'RGBWSensor.G'],
                            ['B', 'RGBWSensor.B']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ── Block 5: 读取色温 CCT（数值块）──────────────────────────
    // 对应 getCCT()，返回值单位 K（开尔文）
    Blockly.Blocks.veml6040_get_cct = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_GET_CCT,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ── Block 6: 读取环境光照度 Lux（数值块）────────────────────
    // 对应 getAmbientLight()，返回值单位 Lux
    Blockly.Blocks.veml6040_get_ambient = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_GET_AMBIENT,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // ── Block 7: 初始化 LED 引脚（语句块）──────────────────────
    // 对应 pinMode(LED_Pin, OUTPUT)，引脚号从板子数字引脚列表中选择
    Blockly.Blocks.veml6040_led_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_LED_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 8: 控制 LED 开/关（语句块）────────────────────────
    // 对应 digitalWrite(LED_Pin, HIGH/LOW)
    Blockly.Blocks.veml6040_led_set = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.VEML6040_LED_SET,
                args0: [
                    {
                        type: 'field_image',
                        src: veml6040IconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.VEML6040_LED_ON,  'HIGH'],
                            [Blockly.Msg.VEML6040_LED_OFF, 'LOW']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}
exports = addBlocks;
