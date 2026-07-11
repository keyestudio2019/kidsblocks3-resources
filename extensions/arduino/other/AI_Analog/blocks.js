/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加Blockly块定义，用于AIbot MCP 模拟传感器服务控制扩展。
 * @param {Object} Blockly - Blockly核心对象。
 * @returns {Object} Blockly - 返回修改后的Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';  // 用于语句块（绿色）
    const color2 = '#4C97FF';  // 用于值块（蓝色）
    
    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();

    // ===============================  
    // 注册 MCP 模拟传感器服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_analog_sensor_service'] = {  
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE,
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
                    },
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME',
                        check: 'String'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PARAM_TYPE',
                        options: [
                            [Blockly.Msg.NUMBER, 'Number'],
                            [Blockly.Msg.STRING, 'String']
                        ]
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };
    // ===============================  
    // 判断模拟传感器 MCP 服务名称是否匹配
    // ===============================
    Blockly.Blocks['AIbot_get_analog_sensor_mcp_name'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_ANALOG_SENSOR_MCP_NAME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_GET_ANALOG_SENSOR_MCP_NAME_TOOLTIP,
                extensions: ['output_boolean']
            });
        }
    };

    // ===============================  
    // 获取模拟传感器 MCP 参数值
    // ===============================
    Blockly.Blocks['AIbot_get_analog_sensor_param_value'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE,
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
                tooltip: Blockly.Msg.AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE_TOOLTIP,
                extensions: ['output_number']
            });
        }
    };

    // ===============================  
    // 更新模拟传感器 MCP 状态
    // ===============================
    Blockly.Blocks['AIbot_update_analog_sensor_state'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_UPDATE_ANALOG_SENSOR_STATE,
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
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_UPDATE_ANALOG_SENSOR_STATE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================  
    // 上报模拟传感器 MCP 执行结果
    // ===============================
    Blockly.Blocks['AIbot_response_analog_sensor_result'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_ANALOG_SENSOR_RESULT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_RESPONSE_ANALOG_SENSOR_RESULT_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };
// 读取模拟传感器值
// ===============================
Blockly.Blocks['analog_sensor_read'] = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.ANALOG_SENSOR_READ,  // 使用 Msg 定义，支持 %1 和 %2
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'sensor',
                    options: [
                        [Blockly.Msg.PHOTORESISTOR || '光敏电阻', 'photoresistor'],
                        [Blockly.Msg.THERMISTOR || '热敏电阻', 'thermistor'],
                        [Blockly.Msg.SOIL_MOISTURE || '土壤湿度传感器', 'soil_moisture'],
                        [Blockly.Msg.WATER_LEVEL || '水位传感器', 'water_level'],
                        [Blockly.Msg.SOUND_SENSOR || '声音传感器', 'sound'],
                        [Blockly.Msg.POTENTIOMETER || '电位器', 'potentiometer'],
                        [Blockly.Msg.RAIN_SENSOR || '雨水传感器', 'rain'],
                        [Blockly.Msg.GAS_SENSOR || '煤气传感器', 'gas'],
                        [Blockly.Msg.ALCOHOL_SENSOR || '酒精传感器', 'alcohol'],
                        [Blockly.Msg.PRESSURE_SENSOR || '压力传感器', 'pressure'],
                        [Blockly.Msg.UV_SENSOR || '紫外线传感器', 'uv']
                        // 可以添加更多
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'pin',
                    options: analogPins  // 原有的引脚下拉
                }
            ],
            colour: color2,
            extensions: ['output_number']
        });
    }
};


    return Blockly;
}

exports = addBlocks;