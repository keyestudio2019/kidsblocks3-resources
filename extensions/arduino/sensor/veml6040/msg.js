/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        VEML6040_CATEGORY:      'VEML6040 Color Sensor',
        VEML6040_INIT:          'Initialize VEML6040 color sensor',
        VEML6040_READ_RAW:      'VEML6040 read raw %1 value',
        VEML6040_UPDATE_RGB888: 'VEML6040 update RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 get color temperature (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 get ambient light (Lux)',
        VEML6040_LED_INIT:      'VEML6040 set LED pin %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'ON',
        VEML6040_LED_OFF:       'OFF'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        VEML6040_CATEGORY:      'VEML6040 Farbsensor',
        VEML6040_INIT:          'VEML6040 Farbsensor initialisieren',
        VEML6040_READ_RAW:      'VEML6040 Rohwert %1 lesen',
        VEML6040_UPDATE_RGB888: 'VEML6040 RGB888 aktualisieren',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 Farbtemperatur (CCT) lesen',
        VEML6040_GET_AMBIENT:   'VEML6040 Umgebungslicht (Lux) lesen',
        VEML6040_LED_INIT:      'VEML6040 LED-Pin %1 setzen',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'EIN',
        VEML6040_LED_OFF:       'AUS'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        VEML6040_CATEGORY:      'Sensor de color VEML6040',
        VEML6040_INIT:          'Inicializar sensor de color VEML6040',
        VEML6040_READ_RAW:      'VEML6040 leer valor bruto %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 actualizar RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 obtener temperatura de color (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 obtener luz ambiental (Lux)',
        VEML6040_LED_INIT:      'VEML6040 configurar pin LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'ENCENDER',
        VEML6040_LED_OFF:       'APAGAR'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        VEML6040_CATEGORY:      'Capteur de couleur VEML6040',
        VEML6040_INIT:          'Initialiser le capteur de couleur VEML6040',
        VEML6040_READ_RAW:      'VEML6040 lire valeur brute %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 mettre à jour RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 obtenir température de couleur (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 obtenir lumière ambiante (Lux)',
        VEML6040_LED_INIT:      'VEML6040 configurer broche LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'ALLUMER',
        VEML6040_LED_OFF:       'ÉTEINDRE'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        VEML6040_CATEGORY:      'VEML6040 カラーセンサー',
        VEML6040_INIT:          'VEML6040 カラーセンサーを初期化',
        VEML6040_READ_RAW:      'VEML6040 %1 チャンネル生の値を読み取る',
        VEML6040_UPDATE_RGB888: 'VEML6040 RGB888 を更新',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 色温度（CCT）を取得',
        VEML6040_GET_AMBIENT:   'VEML6040 環境光（Lux）を取得',
        VEML6040_LED_INIT:      'VEML6040 LED ピン %1 設定',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'オン',
        VEML6040_LED_OFF:       'オフ'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        VEML6040_CATEGORY:      'VEML6040 컬러 센서',
        VEML6040_INIT:          'VEML6040 컬러 센서 초기화',
        VEML6040_READ_RAW:      'VEML6040 %1 채널 원시 값 읽기',
        VEML6040_UPDATE_RGB888: 'VEML6040 RGB888 업데이트',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 색온도(CCT) 가져오기',
        VEML6040_GET_AMBIENT:   'VEML6040 주변광(Lux) 가져오기',
        VEML6040_LED_INIT:      'VEML6040 LED 핀 %1 설정',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        '켜기',
        VEML6040_LED_OFF:       '끄기'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        VEML6040_CATEGORY:      'Czujnik koloru VEML6040',
        VEML6040_INIT:          'Zainicjuj czujnik koloru VEML6040',
        VEML6040_READ_RAW:      'VEML6040 odczyt surowy %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 aktualizuj RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 pobierz temperaturę barwową (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 pobierz światło otoczenia (Lux)',
        VEML6040_LED_INIT:      'VEML6040 ustaw pin LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'WŁ',
        VEML6040_LED_OFF:       'WYŁ'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        VEML6040_CATEGORY:      'Sensor de cor VEML6040',
        VEML6040_INIT:          'Inicializar sensor de cor VEML6040',
        VEML6040_READ_RAW:      'VEML6040 ler valor bruto %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 atualizar RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 obter temperatura de cor (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 obter luz ambiente (Lux)',
        VEML6040_LED_INIT:      'VEML6040 definir pino LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'LIGAR',
        VEML6040_LED_OFF:       'DESLIGAR'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        VEML6040_CATEGORY:      'Датчик цвета VEML6040',
        VEML6040_INIT:          'Инициализировать датчик цвета VEML6040',
        VEML6040_READ_RAW:      'VEML6040 считать сырое значение %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 обновить RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 получить цветовую температуру (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 получить освещённость (Lux)',
        VEML6040_LED_INIT:      'VEML6040 настроить пин LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'ВКЛ',
        VEML6040_LED_OFF:       'ВЫКЛ'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        VEML6040_CATEGORY:      'VEML6040 顏色傳感器',
        VEML6040_INIT:          '初始化 VEML6040 顏色傳感器',
        VEML6040_READ_RAW:      'VEML6040 讀取 %1 通道原始值',
        VEML6040_UPDATE_RGB888: 'VEML6040 更新 RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 獲取色溫（CCT）',
        VEML6040_GET_AMBIENT:   'VEML6040 獲取環境光照度（Lux）',
        VEML6040_LED_INIT:      'VEML6040 設定 LED 引腳 %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        '開',
        VEML6040_LED_OFF:       '關'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        VEML6040_CATEGORY:      'VEML6040 颜色传感器',
        VEML6040_INIT:          '初始化 VEML6040 颜色传感器',
        VEML6040_READ_RAW:      'VEML6040 读取 %1 通道原始值',
        VEML6040_UPDATE_RGB888: 'VEML6040 更新 RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 获取色温（CCT）',
        VEML6040_GET_AMBIENT:   'VEML6040 获取环境光照度（Lux）',
        VEML6040_LED_INIT:      'VEML6040 设置 LED 引脚 %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        '开',
        VEML6040_LED_OFF:       '关'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        VEML6040_CATEGORY:      'Sensore colore VEML6040',
        VEML6040_INIT:          'Inizializza sensore colore VEML6040',
        VEML6040_READ_RAW:      'VEML6040 leggi valore grezzo %1',
        VEML6040_UPDATE_RGB888: 'VEML6040 aggiorna RGB888',
        VEML6040_READ_RGB888:   'VEML6040 RGB888 %1',
        VEML6040_GET_CCT:       'VEML6040 ottieni temperatura colore (CCT)',
        VEML6040_GET_AMBIENT:   'VEML6040 ottieni luce ambientale (Lux)',
        VEML6040_LED_INIT:      'VEML6040 imposta pin LED %1',
        VEML6040_LED_SET:       'VEML6040 LED %1',
        VEML6040_LED_ON:        'ACCENDI',
        VEML6040_LED_OFF:       'SPEGNI'
    });
    return Blockly;
}
exports = addMsg;
