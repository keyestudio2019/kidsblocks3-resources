/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ESP32CAM_CATEGORY}" id="esp32cam_category" colour="#2196F3" secondaryColour="#1976D2">
    <label text="%{BKY_ESP32CAM_LABEL_CAMERA}" />
    <block type="esp32cam_init">
        <field name="model">CAMERA_MODEL_AI_THINKER</field>
        <field name="resolution">FRAMESIZE_QVGA</field>
    </block>
    <block type="esp32cam_wifi">
        <value name="ssid">
            <shadow type="text"><field name="TEXT">MySSID</field></shadow>
        </value>
        <value name="password">
            <shadow type="text"><field name="TEXT">MyPassword</field></shadow>
        </value>
    </block>
    <block type="esp32cam_start_server" />
    <block type="esp32cam_set_param">
        <field name="param">vflip</field>
        <value name="value">
            <shadow type="math_number"><field name="NUM">0</field></shadow>
        </value>
    </block>
    <sep gap="36" />
    <label text="%{BKY_ESP32CAM_LABEL_SERIAL}" />
    <block type="esp32cam_serial_cam" />
    <block type="esp32cam_serial_gpio">
        <field name="gpio">4</field>
        <field name="trigchar">a</field>
    </block>
</category>`;
}
exports = addToolbox;
