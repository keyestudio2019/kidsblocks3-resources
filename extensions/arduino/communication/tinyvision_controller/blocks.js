/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colorCommunication = '#4C97FF';
    const colorRead = '#4C97FF';
    const colorCommand = '#4C97FF';

    Blockly.Blocks['tinyvision_ctrl_init'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_CTRL_INIT}',
                args0: [
                    {type: 'field_number', name: 'rx', value: 10, min: 0, max: 13, precision: 1},
                    {type: 'field_number', name: 'tx', value: 11, min: 0, max: 13, precision: 1}
                ],
                colour: colorCommunication,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['tinyvision_ctrl_read'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_CTRL_READ}',
                args0: [],
                colour: colorRead,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['tinyvision_ctrl_received'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_CTRL_RECEIVED}',
                args0: [{
                    type: 'field_dropdown',
                    name: 'cmd',
                    options: [
                        ['F — Forward', 'F'],
                        ['B — Backward', 'B'],
                        ['L — Left', 'L'],
                        ['R — Right', 'R'],
                        ['S — Stop', 'S'],
                        ['O — Servo open', 'O'],
                        ['C — Servo close', 'C'],
                        ['1 — Extension 1', '1'],
                        ['2 — Extension 2', '2']
                    ]
                }],
                colour: colorCommand,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}
exports = addBlocks;
