/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TINYVISION_CTRL_CATEGORY}" id="tinyvision_controller_category" colour="#4C97FF" secondaryColour="#4C97FF">
    <block type="tinyvision_ctrl_init">
        <field name="rx">10</field>
        <field name="tx">11</field>
    </block>
    <block type="tinyvision_ctrl_read" />
    <block type="tinyvision_ctrl_received"><field name="cmd">F</field></block>
</category>`;
}
exports = addToolbox;
