/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function addToolbox() {
    return `
<category name="%{BKY_AI_BUZZER_CATEGORY}" id="AI_BUZZER_CATEGORY" colour="#4CAF50" secondaryColour="#42CCFF">
    <block type="AIbot_register_mcp_buzzer_service" id="AIbot_register_mcp_buzzer_service">
        <value name="SERVICE_NAME">
            <shadow type="text"><field name="TEXT">buzzer</field></shadow>
        </value>
        <value name="DESCRIPTION">
            <shadow type="text"><field name="TEXT">Passive buzzer control: play tone, stop tone, or play built-in music</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">command</field></shadow>
        </value>
        <field name="PARAM_TYPE">String</field>
    </block>

    <block type="AIbot_get_mcp_message_event_name_buzzer" id="AIbot_get_mcp_message_event_name_buzzer">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">buzzer</field></shadow>
        </value>
    </block>

    <block type="AIbot_control_message_event_buzzer" id="AIbot_control_message_event_buzzer">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">buzzer</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">command</field></shadow>
        </value>
        <field name="PARAM_TYPE">String</field>
    </block>

    <block type="AIbot_update_mcp_control_state_buzzer" id="AIbot_update_mcp_control_state_buzzer">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">buzzer</field></shadow>
        </value>
        <value name="PARAM_NAME">
            <shadow type="text"><field name="TEXT">command</field></shadow>
        </value>
        <field name="COMMAND">play_tone</field>
    </block>

    <block type="AIbot_response_mcp_control_result_buzzer" id="AIbot_response_mcp_control_result_buzzer">
        <value name="MCP_NAME">
            <shadow type="text"><field name="TEXT">buzzer</field></shadow>
        </value>
    </block>

    <block type="buzzer_init" id="buzzer_init">
        <value name="PIN">
            <shadow type="math_number"><field name="NUM">2</field></shadow>
        </value>
    </block>

    <block type="buzzer_play_tone" id="buzzer_play_tone">
        <value name="PIN">
            <shadow type="math_number"><field name="NUM">2</field></shadow>
        </value>
        <value name="FREQUENCY">
            <shadow type="math_number"><field name="NUM">440</field></shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_number"><field name="NUM">500</field></shadow>
        </value>
    </block>

    <block type="buzzer_stop_tone" id="buzzer_stop_tone">
        <value name="PIN">
            <shadow type="math_number"><field name="NUM">2</field></shadow>
        </value>
    </block>

    <block type="buzzer_play_music" id="buzzer_play_music">
        <field name="MUSIC">birthday</field>
        <value name="PIN">
            <shadow type="math_number"><field name="NUM">2</field></shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
