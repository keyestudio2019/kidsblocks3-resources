/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6B35';
    const secondaryColour = '#CC4A10';

    const iconUrl = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNTQiIGhlaWdodD0iMjYiIHJ4PSI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHJlY3QgeD0iNiIgeT0iNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjEzIiBjeT0iMTQiIHI9IjMiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIvPjxsaW5lIHgxPSIyNiIgeTE9IjE0IiB4Mj0iNTAiIHkyPSIxNCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIHJlZlg9IjMiIHJlZlk9IjMiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTTAsMCBMNiwzIEwwLDYgWiIgZmlsbD0iI2ZmZmZmZiIvPjwvbWFya2VyPjwvZGVmcz48L3N2Zz4=';

    // ── Block 1: 初始化串口通信 ───────────────────────────────────
    // 对应 Serial.begin(115200)，波特率必须与 ESP32-CAM 一致
    Blockly.Blocks.camctrl_serial_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CAMCTRL_SERIAL_INIT,
                args0: [{ type: 'field_image', src: iconUrl, width: 50, height: 27 }],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'baud',
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

    // ── Block 2: 初始化按键引脚 ───────────────────────────────────
    // 内部上拉模式，只需接 GND，对应 sketch_jun5b/d
    Blockly.Blocks.camctrl_button_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CAMCTRL_BUTTON_INIT,
                args0: [{ type: 'field_image', src: iconUrl, width: 50, height: 27 }],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: function () {
                            const workspace = Blockly.getMainWorkspace();
                            if (workspace && workspace.getFlyout) {
                                try {
                                    return workspace.getFlyout().getFlyoutItems()
                                        .find(b => b.type === 'arduino_pin_setDigitalOutput')
                                        .getField('PIN').getOptions();
                                } catch (e) { /* fallback */ }
                            }
                            return [['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],
                                    ['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],
                                    ['12','12'],['13','13']];
                        }
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 3: 按键切换发送指令（带消抖）──────────────────────
    // 每次按下切换发送 cmdA / cmdB，对应 sketch_jun5d 的完整逻辑
    Blockly.Blocks.camctrl_button_toggle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CAMCTRL_BUTTON_TOGGLE,
                args0: [{ type: 'field_image', src: iconUrl, width: 50, height: 27 }],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: function () {
                            const workspace = Blockly.getMainWorkspace();
                            if (workspace && workspace.getFlyout) {
                                try {
                                    return workspace.getFlyout().getFlyoutItems()
                                        .find(b => b.type === 'arduino_pin_setDigitalOutput')
                                        .getField('PIN').getOptions();
                                } catch (e) { /* fallback */ }
                            }
                            return [['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],
                                    ['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],
                                    ['12','12'],['13','13']];
                        }
                    },
                    { type: 'field_input', name: 'cmdA', text: 'O' },
                    { type: 'field_input', name: 'cmdB', text: 'F' }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 4: 按键按下时发送指令（单次触发）──────────────────
    // 对应 sketch_jun5b 的简单版本（发送固定字符 'a'）
    Blockly.Blocks.camctrl_button_send = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CAMCTRL_BUTTON_SEND,
                args0: [{ type: 'field_image', src: iconUrl, width: 50, height: 27 }],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: function () {
                            const workspace = Blockly.getMainWorkspace();
                            if (workspace && workspace.getFlyout) {
                                try {
                                    return workspace.getFlyout().getFlyoutItems()
                                        .find(b => b.type === 'arduino_pin_setDigitalOutput')
                                        .getField('PIN').getOptions();
                                } catch (e) { /* fallback */ }
                            }
                            return [['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],
                                    ['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],
                                    ['12','12'],['13','13']];
                        }
                    },
                    { type: 'field_input', name: 'cmd', text: 'a' }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 5: 直接发送串口指令 ─────────────────────────────────
    // 不依赖按键，直接在 loop 里发送指定字符
    Blockly.Blocks.camctrl_send_cmd = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.CAMCTRL_SEND_CMD,
                args0: [{ type: 'field_image', src: iconUrl, width: 50, height: 27 }],
                args1: [
                    { type: 'field_input', name: 'cmd', text: 'O' }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // ── Block 6: 读取串口回传数据（输出值块）────────────────────
    // 返回从 ESP32-CAM 收到的字符串，可接在"串口打印"积木里
    Blockly.Blocks.camctrl_read_serial = {
        init: function () {
            this.jsonInit({
                message0: '%1 %2',
                args0: [
                    { type: 'field_image', src: iconUrl, width: 50, height: 27 },
                    { type: 'field_label_serializable', name: 'LABEL', text: Blockly.Msg.CAMCTRL_READ_SERIAL }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}
exports = addBlocks;
