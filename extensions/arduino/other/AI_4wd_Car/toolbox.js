/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 返回 4WD 小车扩展的 Blockly 工具箱 XML。
 * 所有积木 type/id 均加 _4wd 后缀，避免与 2WD 扩展冲突。
 */
function addToolbox() {
  return `
<category name="%{BKY_AI_CAR_CATEGORY_4WD}" id="AI_CAR_CATEGORY_4WD" colour="#4CAF50" secondaryColour="#66BB6A">

  <block type="AIbot_register_mcp_car_service_4wd" id="AIbot_register_mcp_car_service_4wd">
    <value name="SERVICE_NAME">
      <shadow type="text">
        <field name="TEXT">car</field>
      </shadow>
    </value>
    <value name="DESCRIPTION">
      <shadow type="text">
        <field name="TEXT">Car Control, action: forward/backward/turn_left/turn_right/stop speed:0-255</field>
      </shadow>
    </value>
    <value name="PARAM1_NAME">
      <shadow type="text">
        <field name="TEXT">action</field>
      </shadow>
    </value>
    <field name="PARAM1_TYPE">String</field>
    <value name="PARAM2_NAME">
      <shadow type="text">
        <field name="TEXT">speed</field>
      </shadow>
    </value>
    <field name="PARAM2_TYPE">Number</field>
  </block>

  <block type="AIbot_get_mcp_message_event_name_new_4wd" id="AIbot_get_mcp_message_event_name_new_4wd">
    <value name="MCP_NAME">
      <shadow type="text">
        <field name="TEXT">car</field>
      </shadow>
    </value>
  </block>

  <block type="AIbot_control_message_event_function_4wd" id="AIbot_control_message_event_function_4wd">
    <value name="MCP_NAME">
      <shadow type="text">
        <field name="TEXT">car</field>
      </shadow>
    </value>
    <value name="PARAM_NAME">
      <shadow type="text">
        <field name="TEXT">speed</field>
      </shadow>
    </value>
  </block>

  <block type="AIbot_update_mcp_control_state_new_4wd" id="AIbot_update_mcp_control_state_new_4wd">
    <value name="MCP_NAME">
      <shadow type="text">
        <field name="TEXT">car</field>
      </shadow>
    </value>
    <value name="PARAM_NAME">
      <shadow type="text">
        <field name="TEXT">action</field>
      </shadow>
    </value>
    <value name="VAR">
      <shadow type="text">
        <field name="TEXT">done</field>
      </shadow>
    </value>
  </block>

  <block type="AIbot_response_mcp_control_result_new_4wd" id="AIbot_response_mcp_control_result_new_4wd">
    <value name="MCP_NAME">
      <shadow type="text">
        <field name="TEXT">car</field>
      </shadow>
    </value>
  </block>

  <block type="AIbot_mcp_car_4wd_init" id="AIbot_mcp_car_4wd_init">
    <field name="lf_dir_pin">10</field>
    <field name="lf_pwm_pin">11</field>
    <field name="lb_dir_pin">12</field>
    <field name="lb_pwm_pin">13</field>
    <field name="rf_dir_pin">18</field>
    <field name="rf_pwm_pin">17</field>
    <field name="rb_dir_pin">38</field>
    <field name="rb_pwm_pin">46</field>
  </block>

  <block type="AIbot_mcp_car_4wd_move" id="AIbot_mcp_car_4wd_move">
    <field name="action">forward</field>
    <value name="speed">
      <shadow type="math_number">
        <field name="NUM">100</field>
      </shadow>
    </value>
  </block>

</category>
  `;
}

exports = addToolbox;
