/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {

    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_DHT11_CATEGORY: 'Temperature & Humidity',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Register DHT11 sensor temperature name %1 description %2 humidity name %3 description %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Update DHT11 property %1 value to %2',
        DHT_INIT: 'DHT pin %1 type %2',
        KE_DHT: 'DHT read %1',
        DHT_TEMPERATURE: 'temperature',
        DHT_HUMIDITY: 'humidity'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_DHT11_CATEGORY: 'Temperatur & Luftfeuchtigkeit',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'DHT11-Sensor registrieren Temperaturname %1 Beschreibung %2 Feuchtigkeitsname %3 Beschreibung %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'DHT11-Eigenschaft %1 Wert aktualisieren auf %2',
        DHT_INIT: 'DHT Pin %1 Typ %2',
        KE_DHT: 'DHT lesen %1',
        DHT_TEMPERATURE: 'Temperatur',
        DHT_HUMIDITY: 'Luftfeuchtigkeit'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_DHT11_CATEGORY: 'Temperatura y Humedad',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Registrar sensor DHT11 nombre temperatura %1 descripción %2 nombre humedad %3 descripción %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Actualizar propiedad DHT11 %1 valor a %2',
        DHT_INIT: 'DHT pin %1 tipo %2',
        KE_DHT: 'DHT leer %1',
        DHT_TEMPERATURE: 'temperatura',
        DHT_HUMIDITY: 'humedad'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_DHT11_CATEGORY: 'Température & Humidité',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Enregistrer capteur DHT11 nom température %1 description %2 nom humidité %3 description %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Mettre à jour propriété DHT11 %1 valeur à %2',
        DHT_INIT: 'DHT broche %1 type %2',
        KE_DHT: 'DHT lire %1',
        DHT_TEMPERATURE: 'température',
        DHT_HUMIDITY: 'humidité'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_DHT11_CATEGORY: 'Temperatura e Umidità',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Registra sensore DHT11 nome temperatura %1 descrizione %2 nome umidità %3 descrizione %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Aggiorna proprietà DHT11 %1 valore a %2',
        DHT_INIT: 'DHT pin %1 tipo %2',
        KE_DHT: 'DHT leggi %1',
        DHT_TEMPERATURE: 'temperatura',
        DHT_HUMIDITY: 'umidità'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_DHT11_CATEGORY: '温湿度',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'DHT11センサー登録 温度名 %1 説明 %2 湿度名 %3 説明 %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'DHT11プロパティ %1 の値を %2 に更新',
        DHT_INIT: 'DHT ピン %1 タイプ %2',
        KE_DHT: 'DHT 読み取り %1',
        DHT_TEMPERATURE: '温度',
        DHT_HUMIDITY: '湿度'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_DHT11_CATEGORY: '온습도',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'DHT11 센서 등록 온도 이름 %1 설명 %2 습도 이름 %3 설명 %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'DHT11 속성 %1 값을 %2 로 업데이트',
        DHT_INIT: 'DHT 핀 %1 유형 %2',
        KE_DHT: 'DHT 읽기 %1',
        DHT_TEMPERATURE: '온도',
        DHT_HUMIDITY: '습도'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_DHT11_CATEGORY: 'Temperatura i Wilgotność',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Zarejestruj czujnik DHT11 nazwa temperatury %1 opis %2 nazwa wilgotności %3 opis %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Zaktualizuj właściwość DHT11 %1 wartość do %2',
        DHT_INIT: 'DHT pin %1 typ %2',
        KE_DHT: 'DHT odczyt %1',
        DHT_TEMPERATURE: 'temperatura',
        DHT_HUMIDITY: 'wilgotność'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_DHT11_CATEGORY: 'Temperatura e Humidade',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Registrar sensor DHT11 nome temperatura %1 descrição %2 nome humidade %3 descrição %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Atualizar propriedade DHT11 %1 valor para %2',
        DHT_INIT: 'DHT pino %1 tipo %2',
        KE_DHT: 'DHT ler %1',
        DHT_TEMPERATURE: 'temperatura',
        DHT_HUMIDITY: 'humidade'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_DHT11_CATEGORY: 'Температура и влажность',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: 'Зарегистрировать датчик DHT11 имя температуры %1 описание %2 имя влажности %3 описание %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: 'Обновить свойство DHT11 %1 значение на %2',
        DHT_INIT: 'DHT пин %1 тип %2',
        KE_DHT: 'DHT читать %1',
        DHT_TEMPERATURE: 'температура',
        DHT_HUMIDITY: 'влажность'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_DHT11_CATEGORY: '溫濕度裝置',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: '註冊DHT11感測器 溫度名稱 %1 屬性描述 %2 濕度名稱 %3 屬性描述 %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: '更新DHT11屬性 %1 資料為 %2',
        DHT_INIT: '溫濕度引腳 %1 型號 %2',
        KE_DHT: '溫濕度獲取 %1',
        DHT_TEMPERATURE: '溫度',
        DHT_HUMIDITY: '濕度'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_DHT11_CATEGORY: '温湿度设备',
        AIBOT_REGISTER_DHT11_SENSOR_DRIVER_STATUS: '注册DHT11传感器 温度名称 %1 属性描述 %2 湿度名称 %3 属性描述 %4',
        AIBOT_UPDATE_DHT11_IOT_STATE: '更新DHT11属性 %1 数据为 %2',
        DHT_INIT: '温湿度引脚 %1 型号 %2',
        KE_DHT: '温湿度获取 %1',
        DHT_TEMPERATURE: '温度',
        DHT_HUMIDITY: '湿度'
    });

    return Blockly;
}

exports = addMsg;
