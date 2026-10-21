/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function addToolbox () {
    return `
<category name="%{BKY_AI_STEPPER_CATEGORY}" id="AI_STEPPER_CATEGORY" colour="#4CAF50" secondaryColour="#42CCFF">
    <block type="AIbot_register_mcp_stepper_service" id="AIbot_register_mcp_stepper_service">
        <value name="SERVICE_NAME">
            <shadow type="text"><field name="TEXT">stepper</field></shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text"><field name="TEXT">Stepper motor control. direction: forward or reverse; steps: 1 to 4096.</field></shadow>
        </value>
        <value name="DIRECTION_PARAM">
            <shadow type="text"><field name="TEXT">direction</field></shadow>
        </value>
        <value name="STEPS_PARAM">
            <shadow type="text"><field name="TEXT">steps</field></shadow>
        </value>
    </block>

    <block type="AIbot_get_mcp_message_event_name_stepper" id="AIbot_get_mcp_message_event_name_stepper">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">stepper</field></shadow>
        </value>
    </block>

    <block type="AIbot_control_message_event_stepper" id="AIbot_control_message_event_stepper">
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">steps</field></shadow>
        </value>
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">stepper</field></shadow>
        </value>
        <field name="PARAM_TYPE">Number</field>
    </block>

    <block type="AIbot_response_mcp_control_result_stepper" id="AIbot_response_mcp_control_result_stepper">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">stepper</field></shadow>
        </value>
    </block>

    <block type="AI_stepper_init" id="AI_stepper_init">
        <field name="IN1">8</field>
        <field name="IN2">9</field>
        <field name="IN3">13</field>
        <field name="IN4">14</field>
        <value name="STEPS_PER_REVOLUTION">
            <shadow type="math_number"><field name="NUM">4096</field></shadow>
        </value>
        <value name="STEP_INTERVAL_US">
            <shadow type="math_number"><field name="NUM">1500</field></shadow>
        </value>
    </block>

    <block type="AI_stepper_move" id="AI_stepper_move">
        <field name="DIRECTION">forward</field>
        <value name="STEPS">
            <shadow type="math_number"><field name="NUM">4096</field></shadow>
        </value>
    </block>

    <block type="AI_stepper_turns" id="AI_stepper_turns">
        <field name="DIRECTION">forward</field>
        <value name="TURNS">
            <shadow type="math_number"><field name="NUM">1</field></shadow>
        </value>
    </block>

    <block type="AI_stepper_release" id="AI_stepper_release"></block>
</category>`;
}

exports = addToolbox;
