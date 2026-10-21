/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加 Blockly 块定义，用于 AIbot 无源蜂鸣器扩展。
 * @param {Object} Blockly - Blockly 核心对象。
 * @returns {Object} Blockly - 返回修改后的 Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';
    const color2 = '#4C97FF';
    const commandOptions = [
        ['play_tone', 'play_tone'],
        ['stop', 'stop'],
        ['play_music', 'play_music']
    ];
    const musicOptions = [
        [Blockly.Msg.AI_BUZZER_MUSIC_BIRTHDAY || 'Birthday melody', 'birthday'],
        [Blockly.Msg.AI_BUZZER_MUSIC_TETRIS || 'Tetris melody', 'tetris'],
        [Blockly.Msg.AI_BUZZER_MUSIC_ODE_TO_JOY || 'Ode to Joy melody', 'Ode_to_Joy'],
        [Blockly.Msg.AI_BUZZER_MUSIC_CHRISTMAS || 'Christmas melody', 'christmas'],
        [Blockly.Msg.AI_BUZZER_MUSIC_SUPER_MARIO || 'Super Mario melody', 'super_mario'],
        [Blockly.Msg.AI_BUZZER_MUSIC_STAR_WAR || 'Star war melody', 'star_war_tone']
    ];

    // ===============================
    // 注册蜂鸣器 MCP 服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_buzzer_service'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_BUZZER_SERVICE || 'Register MCP service %1 description %2 parameter %3 type %4',
                args0: [
                    {type: 'input_value', name: 'SERVICE_NAME', check: 'String'},
                    {type: 'input_value', name: 'DESCRIPTION', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'},
                    {
                        type: 'field_dropdown',
                        name: 'PARAM_TYPE',
                        options: [
                            [Blockly.Msg.NUMBER || 'Number', 'Number'],
                            [Blockly.Msg.STRING || 'String', 'String']
                        ]
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_REGISTER_MCP_BUZZER_SERVICE_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 判断蜂鸣器 MCP 服务名称是否匹配
    // ===============================
    Blockly.Blocks['AIbot_get_mcp_message_event_name_buzzer'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER || 'MCP buzzer service name is %1?',
                args0: [{type: 'input_value', name: 'MCP_NAME', check: 'String'}],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER || '',
                extensions: ['output_boolean']
            });
        }
    };

    // ===============================
    // 获取蜂鸣器 MCP 参数值
    // ===============================
    Blockly.Blocks['AIbot_control_message_event_buzzer'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_BUZZER || 'Get MCP %1 parameter %2 type %3',
                args0: [
                    {type: 'input_value', name: 'MCP_NAME', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'},
                    {
                        type: 'field_dropdown',
                        name: 'PARAM_TYPE',
                        options: [
                            [Blockly.Msg.NUMBER || 'Number', 'Number'],
                            [Blockly.Msg.STRING || 'String', 'String']
                        ]
                    }
                ],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_BUZZER_TOOLTIP || '',
                extensions: ['output_string']
            });
        }
    };

    // ===============================
    // 设置蜂鸣器 MCP 服务状态
    // ===============================
    Blockly.Blocks['AIbot_update_mcp_control_state_buzzer'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER || 'Update MCP %1 parameter %2 to %3',
                args0: [
                    {type: 'input_value', name: 'MCP_NAME', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'},
                    {type: 'field_dropdown', name: 'COMMAND', options: commandOptions}
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 上报蜂鸣器 MCP 执行结果
    // ===============================
    Blockly.Blocks['AIbot_response_mcp_control_result_buzzer'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER || 'Report MCP buzzer %1 result',
                args0: [{type: 'input_value', name: 'MCP_NAME', check: 'String'}],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 无源蜂鸣器初始化
    // ===============================
    Blockly.Blocks['buzzer_init'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.BUZZER_INIT || 'Initialize passive buzzer on pin %1',
                args0: [{type: 'input_value', name: 'PIN', check: 'Number'}],
                colour: color2,
                tooltip: Blockly.Msg.BUZZER_INIT_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 播放指定频率
    // ===============================
    Blockly.Blocks['buzzer_play_tone'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.BUZZER_PLAY_TONE || 'Play passive buzzer on pin %1 frequency %2 Hz for %3 ms',
                args0: [
                    {type: 'input_value', name: 'PIN', check: 'Number'},
                    {type: 'input_value', name: 'FREQUENCY', check: 'Number'},
                    {type: 'input_value', name: 'DURATION', check: 'Number'}
                ],
                colour: color2,
                tooltip: Blockly.Msg.BUZZER_PLAY_TONE_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 停止蜂鸣器
    // ===============================
    Blockly.Blocks['buzzer_stop_tone'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.BUZZER_STOP_TONE || 'Stop passive buzzer on pin %1',
                args0: [{type: 'input_value', name: 'PIN', check: 'Number'}],
                colour: color2,
                tooltip: Blockly.Msg.BUZZER_STOP_TONE_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 播放内置音乐
    // ===============================
    Blockly.Blocks['buzzer_play_music'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.BUZZER_PLAY_MUSIC || 'Play built-in music %1 on passive buzzer pin %2',
                args0: [
                    {type: 'field_dropdown', name: 'MUSIC', options: musicOptions},
                    {type: 'input_value', name: 'PIN', check: 'Number'}
                ],
                colour: color2,
                tooltip: Blockly.Msg.BUZZER_PLAY_MUSIC_TOOLTIP || '',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
