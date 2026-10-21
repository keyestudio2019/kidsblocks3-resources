/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function addToolbox () {

    // 生成纯色圆形图标（颜色与积木块一致）
    function makeIconUri (color) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
  <circle cx="45" cy="45" r="45" fill="${color}"/>
</svg>`;
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }

    const iconButton = makeIconUri('#2E7D32');   // 深绿 — 按键
    const iconLED    = makeIconUri('#FB8C00');   // 橙色 — LED
    const iconRGB    = makeIconUri('#FB8C00');   // 橙色 — RGB
    const iconBuzzer = makeIconUri('#FB8C00');   // 橙色 — 蜂鸣器
    const iconDHT11  = makeIconUri('#00897B');   // 青绿 — DHT11
    const iconKnob   = makeIconUri('#1565C0');   // 深蓝 — 电位器
    const iconLight  = makeIconUri('#1565C0');   // 深蓝 — 光敏
    const iconLM35   = makeIconUri('#1565C0');   // 深蓝 — LM35
    const iconIR     = makeIconUri('#6A1B9A');   // 深紫 — 红外

    return `
<!-- ═══════════════════════════════════════════════════════════
     IMAGINA TdR STEAM V2.0 插件工具箱
     每个模块独立分类，颜色与积木块保持一致
     ═══════════════════════════════════════════════════════════ -->

<!-- ① 单色 LED — 橙色 #FB8C00 -->
<category name="%{BKY_TDR_CAT_LED}" id="TDR_CAT_LED"
          colour="#FB8C00" secondaryColour="#E65100"
          iconURI="${iconLED}">
    <block type="tdr_led_set" id="tdr_led_red_on">
        <field name="LED">12</field>
        <field name="STATE">HIGH</field>
    </block>
</category>

<!-- ③ RGB LED — 橙色 #FB8C00 -->
<category name="%{BKY_TDR_CAT_RGB}" id="TDR_CAT_RGB"
          colour="#FB8C00" secondaryColour="#E65100"
          iconURI="${iconRGB}">
    <block type="tdr_rgb_set" id="tdr_rgb_red">
        <value name="R">
            <shadow type="math_number"><field name="NUM">255</field></shadow>
        </value>
        <value name="G">
            <shadow type="math_number"><field name="NUM">0</field></shadow>
        </value>
        <value name="B">
            <shadow type="math_number"><field name="NUM">0</field></shadow>
        </value>
    </block>
</category>

<!-- ④ 蜂鸣器 — 橙色 #FB8C00 -->
<category name="%{BKY_TDR_CAT_BUZZER}" id="TDR_CAT_BUZZER"
          colour="#FB8C00" secondaryColour="#E65100"
          iconURI="${iconBuzzer}">
    <block type="tdr_buzzer_tone" id="tdr_buzzer_tone">
        <value name="FREQ">
            <shadow type="math_number"><field name="NUM">440</field></shadow>
        </value>
        <value name="DURATION">
            <shadow type="math_number"><field name="NUM">500</field></shadow>
        </value>
    </block>
    <block type="tdr_buzzer_stop" id="tdr_buzzer_stop">
    </block>
    <block type="tdr_buzzer_music" id="tdr_buzzer_birthday">
        <field name="SONG">BIRTHDAY</field>
    </block>
</category>

<!-- ⑤ 按键 — 深绿色 #2E7D32 -->
<category name="%{BKY_TDR_CAT_BUTTON}" id="TDR_CAT_BUTTON"
          colour="#2E7D32" secondaryColour="#1B5E20"
          iconURI="${iconButton}">
    <block type="tdr_button_read" id="tdr_button_sw1">
        <field name="BTN">2</field>
    </block>
</category>

<!-- ⑥ DHT11 温湿度传感器 — 青绿色 #00897B -->
<category name="%{BKY_TDR_CAT_DHT11}" id="TDR_CAT_DHT11"
          colour="#00897B" secondaryColour="#004D40"
          iconURI="${iconDHT11}">
    <block type="tdr_dht11_read" id="tdr_dht11_temp">
        <field name="TYPE">temperature</field>
    </block>
    <block type="tdr_dht11_read" id="tdr_dht11_humi">
        <field name="TYPE">humidity</field>
    </block>
</category>

<!-- ⑤ 旋转电位器 — 靛蓝色 #3949AB -->
<category name="%{BKY_TDR_CAT_ROTATION}" id="TDR_CAT_ROTATION"
          colour="#3949AB" secondaryColour="#1A237E"
          iconURI="${iconKnob}">
    <block type="tdr_rotation_read" id="tdr_rotation_read">
    </block>
</category>

<!-- ⑥ 光敏传感器 — 琥珀色 #F9A825 -->
<category name="%{BKY_TDR_CAT_LIGHT}" id="TDR_CAT_LIGHT"
          colour="#F9A825" secondaryColour="#E65100"
          iconURI="${iconLight}">
    <block type="tdr_light_read" id="tdr_light_read">
    </block>
</category>

<!-- ⑦ LM35 温度传感器 — 玫红色 #E91E63 -->
<category name="%{BKY_TDR_CAT_LM35}" id="TDR_CAT_LM35"
          colour="#E91E63" secondaryColour="#880E4F"
          iconURI="${iconLM35}">
    <block type="tdr_lm35_read" id="tdr_lm35_read">
    </block>
</category>

<!-- ⑧ 红外接收器 — 棕色 #6D4C41 -->
<category name="%{BKY_TDR_CAT_IR}" id="TDR_CAT_IR"
          colour="#6D4C41" secondaryColour="#3E2723"
          iconURI="${iconIR}">
    <block type="tdr_ir_received" id="tdr_ir_received">
    </block>
    <block type="tdr_ir_read_value" id="tdr_ir_read_value">
    </block>
</category>
`;
}

exports = addToolbox;
