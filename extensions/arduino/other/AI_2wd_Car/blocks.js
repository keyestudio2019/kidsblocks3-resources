/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加Blockly块定义，用于AIbot MCP 电机控制服务扩展（2WD 两驱小车）。
 * 所有公共积木名称均加 _2wd 后缀，避免与 4WD 扩展同时加载时冲突。
 * @param {Object} Blockly - Blockly核心对象。
 * @returns {Object} Blockly - 返回修改后的Blockly。
 */
function addBlocks(Blockly) {
  const color1 = '#4CAF50';
  const color2 = '#4C97FF';

  const digitalPins = Blockly.getMainWorkspace().getFlyout()
    .getFlyoutItems()
    .find(block => block.type === 'arduino_pin_setDigitalOutput')
    .getField('PIN')
    .getOptions();

  // =============================== 
  // 注册 电机 控制服务（2WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_register_mcp_car_service_2wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_REGISTER_MCP_CAR_SERVICE_2WD || '注册MCP服务 %1 描述 %2 参数1 %3 类型 %4 参数2 %5 类型 %6',
        args0: [
          { type: 'input_value', name: 'SERVICE_NAME' },
          { type: 'input_value', name: 'DESCRIPTION' },
          { type: 'input_value', name: 'PARAM1_NAME' },
          { type: 'field_dropdown', name: 'PARAM1_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String'], [Blockly.Msg.NUMBER || '数值', 'Number']] },
          { type: 'input_value', name: 'PARAM2_NAME' },
          { type: 'field_dropdown', name: 'PARAM2_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String'], [Blockly.Msg.NUMBER || '数值', 'Number']] }
        ],
        colour: color1,
        extensions: ['shape_statement']
      });
    }
  };

  // =============================== 
  // 判断 MCP 服务名称是否匹配（2WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_get_mcp_message_event_name_new_2wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD || 'MCP 服务名称是 %1 吗？',
        args0: [{ type: 'input_value', name: 'MCP_NAME' }],
        colour: color2,
        extensions: ['output_boolean']
      });
    }
  };

  // =============================== 
  // 获取 MCP 参数值（2WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_control_message_event_function_2wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD || '从MCP %1 获取参数 %2 类型 %3',
        args0: [
          { type: 'input_value', name: 'MCP_NAME' },
          { type: 'input_value', name: 'PARAM_NAME' },
          { type: 'field_dropdown', name: 'PARAM_TYPE', options: [[Blockly.Msg.STRING || '字符串', 'String'], [Blockly.Msg.NUMBER || '数值', 'Number']] }
        ],
        extensions: ['output_string'],
        colour: color2
      });
    }
  };

  // =============================== 
  // 设置 MCP 服务的状态（2WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_update_mcp_control_state_new_2wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD || '更新 MCP %1 的 %2 为 %3',
        args0: [
          { type: 'input_value', name: 'MCP_NAME' },
          { type: 'input_value', name: 'PARAM_NAME' },
          { type: 'input_value', name: 'VAR' }
        ],
        colour: color1,
        extensions: ['shape_statement']
      });
    }
  };

  // =============================== 
  // 上报 MCP 执行结果（2WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_response_mcp_control_result_new_2wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD || '上报 MCP %1 执行结果',
        args0: [{ type: 'input_value', name: 'MCP_NAME' }],
        colour: color1,
        extensions: ['shape_statement']
      });
    }
  };

  // =============================== 
  // MCP 控制 2WD 小车（方向引脚 + PWM + 动作 + 速度）
  // ===============================
  Blockly.Blocks['AIbot_mcp_car_2wd_control'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_MCP_CAR_2WD_CONTROL || 'MCP 控制 2WD 小车 左电机方向 %1 PWM %2 右电机方向 %3 PWM %4 动作 %5 速度 %6',
        args0: [
          { type: 'field_dropdown', name: 'left_dir_pin', options: digitalPins },
          { type: 'field_dropdown', name: 'left_pwm_pin', options: digitalPins },
          { type: 'field_dropdown', name: 'right_dir_pin', options: digitalPins },
          { type: 'field_dropdown', name: 'right_pwm_pin', options: digitalPins },
          {
            type: 'field_dropdown',
            name: 'action',
            options: [
              [Blockly.Msg.CAR_FORWARD || '前进', 'forward'],
              [Blockly.Msg.CAR_BACKWARD || '后退', 'backward'],
              [Blockly.Msg.CAR_TURN_LEFT || '左转', 'turn_left'],
              [Blockly.Msg.CAR_TURN_RIGHT || '右转', 'turn_right'],
              [Blockly.Msg.CAR_STOP || '停止', 'stop']
            ]
          },
          { type: 'input_value', name: 'speed', check: 'Number' }
        ],
        colour: color1,
        extensions: ['shape_statement']
      });
    }
  };

  return Blockly;
}

exports = addBlocks;
