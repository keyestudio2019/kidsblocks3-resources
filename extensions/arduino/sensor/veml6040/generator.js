/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    // ── 公共依赖注入（每个 generator 函数都可调用）────────────────
    // 使用固定 key，保证多次调用只写入一次（Blockly 去重机制）
    function _injectDeps () {
        Blockly.Arduino.includes_.include_Wire     = '#include <Wire.h>\n';
        Blockly.Arduino.includes_.include_veml6040 = '#include <veml6040.h>\n';
        Blockly.Arduino.definitions_.veml6040_obj  = 'VEML6040 RGBWSensor;\n';
    }

    // ════════════════════════════════════════════════════════════
    // Block 1: veml6040_init  →  语句块，放在 setup() 里
    //
    // 生成代码示意：
    //   setup() {
    //     if(!RGBWSensor.begin()) { ... while(1); }
    //     RGBWSensor.setConfiguration(VEML6040_IT_80MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);
    //   }
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_init = function (block) {
        _injectDeps();
        Blockly.Arduino.setups_['veml6040_begin'] =
            'if(!RGBWSensor.begin()) {\n' +
            '  Serial.println("VEML6040 not found!");\n' +
            '  while(1);\n' +
            '}\n' +
            'RGBWSensor.setConfiguration(VEML6040_IT_80MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);\n';
        return '';   // 语句块，不返回表达式
    };

    // ════════════════════════════════════════════════════════════
    // Block 2: veml6040_read_raw  →  数值块，读取原始通道值
    //
    // 下拉框 value 直接就是 Arduino 函数调用（策略 A）：
    //   'R' → RGBWSensor.getRed()
    //   'G' → RGBWSensor.getGreen()
    //   'B' → RGBWSensor.getBlue()
    //   'W' → RGBWSensor.getWhite()
    //
    // 生成代码示意（嵌入 Serial.print）：
    //   Serial.print(RGBWSensor.getRed());
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_read_raw = function (block) {
        _injectDeps();
        const channel = block.getFieldValue('channel');
        // channel 已经是完整的函数调用字符串，直接返回
        return [channel, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ════════════════════════════════════════════════════════════
    // Block 3: veml6040_update_rgb888  →  语句块
    //
    // 对应 KD2115.ino 中：
    //   int r = RGBWSensor.getRed();
    //   int g = RGBWSensor.getGreen();
    //   int b = RGBWSensor.getBlue();
    //   RGBWSensor.GETRGB888(r, g, b);
    //
    // 调用后，RGBWSensor.R / .G / .B 被更新为 0-255 的归一化值
    // 用户必须先拖此块，再使用 veml6040_read_rgb888 块读取分量
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_update_rgb888 = function (block) {
        _injectDeps();
        return (
            'int veml_r = RGBWSensor.getRed();\n' +
            'int veml_g = RGBWSensor.getGreen();\n' +
            'int veml_b = RGBWSensor.getBlue();\n' +
            'RGBWSensor.GETRGB888(veml_r, veml_g, veml_b);\n'
        );
    };

    // ════════════════════════════════════════════════════════════
    // Block 4: veml6040_read_rgb888  →  数值块，读取归一化分量
    //
    // 下拉框 value 直接就是成员变量名（策略 A）：
    //   'R' → RGBWSensor.R
    //   'G' → RGBWSensor.G
    //   'B' → RGBWSensor.B
    //
    // 生成代码示意（嵌入 Serial.print）：
    //   Serial.print(RGBWSensor.R);
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_read_rgb888 = function (block) {
        _injectDeps();
        const component = block.getFieldValue('component');
        return [component, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ════════════════════════════════════════════════════════════
    // Block 5: veml6040_get_cct  →  数值块，读取色温
    //
    // 生成代码示意：
    //   Serial.print(RGBWSensor.getCCT());
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_get_cct = function (block) {
        _injectDeps();
        return ['RGBWSensor.getCCT()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ════════════════════════════════════════════════════════════
    // Block 6: veml6040_get_ambient  →  数值块，读取环境光照度
    //
    // 生成代码示意：
    //   Serial.print(RGBWSensor.getAmbientLight());
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_get_ambient = function (block) {
        _injectDeps();
        return ['RGBWSensor.getAmbientLight()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ════════════════════════════════════════════════════════════
    // Block 7: veml6040_led_init  →  语句块，初始化 LED 引脚
    //
    // 生成代码示意（放在 setup()）：
    //   #define LED_Pin 2
    //   pinMode(LED_Pin, OUTPUT);
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_led_init = function (block) {
        // 从下拉框获取用户选择的引脚字符串（如 '2', '3', 'A0' 等）
        const pin = block.getFieldValue('pin');
        // 用全局变量存储引脚号，方便 LED_set 块引用
        Blockly.Arduino.definitions_['veml6040_led_pin'] =
            `byte LED_Pin = ${pin};\n`;
        Blockly.Arduino.setups_['veml6040_led_pinmode'] =
            'pinMode(LED_Pin, OUTPUT);\n';
        return '';
    };

    // ════════════════════════════════════════════════════════════
    // Block 8: veml6040_led_set  →  语句块，控制 LED 开/关
    //
    // 下拉框 value 直接是 HIGH / LOW
    //
    // 生成代码示意：
    //   digitalWrite(LED_Pin, HIGH);   // 开灯
    //   digitalWrite(LED_Pin, LOW);    // 关灯
    // ════════════════════════════════════════════════════════════
    Blockly.Arduino.veml6040_led_set = function (block) {
        const state = block.getFieldValue('state'); // 'HIGH' 或 'LOW'
        return `digitalWrite(LED_Pin, ${state});\n`;
    };

    return Blockly;
}
exports = addGenerator;
