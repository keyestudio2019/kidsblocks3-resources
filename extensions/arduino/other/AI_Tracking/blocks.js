/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加 Blockly 块定义，用于 AIbot I2C 五路循迹传感器扩展。
 * @param {Object} Blockly - Blockly 核心对象。
 * @returns {Object} Blockly - 返回修改后的 Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';
    const color2 = '#4C97FF';
    const sensorOptions = [
        [Blockly.Msg.AI_TRACKING_SENSOR_LEFT || '最左', 'left'],
        [Blockly.Msg.AI_TRACKING_SENSOR_LEFT_CENTER || '左中', 'left_center'],
        [Blockly.Msg.AI_TRACKING_SENSOR_CENTER || '中间', 'center'],
        [Blockly.Msg.AI_TRACKING_SENSOR_RIGHT_CENTER || '右中', 'right_center'],
        [Blockly.Msg.AI_TRACKING_SENSOR_RIGHT || '最右', 'right']
    ];

    // ===============================
    // 注册循迹传感器 MCP 服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_tracking_sensor_service'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE,
                args0: [
                    {type: 'input_value', name: 'SERVICE_NAME', check: 'String'},
                    {type: 'input_value', name: 'DESCRIPTION', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'},
                    {type: 'field_dropdown', name: 'PARAM_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String']]}
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 判断循迹传感器 MCP 服务名称是否匹配
    // ===============================
    Blockly.Blocks['AIbot_get_tracking_sensor_mcp_name'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_TRACKING_SENSOR_MCP_NAME,
                args0: [{type: 'input_value', name: 'MCP_NAME', check: 'String'}],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_GET_TRACKING_SENSOR_MCP_NAME_TOOLTIP,
                extensions: ['output_boolean']
            });
        }
    };

    // ===============================
    // 获取循迹传感器 MCP 参数值
    // ===============================
    Blockly.Blocks['AIbot_get_tracking_sensor_param_value'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE,
                args0: [
                    {type: 'input_value', name: 'MCP_NAME', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'}
                ],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE_TOOLTIP,
                extensions: ['output_string']
            });
        }
    };

    // ===============================
    // 更新循迹传感器 MCP 状态
    // ===============================
    Blockly.Blocks['AIbot_update_tracking_sensor_state'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_UPDATE_TRACKING_SENSOR_STATE,
                args0: [
                    {type: 'input_value', name: 'MCP_NAME', check: 'String'},
                    {type: 'input_value', name: 'PARAM_NAME', check: 'String'},
                    {type: 'input_value', name: 'VALUE'}
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_UPDATE_TRACKING_SENSOR_STATE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // 上报循迹传感器 MCP 执行结果
    // ===============================
    Blockly.Blocks['AIbot_response_tracking_sensor_result'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_TRACKING_SENSOR_RESULT,
                args0: [{type: 'input_value', name: 'MCP_NAME', check: 'String'}],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_RESPONSE_TRACKING_SENSOR_RESULT_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================
    // I2C 五路循迹模块初始化
    // ===============================
    Blockly.Blocks['tracking_sensor_init'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.TRACKING_SENSOR_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ADDRESS',
                        options: [
                            ['0x20', '0x20'], ['0x21', '0x21'], ['0x22', '0x22'], ['0x23', '0x23'],
                            ['0x24', '0x24'], ['0x25', '0x25'], ['0x26', '0x26'], ['0x27', '0x27']
                        ]
                    },
                    {type: 'input_value', name: 'SDA', check: 'Number'},
                    {type: 'input_value', name: 'SCL', check: 'Number'}
                ],
                colour: color2,
                tooltip: Blockly.Msg.TRACKING_SENSOR_INIT_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // 读取五路循迹状态（从左到右）
    Blockly.Blocks['tracking_sensor_read_all'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.TRACKING_SENSOR_READ_ALL,
                colour: color2,
                tooltip: Blockly.Msg.TRACKING_SENSOR_READ_ALL_TOOLTIP,
                extensions: ['output_string']
            });
        }
    };

    // 读取单个循迹传感器状态
    Blockly.Blocks['tracking_sensor_read'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.TRACKING_SENSOR_READ,
                args0: [{type: 'field_dropdown', name: 'SENSOR', options: sensorOptions}],
                colour: color2,
                tooltip: Blockly.Msg.TRACKING_SENSOR_READ_TOOLTIP,
                extensions: ['output_number']
            });
        }
    };

    // 判断指定传感器是否检测到黑线或白色表面
    Blockly.Blocks['tracking_sensor_detect'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.TRACKING_SENSOR_DETECT,
                args0: [
                    {type: 'field_dropdown', name: 'SENSOR', options: sensorOptions},
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.AI_TRACKING_BLACK || '黑线（0）', '0'],
                            [Blockly.Msg.AI_TRACKING_WHITE || '白色表面（1）', '1']
                        ]
                    }
                ],
                colour: color2,
                tooltip: Blockly.Msg.TRACKING_SENSOR_DETECT_TOOLTIP,
                extensions: ['output_boolean']
            });
        }
    };

    // 检查 PCF8574 循迹模块连接状态
    Blockly.Blocks['tracking_sensor_is_connected'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.TRACKING_SENSOR_IS_CONNECTED,
                colour: color2,
                tooltip: Blockly.Msg.TRACKING_SENSOR_IS_CONNECTED_TOOLTIP,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
