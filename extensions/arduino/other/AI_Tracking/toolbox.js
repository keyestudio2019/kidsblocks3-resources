/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function addToolbox() {
    return `
<category name="%{BKY_AI_TRACKING_CATEGORY}" id="AI_TRACKING_CATEGORY" colour="#4CAF50" secondaryColour="#42CCFF">
    <block type="AIbot_register_mcp_tracking_sensor_service" id="AIbot_register_mcp_tracking_sensor_service">
        <value name="SERVICE_NAME">
            <shadow type="text"><field name="TEXT">tracking</field></shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text"><field name="TEXT">I2C five-way line tracking sensor, return five values from left to right: 0 for black line and 1 for white surface</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">value</field></shadow>
        </value>
        <field name="PARAM_TYPE">String</field>
    </block>

    <block type="AIbot_get_tracking_sensor_mcp_name" id="AIbot_get_tracking_sensor_mcp_name">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">tracking</field></shadow>
        </value>
    </block>

    <block type="AIbot_get_tracking_sensor_param_value" id="AIbot_get_tracking_sensor_param_value">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">tracking</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">value</field></shadow>
        </value>
    </block>

    <block type="AIbot_update_tracking_sensor_state" id="AIbot_update_tracking_sensor_state">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">tracking</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">value</field></shadow>
        </value>
        <value name="VALUE">
            <block type="tracking_sensor_read_all"></block>
        </value>
    </block>

    <block type="AIbot_response_tracking_sensor_result" id="AIbot_response_tracking_sensor_result">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">tracking</field></shadow>
        </value>
    </block>

    <block type="tracking_sensor_init" id="tracking_sensor_init">
        <field name="ADDRESS">0x20</field>
        <value name="SDA">
            <shadow type="math_number"><field name="NUM">8</field></shadow>
        </value>
        <value name="SCL">
            <shadow type="math_number"><field name="NUM">9</field></shadow>
        </value>
    </block>

    <block type="tracking_sensor_read_all" id="tracking_sensor_read_all"></block>

    <block type="tracking_sensor_read" id="tracking_sensor_read">
        <field name="SENSOR">center</field>
    </block>

    <block type="tracking_sensor_detect" id="tracking_sensor_detect">
        <field name="SENSOR">center</field>
        <field name="STATE">0</field>
    </block>

    <block type="tracking_sensor_is_connected" id="tracking_sensor_is_connected"></block>
</category>`;
}

exports = addToolbox;
