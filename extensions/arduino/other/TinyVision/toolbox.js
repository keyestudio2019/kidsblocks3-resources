/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TINYVISION_CATEGORY}" id="TINYVISION_CATEGORY" colour="#4285F4" secondaryColour="#3367D6" iconURI="">
    <block type="tinyvision_init" id="tinyvision_init">
        <field name="RX">2</field>
        <field name="TX">3</field>
        <field name="BAUD">115200</field>
    </block>
    <block type="tinyvision_set_mode" id="tinyvision_set_mode">
        <field name="MODE">face</field>
    </block>
    <block type="tinyvision_read_serial" id="tinyvision_read_serial">
    </block>
    <block type="tinyvision_is_face_valid" id="tinyvision_is_face_valid">
    </block>
    <block type="tinyvision_get_face_coord" id="tinyvision_get_face_coord">
        <field name="COORD">X</field>
    </block>
    <block type="tinyvision_get_color" id="tinyvision_get_color">
    </block>
    <block type="tinyvision_is_color" id="tinyvision_is_color">
        <field name="COLOR">RED</field>
    </block>
    <block type="tinyvision_get_qrcode" id="tinyvision_get_qrcode">
    </block>
    <block type="tinyvision_get_card" id="tinyvision_get_card">
    </block>
    <block type="tinyvision_is_card" id="tinyvision_is_card">
        <field name="CARD">STRAIGHT</field>
    </block>
</category>    `;
}
exports = addToolbox;
