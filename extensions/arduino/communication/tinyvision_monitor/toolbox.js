/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TINYVISION_MONITOR_CATEGORY}" id="tinyvision_monitor_category" colour="#2D8CFF" secondaryColour="#1976D2">
    <block type="tinyvision_monitor_camera_init" />
    <block type="tinyvision_monitor_tft_init" />
    <block type="tinyvision_monitor_wifi">
        <value name="ssid"><shadow type="text"><field name="TEXT">MySSID</field></shadow></value>
        <value name="password"><shadow type="text"><field name="TEXT">MyPassword</field></shadow></value>
    </block>
    <block type="tinyvision_monitor_start_server" />
</category>`;
}
exports = addToolbox;
