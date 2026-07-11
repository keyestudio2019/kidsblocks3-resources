/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    // ══════════════════════════════════════════════════════════════════════════
    // ESP32-CAM 摄像头类
    // ══════════════════════════════════════════════════════════════════════════

    // ── esp32cam_init ─────────────────────────────────────────────────────────
    Blockly.Arduino['esp32cam_init'] = function (block) {
        var model      = block.getFieldValue('model');
        var resolution = block.getFieldValue('resolution');

        // includes_ 区域：宏定义必须在 camera_pins.h 之前
        Blockly.Arduino.includes_['aaa_cam_model'] =
            '#define ' + model;

        Blockly.Arduino.includes_['bbb_esp_camera'] =
            '#include "esp_camera.h"';

        Blockly.Arduino.includes_['bbb_camera_pins'] =
            '#include "camera_pins.h"';

        Blockly.Arduino.includes_['ccc_wifi'] =
            '#include <WiFi.h>';

        // definitions_ 区域：前向声明
        Blockly.Arduino.definitions_['esp32cam_fwd_decl'] =
            'void startCameraServer();\n' +
            'void setupLedFlash(int pin);';

        // setups_ 区域
        Blockly.Arduino.setups_['aaa_serial'] =
            'Serial.begin(115200);\n' +
            '  Serial.setDebugOutput(true);\n' +
            '  Serial.println();';

        Blockly.Arduino.setups_['bbb_cam_init'] =
            'camera_config_t config;\n' +
            '  config.ledc_channel = LEDC_CHANNEL_0;\n' +
            '  config.ledc_timer = LEDC_TIMER_0;\n' +
            '  config.pin_d0 = Y2_GPIO_NUM;\n' +
            '  config.pin_d1 = Y3_GPIO_NUM;\n' +
            '  config.pin_d2 = Y4_GPIO_NUM;\n' +
            '  config.pin_d3 = Y5_GPIO_NUM;\n' +
            '  config.pin_d4 = Y6_GPIO_NUM;\n' +
            '  config.pin_d5 = Y7_GPIO_NUM;\n' +
            '  config.pin_d6 = Y8_GPIO_NUM;\n' +
            '  config.pin_d7 = Y9_GPIO_NUM;\n' +
            '  config.pin_xclk = XCLK_GPIO_NUM;\n' +
            '  config.pin_pclk = PCLK_GPIO_NUM;\n' +
            '  config.pin_vsync = VSYNC_GPIO_NUM;\n' +
            '  config.pin_href = HREF_GPIO_NUM;\n' +
            '  config.pin_sccb_sda = SIOD_GPIO_NUM;\n' +
            '  config.pin_sccb_scl = SIOC_GPIO_NUM;\n' +
            '  config.pin_pwdn = PWDN_GPIO_NUM;\n' +
            '  config.pin_reset = RESET_GPIO_NUM;\n' +
            '  config.xclk_freq_hz = 20000000;\n' +
            '  config.frame_size = FRAMESIZE_UXGA;\n' +
            '  config.pixel_format = PIXFORMAT_JPEG;\n' +
            '  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;\n' +
            '  config.fb_location = CAMERA_FB_IN_PSRAM;\n' +
            '  config.jpeg_quality = 12;\n' +
            '  config.fb_count = 1;\n' +
            '\n' +
            '  if (config.pixel_format == PIXFORMAT_JPEG) {\n' +
            '    if (psramFound()) {\n' +
            '      config.jpeg_quality = 10;\n' +
            '      config.fb_count = 2;\n' +
            '      config.grab_mode = CAMERA_GRAB_LATEST;\n' +
            '    } else {\n' +
            '      config.frame_size = FRAMESIZE_VGA;\n' +
            '      config.fb_location = CAMERA_FB_IN_DRAM;\n' +
            '    }\n' +
            '  } else {\n' +
            '    config.frame_size = FRAMESIZE_240X240;\n' +
            '#if CONFIG_IDF_TARGET_ESP32S3\n' +
            '    config.fb_count = 2;\n' +
            '#endif\n' +
            '  }\n' +
            '\n' +
            '#if defined(CAMERA_MODEL_ESP_EYE)\n' +
            '  pinMode(13, INPUT_PULLUP);\n' +
            '  pinMode(14, INPUT_PULLUP);\n' +
            '#endif\n' +
            '\n' +
            '  esp_err_t err = esp_camera_init(&config);\n' +
            '  if (err != ESP_OK) {\n' +
            '    Serial.printf("Camera init failed with error 0x%x", err);\n' +
            '    return;\n' +
            '  }\n' +
            '\n' +
            '  sensor_t *s = esp_camera_sensor_get();\n' +
            '  if (s->id.PID == OV3660_PID) {\n' +
            '    s->set_vflip(s, 1);\n' +
            '    s->set_brightness(s, 1);\n' +
            '    s->set_saturation(s, -2);\n' +
            '  }\n' +
            '  if (config.pixel_format == PIXFORMAT_JPEG) {\n' +
            '    s->set_framesize(s, ' + resolution + ');\n' +
            '  }\n' +
            '\n' +
            '#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)\n' +
            '  s->set_vflip(s, 1);\n' +
            '  s->set_hmirror(s, 1);\n' +
            '#endif\n' +
            '\n' +
            '#if defined(CAMERA_MODEL_ESP32S3_EYE)\n' +
            '  s->set_vflip(s, 1);\n' +
            '#endif\n' +
            '\n' +
            '#if defined(LED_GPIO_NUM)\n' +
            '  setupLedFlash(LED_GPIO_NUM);\n' +
            '#endif';

        return '';
    };

    // ── esp32cam_wifi ─────────────────────────────────────────────────────────
    Blockly.Arduino['esp32cam_wifi'] = function (block) {
        var ssid     = Blockly.Arduino.valueToCode(block, 'ssid',     Blockly.Arduino.ORDER_ATOMIC) || '""';
        var password = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC) || '""';

        Blockly.Arduino.setups_['ccc_wifi_connect'] =
            'WiFi.begin(' + ssid + ', ' + password + ');\n' +
            '  WiFi.setSleep(false);\n' +
            '\n' +
            '  Serial.print("WiFi connecting");\n' +
            '  while (WiFi.status() != WL_CONNECTED) {\n' +
            '    delay(500);\n' +
            '    Serial.print(".");\n' +
            '  }\n' +
            '  Serial.println("");\n' +
            '  Serial.println("WiFi connected");';

        return '';
    };

    // ── esp32cam_start_server ─────────────────────────────────────────────────
    Blockly.Arduino['esp32cam_start_server'] = function (block) {
        Blockly.Arduino.setups_['ddd_start_server'] =
            'startCameraServer();\n' +
            '\n' +
            '  Serial.print("Camera Ready! Use \'http://");\n' +
            '  Serial.print(WiFi.localIP());\n' +
            '  Serial.println("\' to connect");';

        return '';
    };

    // ── esp32cam_set_param ────────────────────────────────────────────────────
    Blockly.Arduino['esp32cam_set_param'] = function (block) {
        var param = block.getFieldValue('param');
        var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC) || '0';

        var code =
            '{\n' +
            '  sensor_t *s = esp_camera_sensor_get();\n' +
            '  if (s) s->set_' + param + '(s, ' + value + ');\n' +
            '}\n';

        return code;
    };

    // ══════════════════════════════════════════════════════════════════════════
    // 串口控制类
    // ══════════════════════════════════════════════════════════════════════════

    // ── esp32cam_serial_cam ───────────────────────────────────────────────────
    // ESP32-CAM 端：在 loop() 中监听串口，O=开启摄像头 / F=关闭摄像头
    Blockly.Arduino['esp32cam_serial_cam'] = function (block) {
        // 需要 WebServer
        Blockly.Arduino.includes_['ccc_webserver'] =
            '#include <WebServer.h>';

        // 全局变量
        Blockly.Arduino.definitions_['esp32cam_serial_cam_vars'] =
            'WebServer camServer(80);\n' +
            'bool isCameraOpen = true;';

        // 定义 handleRoot 和 handleJpg 函数
        Blockly.Arduino.definitions_['esp32cam_serial_cam_handlers'] =
            'void camHandleRoot() {\n' +
            '  String html = "<html><head><meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'></head>";\n' +
            '  html += "<body style=\'margin:0;padding:0;background:#000;display:flex;justify-content:center;align-items:center;height:100vh;color:#fff;font-family:sans-serif;\'>";\n' +
            '  if (!isCameraOpen) {\n' +
            '    html += "<h1>Camera is OFF (Send \'O\' via Serial to turn on)</h1>";\n' +
            '  } else {\n' +
            '    html += "<img id=\'stream\' src=\'/jpg\' style=\'width:100vw;height:100vh;object-fit:contain;\'>";\n' +
            '    html += "<script>";\n' +
            '    html += "var img=document.getElementById(\'stream\');";\n' +
            '    html += "function updateStream(){img.src=\'/jpg?t=\'+new Date().getTime();}";\n' +
            '    html += "img.onload=updateStream;";\n' +
            '    html += "img.onerror=function(){setTimeout(updateStream,1000);};";\n' +
            '    html += "</script>";\n' +
            '  }\n' +
            '  html += "</body></html>";\n' +
            '  camServer.send(200, "text/html", html);\n' +
            '}\n' +
            '\n' +
            'void camHandleJpg() {\n' +
            '  if (!isCameraOpen) {\n' +
            '    camServer.send(403, "text/plain", "Camera is closed.");\n' +
            '    return;\n' +
            '  }\n' +
            '  camera_fb_t *fb = esp_camera_fb_get();\n' +
            '  if (!fb) {\n' +
            '    camServer.send(500, "text/plain", "Camera capture failed.");\n' +
            '    return;\n' +
            '  }\n' +
            '  camServer.sendHeader("Content-Disposition", "inline; filename=capture.jpg");\n' +
            '  camServer.sendHeader("Access-Control-Allow-Origin", "*");\n' +
            '  camServer.setContentLength(fb->len);\n' +
            '  camServer.send(200, "image/jpeg", "");\n' +
            '  WiFiClient client = camServer.client();\n' +
            '  client.write(fb->buf, fb->len);\n' +
            '  esp_camera_fb_return(fb);\n' +
            '}';

        // setup 中启动 WebServer（替代 startCameraServer）
        Blockly.Arduino.setups_['ddd_cam_server'] =
            'camServer.on("/", camHandleRoot);\n' +
            '  camServer.on("/jpg", camHandleJpg);\n' +
            '  camServer.begin();\n' +
            '\n' +
            '  Serial.print("Camera Ready! Use \'http://");\n' +
            '  Serial.print(WiFi.localIP());\n' +
            '  Serial.println("\' to connect");';

        // loop 中的代码：处理 HTTP 请求 + 串口监听
        var code =
            'camServer.handleClient();\n' +
            'if (Serial.available() > 0) {\n' +
            '  char cmd = Serial.read();\n' +
            '  if (cmd == \'O\' || cmd == \'o\') {\n' +
            '    if (!isCameraOpen) {\n' +
            '      isCameraOpen = true;\n' +
            '      Serial.println(">>> Camera turned ON <<<");\n' +
            '    }\n' +
            '  } else if (cmd == \'F\' || cmd == \'f\') {\n' +
            '    if (isCameraOpen) {\n' +
            '      isCameraOpen = false;\n' +
            '      Serial.println(">>> Camera turned OFF <<<");\n' +
            '    }\n' +
            '  }\n' +
            '}\n';

        return code;
    };

    // ── esp32cam_serial_gpio ──────────────────────────────────────────────────
    // ESP32-CAM 端：在 loop() 中监听串口，收到指定字符后反转 GPIO
    Blockly.Arduino['esp32cam_serial_gpio'] = function (block) {
        var gpio    = block.getFieldValue('gpio');
        var trigchar = block.getFieldValue('trigchar');

        // setup 中初始化 GPIO
        Blockly.Arduino.setups_['aaa_serial'] =
            'Serial.begin(115200);\n' +
            '  Serial.setDebugOutput(true);\n' +
            '  Serial.println();';

        Blockly.Arduino.setups_['gpio_' + gpio + '_init'] =
            'pinMode(' + gpio + ', OUTPUT);\n' +
            '  digitalWrite(' + gpio + ', LOW);';

        // loop 中的代码
        var code =
            'if (Serial.available() > 0) {\n' +
            '  char receivedData = Serial.read();\n' +
            '  if (receivedData == \'' + trigchar + '\') {\n' +
            '    digitalWrite(' + gpio + ', !digitalRead(' + gpio + '));\n' +
            '    Serial.println("Received ' + trigchar + ' -> GPIO' + gpio + ' toggled");\n' +
            '  }\n' +
            '}\n';

        return code;
    };

    return Blockly;
}

exports = addGenerator;

