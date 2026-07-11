/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 添加Blockly块定义，用于AIbot MCP 电机控制服务扩展（4WD小车，4个电机，8个IO口）。
 * 所有公共积木名称均加 _4wd 后缀，避免与 2WD 扩展同时加载时冲突。
 * 拆分为两个积木：
 *   1. AIbot_mcp_car_4wd_init  —— 定义8个引脚（放在 setup/初始化区域，只用一次）
 *   2. AIbot_mcp_car_4wd_move  —— 控制动作和速度（放在 loop/事件中，可多次调用）
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
  // 注册 电机 控制服务（4WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_register_mcp_car_service_4wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_REGISTER_MCP_CAR_SERVICE_4WD || '注册MCP服务 %1 描述 %2 参数1 %3 类型 %4 参数2 %5 类型 %6',
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
  // 判断 MCP 服务名称是否匹配（4WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_get_mcp_message_event_name_new_4wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_4WD || 'MCP 服务名称是 %1 吗？',
        args0: [{ type: 'input_value', name: 'MCP_NAME' }],
        colour: color2,
        extensions: ['output_boolean']
      });
    }
  };

  // =============================== 
  // 获取 MCP 参数值（4WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_control_message_event_function_4wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_4WD || '从MCP %1 获取参数 %2 类型 %3',
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
  // 设置 MCP 服务的状态（4WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_update_mcp_control_state_new_4wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_4WD || '更新 MCP %1 的 %2 为 %3',
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
  // 上报 MCP 执行结果（4WD 专用）
  // ===============================
  Blockly.Blocks['AIbot_response_mcp_control_result_new_4wd'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_4WD || '上报 MCP %1 执行结果',
        args0: [{ type: 'input_value', name: 'MCP_NAME' }],
        colour: color1,
        extensions: ['shape_statement']
      });
    }
  };

  // =============================== 
  // 积木①：4WD 小车引脚定义（初始化，放在 setup 中使用一次）
  // 显示为多行紧凑矩形，每行一个电机
  // ===============================
  Blockly.Blocks['AIbot_mcp_car_4wd_init'] = {
    init: function() {
      this.setColour(color1);
      this.setTooltip(Blockly.Msg.AIBOT_MCP_CAR_4WD_INIT_TOOLTIP || '定义4WD小车的8个引脚，放在初始化区域使用一次');

      // 标题行
      this.appendDummyInput()
        .appendField(Blockly.Msg.AIBOT_MCP_CAR_4WD_INIT_TITLE || '4WD 小车');

      // 左前电机
      this.appendDummyInput()
        .appendField(Blockly.Msg.AIBOT_MCP_CAR_4WD_LF || '左前')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'lf_dir_pin')
        .appendField('PWM')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'lf_pwm_pin');

      // 左后电机
      this.appendDummyInput()
        .appendField(Blockly.Msg.AIBOT_MCP_CAR_4WD_LB || '左后')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'lb_dir_pin')
        .appendField('PWM')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'lb_pwm_pin');

      // 右前电机
      this.appendDummyInput()
        .appendField(Blockly.Msg.AIBOT_MCP_CAR_4WD_RF || '右前')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'rf_dir_pin')
        .appendField('PWM')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'rf_pwm_pin');

      // 右后电机
      this.appendDummyInput()
        .appendField(Blockly.Msg.AIBOT_MCP_CAR_4WD_RB || '右后')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'rb_dir_pin')
        .appendField('PWM')
        .appendField(new Blockly.FieldDropdown(digitalPins), 'rb_pwm_pin');

      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // =============================== 
  // 积木②：4WD 小车运动控制（动作 + 速度，可多次调用）
  // 显示效果：4WD小车运动  动作 [前进▼]  速度 [100]
  // ===============================
  Blockly.Blocks['AIbot_mcp_car_4wd_move'] = {
    init: function() {
      this.jsonInit({
        message0: Blockly.Msg.AIBOT_MCP_CAR_4WD_MOVE || '4WD 小车运动  动作 %1  速度 %2',
        args0: [
          {
            type: 'field_dropdown',
            name: 'action',
            options: [
              [Blockly.Msg.CAR_FORWARD    || '前进',  'forward'],
              [Blockly.Msg.CAR_BACKWARD   || '后退',  'backward'],
              [Blockly.Msg.CAR_TURN_LEFT  || '左转',  'turn_left'],
              [Blockly.Msg.CAR_TURN_RIGHT || '右转',  'turn_right'],
              [Blockly.Msg.CAR_STOP       || '停止',  'stop']
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
