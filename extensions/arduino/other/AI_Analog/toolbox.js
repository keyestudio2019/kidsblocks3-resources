function addToolbox() {
    return `

<category name="%{BKY_AI_ANALOG_SENSOR_CATEGORY}" id="AI_ANALOG_SENSOR_CATEGORY" colour="#4CAF50" secondaryColour="#66BB6A">

    <block type="AIbot_register_mcp_analog_sensor_service" id="AIbot_register_mcp_analog_sensor_service">
        <value name="SERVICE_NAME">
            <shadow type="text">
                <field name="TEXT">light</field>
            </shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">light sensor, read analog value</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">value</field>
            </shadow>
        </value>
        <field name="PARAM_TYPE">Number</field>
    </block>

    <block type="AIbot_get_analog_sensor_mcp_name" id="AIbot_get_analog_sensor_mcp_name">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">light</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_get_analog_sensor_param_value" id="AIbot_get_analog_sensor_param_value">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">light</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">value</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_update_analog_sensor_state" id="AIbot_update_analog_sensor_state">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">light</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">value</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_response_analog_sensor_result" id="AIbot_response_analog_sensor_result">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">light</field>
            </shadow>
        </value>
    </block>

    <block type="analog_sensor_read" id="analog_sensor_read">
        <field name="pin">1</field>
    </block>

</category>
`;
}

exports = addToolbox;