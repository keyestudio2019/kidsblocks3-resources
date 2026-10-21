/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const QH_WEB_ICO = 'asset/web_editor_pro.svg';
    return `
<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#FF4500">
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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#800000" secondaryColour="#800000">
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

<category name="%{BKY_MECHANICAL_ARM_CONFIG_CATEGORY}" id="MECHANICAL_ARM_CONFIG_CATEGORY" colour="#607D8B" secondaryColour="#455A64">
    <label text="%{BKY_MECHANICAL_ARM_STANDARD_SETUP_HINT}"></label>
    <block type="mechanical_arm_init" id="mechanical_arm_init">
        <value name="BASE_PIN"><shadow type="math_number"><field name="NUM">16</field></shadow></value>
        <value name="LEFT_PIN"><shadow type="math_number"><field name="NUM">17</field></shadow></value>
        <value name="RIGHT_PIN"><shadow type="math_number"><field name="NUM">4</field></shadow></value>
        <value name="GRIPPER_PIN"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
    </block>
</category>

<category name="%{BKY_MECHANICAL_ARM_CONTROL_CATEGORY}" id="MECHANICAL_ARM_CONTROL_CATEGORY" colour="#6E56CF" secondaryColour="#5946A8">
    <block type="mechanical_arm_move_joint" id="mechanical_arm_move_joint">
        <value name="ANGLE"><shadow type="math_angle"><field name="NUM">90</field></shadow></value>
    </block>
    <block type="mechanical_arm_gripper_simple" id="mechanical_arm_gripper_simple"></block>
    <block type="mechanical_arm_home_simple" id="mechanical_arm_home_simple"></block>
    <block type="mechanical_arm_get_joint_angle" id="mechanical_arm_get_joint_angle"></block>
</category>

<category name="%{BKY_MECHANICAL_ARM_POSE_CATEGORY}" id="MECHANICAL_ARM_POSE_CATEGORY" colour="#9966FF" secondaryColour="#774DCB">
    <block type="mechanical_arm_move_pose" id="mechanical_arm_move_pose">
        <value name="BASE"><shadow type="math_angle"><field name="NUM">90</field></shadow></value>
        <value name="LEFT"><shadow type="math_angle"><field name="NUM">60</field></shadow></value>
        <value name="RIGHT"><shadow type="math_angle"><field name="NUM">130</field></shadow></value>
        <value name="GRIPPER"><shadow type="math_angle"><field name="NUM">0</field></shadow></value>
    </block>
    <block type="mechanical_arm_record_pose" id="mechanical_arm_record_pose"></block>
    <block type="mechanical_arm_play_recorded_poses_simple" id="mechanical_arm_play_recorded_poses_simple"></block>
    <block type="mechanical_arm_clear_recorded_poses" id="mechanical_arm_clear_recorded_poses"></block>
    <block type="mechanical_arm_recorded_pose_count" id="mechanical_arm_recorded_pose_count"></block>
</category>

<category name="%{BKY_MECHANICAL_ARM_JOYSTICK_CATEGORY}" id="MECHANICAL_ARM_JOYSTICK_CATEGORY" colour="#4C97FF" secondaryColour="#3373CC">
    <block type="mechanical_arm_joystick_control" id="mechanical_arm_joystick_control">
        <value name="LEFT_X_PIN"><shadow type="math_number"><field name="NUM">33</field></shadow></value>
        <value name="LEFT_Y_PIN"><shadow type="math_number"><field name="NUM">32</field></shadow></value>
        <value name="LEFT_B_PIN"><shadow type="math_number"><field name="NUM">25</field></shadow></value>
        <value name="RIGHT_X_PIN"><shadow type="math_number"><field name="NUM">13</field></shadow></value>
        <value name="RIGHT_Y_PIN"><shadow type="math_number"><field name="NUM">15</field></shadow></value>
        <value name="RIGHT_B_PIN"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
    </block>
    <block type="mechanical_arm_joystick_axis" id="mechanical_arm_joystick_axis"></block>
    <block type="mechanical_arm_joystick_pressed" id="mechanical_arm_joystick_pressed"></block>
</category>

<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#FFA500" secondaryColour="#FFA500">
    <block type="wifi_init" id="wifi_init">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">ChinaNet_2.4G</field>
            </shadow>
        </value>
        <value name="PASSWD">
            <shadow type="text">
                <field name="TEXT">ChinaNet@233</field>
            </shadow>
        </value>
    </block>
    <block type="wifi_read_ip" id="wifi_read_ip"></block>
</category>

<category name="%{BKY_QH_WEB_PRO_CATEGORY}" id="QH_WEB_PRO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_WEB_ICO}">
    <block type="espdashpro_display_components">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">temperature</field>
            </shadow>
        </value>
        <value name="unit">
            <shadow type="text">
                <field name="TEXT">℃</field>
            </shadow>
        </value>
        <value name="value">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value> 
    </block>
    <block type="espdashpro_state_component">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">system status</field>
            </shadow>
        </value>
      <value name="value">
        <shadow type="text">
          <field name="TEXT">normal</field>
        </shadow>
      </value>  
    </block>
    <block type="espdashpro_update_chart">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">Temperature curve</field>
            </shadow>
        </value>
        <value name="abscissa">
            <shadow type="QH_variables_get">
                <value name="VAR">
                    <shadow type="text">
                        <field name="TEXT">mylistx</field>
                    </shadow>
                </value>
            </shadow>
        </value>
        <value name="ordinate">
            <shadow type="QH_variables_get">
                <value name="VAR">
                    <shadow type="text">
                        <field name="TEXT">mylisty</field>
                    </shadow>
                </value>
            </shadow>
        </value>
    </block>
    <block type="espdashpro_display_components1">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">Turn on the light in the bedroom</field>
            </shadow>
        </value>
        <value name="value">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
    </block>
    <block type="espdashpro_get_component_value">
        <value name="Label">
            <shadow type="text">
                <field name="TEXT">Turn on the light in the bedroom</field>
            </shadow>
        </value>
        <value name="topic">
            <shadow type="text">
                <field name="TEXT">text</field>
            </shadow>
        </value>
    </block>
    <block type="espdashpro_get_joystick_value">
      <value name="Label">
          <shadow type="text">
              <field name="TEXT">joystick</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_set_title">
      <value name="title">
          <shadow type="text">
              <field name="TEXT">keyes DIY robot</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_setting_permissions">
      <value name="name">
          <shadow type="text">
              <field name="TEXT">keyestudio</field>
          </shadow>
      </value>
      <value name="pass">
          <shadow type="text">
              <field name="TEXT">123456</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_add_page">
      <value name="page">
          <shadow type="text">
              <field name="TEXT">bedroom</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_add_statistics">
      <value name="Statistic">
          <shadow type="text">
              <field name="TEXT">author</field>
          </shadow>
      </value>
      <value name="Value">
          <shadow type="text">
              <field name="TEXT">keyes DIY robot</field>
          </shadow>
      </value>
    </block>
    <block type="espdashpro_set_component_page">
    </block>
</category>
`;
}

module.exports = addToolbox;
