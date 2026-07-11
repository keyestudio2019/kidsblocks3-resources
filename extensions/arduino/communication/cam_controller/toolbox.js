/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox (Blockly) {
    return `
<category name="%{BKY_CAMCTRL_CATEGORY}" id="camController" colour="#FF6B35" secondaryColour="#CC4A10">
    <block type="camctrl_serial_init" id="camctrl_serial_init"></block>
    <block type="camctrl_button_init" id="camctrl_button_init"></block>
    <block type="camctrl_button_toggle" id="camctrl_button_toggle"></block>
    <block type="camctrl_button_send" id="camctrl_button_send"></block>
    <block type="camctrl_send_cmd" id="camctrl_send_cmd"></block>
    <block type="camctrl_read_serial" id="camctrl_read_serial"></block>
</category>`;
}
exports = addToolbox;
