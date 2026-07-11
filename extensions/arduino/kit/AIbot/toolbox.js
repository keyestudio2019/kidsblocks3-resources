/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox() {

    return `
    <category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#42CCFF">
    <block type="KS_variables_declare">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_get_bool">
    <value name="VAR">
        <shadow type="text">
            <field name="TEXT">item</field>
        </shadow>
    </value>
</block>
    <block type="KS_variables_set">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_change">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>

    <block type="KS_variables_stringSet">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    </category>

    <category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#41be8a" secondaryColour="#42CCFF">
    <block type="KS_CHAR">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
    </block>

    <block type="KS_STRING">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="KS_data">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">123</field>
            </shadow>
        </value>
    </block>
    
    </category>

    <category name="%{BKY_KS_TIME_LABEL}" id="KS_TIME_LABEL" colour="#41be8a" secondaryColour="#41be8a">
        <block type="KS_millis">
        </block>
        <block type="KS_micros">
        </block>
    </category>
    <!-- 初始化分类 -->
    <category name="%{BKY_AIBOT_CATEGORY_INIT}" id="AIBOT_INIT_CATEGORY" colour="#4CAF50" secondaryColour="#42CCFF">
        <block type="AIbot_init_wifi" id="AIbot_init_wifi">
        </block>
        <block type="AIbot_init_mic" id="AIbot_init_mic">
        <field name="MIC_BCLK">5</field>
        <field name="MIC_WS">4</field>
        <field name="MIC_DIN">6</field>
        </block>
        <block type="AIbot_init_audio" id="AIbot_init_audio">
        <field name="SPK_BCLK">15</field>
        <field name="SPK_WS">16</field>
        <field name="SPK_DOUT">7</field>
        </block>
        <block type="AIbot_init_lcd" id="AIbot_init_lcd">
        <field name="backLight">42</field>
        <field name="MOSI">47</field>
        <field name="CLK">21</field>
        <field name="DC">40</field>
        <field name="RST">45</field>
        <field name="CS">41</field>
        </block>
        <block type="AIbot_init_oled" id="AIbot_init_oled">
            <field name="SDA">8</field>
            <field name="SCL">9</field>
        </block>
        <block type="AIbot_config_websocket" id="AIbot_config_websocket">
             <field name="BACKEND">KEYES</field>
        </block>
        <block type="AIbot_start_engine" id="AIbot_start_engine">
        <value name="AIbot_volume">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        </block>
    </category>

    <!-- 事件分类 -->
    <category name="%{BKY_AIBOT_CATEGORY_EVENT}" id="AIBOT_EVENT_CATEGORY" colour="#FF9800" secondaryColour="#42CCFF">
        <block type="AIbot_loop_state_change" id="AIbot_loop_state_change">
            <field name="chat_state">Idle</field>
        </block>
        <block type="AIbot_lcd_show_status" id="AIbot_lcd_show_status">
            <field name="location">ShowStatus</field>
            <value name="AIbot_content">
                <shadow type="text">
                    <field name="TEXT">loading...</field>
                </shadow>
            </value>
        </block>
        <block type="AIbot_oled_show_status" id="AIbot_oled_show_status">
            <field name="location">ShowStatus</field>
            <value name="AIbot_content">
                <shadow type="text">
                    <field name="TEXT">loading...</field>
                </shadow>
            </value>
        </block>
        <block type="AIbot_loop_activation" id="AIbot_loop_activation"></block>

        <block type="get_AIbot_activation_message" id="get_AIbot_activation_message">
            <field name="activation_type">message</field>
        </block>

        <block type="AIbot_loop_emotion" id="AIbot_loop_emotion"></block>
        <block type="get_AIbot_emotion_result" id="get_AIbot_emotion_result"></block>

        <block type="AIbot_emotion" id="AIbot_emotion">
            <field name="emotion">happy</field>
        </block>

        <block type="AIbot_emotion_list" id="AIbot_emotion_list">
            <field name="emotion">happy</field>
        </block>

        <block type="AIbot_loop_chat_message" id="AIbot_loop_chat_message"></block>
        <block type="AIbot_loop_chat_message_role_var" id="AIbot_loop_chat_message_role_var">
            <field name="chat_role">user</field>
        </block>
        <block type="AIbot_loop_chat_message_msg_var" id="AIbot_loop_chat_message_msg_var"></block>
        <block type="AIbot_loop_mcp" id="AIbot_loop_mcp"></block>

    </category>

    `;
}

exports = addToolbox;