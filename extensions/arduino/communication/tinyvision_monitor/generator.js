/*
 * TinyVision ESP32-S3 video monitor generator.
 * Design rule: the three setup blocks emit the verified TinyVision reference
 * program; only ssid/password are replaced by the values entered in Blocks.
 */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    function getWifiValue (name) {
        return Blockly.Arduino[name] || '""';
    }

    function tftEnabled () {
        return Blockly.Arduino._tinyVisionTftEnabled === true;
    }

    function ensureTftSupport () {
        Blockly.Arduino.includes_['aag_tinyvision_tft_spi'] = '#include <SPI.h>';
        Blockly.Arduino.includes_['aah_tinyvision_tft_driver'] = '#include <Adafruit_GFX.h>\n#include <Adafruit_ST7789.h>';
        Blockly.Arduino.definitions_['aae_tinyvision_tft_status'] = `
// 1.54-inch ST7789 TFT: SCK=GPIO45, MOSI=GPIO48, DC=GPIO47, CS=GPIO21.
// TFT reset is handled by the module hardware reset line; backlight is wired to 3.3V.
static const int TFT_SCK_PIN = 45;
static const int TFT_MOSI_PIN = 48;
static const int TFT_DC_PIN = 47;
static const int TFT_CS_PIN = 21;

SPIClass tinyVisionTftSPI(FSPI);
Adafruit_ST7789 tinyVisionTft(&tinyVisionTftSPI, TFT_CS_PIN, TFT_DC_PIN, -1);
bool tinyVisionTftReady = false;

void tinyVisionTftStatus(const String &title, const String &line1,
                         const String &line2, const String &line3) {
  if (!tinyVisionTftReady) return;
  tinyVisionTft.fillScreen(ST77XX_BLACK);
  tinyVisionTft.setTextWrap(false);
  tinyVisionTft.setTextSize(2);
  tinyVisionTft.setTextColor(ST77XX_CYAN);
  tinyVisionTft.setCursor(12, 18);
  tinyVisionTft.println(title);
  tinyVisionTft.drawFastHLine(12, 44, 216, ST77XX_BLUE);
  tinyVisionTft.setTextColor(ST77XX_WHITE);
  tinyVisionTft.setCursor(12, 72);
  tinyVisionTft.println(line1);
  tinyVisionTft.setCursor(12, 110);
  tinyVisionTft.println(line2);
  tinyVisionTft.setTextColor(ST77XX_GREEN);
  tinyVisionTft.setCursor(12, 148);
  tinyVisionTft.println(line3);
}

void tinyVisionTftInit() {
  tinyVisionTftSPI.begin(TFT_SCK_PIN, -1, TFT_MOSI_PIN, TFT_CS_PIN);
  tinyVisionTft.init(240, 240);
  tinyVisionTft.setRotation(2);
  tinyVisionTftReady = true;
  tinyVisionTftStatus("TinyVision", "TFT: ST7789", "Camera: Starting", "WiFi: Waiting");
  Serial.println("TFT ST7789 status screen ready");
}
`;
    }

    function ensureReferenceProgram () {
        Blockly.Arduino.includes_['aaa_tinyvision_camera'] = '#include "esp_camera.h"';
        Blockly.Arduino.includes_['aab_tinyvision_image_converter'] = '#include "img_converters.h"';
        Blockly.Arduino.includes_['aac_tinyvision_wifi'] = '#include <WiFi.h>';
        Blockly.Arduino.includes_['aad_tinyvision_async_tcp'] = '#include <AsyncTCP.h>';
        Blockly.Arduino.includes_['aae_tinyvision_async_webserver'] = '#include <ESPAsyncWebServer.h>';
        Blockly.Arduino.includes_['aaf_tinyvision_web_ui'] = '#include "index_html.h"';

        Blockly.Arduino.definitions_['aaa_tinyvision_camera'] = `
#define PWDN_GPIO_NUM -1
#define RESET_GPIO_NUM -1
#define XCLK_GPIO_NUM 15
#define SIOD_GPIO_NUM 4
#define SIOC_GPIO_NUM 5
#define Y2_GPIO_NUM 11
#define Y3_GPIO_NUM 9
#define Y4_GPIO_NUM 8
#define Y5_GPIO_NUM 10
#define Y6_GPIO_NUM 12
#define Y7_GPIO_NUM 18
#define Y8_GPIO_NUM 17
#define Y9_GPIO_NUM 16
#define VSYNC_GPIO_NUM 6
#define HREF_GPIO_NUM 7
#define PCLK_GPIO_NUM 13

void setupCamera() {
  camera_config_t config = {};
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_RGB565;
  config.frame_size = FRAMESIZE_QVGA;
  config.fb_count = 1;
  config.fb_location = CAMERA_FB_IN_DRAM;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed: 0x%x\\n", err);
    while (true) delay(1000);
  }

  sensor_t *s = esp_camera_sensor_get();
  if (s) {
    Serial.printf("Sensor PID: 0x%04X\\n", s->id.PID);
    s->set_vflip(s, 0);
  }
  Serial.println("Camera init OK");
}
`;

        Blockly.Arduino.definitions_['aab_tinyvision_uno_link'] = `
#define UNO_TX_PIN 20
#define UNO_RX_PIN 19
#define UNO_BAUD 9600

void sendToUNO(const String &cmd) {
  Serial.printf("UNO TX -> %s\\n", cmd.c_str());
  Serial1.println(cmd);
}
`;

        Blockly.Arduino.definitions_['aac_tinyvision_wifi_config'] =
            'const char *ssid = ' + getWifiValue('_tinyVisionSsid') + ';\n' +
            'const char *password = ' + getWifiValue('_tinyVisionPassword') + ';\n';

        Blockly.Arduino.definitions_['aad_tinyvision_server'] = `
AsyncWebServer server(80);
static const char *BOUNDARY = "123456789000000000000987654321";

struct StreamState {
  uint8_t *jpg = nullptr;
  size_t jpgLen = 0;
  size_t sent = 0;
  char header[128];
  size_t headerLen = 0;
  size_t headerSent = 0;

  ~StreamState() { release(); }

  void release() {
    if (jpg) free(jpg);
    jpg = nullptr;
    jpgLen = sent = 0;
    headerLen = headerSent = 0;
  }

  bool capture() {
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) return false;

    if (fb->format == PIXFORMAT_JPEG) {
      jpg = (uint8_t *)malloc(fb->len);
      if (!jpg) {
        esp_camera_fb_return(fb);
        return false;
      }
      memcpy(jpg, fb->buf, fb->len);
      jpgLen = fb->len;
    } else {
      if (!frame2jpg(fb, 80, &jpg, &jpgLen)) {
        esp_camera_fb_return(fb);
        return false;
      }
    }
    esp_camera_fb_return(fb);

    headerLen = snprintf(header, sizeof(header),
                         "\\r\\n--%s\\r\\nContent-Type: image/jpeg\\r\\nContent-Length: %u\\r\\n\\r\\n",
                         BOUNDARY, (unsigned)jpgLen);
    return true;
  }

  // Member callback avoids the Arduino automatic-prototype type-order issue.
  size_t fill(uint8_t *buffer, size_t maxLen) {
    if (jpg == nullptr && !capture()) return RESPONSE_TRY_AGAIN;

    size_t written = 0;
    if (headerSent < headerLen) {
      size_t n = min(maxLen, headerLen - headerSent);
      memcpy(buffer, header + headerSent, n);
      headerSent += n;
      written += n;
    }
    if (written < maxLen && sent < jpgLen) {
      size_t n = min(maxLen - written, jpgLen - sent);
      memcpy(buffer + written, jpg + sent, n);
      sent += n;
      written += n;
    }
    if (sent >= jpgLen && headerSent >= headerLen) release();
    return written;
  }
};

void handleStream(AsyncWebServerRequest *request) {
  Serial.println("Stream client connected");
  StreamState *st = new StreamState();

  char contentType[80];
  snprintf(contentType, sizeof(contentType),
           "multipart/x-mixed-replace;boundary=%s", BOUNDARY);

  AsyncWebServerResponse *response = request->beginChunkedResponse(
    contentType,
    [st](uint8_t *buffer, size_t maxLen, size_t) {
      return st->fill(buffer, maxLen);
    });

  response->addHeader("Cache-Control", "no-cache");
  response->addHeader("Access-Control-Allow-Origin", "*");
  request->onDisconnect([st]() {
    Serial.println("Stream client disconnected");
    delete st;
  });
  request->send(response);
}

static const char *VALID_CMDS[] = {"F", "B", "L", "R", "S", "O", "C", "1", "2"};

void handleControl(AsyncWebServerRequest *request) {
  if (!request->hasParam("cmd")) {
    request->send(400, "text/plain", "Missing command");
    return;
  }

  String cmd = request->getParam("cmd")->value();
  for (auto valid : VALID_CMDS) {
    if (cmd == valid) {
      sendToUNO(cmd);
      request->send(200, "text/plain", "OK");
      return;
    }
  }

  Serial.printf("Unknown command: %s\\n", cmd.c_str());
  request->send(400, "text/plain", "Unknown command");
}
`;
    }

    function ensureReferenceSetup () {
        ensureReferenceProgram();
        const useTft = tftEnabled();
        if (useTft) {
            ensureTftSupport();
        }
        delete Blockly.Arduino.setups_['aab_tinyvision_tft_init'];
        Blockly.Arduino.setups_['aaa_tinyvision_debug_serial'] =
            'Serial.begin(115200);\n' +
            '  delay(500);\n' +
            '  Serial.println("\\n================================");\n' +
            '  Serial.println("ESP32-S3 Smart Car");\n' +
            '  Serial.println("================================");\n' +
            '  Serial.printf("PSRAM: %u, Free Heap: %u\\n", ESP.getPsramSize(), ESP.getFreeHeap());' +
            (useTft ? '\n  tinyVisionTftInit();' : '');
        Blockly.Arduino.setups_['aab_tinyvision_uno_link'] =
            'Serial1.begin(UNO_BAUD, SERIAL_8N1, UNO_RX_PIN, UNO_TX_PIN);\n' +
            '  Serial.printf("UNO Serial1: TX=GPIO%d, RX=GPIO%d\\n", UNO_TX_PIN, UNO_RX_PIN);';
        Blockly.Arduino.setups_['aac_tinyvision_camera_init'] =
            'setupCamera();' + (useTft ? '\n  tinyVisionTftStatus("TinyVision", "Camera: OK", "WiFi: Connecting", "");' : '');
        Blockly.Arduino.setups_['aad_tinyvision_wifi'] =
            'WiFi.begin(ssid, password);\n' +
            '  WiFi.setSleep(false);\n' +
            '  Serial.print("WiFi connecting");\n' +
            (useTft ? '  tinyVisionTftStatus("TinyVision", "Camera: OK", "WiFi: Connecting", "");\n' : '') +
            '  while (WiFi.status() != WL_CONNECTED) {\n' +
            '    delay(500);\n' +
            '    Serial.print(".");\n' +
            '  }\n' +
            '  Serial.println("\\nWiFi connected");\n' +
            '  Serial.printf("IP address: %s\\n", WiFi.localIP().toString().c_str());' +
            (useTft ? '\n  tinyVisionTftStatus("TinyVision", "Camera: OK", "WiFi: Connected", "IP: " + WiFi.localIP().toString());' : '');
        Blockly.Arduino.setups_['aae_tinyvision_start_server'] =
            'server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {\n' +
            '    request->send_P(200, "text/html", INDEX_HTML);\n' +
            '  });\n' +
            '  server.on("/control", HTTP_GET, handleControl);\n' +
            '  server.on("/stream", HTTP_GET, handleStream);\n' +
            '  server.begin();\n' +
            '  Serial.printf("HTTP server started\\nOpen: http://%s\\n", WiFi.localIP().toString().c_str());' +
            (useTft ? '\n  tinyVisionTftStatus("TinyVision Ready", "Camera: OK", "WiFi: Connected", "IP: " + WiFi.localIP().toString());' : '');
    }

    Blockly.Arduino['tinyvision_monitor_camera_init'] = function () {
        ensureReferenceSetup();
        return '';
    };

    Blockly.Arduino['tinyvision_monitor_wifi'] = function (block) {
        Blockly.Arduino._tinyVisionSsid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC) || '""';
        Blockly.Arduino._tinyVisionPassword = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC) || '""';
        ensureReferenceSetup();
        return '';
    };

    Blockly.Arduino['tinyvision_monitor_start_server'] = function () {
        ensureReferenceSetup();
        return '';
    };

    Blockly.Arduino['tinyvision_monitor_tft_init'] = function () {
        Blockly.Arduino._tinyVisionTftEnabled = true;
        ensureReferenceSetup();
        return '';
    };

    return Blockly;
}
exports = addGenerator;
