/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    // 与 blocks.js 中保持一致的图标 URL
    const veml6040IconUrl = 'data:image/svg+xml;base64,' + btoa(`<svg viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle cx="13" cy="13" r="11" fill="none" stroke="#ffffff" stroke-width="2"/>
  <path d="M13 2 A11 11 0 0 1 24 13" stroke="#FF4444" stroke-width="3" fill="none"/>
  <path d="M24 13 A11 11 0 0 1 13 24" stroke="#44FF44" stroke-width="3" fill="none"/>
  <path d="M13 24 A11 11 0 0 1 2 13" stroke="#4444FF" stroke-width="3" fill="none"/>
  <path d="M2 13 A11 11 0 0 1 13 2" stroke="#FFFFFF" stroke-width="3" fill="none"/>
  <circle cx="13" cy="13" r="3" fill="#ffffff"/>
</svg>`);

    return `
<category name="%{BKY_VEML6040_CATEGORY}" id="VEML6040_CATEGORY" colour="#FF6B6B" secondaryColour="#CC4444" iconURI="${veml6040IconUrl}">
    <block type="veml6040_init" id="veml6040_init">
    </block>
    <block type="veml6040_read_raw" id="veml6040_read_raw">
    </block>
    <block type="veml6040_read_rgb888" id="veml6040_read_rgb888">
    </block>
    <block type="veml6040_get_cct" id="veml6040_get_cct">
    </block>
    <block type="veml6040_get_ambient" id="veml6040_get_ambient">
    </block>
    <block type="veml6040_led_init" id="veml6040_led_init">
    </block>
    <block type="veml6040_led_set" id="veml6040_led_set">
    </block>
</category>`;
}
exports = addToolbox;
