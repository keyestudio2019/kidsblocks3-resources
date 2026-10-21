/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加Blockly块定义，用于AIbot MCP 超声波传感器服务控制扩展。
 * @param {Object} Blockly - Blockly核心对象。
 * @returns {Object} Blockly - 返回修改后的Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';  // 用于语句块（绿色）
    const color2 = '#4C97FF';  // 用于值块（蓝色）

    // 部分 OpenBlock/KidsBlock 版本未注入 Blockly.Msg.NUMBER / STRING。
    // FieldDropdown 不能接受 undefined 标签，否则会在内部访问 .alt 时崩溃。
    const numberLabel = (Blockly.Msg && Blockly.Msg.NUMBER) || 'Number';
    const stringLabel = (Blockly.Msg && Blockly.Msg.STRING) || 'String';

    // 优先从主 Arduino 扩展取得引脚列表；主工作区尚未就绪时使用默认引脚，
    // 使本扩展仍可正常加载。
    let digitalPins = [
        ['19', '19'],
        ['20', '20']
    ];
    try {
        const workspace = Blockly.getMainWorkspace && Blockly.getMainWorkspace();
        const flyout = workspace && workspace.getFlyout && workspace.getFlyout();
        const flyoutItems = flyout && flyout.getFlyoutItems && flyout.getFlyoutItems();
        const pinBlock = flyoutItems && flyoutItems.find(block =>
            block.type === 'arduino_pin_setDigitalOutput'
        );
        const pinField = pinBlock && pinBlock.getField && pinBlock.getField('PIN');
        const pinOptions = pinField && pinField.getOptions && pinField.getOptions();
        if (Array.isArray(pinOptions) && pinOptions.length > 0) {
            digitalPins = pinOptions;
        }
    } catch (error) {
        // 保持默认引脚；不因主扩展加载顺序而阻止本扩展加载。
    }

    // ===============================  
    // 注册 MCP 超声波传感器服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_ultrasonic_sensor_service'] = {  
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE,
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
                            [numberLabel, 'Number'],
                            [stringLabel, 'String']
                        ]
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };
    // ===============================  
    // 判断超声波传感器 MCP 服务名称是否匹配
    // ===============================
    Blockly.Blocks['AIbot_get_ultrasonic_sensor_mcp_name'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color2,
                tooltip: Blockly.Msg.AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME_TOOLTIP,
                extensions: ['output_boolean']
            });
        }
    };

    // ===============================  
    // 获取超声波传感器 MCP 参数值
    // ===============================
    Blockly.Blocks['AIbot_get_ultrasonic_sensor_param_value'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE,
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
                tooltip: Blockly.Msg.AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE_TOOLTIP,
                extensions: ['output_number']
            });
        }
    };

    // ===============================  
    // 更新超声波传感器 MCP 状态
    // ===============================
    Blockly.Blocks['AIbot_update_ultrasonic_sensor_state'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE,
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
                tooltip: Blockly.Msg.AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================  
    // 上报超声波传感器 MCP 执行结果
    // ===============================
    Blockly.Blocks['AIbot_response_ultrasonic_sensor_result'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME',
                        check: 'String'
                    }
                ],
                colour: color1,
                tooltip: Blockly.Msg.AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT_TOOLTIP,
                extensions: ['shape_statement']
            });
        }
    };
    
    // ===============================  
    // 读取超声波传感器距离值（固定为厘米单位）
    // ===============================
    Blockly.Blocks['ultrasonic_sensor_read'] = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_SENSOR_READ,  // 使用 Msg 定义，支持 %1 %2（固定厘米）
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'trig_pin',
                        options: digitalPins  // Trig 引脚下拉
                    },
                    {
                        type: 'field_dropdown',
                        name: 'echo_pin',
                        options: digitalPins  // Echo 引脚下拉
                    }
                ],
                colour: color2,
                extensions: ['output_number'],
                tooltip: Blockly.Msg.ULTRASONIC_SENSOR_READ_TOOLTIP || '读取 HC-SR04 超声波传感器的距离值（单位：厘米）。'
            });
        }
    };

    return Blockly;
}

exports = addBlocks;