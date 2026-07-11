/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_ANALOG_SENSOR_CATEGORY: 'Analog Sensors',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Register MCP service %1 description %2 parameter %3 type %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Is the MCP service name %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Get the result of MCP service %1 parameter %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Set MCP service %1 parameter %2 to value %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Report MCP service %1 execution complete',
        NUMBER: 'Number',
        STRING: 'String',
        ANALOG_SENSOR_READ: 'Read value from %1 pin %2',
        PHOTORESISTOR: 'Photoresistor',
        THERMISTOR: 'Thermistor',
        SOIL_MOISTURE: 'Soil Moisture Sensor',
        WATER_LEVEL: 'Water Level Sensor',
        SOUND_SENSOR: 'Sound Sensor',
        POTENTIOMETER: 'Potentiometer',
        RAIN_SENSOR: 'Rain Sensor',
        GAS_SENSOR: 'Gas Sensor',
        ALCOHOL_SENSOR: 'Alcohol Sensor',
        PRESSURE_SENSOR: 'Pressure Sensor',
        UV_SENSOR: 'UV Sensor'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Analoge Sensoren',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'MCP-Dienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Ist der MCP-Dienstname %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Ergebnis des MCP-Diensts %1 Parameter %2 abrufen',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'MCP-Dienst %1 Parameter %2 auf Wert %3 setzen',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'MCP-Dienst %1 Ausführung abgeschlossen melden',
        NUMBER: 'Zahl',
        STRING: 'Zeichenkette',
        ANALOG_SENSOR_READ: 'Wert von %1 Pin %2 lesen',
        PHOTORESISTOR: 'Fotowiderstand',
        THERMISTOR: 'Thermistor',
        SOIL_MOISTURE: 'Bodenfeuchtigkeitssensor',
        WATER_LEVEL: 'Wasserstandssensor',
        SOUND_SENSOR: 'Geräuschesensor',
        POTENTIOMETER: 'Potentiometer',
        RAIN_SENSOR: 'Regensensor',
        GAS_SENSOR: 'Gassensor',
        ALCOHOL_SENSOR: 'Alkoholsensor',
        PRESSURE_SENSOR: 'Drucksensor',
        UV_SENSOR: 'UV-Sensor'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Sensores Analógicos',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Registrar servicio MCP %1 descripción %2 parámetro %3 tipo %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: '¿Es el nombre del servicio MCP %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Obtener el resultado del servicio MCP %1 parámetro %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Establecer servicio MCP %1 parámetro %2 al valor %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Reportar servicio MCP %1 ejecución completada',
        NUMBER: 'Número',
        STRING: 'Cadena',
        ANALOG_SENSOR_READ: 'Leer valor de %1 pin %2',
        PHOTORESISTOR: 'Fotoresistencia',
        THERMISTOR: 'Termistor',
        SOIL_MOISTURE: 'Sensor de Humedad del Suelo',
        WATER_LEVEL: 'Sensor de Nivel de Agua',
        SOUND_SENSOR: 'Sensor de Sonido',
        POTENTIOMETER: 'Potenciómetro',
        RAIN_SENSOR: 'Sensor de Lluvia',
        GAS_SENSOR: 'Sensor de Gas',
        ALCOHOL_SENSOR: 'Sensor de Alcohol',
        PRESSURE_SENSOR: 'Sensor de Presión',
        UV_SENSOR: 'Sensor UV'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Capteurs Analogiques',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Enregistrer service MCP %1 description %2 paramètre %3 type %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Le nom du service MCP est-il %1 ?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Obtenir le résultat du service MCP %1 paramètre %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Définir service MCP %1 paramètre %2 à la valeur %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Signaler service MCP %1 exécution terminée',
        NUMBER: 'Nombre',
        STRING: 'Chaîne',
        ANALOG_SENSOR_READ: 'Lire la valeur de %1 broche %2',
        PHOTORESISTOR: 'Photorésistance',
        THERMISTOR: 'Thermistance',
        SOIL_MOISTURE: 'Capteur d\'Humidité du Sol',
        WATER_LEVEL: 'Capteur de Niveau d\'Eau',
        SOUND_SENSOR: 'Capteur de Son',
        POTENTIOMETER: 'Potentiomètre',
        RAIN_SENSOR: 'Capteur de Pluie',
        GAS_SENSOR: 'Capteur de Gaz',
        ALCOHOL_SENSOR: 'Capteur d\'Alcool',
        PRESSURE_SENSOR: 'Capteur de Pression',
        UV_SENSOR: 'Capteur UV'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Sensori Analogici',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Registra servizio MCP %1 descrizione %2 parametro %3 tipo %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Il nome del servizio MCP è %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Ottieni il risultato del servizio MCP %1 parametro %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Imposta servizio MCP %1 parametro %2 al valore %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Segnala servizio MCP %1 esecuzione completata',
        NUMBER: 'Numero',
        STRING: 'Stringa',
        ANALOG_SENSOR_READ: 'Leggi valore da %1 pin %2',
        PHOTORESISTOR: 'Fotoresistore',
        THERMISTOR: 'Termistore',
        SOIL_MOISTURE: 'Sensore di Umidità del Suolo',
        WATER_LEVEL: 'Sensore di Livello dell\'Acqua',
        SOUND_SENSOR: 'Sensore di Suono',
        POTENTIOMETER: 'Potenziometro',
        RAIN_SENSOR: 'Sensore di Pioggia',
        GAS_SENSOR: 'Sensore di Gas',
        ALCOHOL_SENSOR: 'Sensore di Alcol',
        PRESSURE_SENSOR: 'Sensore di Pressione',
        UV_SENSOR: 'Sensore UV'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_ANALOG_SENSOR_CATEGORY: 'アナログセンサー',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'MCPサービス %1 を登録 説明 %2 パラメータ %3 タイプ %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'MCPサービス名は %1 ですか？',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'MCPサービス %1 パラメータ %2 の結果を取得',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'MCPサービス %1 パラメータ %2 を値 %3 に設定',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'MCPサービス %1 実行完了を報告',
        NUMBER: '数値',
        STRING: '文字列',
        ANALOG_SENSOR_READ: '%1 ピン %2 の値を読み取る',
        PHOTORESISTOR: '光依存抵抗',
        THERMISTOR: 'サーミスタ',
        SOIL_MOISTURE: '土壌水分センサー',
        WATER_LEVEL: '水位センサー',
        SOUND_SENSOR: '音センサー',
        POTENTIOMETER: 'ポテンショメーター',
        RAIN_SENSOR: '雨センサー',
        GAS_SENSOR: 'ガスセンサー',
        ALCOHOL_SENSOR: 'アルコールセンサー',
        PRESSURE_SENSOR: '圧力センサー',
        UV_SENSOR: 'UVセンサー'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_ANALOG_SENSOR_CATEGORY: '아날로그 센서',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'MCP 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'MCP 서비스 이름이 %1인가요?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'MCP 서비스 %1 매개변수 %2의 결과를 가져오기',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'MCP 서비스 %1 매개변수 %2를 값 %3으로 설정',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'MCP 서비스 %1 실행 완료 보고',
        NUMBER: '수치',
        STRING: '문자열',
        ANALOG_SENSOR_READ: '%1 핀 %2의 값을 읽기',
        PHOTORESISTOR: '광민감 저항',
        THERMISTOR: '써미스터',
        SOIL_MOISTURE: '토양 수분 센서',
        WATER_LEVEL: '수위 센서',
        SOUND_SENSOR: '소리 센서',
        POTENTIOMETER: '가변 저항기',
        RAIN_SENSOR: '비 센서',
        GAS_SENSOR: '가스 센서',
        ALCOHOL_SENSOR: '알코올 센서',
        PRESSURE_SENSOR: '압력 센서',
        UV_SENSOR: 'UV 센서'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Czujniki Analogowe',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Zarejestruj usługę MCP %1 opis %2 parametr %3 typ %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Czy nazwa usługi MCP to %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Pobierz wynik usługi MCP %1 parametr %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Ustaw usługę MCP %1 parametr %2 na wartość %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Zgłoś usługę MCP %1 wykonanie zakończone',
        NUMBER: 'Liczba',
        STRING: 'Ciąg',
        ANALOG_SENSOR_READ: 'Odczytaj wartość z %1 pinu %2',
        PHOTORESISTOR: 'Fotoopornik',
        THERMISTOR: 'Termistor',
        SOIL_MOISTURE: 'Czujnik Wilgotności Gleby',
        WATER_LEVEL: 'Czujnik Poziomu Wody',
        SOUND_SENSOR: 'Czujnik Dźwięku',
        POTENTIOMETER: 'Potencjometr',
        RAIN_SENSOR: 'Czujnik Deszczu',
        GAS_SENSOR: 'Czujnik Gazu',
        ALCOHOL_SENSOR: 'Czujnik Alkoholu',
        PRESSURE_SENSOR: 'Czujnik Ciśnienia',
        UV_SENSOR: 'Czujnik UV'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Sensores Analógicos',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Registrar serviço MCP %1 descrição %2 parâmetro %3 tipo %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'O nome do serviço MCP é %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Obter o resultado do serviço MCP %1 parâmetro %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Definir serviço MCP %1 parâmetro %2 para o valor %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Relatar serviço MCP %1 execução concluída',
        NUMBER: 'Número',
        STRING: 'String',
        ANALOG_SENSOR_READ: 'Ler valor de %1 pino %2',
        PHOTORESISTOR: 'Fotoresistor',
        THERMISTOR: 'Termistor',
        SOIL_MOISTURE: 'Sensor de Umidade do Solo',
        WATER_LEVEL: 'Sensor de Nível de Água',
        SOUND_SENSOR: 'Sensor de Som',
        POTENTIOMETER: 'Potenciômetro',
        RAIN_SENSOR: 'Sensor de Chuva',
        GAS_SENSOR: 'Sensor de Gás',
        ALCOHOL_SENSOR: 'Sensor de Álcool',
        PRESSURE_SENSOR: 'Sensor de Pressão',
        UV_SENSOR: 'Sensor UV'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_ANALOG_SENSOR_CATEGORY: 'Аналоговые Датчики',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: 'Зарегистрировать службу MCP %1 описание %2 параметр %3 тип %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'Имя службы MCP - %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: 'Получить результат службы MCP %1 параметр %2',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: 'Установить службу MCP %1 параметр %2 на значение %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: 'Сообщить о завершении выполнения службы MCP %1',
        NUMBER: 'Число',
        STRING: 'Строка',
        ANALOG_SENSOR_READ: 'Прочитать значение с %1 пина %2',
        PHOTORESISTOR: 'Фоторезистор',
        THERMISTOR: 'Термистор',
        SOIL_MOISTURE: 'Датчик Влажности Почвы',
        WATER_LEVEL: 'Датчик Уровня Воды',
        SOUND_SENSOR: 'Датчик Звука',
        POTENTIOMETER: 'Потенциометр',
        RAIN_SENSOR: 'Датчик Дождя',
        GAS_SENSOR: 'Датчик Газа',
        ALCOHOL_SENSOR: 'Датчик Алкоголя',
        PRESSURE_SENSOR: 'Датчик Давления',
        UV_SENSOR: 'Датчик УФ'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_ANALOG_SENSOR_CATEGORY: '類比感測器',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: '註冊MCP服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'MCP服務名稱是 %1？',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: '獲取MCP服務 %1 參數 %2的結果',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: '設置MCP服務 %1 參數%2 的值為 %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: '上報MCP服務 %1 執行完成',
        NUMBER: '數值',
        STRING: '字串',
        ANALOG_SENSOR_READ: '讀取%1 引腳%2的值',
        PHOTORESISTOR: '光敏電阻',
        THERMISTOR: '熱敏電阻',
        SOIL_MOISTURE: '土壤濕度感測器',
        WATER_LEVEL: '水位感測器',
        SOUND_SENSOR: '聲音感測器',
        POTENTIOMETER: '電位器',
        RAIN_SENSOR: '雨水感測器',
        GAS_SENSOR: '煤氣感測器',
        ALCOHOL_SENSOR: '酒精感測器',
        PRESSURE_SENSOR: '壓力感測器',
        UV_SENSOR: '紫外線感測器'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_ANALOG_SENSOR_CATEGORY: '模拟传感器',
        AIBOT_REGISTER_MCP_ANALOG_SENSOR_SERVICE: '注册MCP服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_GET_ANALOG_SENSOR_MCP_NAME: 'MCP服务名称是 %1?',
        AIBOT_GET_ANALOG_SENSOR_PARAM_VALUE: '获取MCP服务 %1 参数 %2的结果',
        AIBOT_UPDATE_ANALOG_SENSOR_STATE: '设置MCP服务 %1 参数%2 的值为 %3',
        AIBOT_RESPONSE_ANALOG_SENSOR_RESULT: '上报MCP服务 %1 执行完成',
        NUMBER: '数值',
        STRING: '字符串',
        ANALOG_SENSOR_READ: '读取%1 引脚%2的值',
        PHOTORESISTOR: '光敏电阻',
        THERMISTOR: '热敏电阻',
        SOIL_MOISTURE: '土壤湿度传感器',
        WATER_LEVEL: '水位传感器',
        SOUND_SENSOR: '声音传感器',
        POTENTIOMETER: '电位器',
        RAIN_SENSOR: '雨水传感器',
        GAS_SENSOR: '煤气传感器',
        ALCOHOL_SENSOR: '酒精传感器',
        PRESSURE_SENSOR: '压力传感器',
        UV_SENSOR: '紫外线传感器'
    });

    return Blockly;
}

exports = addMsg;