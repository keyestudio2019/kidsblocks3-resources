/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {


    return `
<category name="%{BKY_KS_SERVO360_CATEGORY}" id="KS_SERVO360_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="ks_servo360_speed" id="ks_servo360_speed">
        <field name="pin">33</field>
        <field name="CH">0</field>
        <field name="DIRECTION">1</field>
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="ks_servo360_turn_angle" id="ks_servo360_turn_angle">
        <field name="pin">33</field>
        <field name="CH">0</field>
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="delay">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
