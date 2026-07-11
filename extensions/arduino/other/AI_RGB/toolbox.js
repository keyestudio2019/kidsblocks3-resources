function addToolbox() {
    return `
<category name="%{BKY_AI_WS2812_RGB_CATEGORY}" id="AI_WS2812_RGB_CATEGORY" colour="#FF9800" secondaryColour="#4C97FF">

    <block type="ws2812_rgb_control" id="ws2812_rgb_control">
        <field name="PIN">2</field>
        <value name="NUM_LEDS">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_register_mcp_ws2812_rgb_service" id="AIbot_register_mcp_ws2812_rgb_service">
        <value name="SERVICE_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text">
                <field name="TEXT">Control RGB LED brightness and effects: static, blink, breath, rainbow, flow, rainbow_cycle, color_wipe, theater_chase_rainbow.</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_get_ws2812_rgb_mcp_name" id="AIbot_get_ws2812_rgb_mcp_name">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_get_ws2812_rgb_param_value" id="AIbot_get_ws2812_rgb_param_value_brightness">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">brightness</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_get_ws2812_rgb_param_value" id="AIbot_get_ws2812_rgb_param_value_effect">
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">effect</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_update_ws2812_rgb_state" id="AIbot_update_ws2812_rgb_state_brightness">
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">brightness</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_update_ws2812_rgb_state" id="AIbot_update_ws2812_rgb_state_effect">
        <value name="PARAM_NAME">
            <shadow type="text">
                <field name="TEXT">effect</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT">static</field>
            </shadow>
        </value>
        <value name="MCP_NAME">
            <shadow type="text">
                <field name="TEXT">RGB</field>
            </shadow>
        </value>
    </block>
    <block type="AIbot_response_ws2812_rgb_result" id="AIbot_response_ws2812_rgb_result"></block>

</category>
`;
}

exports = addToolbox;