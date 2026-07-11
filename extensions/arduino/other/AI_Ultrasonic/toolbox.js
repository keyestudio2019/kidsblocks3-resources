/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addToolbox() {
    return `

<category name="%{BKY_AI_ULTRASONIC_SENSOR_CATEGORY}" id="AI_ULTRASONIC_SENSOR_CATEGORY" colour="#4CAF50" secondaryColour="#66BB6A">

    <block type="AIbot_register_mcp_ultrasonic_sensor_service" id="AIbot_register_mcp_ultrasonic_sensor_service">
        <value name="SERVICE_NAME">
            <shadow type="text">
                <field name="TEXT">ultrasonic</field>
            </shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">ultrasonic sensor, read distance value</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">distance</field>
            </shadow>
        </value>
        <field name="PARAM_TYPE">Number</field>
    </block>

    <block type="AIbot_get_ultrasonic_sensor_mcp_name" id="AIbot_get_ultrasonic_sensor_mcp_name">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">ultrasonic</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_get_ultrasonic_sensor_param_value" id="AIbot_get_ultrasonic_sensor_param_value">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">ultrasonic</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">distance</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_update_ultrasonic_sensor_state" id="AIbot_update_ultrasonic_sensor_state">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">ultrasonic</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">distance</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_response_ultrasonic_sensor_result" id="AIbot_response_ultrasonic_sensor_result">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">ultrasonic</field>
            </shadow>
        </value>
    </block>

    <block type="ultrasonic_sensor_read" id="ultrasonic_sensor_read">
        <field name="trig_pin">20</field>
        <field name="echo_pin">19</field>
    </block>

</category>
`;
}

exports = addToolbox;