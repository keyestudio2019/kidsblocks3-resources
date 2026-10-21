/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colorVideo = '#2D8CFF';

    Blockly.Blocks['tinyvision_monitor_camera_init'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_MONITOR_CAMERA_INIT}',
                args0: [],
                colour: colorVideo,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['tinyvision_monitor_wifi'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_MONITOR_WIFI}',
                args0: [
                    {type: 'input_value', name: 'ssid', check: 'String'},
                    {type: 'input_value', name: 'password', check: 'String'}
                ],
                colour: colorVideo,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['tinyvision_monitor_start_server'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_MONITOR_START_SERVER}',
                args0: [],
                colour: colorVideo,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['tinyvision_monitor_tft_init'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_TINYVISION_MONITOR_TFT_INIT}',
                args0: [],
                colour: colorVideo,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}
exports = addBlocks;
