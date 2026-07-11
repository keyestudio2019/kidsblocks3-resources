/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Ultrasonic Sensor',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Register MCP ultrasonic service %1 description %2 parameter %3 type %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Is the MCP service name %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Get value of MCP ultrasonic service %1 parameter %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Set MCP ultrasonic service %1 parameter %2 to value %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Report MCP ultrasonic service %1 execution result',
        ULTRASONIC_SENSOR_READ: 'Read ultrasonic sensor distance Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Boolean',
        NUMBER: 'Number'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Ultraschallsensor',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'MCP-Ultraschalldienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Ist der MCP-Dienstname %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Wert von MCP-Ultraschalldienst %1 Parameter %2 abrufen',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'MCP-Ultraschalldienst %1 Parameter %2 auf Wert %3 setzen',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'MCP-Ultraschalldienst %1 Ausführungsergebnis melden',
        ULTRASONIC_SENSOR_READ: 'Ultraschallsensor-Entfernung lesen Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Boole\'sch',
        NUMBER: 'Zahl'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Sensor Ultrasónico',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Registrar servicio ultrasónico MCP %1 descripción %2 parámetro %3 tipo %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: '¿Es el nombre del servicio MCP %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Obtener valor del servicio ultrasónico MCP %1 parámetro %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Establecer servicio ultrasónico MCP %1 parámetro %2 al valor %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Reportar resultado de ejecución del servicio ultrasónico MCP %1',
        ULTRASONIC_SENSOR_READ: 'Leer distancia del sensor ultrasónico Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Booleano',
        NUMBER: 'Número'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Capteur Ultrasonique',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Enregistrer service ultrasonique MCP %1 description %2 paramètre %3 type %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Le nom du service MCP est-il %1 ?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Obtenir la valeur du service ultrasonique MCP %1 paramètre %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Définir service ultrasonique MCP %1 paramètre %2 à la valeur %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Signaler résultat d\'exécution du service ultrasonique MCP %1',
        ULTRASONIC_SENSOR_READ: 'Lire distance capteur ultrasonique Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Booléen',
        NUMBER: 'Nombre'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Sensore Ultrasuoni',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Registra servizio ultrasuoni MCP %1 descrizione %2 parametro %3 tipo %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Il nome del servizio MCP è %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Ottieni valore del servizio ultrasuoni MCP %1 parametro %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Imposta servizio ultrasuoni MCP %1 parametro %2 al valore %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Segnala risultato esecuzione servizio ultrasuoni MCP %1',
        ULTRASONIC_SENSOR_READ: 'Leggi distanza sensore ultrasuoni Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Booleano',
        NUMBER: 'Numero'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: '超音波センサー',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'MCP超音波サービス %1 を登録 説明 %2 パラメータ %3 タイプ %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'MCPサービス名は %1 ですか？',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'MCP超音波サービス %1 パラメータ %2 の値を取得',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'MCP超音波サービス %1 パラメータ %2 を値 %3 に設定',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'MCP超音波サービス %1 実行結果を報告',
        ULTRASONIC_SENSOR_READ: '超音波センサー距離を読み取る Trig %1 Echo %2 (cm)',
        BOOLEAN: 'ブール値',
        NUMBER: '数値'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: '초음파 센서',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'MCP 초음파 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'MCP 서비스 이름이 %1인가요?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'MCP 초음파 서비스 %1 매개변수 %2의 값 가져오기',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'MCP 초음파 서비스 %1 매개변수 %2를 값 %3으로 설정',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'MCP 초음파 서비스 %1 실행 결과 보고',
        ULTRASONIC_SENSOR_READ: '초음파 센서 거리 읽기 Trig %1 Echo %2 (cm)',
        BOOLEAN: '부울',
        NUMBER: '수치'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Czujnik Ultradźwiękowy',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Zarejestruj usługę ultradźwiękową MCP %1 opis %2 parametr %3 typ %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Czy nazwa usługi MCP to %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Pobierz wartość usługi ultradźwiękowej MCP %1 parametr %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Ustaw usługę ultradźwiękową MCP %1 parametr %2 na wartość %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Zgłoś wynik wykonania usługi ultradźwiękowej MCP %1',
        ULTRASONIC_SENSOR_READ: 'Odczytaj odległość czujnika ultradźwiękowego Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Wartość logiczna',
        NUMBER: 'Liczba'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Sensor Ultrassônico',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Registrar serviço ultrassônico MCP %1 descrição %2 parâmetro %3 tipo %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'O nome do serviço MCP é %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Obter valor do serviço ultrassônico MCP %1 parâmetro %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Definir serviço ultrassônico MCP %1 parâmetro %2 para o valor %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Relatar resultado de execução do serviço ultrassônico MCP %1',
        ULTRASONIC_SENSOR_READ: 'Ler distância do sensor ultrassônico Trig %1 Echo %2 (cm)',
        BOOLEAN: 'Booleano',
        NUMBER: 'Número'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: 'Ультразвуковой Датчик',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: 'Зарегистрировать УЗ-службу MCP %1 описание %2 параметр %3 тип %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'Имя службы MCP - %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: 'Получить значение УЗ-службы MCP %1 параметр %2',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: 'Установить УЗ-службу MCP %1 параметр %2 на значение %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: 'Сообщить результат выполнения УЗ-службы MCP %1',
        ULTRASONIC_SENSOR_READ: 'Прочитать расстояние УЗ-датчика Trig %1 Echo %2 (см)',
        BOOLEAN: 'Логическое',
        NUMBER: 'Число'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: '超音波感測器',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: '註冊MCP超音波服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'MCP服務名稱是 %1？',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: '獲取MCP超音波服務 %1 參數 %2 的值',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: '設置MCP超音波服務 %1 參數 %2 的值為 %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: '上報MCP超音波服務 %1 執行結果',
        ULTRASONIC_SENSOR_READ: '讀取超音波感測器距離 Trig %1 Echo %2 (公分)',
        BOOLEAN: '布林值',
        NUMBER: '數值'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_ULTRASONIC_SENSOR_CATEGORY: '超声波传感器',
        AIBOT_REGISTER_MCP_ULTRASONIC_SENSOR_SERVICE: '注册MCP超声波服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_GET_ULTRASONIC_SENSOR_MCP_NAME: 'MCP服务名称是 %1?',
        AIBOT_GET_ULTRASONIC_SENSOR_PARAM_VALUE: '获取MCP超声波服务 %1 参数 %2 的值',
        AIBOT_UPDATE_ULTRASONIC_SENSOR_STATE: '设置MCP超声波服务 %1 参数 %2 的值为 %3',
        AIBOT_RESPONSE_ULTRASONIC_SENSOR_RESULT: '上报MCP超声波服务 %1 执行结果',
        ULTRASONIC_SENSOR_READ: '读取超声波传感器距离 Trig %1 Echo %2 (厘米)',
        BOOLEAN: '布尔值',
        NUMBER: '数值'
    });

    return Blockly;
}

exports = addMsg;