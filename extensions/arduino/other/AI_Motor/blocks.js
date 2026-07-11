/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

/**
 * 添加Blockly块定义，用于AIbot MCP 电机控制服务扩展（使用驱动芯片，两个IO口）。
 * @param {Object} Blockly - Blockly核心对象。
 * @returns {Object} Blockly - 返回修改后的Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';  // 用于语句块（绿色）
    const color2 = '#4C97FF';  // 用于值块（蓝色）
  
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
      .getFlyoutItems()
      .find(block => block.type === 'arduino_pin_setDigitalOutput')
      .getField('PIN')
      .getOptions();
  
    // ===============================  
    // 注册 电机 控制服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_motor_service'] = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.AIBOT_REGISTER_MCP_MOTOR_SERVICE || '注册MCP服务 %1 描述 %2 参数1 %3 类型 %4 参数2 %5 类型 %6',
          args0: [
            { type: 'input_value', name: 'SERVICE_NAME' },  // 服务名，例如 "self.motor.set"
            { type: 'input_value', name: 'DESCRIPTION'},  // 描述，例如 "Motor Control, direction: forward/backward/stop speed:0-255"
            { type: 'input_value', name: 'PARAM1_NAME'},  // 参数1名，例如 "direction"
            { type: 'field_dropdown', name: 'PARAM1_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String'], [Blockly.Msg.NUMBER || '数值', 'Number']] },
            { type: 'input_value', name: 'PARAM2_NAME',},  // 参数2名，例如 "speed"
            { type: 'field_dropdown', name: 'PARAM2_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String'], [Blockly.Msg.NUMBER || '数值', 'Number']] }
          ],
          colour: color1,
          extensions: ['shape_statement'],
        });
      }
    };
  
    // ===============================  
    // 判断 MCP 服务名称是否匹配
    // ===============================
    Blockly.Blocks['AIbot_get_mcp_message_event_name_motor'] = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR || 'MCP 服务名称是 %1 吗？',
          args0: [
            {
              type: 'input_value',
              name: 'MCP_NAME'
            }
          ],
          colour: color2,
          extensions: ['output_boolean']
        });
      }
    };
  
    // ===============================  
    // 获取 MCP 参数值
    // ===============================
    Blockly.Blocks['AIbot_control_message_event_motor'] = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_MOTOR || '从MCP %1 获取参数 %2 类型 %3',
          args0: [
            {
              type: 'input_value',
              name: 'MCP_NAME'
            },
            {
              type: 'input_value',
              name: 'PARAM_NAME'
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
          extensions: ['output_string'] , // 如需改为 output_number，可调整
          colour: color2
        });
      }
    };
  
    // ===============================  
    // 设置 MCP 服务的状态
    // ===============================
    Blockly.Blocks['AIbot_update_mcp_control_state_motor'] = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR || '更新 MCP %1 的 %2 为 %3',
          args0: [
            {
              type: 'input_value',
              name: 'MCP_NAME'
            },
            {
              type: 'input_value',
              name: 'PARAM_NAME'
            },
            {
              type: 'input_value',
              name: 'VAR'
            }
          ],
          colour: color1,  // 语句块颜色
          extensions: ['shape_statement']
        });
      }
    };
  
    // ===============================  
    // 上报 MCP 执行结果
    // ===============================
    Blockly.Blocks['AIbot_response_mcp_control_result_motor'] = {
      init: function() {
        this.jsonInit({
          message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR || '上报 MCP %1 执行结果',
          args0: [
            {
              type: 'input_value',
              name: 'MCP_NAME'
            }
          ],
          colour: color1,  // 语句块颜色
          extensions: ['shape_statement']
        });
      }
    };
  
    Blockly.Blocks.Motor_setMotorState = {
      init: function () {
        this.jsonInit({
          message0: Blockly.Msg.MOTOR_SET_MOTOR_STATE || '设置电机 in1 %1 in2 %2 方向 %3 速度 %4',
          args0: [
            {
              type: 'field_dropdown',
              name: 'in1_pin',
              options: digitalPins
            },
            {
              type: 'field_dropdown',
              name: 'in2_pin',
              options: digitalPins
            },
            {
              type: 'field_dropdown',
              name: 'direction',
              options: [
                [Blockly.Msg.MOTOR_FORWARD || '正转', 'forward'],
                [Blockly.Msg.MOTOR_BACKWARD || '反转', 'backward'],
                [Blockly.Msg.MOTOR_STOP || '停止', 'stop']
              ]
            },
            {
              type: 'input_value',
              name: 'speed',
              check: 'Number'
            }
          ],
          colour: color2,
          extensions: ['shape_statement']
        });
      }
    };
  
    return Blockly;
  }
  
  exports = addBlocks;