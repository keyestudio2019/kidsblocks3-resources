/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_SERVO_CATEGORY: 'Servo Devices',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Register MCP servo service %1 description %2 parameter %3 type %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Is the MCP servo service name %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Get result of MCP servo service %1 parameter %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Set MCP servo service %1 parameter %2 to value %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Report MCP servo service %1 execution complete',
        SERVO_SET_ANGLE: 'Set servo pin %1 angle %2 delay %3 ms',
        SERVO_READ: 'Read angle of servo pin %1',
        NUMBER: 'Number'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_SERVO_CATEGORY: 'Servo-Geräte',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'MCP-Servodienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Ist der MCP-Servodienstname %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Ergebnis des MCP-Servodiensts %1 Parameter %2 abrufen',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'MCP-Servodienst %1 Parameter %2 auf Wert %3 setzen',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'MCP-Servodienst %1 Ausführung abgeschlossen melden',
        SERVO_SET_ANGLE: 'Servo Pin %1 Winkel %2 Verzögerung %3 ms setzen',
        SERVO_READ: 'Winkel von Servo Pin %1 lesen',
        NUMBER: 'Zahl'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_SERVO_CATEGORY: 'Dispositivos Servo',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Registrar servicio servo MCP %1 descripción %2 parámetro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: '¿Es el nombre del servicio servo MCP %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Obtener resultado del servicio servo MCP %1 parámetro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Establecer servicio servo MCP %1 parámetro %2 al valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Reportar servicio servo MCP %1 ejecución completada',
        SERVO_SET_ANGLE: 'Configurar servo pin %1 ángulo %2 retardo %3 ms',
        SERVO_READ: 'Leer ángulo del servo pin %1',
        NUMBER: 'Número'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_SERVO_CATEGORY: 'Dispositifs Servo',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Enregistrer service servo MCP %1 description %2 paramètre %3 type %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Le nom du service servo MCP est-il %1 ?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Obtenir le résultat du service servo MCP %1 paramètre %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Définir service servo MCP %1 paramètre %2 à la valeur %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Signaler service servo MCP %1 exécution terminée',
        SERVO_SET_ANGLE: 'Régler servo broche %1 angle %2 délai %3 ms',
        SERVO_READ: 'Lire l\'angle du servo broche %1',
        NUMBER: 'Nombre'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_SERVO_CATEGORY: 'Dispositivi Servo',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Registra servizio servo MCP %1 descrizione %2 parametro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Il nome del servizio servo MCP è %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Ottieni risultato del servizio servo MCP %1 parametro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Imposta servizio servo MCP %1 parametro %2 al valore %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Segnala servizio servo MCP %1 esecuzione completata',
        SERVO_SET_ANGLE: 'Imposta servo pin %1 angolo %2 ritardo %3 ms',
        SERVO_READ: 'Leggi angolo del servo pin %1',
        NUMBER: 'Numero'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_SERVO_CATEGORY: 'サーボデバイス',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'MCPサーボサービス %1 を登録 説明 %2 パラメータ %3 タイプ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'MCPサーボサービス名は %1 ですか？',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'MCPサーボサービス %1 パラメータ %2 の結果を取得',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'MCPサーボサービス %1 パラメータ %2 を値 %3 に設定',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'MCPサーボサービス %1 実行完了を報告',
        SERVO_SET_ANGLE: 'サーボ ピン%1 角度%2 遅延%3ミリ秒',
        SERVO_READ: 'ピン%1 のサーボ角度を読み取る',
        NUMBER: '数値'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_SERVO_CATEGORY: '서보 장치',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'MCP 서보 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'MCP 서보 서비스 이름이 %1인가요?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'MCP 서보 서비스 %1 매개변수 %2의 결과 가져오기',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'MCP 서보 서비스 %1 매개변수 %2를 값 %3으로 설정',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'MCP 서보 서비스 %1 실행 완료 보고',
        SERVO_SET_ANGLE: '서보 핀%1 각도%2 지연%3ms 설정',
        SERVO_READ: '서보 핀%1 각도 읽기',
        NUMBER: '수치'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_SERVO_CATEGORY: 'Urządzenia Serwo',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Zarejestruj usługę serwo MCP %1 opis %2 parametr %3 typ %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Czy nazwa usługi serwo MCP to %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Pobierz wynik usługi serwo MCP %1 parametr %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Ustaw usługę serwo MCP %1 parametr %2 na wartość %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Zgłoś usługę serwo MCP %1 wykonanie zakończone',
        SERVO_SET_ANGLE: 'Ustaw serwo pin %1 kąt %2 opóźnienie %3 ms',
        SERVO_READ: 'Odczytaj kąt serwa pin %1',
        NUMBER: 'Liczba'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_SERVO_CATEGORY: 'Dispositivos Servo',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Registrar serviço servo MCP %1 descrição %2 parâmetro %3 tipo %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'O nome do serviço servo MCP é %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Obter resultado do serviço servo MCP %1 parâmetro %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Definir serviço servo MCP %1 parâmetro %2 para o valor %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Relatar serviço servo MCP %1 execução concluída',
        SERVO_SET_ANGLE: 'Definir servo pino %1 ângulo %2 atraso %3 ms',
        SERVO_READ: 'Ler ângulo do servo pino %1',
        NUMBER: 'Número'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_SERVO_CATEGORY: 'Сервоустройства',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: 'Зарегистрировать серво-службу MCP %1 описание %2 параметр %3 тип %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'Имя серво-службы MCP - %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: 'Получить результат серво-службы MCP %1 параметр %2',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: 'Установить серво-службу MCP %1 параметр %2 на значение %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: 'Сообщить о завершении выполнения серво-службы MCP %1',
        SERVO_SET_ANGLE: 'Установить серво пин %1 угол %2 задержка %3 мс',
        SERVO_READ: 'Считать угол серво пина %1',
        NUMBER: 'Число'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_SERVO_CATEGORY: '伺服馬達裝置',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: '註冊MCP伺服馬達服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'MCP伺服馬達服務名稱是 %1？',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: '獲取MCP伺服馬達服務 %1 參數 %2的結果',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: '設置MCP伺服馬達服務 %1 參數%2 的值為 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: '上報MCP伺服馬達服務 %1 執行完成',
        SERVO_SET_ANGLE: '伺服馬達 引腳%1 角度%2 延遲%3毫秒',
        SERVO_READ: '讀取引腳%1 伺服馬達角度',
        NUMBER: '數值'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_SERVO_CATEGORY: '舵机设备',
        AIBOT_REGISTER_MCP_SERVO_SERVICE: '注册MCP舵机服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO: 'MCP舵机服务名称是 %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO: '获取MCP舵机服务 %1 参数 %2的结果',
        AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO: '设置MCP舵机服务 %1 参数%2 的值为 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO: '上报MCP舵机服务 %1 执行完成',
        SERVO_SET_ANGLE: '舵机 引脚%1 角度%2 延时%3毫秒',
        SERVO_READ: '读取引脚%1 舵机角度',
        NUMBER: '数值'
    });

    return Blockly;
}

exports = addMsg;