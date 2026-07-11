/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addBlocks(Blockly) {
    const color1 = '#4CAF50';  // 用于语句块（绿色）
    const color2 = '#4C97FF';  // 用于值块（蓝色）
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks['AIbot_register_mcp_ws2812_rgb_service'] = {  
        init: function() {
            this.jsonInit({
                message0: '%{BKY_AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE}',
                args0: [
                    {
                        type: 'input_value',
                        name: 'SERVICE_NAME',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'DESCRIPTION',
                        check: 'String'
                    }
                ],
                colour: color1,
                tooltip: '',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['AIbot_get_ws2812_rgb_mcp_name'] = {
        init: function() {
            this.jsonInit({
                message0: '%{BKY_AIBOT_GET_WS2812_RGB_MCP_NAME}',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color2,
                tooltip: '',
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks['AIbot_get_ws2812_rgb_param_value'] = {
        init: function() {
            this.jsonInit({
                message0: '%{BKY_AIBOT_GET_WS2812_RGB_PARAM_VALUE}',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME',
                        check: 'String'
                    }
                ],
                colour: color2,
                extensions: ['output_string'],
                tooltip: ''
            });
        }
    };

    Blockly.Blocks['AIbot_update_ws2812_rgb_state'] = {
        init: function() {
            this.jsonInit({
                message0: '%{BKY_AIBOT_UPDATE_WS2812_RGB_STATE}',
                args0: [
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME',
                        check: 'String'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color1,
                tooltip: '',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks['AIbot_response_ws2812_rgb_result'] = {
        init: function() {
            this.jsonInit({
                message0: '%{BKY_AIBOT_RESPONSE_WS2812_RGB_RESULT}',
                args0: [],
                colour: color1,
                tooltip: '',
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks['ws2812_rgb_control'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_WS2812_RGB_CONTROL}',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'NUM_LEDS',
                        check: 'Number'
                    }
                ],
                colour: color2,
                tooltip: '',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;