/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addToolbox() {

    return `
  <category name="%{BKY_AI_MOTOR_CATEGORY}" id="AI_MOTOR_CATEGORY" colour="#FF5722" secondaryColour="#FF8A65">
  
    <block type="AIbot_register_mcp_motor_service" id="AIbot_register_mcp_motor_service">
      <value name="SERVICE_NAME">
        <shadow type="text">
          <field name="TEXT">motor</field>
        </shadow>
      </value>
      <value name="DESCRIPTION">
        <shadow type="text">
          <field name="TEXT">Motor Control, direction: forward/backward/stop speed:0-255</field>
        </shadow>
      </value>
      <value name="PARAM1_NAME">
        <shadow type="text">
          <field name="TEXT">direction</field>
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
  
    <block type="AIbot_get_mcp_message_event_name_motor" id="AIbot_get_mcp_message_event_name_motor">
      <value name="MCP_NAME">
        <shadow type="text">
          <field name="TEXT">motor</field>
        </shadow>
      </value>
    </block>
  
    <block type="AIbot_control_message_event_motor" id="AIbot_control_message_event_motor">
      <value name="MCP_NAME">
        <shadow type="text">
          <field name="TEXT">motor</field>
        </shadow>
      </value>
      <value name="PARAM_NAME">
        <shadow type="text">
          <field name="TEXT">speed</field>
        </shadow>
      </value>
    </block>
  
    <block type="AIbot_update_mcp_control_state_motor" id="AIbot_update_mcp_control_state_motor">
      <value name="MCP_NAME">
        <shadow type="text">
          <field name="TEXT">motor</field>
        </shadow>
      </value>
      <value name="PARAM_NAME">
        <shadow type="text">
          <field name="TEXT">direction</field>
        </shadow>
      </value>
      <value name="VAR">
        <shadow type="text">
          <field name="TEXT">done</field>
        </shadow>
      </value>
    </block>
  
    <block type="AIbot_response_mcp_control_result_motor" id="AIbot_response_mcp_control_result_motor">
      <value name="MCP_NAME">
        <shadow type="text">
          <field name="TEXT">motor</field>
        </shadow>
      </value>
    </block>
  
    <block type="Motor_setMotorState" id="Motor_setMotorState">
      <field name="in1_pin">12</field>
      <field name="in2_pin">13</field>
      <field name="direction">forward</field>
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