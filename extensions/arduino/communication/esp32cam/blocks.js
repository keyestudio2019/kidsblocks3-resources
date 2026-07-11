/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#2196F3';
    const colorSerial = '#4CAF50';

    // ══════════════════════════════════════════════════════════════════════════
    // ESP32-CAM 摄像头类积木
    // ══════════════════════════════════════════════════════════════════════════

    // ── esp32cam_init ─────────────────────────────────────────────────────────
    Blockly.Blocks['esp32cam_init'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_INIT}',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'model',
                        options: [
                            ['AI-Thinker',    'CAMERA_MODEL_AI_THINKER'],
                            ['ESP-EYE',       'CAMERA_MODEL_ESP_EYE'],
                            ['ESP32S3-EYE',   'CAMERA_MODEL_ESP32S3_EYE'],
                            ['WROVER-KIT',    'CAMERA_MODEL_WROVER_KIT'],
                            ['M5Stack PSRAM', 'CAMERA_MODEL_M5STACK_PSRAM'],
                            ['M5Stack Wide',  'CAMERA_MODEL_M5STACK_WIDE'],
                            ['XIAO ESP32S3',  'CAMERA_MODEL_XIAO_ESP32S3'],
                            ['DFRobot FireBeetle2 S3', 'CAMERA_MODEL_DFRobot_FireBeetle2_ESP32S3'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'resolution',
                        options: [
                            ['QQVGA (160x120)',  'FRAMESIZE_QQVGA'],
                            ['QVGA (320x240)',   'FRAMESIZE_QVGA'],
                            ['VGA (640x480)',    'FRAMESIZE_VGA'],
                            ['SVGA (800x600)',   'FRAMESIZE_SVGA'],
                            ['XGA (1024x768)',   'FRAMESIZE_XGA'],
                            ['SXGA (1280x1024)', 'FRAMESIZE_SXGA'],
                            ['UXGA (1600x1200)', 'FRAMESIZE_UXGA'],
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    // ── esp32cam_wifi ─────────────────────────────────────────────────────────
    Blockly.Blocks['esp32cam_wifi'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_WIFI}',
                args0: [
                    { type: 'input_value', name: 'ssid',     check: 'String' },
                    { type: 'input_value', name: 'password', check: 'String' }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    // ── esp32cam_start_server ─────────────────────────────────────────────────
    Blockly.Blocks['esp32cam_start_server'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_START_SERVER}',
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    // ── esp32cam_set_param ────────────────────────────────────────────────────
    Blockly.Blocks['esp32cam_set_param'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_SET_PARAM}',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'param',
                        options: [
                            ['vertical flip',      'vflip'],
                            ['horizontal mirror',  'hmirror'],
                            ['brightness',         'brightness'],
                            ['contrast',           'contrast'],
                            ['saturation',         'saturation'],
                            ['JPEG quality',       'quality'],
                        ]
                    },
                    { type: 'input_value', name: 'value', check: 'Number' }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    // ══════════════════════════════════════════════════════════════════════════
    // 串口控制类积木
    // ══════════════════════════════════════════════════════════════════════════

    // ── esp32cam_serial_cam ───────────────────────────────────────────────────
    // ESP32-CAM 端：监听串口指令控制摄像头开关（O=开 / F=关）
    Blockly.Blocks['esp32cam_serial_cam'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_SERIAL_CAM}',
                args0: [],
                colour: colorSerial,
                extensions: ['shape_statement']
            });
        }
    };

    // ── esp32cam_serial_gpio ──────────────────────────────────────────────────
    // ESP32-CAM 端：监听串口指令控制 GPIO 引脚反转
    Blockly.Blocks['esp32cam_serial_gpio'] = {
        init: function () {
            this.jsonInit({
                message0: '%{BKY_ESP32CAM_SERIAL_GPIO}',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'gpio',
                        options: [
                            ['GPIO4 (Flash)',  '4'],
                            ['GPIO2',  '2'],
                            ['GPIO12', '12'],
                            ['GPIO13', '13'],
                            ['GPIO14', '14'],
                            ['GPIO15', '15'],
                            ['GPIO33', '33'],
                        ]
                    },
                    { type: 'field_input', name: 'trigchar', text: 'a' }
                ],
                colour: colorSerial,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}
exports = addBlocks;
