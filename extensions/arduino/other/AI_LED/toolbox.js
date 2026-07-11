function addToolbox() {
    return `
<category name="%{BKY_AI_LED_CATEGORY}" id="AI_LED_CATEGORY" colour="#f08080" secondaryColour="#42CCFF">

    <block type="AIbot_register_mcp_led_service" id="AIbot_register_mcp_led_service">
        <value name="SERVICE_NAME">
            <shadow type="text">
                <field name="TEXT">led</field>
            </shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">LED, true for on, false for off</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">state</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_get_mcp_message_event_name_led" id="AIbot_get_mcp_message_event_name_led">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">led</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_control_message_event_led" id="AIbot_control_message_event_led">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">led</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">state</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_update_mcp_control_state_led" id="AIbot_update_mcp_control_state_led">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">led</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">state</field>
            </shadow>
        </value>
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">done</field>
            </shadow>
        </value>
    </block>

    <block type="AIbot_response_mcp_control_result_led" id="AIbot_response_mcp_control_result_led">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">led</field>
            </shadow>
        </value>
    </block>

    <block type="LED_setLEDState" id="LED_setLEDState">
    <field name="pin">1</field>
    </block>

</category>
`;
}

exports = addToolbox;