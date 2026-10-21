/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    const value = (block, name, fallback) =>
        Blockly.Arduino.valueToCode(block, name, Blockly.Arduino.ORDER_ATOMIC) || fallback;

    const setupPin = (pin, mode) => {
        Blockly.Arduino.setups_[`easyplug_pin_${pin}_${mode}`] = `pinMode(${pin}, ${mode});`;
    };

    // ── EASY Plug 主板与输出执行器 ─────────────────────────────
    Blockly.Arduino.easyplug_led_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const state = block.getFieldValue('STATE');
        setupPin(pin, 'OUTPUT');
        return `digitalWrite(${pin}, ${state});\n`;
    };

    Blockly.Arduino.easyplug_led_brightness = function (block) {
        const pin = block.getFieldValue('PIN');
        const val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`led_s`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'analogWrite('+pin+','+val+');\n';
    };

    Blockly.Arduino.easyplug_switch_module_set = function (block) {
        // 有源蜂鸣器和继电器均通过数字引脚的 HIGH / LOW 电平控制。
        const pin = block.getFieldValue('PIN');
        const state = block.getFieldValue('STATE');
        setupPin(pin, 'OUTPUT');
        return `digitalWrite(${pin}, ${state});\n`;
    };

    // 无源蜂鸣器：严格参考 buzzer 插件的 tone/noTone/music 生成逻辑。
    Blockly.Arduino.easyplug_passive_buzzer_tone = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\n';
    };

    Blockly.Arduino.easyplug_passive_buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = this.getFieldValue('dur');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\ndelay('+dur+');\n';
    };

    Blockly.Arduino.easyplug_passive_buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include<music.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

    Blockly.Arduino.easyplug_passive_buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+');\n';
    };

    Blockly.Arduino.easyplug_servo_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';
        return 'servo_'+pin+'.write('+angle+');\ndelay('+time+');\n';
    };

    Blockly.Arduino.easyplug_fan_set = function (block) {
        const pinA = block.getFieldValue('PIN_A');
        const pinB = block.getFieldValue('PIN_B');
        const direction = block.getFieldValue('DIRECTION');
        setupPin(pinA, 'OUTPUT');
        setupPin(pinB, 'OUTPUT');
        const state = {
            FORWARD: 'HIGH, LOW',
            REVERSE: 'LOW, HIGH',
            STOP: 'LOW, LOW'
        }[direction] || 'LOW, LOW';
        const [a, b] = state.split(', ');
        return `digitalWrite(${pinA}, ${a});\ndigitalWrite(${pinB}, ${b});\n`;
    };

    const ensureRgb2812 = pin => {
        Blockly.Arduino.includes_.easyplug_neopixel = '#include <Adafruit_NeoPixel.h>';
        Blockly.Arduino.definitions_[`easyplug_rgb2812_${pin}`] =
            `Adafruit_NeoPixel easyplug_rgb2812_${pin}(4, ${pin}, NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`easyplug_rgb2812_${pin}`] =
            `easyplug_rgb2812_${pin}.begin();\nfor (uint16_t i = 0; i < 4; i++) easyplug_rgb2812_${pin}.setPixelColor(i, 0);\neasyplug_rgb2812_${pin}.show();`;
    };

    Blockly.Arduino.easyplug_rgb2812_init = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureRgb2812(pin);
        return '';
    };

    Blockly.Arduino.easyplug_rgb2812_set = function (block) {
        const pin = block.getFieldValue('PIN');
        const index = value(block, 'INDEX', '0');
        const r = value(block, 'R', '255');
        const g = value(block, 'G', '0');
        const b = value(block, 'B', '0');
        ensureRgb2812(pin);
        return `easyplug_rgb2812_${pin}.setPixelColor(constrain(${index}, 0, 3), easyplug_rgb2812_${pin}.Color(constrain(${r}, 0, 255), constrain(${g}, 0, 255), constrain(${b}, 0, 255)));\neasyplug_rgb2812_${pin}.show();\n`;
    };

    Blockly.Arduino.easyplug_rgb2812_clear = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureRgb2812(pin);
        return `for (uint16_t i = 0; i < 4; i++) easyplug_rgb2812_${pin}.setPixelColor(i, 0);\neasyplug_rgb2812_${pin}.show();\n`;
    };


    Blockly.Arduino.easyplug_rgb2812_brightness = function (block) {
        const pin = block.getFieldValue('PIN');
        const brightness = value(block, 'BRIGHTNESS', '255');
        ensureRgb2812(pin);
        return 'easyplug_rgb2812_'+pin+'.setBrightness('+brightness+');\neasyplug_rgb2812_'+pin+'.show();\n';
    };

    Blockly.Arduino.easyplug_rgb2812_fill = function (block) {
        const pin = block.getFieldValue('PIN');
        const r = value(block, 'R', '255');
        const g = value(block, 'G', '0');
        const b = value(block, 'B', '0');
        ensureRgb2812(pin);
        return 'for (uint16_t i = 0; i < 4; i++) easyplug_rgb2812_'+pin+'.setPixelColor(i, easyplug_rgb2812_'+pin+'.Color('+r+', '+g+', '+b+'));\neasyplug_rgb2812_'+pin+'.show();\n';
    };

    Blockly.Arduino.easyplug_rgb2812_rainbow = function (block) {
        const pin = block.getFieldValue('PIN');
        const cycles = value(block, 'CYCLES', '1');
        const speed = value(block, 'SPEED', '20');
        ensureRgb2812(pin);
        Blockly.Arduino.definitions_.easyplug_rgb2812_rainbow =
            'uint32_t easyplug_rgb2812Wheel(Adafruit_NeoPixel &strip, byte pos) {\n' +
            '  pos = 255 - pos;\n' +
            '  if (pos < 85) return strip.Color(255 - pos * 3, 0, pos * 3);\n' +
            '  if (pos < 170) { pos -= 85; return strip.Color(0, pos * 3, 255 - pos * 3); }\n' +
            '  pos -= 170; return strip.Color(pos * 3, 255 - pos * 3, 0);\n' +
            '}\n' +
            'void easyplug_rgb2812Rainbow(Adafruit_NeoPixel &strip, uint8_t cycles, uint16_t waitMs) {\n' +
            '  for (uint16_t step = 0; step < (uint16_t)cycles * 256; step++) {\n' +
            '    for (uint16_t i = 0; i < strip.numPixels(); i++) strip.setPixelColor(i, easyplug_rgb2812Wheel(strip, ((i * 256 / strip.numPixels()) + step) & 255));\n' +
            '    strip.show(); delay(waitMs);\n' +
            '  }\n' +
            '}';
        return 'easyplug_rgb2812Rainbow(easyplug_rgb2812_'+pin+', '+cycles+', '+speed+');\n';
    };

    // ── 模拟传感器 ─────────────────────────────────────────────
    const analogReadGenerator = type => function (block) {
        const pin = block.getFieldValue('PIN');
        return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_sound_read = analogReadGenerator('sound');
    Blockly.Arduino.easyplug_photocell_read = analogReadGenerator('photocell');
    Blockly.Arduino.easyplug_temt6000_read = analogReadGenerator('temt6000');
    Blockly.Arduino.easyplug_water_read = analogReadGenerator('water');
    Blockly.Arduino.easyplug_soil_read = analogReadGenerator('soil');
    Blockly.Arduino.easyplug_rotation_read = analogReadGenerator('rotation');
    Blockly.Arduino.easyplug_slide_read = analogReadGenerator('slide');
    Blockly.Arduino.easyplug_alcohol_read = analogReadGenerator('alcohol');
    Blockly.Arduino.easyplug_gas_read = analogReadGenerator('gas');
    Blockly.Arduino.easyplug_pressure_read = analogReadGenerator('pressure');
    Blockly.Arduino.easyplug_steam_read = analogReadGenerator('steam');

    Blockly.Arduino.easyplug_thermistor_temperature = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.includes_.easyplug_math = '#include <math.h>';
        Blockly.Arduino.definitions_.easyplug_thermistor =
            'double easyplug_thermistorCelsius(int rawAdc) {\n' +
            '  if (rawAdc <= 0 || rawAdc >= 1023) return -273.15;\n' +
            '  double resistanceLog = log((10240000.0 / rawAdc) - 10000.0);\n' +
            '  double kelvin = 1.0 / (0.001129148 + (0.000234125 + (0.0000000876741 * resistanceLog * resistanceLog)) * resistanceLog);\n' +
            '  return kelvin - 273.15;\n' +
            '}';
        return [`easyplug_thermistorCelsius(analogRead(${pin}))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_lm35_temperature = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.definitions_.easyplug_lm35 =
            'float easyplug_lm35Celsius(int pin) {\n' +
            '  return (500.0 * analogRead(pin)) / 1024.0;\n' +
            '}';
        return [`easyplug_lm35Celsius(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ── 数字传感器 ─────────────────────────────────────────────
    const digitalDetectedGenerator = activeLevel => function (block) {
        const pin = block.getFieldValue('PIN');
        setupPin(pin, 'INPUT');
        return [`(digitalRead(${pin}) == ${activeLevel})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 低电平有效：霍尔、碰撞、按键、敲击、火焰、震动、干簧管、循迹、光电中断和红外避障。
    Blockly.Arduino.easyplug_hall_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_collision_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_button_pressed = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_knock_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_flame_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_vibration_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_reed_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_line_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_photo_interrupter_detected = digitalDetectedGenerator('LOW');
    Blockly.Arduino.easyplug_obstacle_detected = digitalDetectedGenerator('LOW');

    // 高电平有效：电容触摸、数字倾斜、PIR 人体感应。
    Blockly.Arduino.easyplug_touch_detected = digitalDetectedGenerator('HIGH');
    Blockly.Arduino.easyplug_tilt_detected = digitalDetectedGenerator('HIGH');
    Blockly.Arduino.easyplug_pir_detected = digitalDetectedGenerator('HIGH');

    // ── 环境与温湿度 ───────────────────────────────────────────
    const ensureDht11 = pin => {
        Blockly.Arduino.includes_.easyplug_dht = '#include <DHT.h>';
        Blockly.Arduino.definitions_[`easyplug_dht_${pin}`] = `DHT easyplug_dht_${pin}(${pin}, DHT11);`;
        Blockly.Arduino.setups_[`easyplug_dht_${pin}`] = `easyplug_dht_${pin}.begin();`;
    };

    Blockly.Arduino.easyplug_dht11_humidity = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureDht11(pin);
        return [`easyplug_dht_${pin}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_dht11_temperature = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureDht11(pin);
        return [`easyplug_dht_${pin}.readTemperature()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    const ensureDs18b20 = pin => {
        const suffix = String(pin).replace(/[^a-zA-Z0-9_]/g, '_');
        Blockly.Arduino.includes_.easyplug_onewire = '#include <OneWire.h>';
        Blockly.Arduino.definitions_[`easyplug_ds18_${suffix}`] =
            `OneWire easyplug_ds18Wire_${suffix}(${pin});\n` +
            `float easyplug_ds18Celsius_${suffix}() {\n` +
            `  byte addr[8];\n` +
            `  if (!easyplug_ds18Wire_${suffix}.search(addr)) { easyplug_ds18Wire_${suffix}.reset_search(); return -127.0; }\n` +
            `  if (OneWire::crc8(addr, 7) != addr[7]) return -127.0;\n` +
            `  easyplug_ds18Wire_${suffix}.reset();\n` +
            `  easyplug_ds18Wire_${suffix}.select(addr);\n` +
            `  easyplug_ds18Wire_${suffix}.write(0x44, 1);\n` +
            `  delay(750);\n` +
            `  easyplug_ds18Wire_${suffix}.reset();\n` +
            `  easyplug_ds18Wire_${suffix}.select(addr);\n` +
            `  easyplug_ds18Wire_${suffix}.write(0xBE);\n` +
            `  byte data[9];\n` +
            `  for (byte i = 0; i < 9; i++) data[i] = easyplug_ds18Wire_${suffix}.read();\n` +
            `  int16_t raw = (data[1] << 8) | data[0];\n` +
            `  return raw / 16.0;\n` +
            `}`;
        return suffix;
    };

    Blockly.Arduino.easyplug_ds18b20_temperature = function (block) {
        const pin = block.getFieldValue('PIN');
        const suffix = ensureDs18b20(pin);
        return [`easyplug_ds18Celsius_${suffix}()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ── 运动与距离 ─────────────────────────────────────────────
    Blockly.Arduino.easyplug_joystick_axis = function (block) {
        const axis = block.getFieldValue('AXIS');
        return [`analogRead(${axis})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_joystick_pressed = function () {
        setupPin(2, 'INPUT');
        return ['(digitalRead(2) == LOW)', Blockly.Arduino.ORDER_ATOMIC];
    };

    const ensureAdxl345 = () => {
        Blockly.Arduino.includes_.easyplug_wire = '#include <Wire.h>';
        Blockly.Arduino.definitions_.easyplug_adxl345 =
            'void easyplug_adxlWrite(byte reg, byte data) {\n' +
            '  Wire.beginTransmission(0x53);\n  Wire.write(reg);\n  Wire.write(data);\n  Wire.endTransmission();\n' +
            '}\n' +
            'int16_t easyplug_adxlRaw(char axis) {\n' +
            '  Wire.beginTransmission(0x53);\n  Wire.write(0x32);\n  Wire.endTransmission();\n' +
            '  Wire.requestFrom(0x53, 6);\n  byte data[6];\n  for (byte i = 0; i < 6; i++) data[i] = Wire.available() ? Wire.read() : 0;\n' +
            '  int16_t x = (int16_t)((data[1] << 8) | data[0]);\n  int16_t y = (int16_t)((data[3] << 8) | data[2]);\n  int16_t z = (int16_t)((data[5] << 8) | data[4]);\n' +
            "  return axis == 'X' ? x : (axis == 'Y' ? y : z);\n" +
            '}\n' +
            'float easyplug_adxlG(char axis) { return easyplug_adxlRaw(axis) * 0.0039; }';
        Blockly.Arduino.setups_.easyplug_adxl345 =
            'Wire.begin();\neasyplug_adxlWrite(0x31, 0x0B);\neasyplug_adxlWrite(0x2D, 0x08);';
    };

    Blockly.Arduino.easyplug_adxl345_axis = function (block) {
        const axis = block.getFieldValue('AXIS');
        ensureAdxl345();
        return [`easyplug_adxlG('${axis}')`, Blockly.Arduino.ORDER_ATOMIC];
    };

    const ensureUltrasonic = (trig, echo) => {
        const name = `easyplug_ultrasonic_${trig}_${echo}`;
        setupPin(trig, 'OUTPUT');
        setupPin(echo, 'INPUT');
        Blockly.Arduino.definitions_[name] =
            `long ${name}() {\n` +
            `  digitalWrite(${trig}, LOW);\n  delayMicroseconds(2);\n  digitalWrite(${trig}, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(${trig}, LOW);\n` +
            `  return pulseIn(${echo}, HIGH, 30000);\n` +
            `}`;
        return name;
    };

    Blockly.Arduino.easyplug_ultrasonic_distance = function (block) {
        const trig = block.getFieldValue('TRIG');
        const echo = block.getFieldValue('ECHO');
        const unit = block.getFieldValue('UNIT');
        const sensor = ensureUltrasonic(trig, echo);
        const code = unit === 'INCH' ? `(${sensor}() / 148.0)` : `(${sensor}() / 58.0)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ── 显示模块 ───────────────────────────────────────────────
    const ensureTm1650 = () => {
        Blockly.Arduino.includes_.easyplug_tm1650 = '#include <Wire.h>\n#include <TM1650.h>';
        Blockly.Arduino.definitions_.easyplug_tm1650 = 'TM1650 easyplug_tm1650(4);';
        Blockly.Arduino.setups_.easyplug_tm1650 = 'Wire.begin();\neasyplug_tm1650.init();\neasyplug_tm1650.setBrightness(7);';
    };

    Blockly.Arduino.easyplug_tm1650_init = function () {
        ensureTm1650();
        return '';
    };

    Blockly.Arduino.easyplug_tm1650_show = function (block) {
        const text = value(block, 'TEXT', '"1234"');
        ensureTm1650();
        return `easyplug_tm1650.displayString((char*)String(${text}).c_str());\n`;
    };

    Blockly.Arduino.easyplug_tm1650_brightness = function (block) {
        const brightness = value(block, 'VALUE', '7');
        ensureTm1650();
        return `easyplug_tm1650.setBrightness(constrain(${brightness}, 0, 7));\n`;
    };

    Blockly.Arduino.easyplug_tm1650_clear = function () {
        ensureTm1650();
        return 'easyplug_tm1650.clear();\n';
    };

    // 8×8 点阵屏：严格复用 iic_matrix8 的 Matrix.h、myMatrix、LEDArray 和 matrix_display 数据处理方式。
    Blockly.Arduino.easyplug_matrix_init = function (block) {
        Blockly.Arduino.definitions_.matrix = '#include <Matrix.h>\n' +
            'Matrix myMatrix(A4,A5);\nuint8_t  LEDArray[8];';
        Blockly.Arduino.setups_.matrix_pin_setup = 'myMatrix.begin(112);\n  myMatrix.clear();';
        return '';
    };

    Blockly.Arduino.easyplug_matrix_pixel = function (block) {
        const xVal = Blockly.Arduino.valueToCode(block, 'xVal', Blockly.Arduino.ORDER_ATOMIC);
        const yVal = Blockly.Arduino.valueToCode(block, 'yVal', Blockly.Arduino.ORDER_ATOMIC);
        const matrixState = this.getFieldValue('state');
        return 'myMatrix.drawPixel('+xVal+'-0,'+yVal+'-0,'+matrixState+');\n';
    };

    Blockly.Arduino.easyplug_matrix_text = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
        return 'myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.setCursor(2,0);\nmyMatrix.print('+text+');\n';
    };

    Blockly.Arduino.easyplug_matrix_scroll = function (block) {
        const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        return 'myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.scrollMessage('+message+','+speed+');\n';
    };

    Blockly.Arduino.easyplug_matrix_pattern = function (block) {
        const varName = Blockly.Arduino.valueToCode(this, 'MATRIX_EIGHT', Blockly.Arduino.ORDER_ASSIGNMENT);
        const values = new Array();
        for (let i = 0; i < 8; i++) {
            values[i] = new Array();
            for (let j = 0; j < 8; j++) values[i][j] = varName[i * 8 + j];
        }
        let code = '{';
        for (let i = 0; i < 8; i++) {
            let tmp = '';
            for (let j = 0; j < 8; j++) tmp += values[i][j];
            tmp = parseInt(tmp, 2).toString(16);
            if (tmp.length === 1) tmp = '0' + tmp;
            code += '0x' + tmp + (i !== 7 ? ',' : '');
        }
        code += '};';
        const image = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || ' ';
        const matrixImage = image.replace(/\"/g, '');
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['matrix_' + number] = 'uint8_t '+matrixImage+'[8]='+code;
        Blockly.Arduino.definitions_.matrix_display = 'int matrix_display(uint8_t led_array[8])' +
            '{\n  for(int i=0; i<8; i++)\n  {\n    LEDArray[i]=led_array[7-i];\n    for(int j=7; j>=0; j--)\n    {\n      if((LEDArray[i]&0x01)>0)\n      myMatrix.drawPixel(j, i,1);\n      LEDArray[i] = LEDArray[i]>>1;\n    }\n  }\n}\n';
        return 'matrix_display('+matrixImage+');\n';
    };

    Blockly.Arduino.easyplug_matrix_icon = function (block) {
        Blockly.Arduino.definitions_.matrix_face =
            'uint8_t matrix_smile[8]={0x42,0xa5,0xa5,0x00,0x00,0x24,0x18,0x00};\n' +
            'uint8_t matrix_front[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};\n' +
            'uint8_t matrix_back[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};\n' +
            'uint8_t matrix_left[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};\n' +
            'uint8_t matrix_right[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};\n' +
            'uint8_t matrix_stop[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};\n' +
            'uint8_t matrix_tsundere[8]={0x00,0xe7,0x00,0x10,0x28,0x04,0x00,0x00};\n' +
            'uint8_t matrix_squinting[8]={0x81,0x42,0x24,0x42,0x81,0x3c,0x00,0x00};\n' +
            'uint8_t matrix_despise1[8]={0x00,0x84,0xe7,0x00,0x00,0x3c,0x00,0x00};\n' +
            'uint8_t matrix_speechless[8]={0x00,0xe7,0x00,0x00,0x3c,0x24,0x3c,0x00};\n' +
            'uint8_t matrix_heart[8]={0x42,0xe7,0xff,0xff,0xff,0x7e,0x3c,0x18};\n' +
            'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
        Blockly.Arduino.definitions_.matrix_display = 'int matrix_display(uint8_t led_array[8])' +
            '{\n  for(int i=0; i<8; i++)\n  {\n    LEDArray[i]=led_array[7-i];\n    for(int j=7; j>=0; j--)\n    {\n      if((LEDArray[i]&0x01)>0)\n      myMatrix.drawPixel(j, i,1);\n      LEDArray[i] = LEDArray[i]>>1;\n    }\n  }\n}\n';
        const matrixFace = this.getFieldValue('face');
        return 'matrix_display('+matrixFace+');\n';
    };

    Blockly.Arduino.easyplug_matrix_refresh = function (block) {
        return 'myMatrix.write();\n';
    };

    Blockly.Arduino.easyplug_matrix_clear = function (block) {
        return 'myMatrix.clear();\n';
    };

    const ensureLcd1602 = address => {
        if (!Blockly.Arduino.definitions_.easyplug_lcd1602) {
            Blockly.Arduino.includes_.easyplug_lcd1602 = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>';
            Blockly.Arduino.definitions_.easyplug_lcd1602 = `LiquidCrystal_I2C easyplug_lcd1602(${address}, 16, 2);`;
            Blockly.Arduino.setups_.easyplug_lcd1602 = 'easyplug_lcd1602.init();\neasyplug_lcd1602.backlight();\neasyplug_lcd1602.clear();';
        }
    };

    Blockly.Arduino.easyplug_lcd1602_init = function (block) {
        ensureLcd1602(block.getFieldValue('ADDRESS'));
        return '';
    };

    Blockly.Arduino.easyplug_lcd1602_cursor = function (block) {
        const col = value(block, 'COL', '0');
        const row = value(block, 'ROW', '0');
        ensureLcd1602('0x27');
        return `easyplug_lcd1602.setCursor(constrain(${col}, 0, 15), constrain(${row}, 0, 1));\n`;
    };

    Blockly.Arduino.easyplug_lcd1602_print = function (block) {
        const text = value(block, 'TEXT', '"Hello"');
        ensureLcd1602('0x27');
        return `easyplug_lcd1602.print(${text});\n`;
    };

    Blockly.Arduino.easyplug_lcd1602_clear = function () {
        ensureLcd1602('0x27');
        return 'easyplug_lcd1602.clear();\n';
    };

    const ensureOled = address => {
        if (!Blockly.Arduino.definitions_.easyplug_oled) {
            Blockly.Arduino.includes_.easyplug_oled = '#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>';
            Blockly.Arduino.definitions_.easyplug_oled = 'Adafruit_SSD1306 easyplug_oled(-1);';
            Blockly.Arduino.setups_.easyplug_oled = `easyplug_oled.begin(SSD1306_SWITCHCAPVCC, ${address});\neasyplug_oled.clearDisplay();\neasyplug_oled.display();`;
        }
    };

    Blockly.Arduino.easyplug_oled_init = function (block) {
        ensureOled(block.getFieldValue('ADDRESS'));
        return '';
    };

    Blockly.Arduino.easyplug_oled_text = function (block) {
        const x = value(block, 'X', '0');
        const y = value(block, 'Y', '0');
        const size = value(block, 'SIZE', '1');
        const text = value(block, 'TEXT', '"Hello"');
        ensureOled('0x3C');
        return `easyplug_oled.setTextSize(constrain(${size}, 1, 8));\neasyplug_oled.setTextColor(WHITE);\neasyplug_oled.setCursor(${x}, ${y});\neasyplug_oled.print(${text});\n`;
    };

    Blockly.Arduino.easyplug_oled_clear = function () {
        ensureOled('0x3C');
        return 'easyplug_oled.clearDisplay();\n';
    };

    Blockly.Arduino.easyplug_oled_refresh = function () {
        ensureOled('0x3C');
        return 'easyplug_oled.display();\n';
    };


    Blockly.Arduino.easyplug_oled_draw_line = function (block) {
        const x0 = value(block, 'X0', '0'); const y0 = value(block, 'Y0', '0');
        const x1 = value(block, 'X1', '32'); const y1 = value(block, 'Y1', '16');
        const colour = block.getFieldValue('COLOUR'); ensureOled('0x3C');
        return 'easyplug_oled.drawLine('+x0+', '+y0+', '+x1+', '+y1+', '+colour+');\n';
    };
    Blockly.Arduino.easyplug_oled_draw_rect = function (block) {
        const x = value(block, 'X', '0'); const y = value(block, 'Y', '0'); const w = value(block, 'W', '32'); const h = value(block, 'H', '16');
        const colour = block.getFieldValue('COLOUR'); ensureOled('0x3C');
        return 'easyplug_oled.drawRect('+x+', '+y+', '+w+', '+h+', '+colour+');\n';
    };
    Blockly.Arduino.easyplug_oled_fill_rect = function (block) {
        const x = value(block, 'X', '0'); const y = value(block, 'Y', '0'); const w = value(block, 'W', '32'); const h = value(block, 'H', '16');
        const colour = block.getFieldValue('COLOUR'); ensureOled('0x3C');
        return 'easyplug_oled.fillRect('+x+', '+y+', '+w+', '+h+', '+colour+');\n';
    };
    Blockly.Arduino.easyplug_oled_draw_circle = function (block) {
        const x = value(block, 'X', '16'); const y = value(block, 'Y', '16'); const r = value(block, 'R', '8');
        const colour = block.getFieldValue('COLOUR'); ensureOled('0x3C');
        return 'easyplug_oled.drawCircle('+x+', '+y+', '+r+', '+colour+');\n';
    };
    Blockly.Arduino.easyplug_oled_fill_circle = function (block) {
        const x = value(block, 'X', '16'); const y = value(block, 'Y', '16'); const r = value(block, 'R', '8');
        const colour = block.getFieldValue('COLOUR'); ensureOled('0x3C');
        return 'easyplug_oled.fillCircle('+x+', '+y+', '+r+', '+colour+');\n';
    };

    // ── 通信与时钟 ─────────────────────────────────────────────
    const ensureIrReceiver = pin => {
        Blockly.Arduino.includes_.easyplug_ir = '#include <IRremote.h>';
        Blockly.Arduino.definitions_[`easyplug_ir_${pin}`] = `IRrecv easyplug_ir_${pin}(${pin});\ndecode_results easyplug_ir_results_${pin};`;
        Blockly.Arduino.setups_[`easyplug_ir_${pin}`] = `easyplug_ir_${pin}.enableIRIn();`;
    };

    Blockly.Arduino.easyplug_ir_init = function (block) {
        ensureIrReceiver(block.getFieldValue('PIN'));
        return '';
    };

    Blockly.Arduino.easyplug_ir_available = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureIrReceiver(pin);
        return [`easyplug_ir_${pin}.decode(&easyplug_ir_results_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_ir_value = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureIrReceiver(pin);
        return [`easyplug_ir_results_${pin}.value`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_ir_resume = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureIrReceiver(pin);
        return `easyplug_ir_${pin}.resume();\n`;
    };

    const ensureDs3231 = () => {
        Blockly.Arduino.includes_.easyplug_rtc = '#include <Wire.h>';
        Blockly.Arduino.definitions_.easyplug_rtc =
            'byte easyplug_bcdToDec(byte value) { return (value / 16 * 10) + (value % 16); }\n' +
            'byte easyplug_decToBcd(byte value) { return (value / 10 * 16) + (value % 10); }\n' +
            'uint8_t easyplug_rtcYear, easyplug_rtcMonth, easyplug_rtcDay, easyplug_rtcHour, easyplug_rtcMinute, easyplug_rtcSecond;\n' +
            'void easyplug_rtcRead() {\n' +
            '  Wire.beginTransmission(0x68); Wire.write(0); Wire.endTransmission();\n' +
            '  Wire.requestFrom(0x68, 7);\n' +
            '  easyplug_rtcSecond = easyplug_bcdToDec(Wire.read() & 0x7F);\n' +
            '  easyplug_rtcMinute = easyplug_bcdToDec(Wire.read());\n' +
            '  easyplug_rtcHour = easyplug_bcdToDec(Wire.read() & 0x3F);\n' +
            '  Wire.read();\n' +
            '  easyplug_rtcDay = easyplug_bcdToDec(Wire.read());\n' +
            '  easyplug_rtcMonth = easyplug_bcdToDec(Wire.read() & 0x1F);\n' +
            '  easyplug_rtcYear = easyplug_bcdToDec(Wire.read());\n' +
            '}\n' +
            'void easyplug_rtcSet(uint16_t year, byte month, byte day, byte hour, byte minute, byte second) {\n' +
            '  Wire.beginTransmission(0x68); Wire.write(0);\n' +
            '  Wire.write(easyplug_decToBcd(second)); Wire.write(easyplug_decToBcd(minute)); Wire.write(easyplug_decToBcd(hour));\n' +
            '  Wire.write(1); Wire.write(easyplug_decToBcd(day)); Wire.write(easyplug_decToBcd(month)); Wire.write(easyplug_decToBcd(year % 100));\n' +
            '  Wire.endTransmission();\n' +
            '}';
        Blockly.Arduino.setups_.easyplug_rtc = 'Wire.begin();';
    };

    Blockly.Arduino.easyplug_ds3231_set = function (block) {
        const year = value(block, 'YEAR', '2026');
        const month = value(block, 'MONTH', '1');
        const day = value(block, 'DAY', '1');
        const hour = value(block, 'HOUR', '0');
        const minute = value(block, 'MINUTE', '0');
        const second = value(block, 'SECOND', '0');
        ensureDs3231();
        return `easyplug_rtcSet(${year}, ${month}, ${day}, ${hour}, ${minute}, ${second});\n`;
    };

    Blockly.Arduino.easyplug_ds3231_read = function (block) {
        const part = block.getFieldValue('PART');
        ensureDs3231();
        const field = {
            YEAR: 'easyplug_rtcYear + 2000', MONTH: 'easyplug_rtcMonth', DAY: 'easyplug_rtcDay',
            HOUR: 'easyplug_rtcHour', MINUTE: 'easyplug_rtcMinute', SECOND: 'easyplug_rtcSecond'
        }[part] || 'easyplug_rtcSecond';
        return [`(easyplug_rtcRead(), ${field})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ── 精简下拉积木：仅合并代码语义完全一致的模块 ─────────────
    Blockly.Arduino.easyplug_analog_sensor_read = function (block) {
        // 所有可选模拟模块均输出 analogRead(pin) 的 0–1023 原始值。
        const pin = block.getFieldValue('PIN');
        return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_analog_temperature_read = function (block) {
        // 两种模拟温度模块都输出摄氏温度，但换算公式不同。
        return block.getFieldValue('MODEL') === 'LM35'
            ? Blockly.Arduino.easyplug_lm35_temperature(block)
            : Blockly.Arduino.easyplug_thermistor_temperature(block);
    };

    Blockly.Arduino.easyplug_digital_sensor_triggered = function (block) {
        const pin = block.getFieldValue('PIN');
        const sensor = block.getFieldValue('SENSOR');
        // 电容触摸、倾斜和 PIR 为高电平有效；其余数字模块为低电平有效。
        const activeLevel = ['TOUCH', 'TILT', 'PIR'].includes(sensor) ? 'HIGH' : 'LOW';
        setupPin(pin, 'INPUT');
        return [`(digitalRead(${pin}) == ${activeLevel})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.easyplug_dht11_read = function (block) {
        const pin = block.getFieldValue('PIN');
        ensureDht11(pin);
        const reading = block.getFieldValue('MEASURE') === 'HUMIDITY'
            ? `easyplug_dht_${pin}.readHumidity()`
            : `easyplug_dht_${pin}.readTemperature()`;
        return [reading, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ── 变量类型、文本和计时器（严格按参考代码的字段与生成规则） ──
    const easyplugValue = (block, name, order, fallback) =>
        Blockly.Arduino.valueToCode(block, name, order) || fallback;
    const easyplugName = (block, fallback) =>
        easyplugValue(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC, fallback).replace(/[\"']/g, '').trim();

    Blockly.Arduino.KS_variables_declare = function (block) {
        const scope = block.getFieldValue('variables_type');
        const type = block.getFieldValue('TYPE');
        const name = easyplugName(block, 'item');
        let variableValue = easyplugValue(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT, '0').replace(/[\"']/g, '');
        if (type === 'String') variableValue = `\"${variableValue}\"`;
        const code = `${type} ${name} = ${variableValue};\n`;
        if (scope === 'global_variate') {
            Blockly.Arduino.definitions_[`easyplug_var_${name}`] = code;
            return '';
        }
        return code;
    };

    Blockly.Arduino.KS_variables_get = function (block) {
        return [easyplugName(block, 'item'), Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_variables_set = function (block) {
        const name = easyplugName(block, 'item');
        const variableValue = easyplugValue(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT, '0').replace(/[\"']/g, '');
        return `${name} = ${variableValue};\n`;
    };

    Blockly.Arduino.KS_variables_change = function (block) {
        const name = easyplugName(block, 'item');
        return `${name}${block.getFieldValue('TYPE')};\n`;
    };

    Blockly.Arduino.KS_variables_stringSet = function (block) {
        const name = easyplugName(block, 'item');
        const variableValue = easyplugValue(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT, ' ');
        return `${name} = ${variableValue};\n`;
    };

    Blockly.Arduino.KS_CHAR = function (block) {
        const charValue = easyplugValue(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC, ' ').replace(/[\"']/g, '');
        return [`'${charValue}'`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_STRING = function (block) {
        const stringValue = easyplugValue(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC, '').replace(/[\"']/g, '');
        return [`\"${stringValue}\"`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_data = function (block) {
        const data = easyplugValue(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC, '0').replace(/[\"']/g, '');
        return [data, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 逻辑比较（严格采用用户提供的 KS_judge 字段与运算符规则）
    Blockly.Arduino.KS_judge = function (block) {
        const value1 = easyplugValue(block, 'VALUE1', Blockly.Arduino.ORDER_ATOMIC, ' ').replace(/[\"']/g, '');
        const value2 = easyplugValue(block, 'VALUE2', Blockly.Arduino.ORDER_ATOMIC, ' ').replace(/[\"']/g, '');
        const judge = block.getFieldValue('judge');
        return [`${value1} ${judge} ${value2}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_millis = function () {
        return ['millis()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_micros = function () {
        return ['micros()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // 兼容旧项目中保存的 EasyPlug 通用积木类型，避免既有工程失去代码生成能力。
    Blockly.Arduino.easyplug_variables_declare = Blockly.Arduino.KS_variables_declare;
    Blockly.Arduino.easyplug_variables_get = Blockly.Arduino.KS_variables_get;
    Blockly.Arduino.easyplug_variables_set = Blockly.Arduino.KS_variables_set;
    Blockly.Arduino.easyplug_variables_change = Blockly.Arduino.KS_variables_change;
    Blockly.Arduino.easyplug_variables_string_set = Blockly.Arduino.KS_variables_stringSet;
    Blockly.Arduino.easyplug_char = Blockly.Arduino.KS_CHAR;
    Blockly.Arduino.easyplug_string = Blockly.Arduino.KS_STRING;
    Blockly.Arduino.easyplug_data = Blockly.Arduino.KS_data;
    Blockly.Arduino.easyplug_judge = Blockly.Arduino.KS_judge;
    Blockly.Arduino.easyplug_millis = Blockly.Arduino.KS_millis;
    Blockly.Arduino.easyplug_micros = Blockly.Arduino.KS_micros;
    return Blockly;
}

exports = addGenerator;
