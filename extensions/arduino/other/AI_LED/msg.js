/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_LED_CATEGORY: 'LED Devices',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Register MCP service %1 description %2 parameter %3 type %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Is the MCP service name %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Get result of MCP service %1 parameter %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Set MCP service %1 parameter %2 to value %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Report MCP service %1 execution complete',
        LED_SET_LED_STATE: 'Set pin %1 output %2',
        LED_ON: 'High',
        LED_OFF: 'Low',
        BOOLEAN: 'Boolean',
        NUMBER: 'Number'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_LED_CATEGORY: 'LED-Geräte',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'MCP-Dienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Ist der MCP-Dienstname %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Ergebnis des MCP-Diensts %1 Parameter %2 abrufen',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'MCP-Dienst %1 Parameter %2 auf Wert %3 setzen',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'MCP-Dienst %1 Ausführung abgeschlossen melden',
        LED_SET_LED_STATE: 'Pin %1 Ausgang %2 setzen',
        LED_ON: 'Hoch',
        LED_OFF: 'Niedrig',
        BOOLEAN: 'Boole\'sch',
        NUMBER: 'Zahl'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_LED_CATEGORY: 'Dispositivos LED',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Registrar servicio MCP %1 descripción %2 parámetro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: '¿Es el nombre del servicio MCP %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Obtener resultado del servicio MCP %1 parámetro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Establecer servicio MCP %1 parámetro %2 al valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Reportar servicio MCP %1 ejecución completada',
        LED_SET_LED_STATE: 'Establecer pin %1 salida %2',
        LED_ON: 'Alto',
        LED_OFF: 'Bajo',
        BOOLEAN: 'Booleano',
        NUMBER: 'Número'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_LED_CATEGORY: 'Dispositifs LED',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Enregistrer service MCP %1 description %2 paramètre %3 type %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Le nom du service MCP est-il %1 ?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Obtenir le résultat du service MCP %1 paramètre %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Définir service MCP %1 paramètre %2 à la valeur %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Signaler service MCP %1 exécution terminée',
        LED_SET_LED_STATE: 'Régler broche %1 sortie %2',
        LED_ON: 'Haut',
        LED_OFF: 'Bas',
        BOOLEAN: 'Booléen',
        NUMBER: 'Nombre'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_LED_CATEGORY: 'Dispositivi LED',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Registra servizio MCP %1 descrizione %2 parametro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Il nome del servizio MCP è %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Ottieni risultato del servizio MCP %1 parametro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Imposta servizio MCP %1 parametro %2 al valore %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Segnala servizio MCP %1 esecuzione completata',
        LED_SET_LED_STATE: 'Imposta pin %1 uscita %2',
        LED_ON: 'Alto',
        LED_OFF: 'Basso',
        BOOLEAN: 'Booleano',
        NUMBER: 'Numero'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_LED_CATEGORY: 'LEDデバイス',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'MCPサービス %1 を登録 説明 %2 パラメータ %3 タイプ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'MCPサービス名は %1 ですか？',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'MCPサービス %1 パラメータ %2 の結果を取得',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'MCPサービス %1 パラメータ %2 を値 %3 に設定',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'MCPサービス %1 実行完了を報告',
        LED_SET_LED_STATE: 'ピン %1 出力を %2 に設定',
        LED_ON: '高',
        LED_OFF: '低',
        BOOLEAN: 'ブール値',
        NUMBER: '数値'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_LED_CATEGORY: 'LED 장치',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'MCP 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'MCP 서비스 이름이 %1인가요?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'MCP 서비스 %1 매개변수 %2의 결과 가져오기',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'MCP 서비스 %1 매개변수 %2를 값 %3으로 설정',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'MCP 서비스 %1 실행 완료 보고',
        LED_SET_LED_STATE: '핀 %1 출력 %2 설정',
        LED_ON: '높음',
        LED_OFF: '낮음',
        BOOLEAN: '부울',
        NUMBER: '수치'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_LED_CATEGORY: 'Urządzenia LED',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Zarejestruj usługę MCP %1 opis %2 parametr %3 typ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Czy nazwa usługi MCP to %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Pobierz wynik usługi MCP %1 parametr %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Ustaw usługę MCP %1 parametr %2 na wartość %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Zgłoś usługę MCP %1 wykonanie zakończone',
        LED_SET_LED_STATE: 'Ustaw pin %1 wyjście %2',
        LED_ON: 'Wysoki',
        LED_OFF: 'Niski',
        BOOLEAN: 'Wartość logiczna',
        NUMBER: 'Liczba'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_LED_CATEGORY: 'Dispositivos LED',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Registrar serviço MCP %1 descrição %2 parâmetro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'O nome do serviço MCP é %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Obter resultado do serviço MCP %1 parâmetro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Definir serviço MCP %1 parâmetro %2 para o valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Relatar serviço MCP %1 execução concluída',
        LED_SET_LED_STATE: 'Definir pino %1 saída %2',
        LED_ON: 'Alto',
        LED_OFF: 'Baixo',
        BOOLEAN: 'Booleano',
        NUMBER: 'Número'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_LED_CATEGORY: 'Светодиодные Устройства',
        AIBOT_REGISTER_MCP_LED_SERVICE: 'Зарегистрировать службу MCP %1 описание %2 параметр %3 тип %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'Имя службы MCP - %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: 'Получить результат службы MCP %1 параметр %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: 'Установить службу MCP %1 параметр %2 на значение %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: 'Сообщить о завершении выполнения службы MCP %1',
        LED_SET_LED_STATE: 'Установить пин %1 выход %2',
        LED_ON: 'Высокий',
        LED_OFF: 'Низкий',
        BOOLEAN: 'Логическое',
        NUMBER: 'Число'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_LED_CATEGORY: 'LED裝置',
        AIBOT_REGISTER_MCP_LED_SERVICE: '註冊MCP服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'MCP服務名稱是 %1？',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: '獲取MCP服務 %1 參數 %2的結果',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: '設置MCP服務 %1 參數%2 的值為 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: '上報MCP服務 %1 執行完成',
        LED_SET_LED_STATE: '設置引腳%1 輸出%2',
        LED_ON: '高',
        LED_OFF: '低',
        BOOLEAN: '布林值',
        NUMBER: '數值'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_LED_CATEGORY: 'LED设备',
        AIBOT_REGISTER_MCP_LED_SERVICE: '注册MCP服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_LED: 'MCP服务名称是 %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_LED: '获取MCP服务 %1 参数 %2的结果',
        AIBOT_UPDATE_MCP_CONTROL_STATE_LED: '设置MCP服务 %1 参数%2 的值为 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_LED: '上报MCP服务 %1 执行完成',
        LED_SET_LED_STATE: '设置引脚%1 输出%2',
        LED_ON: '高',
        LED_OFF: '低',
        BOOLEAN: '布尔值',
        NUMBER: '数值'
    });

    return Blockly;
}

exports = addMsg;