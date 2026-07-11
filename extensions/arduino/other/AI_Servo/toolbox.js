/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addToolbox() {
    return `
<category name="%{BKY_AI_SERVO_CATEGORY}" id="AI_SERVO_CATEGORY" colour="#4CAF50" secondaryColour="#42CCFF">

    <block type="AIbot_register_mcp_servo_service" id="AIbot_register_mcp_servo_service">
        <value name="SERVICE_NAME">
            <shadow type="text">
                <field name="TEXT">servo</field>
            </shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">Servo motor, angle from 0 to 180 degrees</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">angle</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_get_mcp_message_event_name_servo" id="AIbot_get_mcp_message_event_name_servo">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">servo</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_control_message_event_function_servo" id="AIbot_control_message_event_function_servo">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">servo</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">angle</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_update_mcp_control_state_servo" id="AIbot_update_mcp_control_state_servo">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">servo</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">angle</field>
            </shadow>
        </value>
        <value name="VAR">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_response_mcp_control_result_servo" id="AIbot_response_mcp_control_result_servo">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">servo</field>
            </shadow>
        </value>
    </block>

    <block type="servo_setAngle" id="servo_setAngle">
    <field name="pin">10</field>
    <value name="angle">
        <shadow type="math_number">
            <field name="NUM">90</field>
        </shadow>
    </value>
    <value name="time">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
    </block>

    <block type="servo_read" id="servo_read">
        <field name="pin">10</field>
    </block>


</category>
`;
}

exports = addToolbox;