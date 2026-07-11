/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_MOTOR_CATEGORY: 'Motor Control',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Register MCP service %1 description %2 param 1 %3 type %4 param 2 %5 type %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Is the MCP service name %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Get parameter %2 type %3 from MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Set MCP service %1 parameter %2 to value %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Report MCP service %1 execution complete',
        MOTOR_SET_MOTOR_STATE: 'Set motor IN1%1 IN2%2 direction %3 speed %4',
        MOTOR_FORWARD: 'Forward',
        MOTOR_BACKWARD: 'Backward',
        MOTOR_STOP: 'Stop',
        STRING: 'String',
        NUMBER: 'Number'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_MOTOR_CATEGORY: 'Motorsteuerung',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'MCP-Dienst %1 registrieren Beschreibung %2 Parameter 1 %3 Typ %4 Parameter 2 %5 Typ %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Ist der MCP-Dienstname %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Parameter %2 Typ %3 von MCP %1 abrufen',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'MCP-Dienst %1 Parameter %2 auf Wert %3 setzen',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'MCP-Dienst %1 Ausführung abgeschlossen melden',
        MOTOR_SET_MOTOR_STATE: 'Motor IN1%1 IN2%2 Richtung %3 Geschwindigkeit %4 setzen',
        MOTOR_FORWARD: 'Vorwärts',
        MOTOR_BACKWARD: 'Rückwärts',
        MOTOR_STOP: 'Stopp',
        STRING: 'Zeichenkette',
        NUMBER: 'Zahl'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_MOTOR_CATEGORY: 'Control de Motor',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Registrar servicio MCP %1 descripción %2 param 1 %3 tipo %4 param 2 %5 tipo %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: '¿Es el nombre del servicio MCP %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Obtener parámetro %2 tipo %3 de MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Establecer servicio MCP %1 parámetro %2 al valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Reportar servicio MCP %1 ejecución completada',
        MOTOR_SET_MOTOR_STATE: 'Configurar motor IN1%1 IN2%2 dirección %3 velocidad %4',
        MOTOR_FORWARD: 'Adelante',
        MOTOR_BACKWARD: 'Atrás',
        MOTOR_STOP: 'Detener',
        STRING: 'Cadena',
        NUMBER: 'Número'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_MOTOR_CATEGORY: 'Contrôle du Moteur',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Enregistrer service MCP %1 description %2 param 1 %3 type %4 param 2 %5 type %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Le nom du service MCP est-il %1 ?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Obtenir paramètre %2 type %3 de MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Définir service MCP %1 paramètre %2 à la valeur %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Signaler service MCP %1 exécution terminée',
        MOTOR_SET_MOTOR_STATE: 'Régler moteur IN1%1 IN2%2 direction %3 vitesse %4',
        MOTOR_FORWARD: 'Avant',
        MOTOR_BACKWARD: 'Arrière',
        MOTOR_STOP: 'Arrêt',
        STRING: 'Chaîne',
        NUMBER: 'Nombre'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_MOTOR_CATEGORY: 'Controllo Motore',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Registra servizio MCP %1 descrizione %2 param 1 %3 tipo %4 param 2 %5 tipo %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Il nome del servizio MCP è %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Ottieni parametro %2 tipo %3 da MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Imposta servizio MCP %1 parametro %2 al valore %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Segnala servizio MCP %1 esecuzione completata',
        MOTOR_SET_MOTOR_STATE: 'Imposta motore IN1%1 IN2%2 direzione %3 velocità %4',
        MOTOR_FORWARD: 'Avanti',
        MOTOR_BACKWARD: 'Indietro',
        MOTOR_STOP: 'Stop',
        STRING: 'Stringa',
        NUMBER: 'Numero'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_MOTOR_CATEGORY: 'モーター制御',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'MCPサービス %1 を登録 説明 %2 パラメータ1 %3 タイプ %4 パラメータ2 %5 タイプ %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'MCPサービス名は %1 ですか？',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'MCP %1 からパラメータ %2 タイプ %3 を取得',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'MCPサービス %1 パラメータ %2 を値 %3 に設定',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'MCPサービス %1 実行完了を報告',
        MOTOR_SET_MOTOR_STATE: 'モーターを設定 IN1%1 IN2%2 方向 %3 速度 %4',
        MOTOR_FORWARD: '正転',
        MOTOR_BACKWARD: '逆転',
        MOTOR_STOP: '停止',
        STRING: '文字列',
        NUMBER: '数値'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_MOTOR_CATEGORY: '모터 제어',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'MCP 서비스 %1 등록 설명 %2 매개변수1 %3 유형 %4 매개변수2 %5 유형 %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'MCP 서비스 이름이 %1인가요?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'MCP %1에서 매개변수 %2 유형 %3 가져오기',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'MCP 서비스 %1 매개변수 %2를 값 %3으로 설정',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'MCP 서비스 %1 실행 완료 보고',
        MOTOR_SET_MOTOR_STATE: '모터 설정 IN1%1 IN2%2 방향 %3 속도 %4',
        MOTOR_FORWARD: '정회전',
        MOTOR_BACKWARD: '역회전',
        MOTOR_STOP: '정지',
        STRING: '문자열',
        NUMBER: '수치'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_MOTOR_CATEGORY: 'Sterowanie Silnikiem',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Zarejestruj usługę MCP %1 opis %2 param 1 %3 typ %4 param 2 %5 typ %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Czy nazwa usługi MCP to %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Pobierz parametr %2 typ %3 z MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Ustaw usługę MCP %1 parametr %2 na wartość %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Zgłoś usługę MCP %1 wykonanie zakończone',
        MOTOR_SET_MOTOR_STATE: 'Ustaw silnik IN1%1 IN2%2 kierunek %3 prędkość %4',
        MOTOR_FORWARD: 'Do przodu',
        MOTOR_BACKWARD: 'Do tyłu',
        MOTOR_STOP: 'Stop',
        STRING: 'Ciąg',
        NUMBER: 'Liczba'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_MOTOR_CATEGORY: 'Controle de Motor',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Registrar serviço MCP %1 descrição %2 param 1 %3 tipo %4 param 2 %5 tipo %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'O nome do serviço MCP é %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Obter parâmetro %2 tipo %3 de MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Definir serviço MCP %1 parâmetro %2 para o valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Relatar serviço MCP %1 execução concluída',
        MOTOR_SET_MOTOR_STATE: 'Configurar motor IN1%1 IN2%2 direção %3 velocidade %4',
        MOTOR_FORWARD: 'Frente',
        MOTOR_BACKWARD: 'Trás',
        MOTOR_STOP: 'Parar',
        STRING: 'String',
        NUMBER: 'Número'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_MOTOR_CATEGORY: 'Управление Двигателем',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: 'Зарегистрировать службу MCP %1 описание %2 парам 1 %3 тип %4 парам 2 %5 тип %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'Имя службы MCP - %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: 'Получить параметр %2 тип %3 из MCP %1',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: 'Установить службу MCP %1 параметр %2 на значение %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: 'Сообщить о завершении выполнения службы MCP %1',
        MOTOR_SET_MOTOR_STATE: 'Настроить двигатель IN1%1 IN2%2 направление %3 скорость %4',
        MOTOR_FORWARD: 'Вперед',
        MOTOR_BACKWARD: 'Назад',
        MOTOR_STOP: 'Стоп',
        STRING: 'Строка',
        NUMBER: 'Число'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_MOTOR_CATEGORY: '馬達控制',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: '註冊MCP服務 %1 描述 %2 參數1 %3 類型 %4 參數2 %5 類型 %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'MCP服務名稱是 %1？',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: '從MCP %1 獲取參數 %2 類型 %3',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: '設置MCP服務 %1 參數%2 的值為 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: '上報MCP服務 %1 執行完成',
        MOTOR_SET_MOTOR_STATE: '設置馬達 IN1%1 IN2%2 方向%3 速度%4',
        MOTOR_FORWARD: '正轉',
        MOTOR_BACKWARD: '反轉',
        MOTOR_STOP: '停止',
        STRING: '字串',
        NUMBER: '數值'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_MOTOR_CATEGORY: '电机控制',
        AIBOT_REGISTER_MCP_MOTOR_SERVICE: '注册MCP服务 %1 描述 %2 参数1 %3 类型 %4 参数2 %5 类型 %6',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_MOTOR: 'MCP服务名称是 %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_MOTOR: '从MCP %1 获取参数 %2 类型 %3',
        AIBOT_UPDATE_MCP_CONTROL_STATE_MOTOR: '设置MCP服务 %1 参数%2 的值为 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_MOTOR: '上报MCP服务 %1 执行完成',
        MOTOR_SET_MOTOR_STATE: '设置电机 IN1%1 IN2%2 方向%3 速度%4',
        MOTOR_FORWARD: '正转',
        MOTOR_BACKWARD: '反转',
        MOTOR_STOP: '停止',
        STRING: '字符串',
        NUMBER: '数值'
    });

    return Blockly;
}

exports = addMsg;