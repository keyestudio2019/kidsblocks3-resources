/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */


function addGenerator (Blockly) {

    // ─────────────────────────────────────────────
    // 1. 按键读取 (SW1=D2, SW2=D7)
    //    引脚已通过上拉电阻接 VCC，按下为 LOW
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_button_read = function (block) {
        const pin = block.getFieldValue('BTN');

        Blockly.Arduino.setups_[`tdr_btn_${pin}`] = `pinMode(${pin}, INPUT_PULLUP);`;

        // 返回 (digitalRead(pin) == LOW) 表示按下时为 true
        return [`(digitalRead(${pin}) == LOW)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ─────────────────────────────────────────────
    // 2. 单色 LED 控制 (D12 / D13)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_led_set = function (block) {
        const pin = block.getFieldValue('LED');
        const state = block.getFieldValue('STATE');

        Blockly.Arduino.setups_[`tdr_led_${pin}`] = `pinMode(${pin}, OUTPUT);`;

        return `digitalWrite(${pin}, ${state});\n`;
    };

    // ─────────────────────────────────────────────
    // 3. RGB LED 控制 (R=D6, G=D9, B=D10)
    //    使用 analogWrite 实现 PWM 调色
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_rgb_set = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.setups_['tdr_rgb'] =
            'pinMode(6, OUTPUT);\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);';

        return `analogWrite(6, ${r});\nanalogWrite(9, ${g});\nanalogWrite(10, ${b});\n`;
    };

    // ─────────────────────────────────────────────
    // 4. DHT11 温湿度传感器 (D4)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_dht11_read = function (block) {
        const type = block.getFieldValue('TYPE');

        Blockly.Arduino.includes_['tdr_dht_lib'] = '#include <DHT.h>';
        Blockly.Arduino.definitions_['tdr_dht_def'] =
            '#define TDR_DHT_PIN 4\n#define TDR_DHT_TYPE DHT11\nDHT tdr_dht(TDR_DHT_PIN, TDR_DHT_TYPE);';
        Blockly.Arduino.setups_['tdr_dht_begin'] = 'tdr_dht.begin();';

        if (type === 'temperature') {
            return ['tdr_dht.readTemperature()', Blockly.Arduino.ORDER_ATOMIC];
        } else {
            return ['tdr_dht.readHumidity()', Blockly.Arduino.ORDER_ATOMIC];
        }
    };

    // ─────────────────────────────────────────────
    // 5. 旋转电位器读取 (A0) → 返回 0~1023
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_rotation_read = function (block) {
        return ['analogRead(A0)', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ─────────────────────────────────────────────
    // 6. 光敏传感器读取 (A1) → 返回 0~1023
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_light_read = function (block) {
        return ['analogRead(A1)', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ─────────────────────────────────────────────
    // 7. LM35 温度传感器读取 (A2)
    //    公式: 温度(°C) = (analogRead(A2) * 5.0 / 1024.0) * 100.0
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_lm35_read = function (block) {
        Blockly.Arduino.definitions_['tdr_lm35_func'] =
            'float tdr_lm35_read() {\n' +
            '  return (analogRead(A2) * 5.0 / 1024.0) * 100.0;\n' +
            '}';

        return ['tdr_lm35_read()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ─────────────────────────────────────────────
    // 8. 蜂鸣器 - 播放音调 (D8)
    //    tone(pin, frequency, duration_ms)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_buzzer_tone = function (block) {
        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC) || '440';
        const dur  = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '500';

        Blockly.Arduino.setups_['tdr_buzzer'] = 'pinMode(8, OUTPUT);';

        return `tone(8, ${freq}, ${dur});\ndelay(${dur});\n`;
    };

    // ─────────────────────────────────────────────
    // 9. 蜂鸣器 - 停止 (D8)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_buzzer_stop = function (block) {
        return 'noTone(8);\n';
    };

    // ─────────────────────────────────────────────
    // 10. 蜂鸣器 - 播放预设音乐 (D8)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_buzzer_music = function (block) {
        const song = block.getFieldValue('SONG');

        Blockly.Arduino.setups_['tdr_buzzer'] = 'pinMode(8, OUTPUT);';

        // 内联简单旋律定义（音符频率数组）
        Blockly.Arduino.definitions_['tdr_music_notes'] =
            '// 音符频率定义\n' +
            '#define NOTE_C4  262\n' +
            '#define NOTE_D4  294\n' +
            '#define NOTE_E4  330\n' +
            '#define NOTE_F4  349\n' +
            '#define NOTE_G4  392\n' +
            '#define NOTE_A4  440\n' +
            '#define NOTE_B4  494\n' +
            '#define NOTE_C5  523\n' +
            '#define NOTE_G5  784\n' +
            '#define NOTE_REST 0\n';

        if (song === 'BIRTHDAY') {
            Blockly.Arduino.definitions_['tdr_song_birthday'] =
                'void tdr_play_birthday() {\n' +
                '  int notes[] = {NOTE_C4,NOTE_C4,NOTE_D4,NOTE_C4,NOTE_F4,NOTE_E4,\n' +
                '                 NOTE_C4,NOTE_C4,NOTE_D4,NOTE_C4,NOTE_G4,NOTE_F4,\n' +
                '                 NOTE_C4,NOTE_C4,NOTE_C5,NOTE_A4,NOTE_F4,NOTE_E4,NOTE_D4,\n' +
                '                 NOTE_B4,NOTE_B4,NOTE_A4,NOTE_F4,NOTE_G4,NOTE_F4};\n' +
                '  int durs[]  = {200,200,400,400,400,800,\n' +
                '                 200,200,400,400,400,800,\n' +
                '                 200,200,400,400,400,400,800,\n' +
                '                 200,200,400,400,400,800};\n' +
                '  for(int i=0;i<25;i++){tone(8,notes[i],durs[i]);delay(durs[i]+50);}\n' +
                '  noTone(8);\n' +
                '}';
            return 'tdr_play_birthday();\n';
        } else if (song === 'JINGLE') {
            Blockly.Arduino.definitions_['tdr_song_jingle'] =
                'void tdr_play_jingle() {\n' +
                '  int notes[] = {NOTE_E4,NOTE_E4,NOTE_E4,NOTE_E4,NOTE_E4,NOTE_E4,\n' +
                '                 NOTE_E4,NOTE_G4,NOTE_C4,NOTE_D4,NOTE_E4,\n' +
                '                 NOTE_F4,NOTE_F4,NOTE_F4,NOTE_F4,NOTE_F4,NOTE_E4,NOTE_E4,\n' +
                '                 NOTE_E4,NOTE_D4,NOTE_D4,NOTE_E4,NOTE_D4,NOTE_G4};\n' +
                '  int durs[]  = {200,200,400,200,200,400,\n' +
                '                 200,200,200,200,800,\n' +
                '                 200,200,200,200,200,200,100,\n' +
                '                 100,200,200,200,200,800};\n' +
                '  for(int i=0;i<25;i++){tone(8,notes[i],durs[i]);delay(durs[i]+50);}\n' +
                '  noTone(8);\n' +
                '}';
            return 'tdr_play_jingle();\n';
        } else { // MARIO
            Blockly.Arduino.definitions_['tdr_song_mario'] =
                'void tdr_play_mario() {\n' +
                '  int notes[] = {NOTE_E4,NOTE_E4,NOTE_REST,NOTE_E4,NOTE_REST,NOTE_C4,NOTE_E4,\n' +
                '                 NOTE_G4,NOTE_REST,NOTE_G4};\n' +
                '  int durs[]  = {150,150,150,150,150,150,300,\n' +
                '                 300,300,300};\n' +
                '  for(int i=0;i<10;i++){if(notes[i]==NOTE_REST){noTone(8);}else{tone(8,notes[i],durs[i]);}delay(durs[i]+50);}\n' +
                '  noTone(8);\n' +
                '}';
            return 'tdr_play_mario();\n';
        }
    };

    // ─────────────────────────────────────────────
    // 11. 红外接收 - 是否收到信号 (D11)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_ir_received = function (block) {
        Blockly.Arduino.includes_['tdr_ir_lib'] = '#include <IRremote.hpp>';
        Blockly.Arduino.definitions_['tdr_ir_def'] =
            'IRrecv tdr_irrecv(11);\nIRRawDataType tdr_ir_data = 0;';
        Blockly.Arduino.setups_['tdr_ir_begin'] = 'tdr_irrecv.enableIRIn();';

        // 辅助函数：每次调用时尝试接收，成功则缓存值
        Blockly.Arduino.definitions_['tdr_ir_func'] =
            'bool tdr_ir_received_check() {\n' +
            '  if (tdr_irrecv.decode()) {\n' +
            '    tdr_ir_data = tdr_irrecv.decodedIRData.decodedRawData;\n' +
            '    tdr_irrecv.resume();\n' +
            '    return true;\n' +
            '  }\n' +
            '  return false;\n' +
            '}';

        return ['tdr_ir_received_check()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ─────────────────────────────────────────────
    // 12. 红外接收 - 读取最后收到的键值 (D11)
    // ─────────────────────────────────────────────
    Blockly.Arduino.tdr_ir_read_value = function (block) {
        Blockly.Arduino.includes_['tdr_ir_lib'] = '#include <IRremote.hpp>';
        Blockly.Arduino.definitions_['tdr_ir_def'] =
            'IRrecv tdr_irrecv(11);\nIRRawDataType tdr_ir_data = 0;';
        Blockly.Arduino.setups_['tdr_ir_begin'] = 'tdr_irrecv.enableIRIn();';

        return ['tdr_ir_data', Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
