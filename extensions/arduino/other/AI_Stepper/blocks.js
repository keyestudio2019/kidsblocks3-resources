/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * Registers Blockly blocks for the AIBot 28BYJ-48 stepper motor plugin.
 * @param {Object} Blockly Blockly instance.
 * @returns {Object} The Blockly instance.
 */
function addBlocks (Blockly) {
    const statementColour = '#4CAF50';
    const valueColour = '#4C97FF';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.AIbot_register_mcp_stepper_service = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_STEPPER_SERVICE || 'Register MCP service %1 description %2 direction parameter %3 steps parameter %4',
                args0: [
                    {type: 'input_value', name: 'SERVICE_NAME'},
                    {type: 'input_value', name: 'DESCRIPTION'},
                    {type: 'input_value', name: 'DIRECTION_PARAM'},
                    {type: 'input_value', name: 'STEPS_PARAM'}
                ],
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.AIbot_get_mcp_message_event_name_stepper = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER || 'MCP service name is %1?',
                args0: [{type: 'input_value', name: 'MCP_NAME'}],
                colour: valueColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.AIbot_control_message_event_stepper = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_STEPPER || 'Get %1 parameter from MCP %2 as %3',
                args0: [
                    {type: 'input_value', name: 'PARAM_NAME'},
                    {type: 'input_value', name: 'MCP_NAME'},
                    {
                        type: 'field_dropdown',
                        name: 'PARAM_TYPE',
                        options: [
                            [Blockly.Msg.STRING || 'String', 'String'],
                            [Blockly.Msg.NUMBER || 'Number', 'Number']
                        ]
                    }
                ],
                colour: valueColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.AIbot_response_mcp_control_result_stepper = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER || 'Report MCP %1 execution result',
                args0: [{type: 'input_value', name: 'MCP_NAME'}],
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.AI_stepper_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AI_STEPPER_INIT || 'Initialize 28BYJ-48 stepper IN1 %1 IN2 %2 IN3 %3 IN4 %4 steps per revolution %5 step interval (µs) %6',
                args0: [
                    {type: 'field_dropdown', name: 'IN1', options: digitalPins},
                    {type: 'field_dropdown', name: 'IN2', options: digitalPins},
                    {type: 'field_dropdown', name: 'IN3', options: digitalPins},
                    {type: 'field_dropdown', name: 'IN4', options: digitalPins},
                    {type: 'input_value', name: 'STEPS_PER_REVOLUTION', check: 'Number'},
                    {type: 'input_value', name: 'STEP_INTERVAL_US', check: 'Number'}
                ],
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.AI_stepper_move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AI_STEPPER_MOVE || 'Run stepper direction %1 steps %2',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [Blockly.Msg.AI_STEPPER_FORWARD || 'Forward', 'forward'],
                            [Blockly.Msg.AI_STEPPER_REVERSE || 'Reverse', 'reverse']
                        ]
                    },
                    {type: 'input_value', name: 'STEPS', check: 'Number'}
                ],
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.AI_stepper_turns = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AI_STEPPER_TURNS || 'Run stepper direction %1 turns %2',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [Blockly.Msg.AI_STEPPER_FORWARD || 'Forward', 'forward'],
                            [Blockly.Msg.AI_STEPPER_REVERSE || 'Reverse', 'reverse']
                        ]
                    },
                    {type: 'input_value', name: 'TURNS', check: 'Number'}
                ],
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.AI_stepper_release = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AI_STEPPER_RELEASE || 'Release stepper motor',
                colour: statementColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
