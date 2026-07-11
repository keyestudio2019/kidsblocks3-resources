function addMsg(Blockly) {

// English
Object.assign(Blockly.ScratchMsgs.locales.en, {
    AI_CAR_CATEGORY_2WD: '2WD Car Control',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Register MCP service %1 description %2 parameter %3 type %4 parameter %5 type %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Is MCP service name %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Get from MCP %1 parameter %2 type %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Set MCP service %1 parameter %2 value to %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Report MCP service %1 execution complete',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Car left dir %1 PWM %2 right dir %3 PWM %4 action %5 speed %6',
    CAR_FORWARD: 'Forward', CAR_BACKWARD: 'Backward', CAR_TURN_LEFT: 'Turn left',
    CAR_TURN_RIGHT: 'Turn right', CAR_STOP: 'Stop', STRING: 'String', NUMBER: 'Number'
});

// Deutsch
Object.assign(Blockly.ScratchMsgs.locales.de, {
    AI_CAR_CATEGORY_2WD: '2WD-Autosteuerung',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'MCP-Dienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4 Parameter %5 Typ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Ist der MCP-Dienstname %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Von MCP %1 Parameter %2 Typ %3 abrufen',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'MCP-Dienst %1 Parameter %2 auf Wert %3 setzen',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Ausführung des MCP-Dienstes %1 melden',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Auto links %1 PWM %2 rechts %3 PWM %4 Aktion %5 Geschwindigkeit %6',
    CAR_FORWARD: 'Vorwärts', CAR_BACKWARD: 'Rückwärts', CAR_TURN_LEFT: 'Links drehen',
    CAR_TURN_RIGHT: 'Rechts drehen', CAR_STOP: 'Stopp', STRING: 'Zeichenkette', NUMBER: 'Zahl'
});

// Español
Object.assign(Blockly.ScratchMsgs.locales.es, {
    AI_CAR_CATEGORY_2WD: 'Control de coche 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Registrar servicio MCP %1 descripción %2 parámetro %3 tipo %4 parámetro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: '¿El nombre del servicio MCP es %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Obtener de MCP %1 parámetro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Establecer servicio MCP %1 parámetro %2 valor a %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Informar que el servicio MCP %1 ha finalizado',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Coche izq %1 PWM %2 der %3 PWM %4 acción %5 velocidad %6',
    CAR_FORWARD: 'Adelante', CAR_BACKWARD: 'Atrás', CAR_TURN_LEFT: 'Girar izquierda',
    CAR_TURN_RIGHT: 'Girar derecha', CAR_STOP: 'Detener', STRING: 'Cadena', NUMBER: 'Número'
});

// Français
Object.assign(Blockly.ScratchMsgs.locales.fr, {
    AI_CAR_CATEGORY_2WD: 'Contrôle voiture 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Enregistrer le service MCP %1 description %2 paramètre %3 type %4 paramètre %5 type %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Le nom du service MCP est-il %1 ?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Obtenir depuis MCP %1 paramètre %2 type %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Définir le service MCP %1 paramètre %2 à la valeur %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Signaler que le service MCP %1 a terminé',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Voiture g %1 PWM %2 d %3 PWM %4 action %5 vitesse %6',
    CAR_FORWARD: 'Avancer', CAR_BACKWARD: 'Reculer', CAR_TURN_LEFT: 'Tourner à gauche',
    CAR_TURN_RIGHT: 'Tourner à droite', CAR_STOP: 'Arrêter', STRING: 'Chaîne', NUMBER: 'Nombre'
});

// Italiano
Object.assign(Blockly.ScratchMsgs.locales.it, {
    AI_CAR_CATEGORY_2WD: 'Controllo auto 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Registrare servizio MCP %1 descrizione %2 parametro %3 tipo %4 parametro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Il nome del servizio MCP è %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Ottenere da MCP %1 parametro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Impostare servizio MCP %1 parametro %2 al valore %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Segnalare che il servizio MCP %1 ha completato',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Auto sin %1 PWM %2 des %3 PWM %4 azione %5 velocità %6',
    CAR_FORWARD: 'Avanti', CAR_BACKWARD: 'Indietro', CAR_TURN_LEFT: 'Gira a sinistra',
    CAR_TURN_RIGHT: 'Gira a destra', CAR_STOP: 'Stop', STRING: 'Stringa', NUMBER: 'Numero'
});

// Русский
Object.assign(Blockly.ScratchMsgs.locales.ru, {
    AI_CAR_CATEGORY_2WD: 'Управление машиной 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Зарегистрировать службу MCP %1 описание %2 параметр %3 тип %4 параметр %5 тип %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Имя службы MCP — %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Получить из MCP %1 параметр %2 тип %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Установить для службы MCP %1 параметр %2 значение %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Сообщить, что служба MCP %1 завершила выполнение',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Машина лев %1 PWM %2 прав %3 PWM %4 действие %5 скорость %6',
    CAR_FORWARD: 'Вперёд', CAR_BACKWARD: 'Назад', CAR_TURN_LEFT: 'Повернуть налево',
    CAR_TURN_RIGHT: 'Повернуть направо', CAR_STOP: 'Стоп', STRING: 'Строка', NUMBER: 'Число'
});

// 日本語
Object.assign(Blockly.ScratchMsgs.locales.ja, {
    AI_CAR_CATEGORY_2WD: '2WDカー制御',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'MCPサービス %1 を登録 説明 %2 パラメータ %3 タイプ %4 パラメータ %5 タイプ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'MCPサービス名は %1 ですか？',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'MCP %1 から パラメータ %2 タイプ %3 を取得',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'MCPサービス %1 パラメータ %2 の値を %3 に設定',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'MCPサービス %1 の実行完了を報告',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WDカー 左 %1 PWM %2 右 %3 PWM %4 動作 %5 速度 %6',
    CAR_FORWARD: '前進', CAR_BACKWARD: '後退', CAR_TURN_LEFT: '左折',
    CAR_TURN_RIGHT: '右折', CAR_STOP: '停止', STRING: '文字列', NUMBER: '数値'
});

// 한국어
Object.assign(Blockly.ScratchMsgs.locales.ko, {
    AI_CAR_CATEGORY_2WD: '2WD 자동차 제어',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'MCP 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4 매개변수 %5 유형 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'MCP 서비스 이름이 %1입니까?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'MCP %1 에서 매개변수 %2 유형 %3 가져오기',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'MCP 서비스 %1 매개변수 %2 값을 %3으로 설정',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'MCP 서비스 %1 실행 완료 보고',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD 자동차 좌 %1 PWM %2 우 %3 PWM %4 동작 %5 속도 %6',
    CAR_FORWARD: '앞으로', CAR_BACKWARD: '뒤로', CAR_TURN_LEFT: '왼쪽 회전',
    CAR_TURN_RIGHT: '오른쪽 회전', CAR_STOP: '정지', STRING: '문자열', NUMBER: '숫자'
});

// Polski
Object.assign(Blockly.ScratchMsgs.locales.pl, {
    AI_CAR_CATEGORY_2WD: 'Sterowanie samochodem 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Zarejestrować usługę MCP %1 opis %2 parametr %3 typ %4 parametr %5 typ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'Czy nazwa usługi MCP to %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Pobrać z MCP %1 parametr %2 typ %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Ustawić w usłudze MCP %1 parametr %2 na wartość %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Zgłosić zakończenie wykonywania usługi MCP %1',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Samochód lew %1 PWM %2 praw %3 PWM %4 akcja %5 prędkość %6',
    CAR_FORWARD: 'Do przodu', CAR_BACKWARD: 'Do tyłu', CAR_TURN_LEFT: 'Skręć w lewo',
    CAR_TURN_RIGHT: 'Skręć w prawo', CAR_STOP: 'Stop', STRING: 'Ciąg', NUMBER: 'Liczba'
});

// Português
Object.assign(Blockly.ScratchMsgs.locales.pt, {
    AI_CAR_CATEGORY_2WD: 'Controle de carro 2WD',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: 'Registrar serviço MCP %1 descrição %2 parâmetro %3 tipo %4 parâmetro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'O nome do serviço MCP é %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: 'Obter de MCP %1 parâmetro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: 'Definir serviço MCP %1 parâmetro %2 com o valor %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: 'Relatar que o serviço MCP %1 concluiu a execução',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD Carro esq %1 PWM %2 dir %3 PWM %4 ação %5 velocidade %6',
    CAR_FORWARD: 'Para frente', CAR_BACKWARD: 'Para trás', CAR_TURN_LEFT: 'Virar à esquerda',
    CAR_TURN_RIGHT: 'Virar à direita', CAR_STOP: 'Parar', STRING: 'String', NUMBER: 'Número'
});

// 繁體中文
Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
    AI_CAR_CATEGORY_2WD: '2WD 小車控制',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: '註冊 MCP 服務 %1 描述 %2 參數 %3 類型 %4 參數 %5 類型 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'MCP 服務名稱是 %1 嗎？',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: '從 MCP %1 取得參數 %2 類型 %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: '設置 MCP 服務 %1 參數 %2 的值為 %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: '上報 MCP 服務 %1 執行完成',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD 小車 左 %1 PWM %2 右 %3 PWM %4 動作 %5 速度 %6',
    CAR_FORWARD: '前進', CAR_BACKWARD: '後退', CAR_TURN_LEFT: '左轉',
    CAR_TURN_RIGHT: '右轉', CAR_STOP: '停止', STRING: '字串', NUMBER: '數值'
});

// 简体中文
Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
    AI_CAR_CATEGORY_2WD: '2WD小车控制',
    AIBOT_REGISTER_MCP_CAR_SERVICE_2WD: '注册MCP服务 %1 描述 %2 参数 %3 类型 %4 参数 %5 类型 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_2WD: 'MCP服务名称是 %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_2WD: '从MCP %1 获取参数 %2 类型 %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_2WD: '设置MCP服务 %1 参数 %2 的值为 %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_2WD: '上报MCP服务 %1 执行完成',
    AIBOT_MCP_CAR_2WD_CONTROL: 'MCP 2WD小车 左 %1 PWM %2 右 %3 PWM %4 动作 %5 速度 %6',
    CAR_FORWARD: '前进', CAR_BACKWARD: '后退', CAR_TURN_LEFT: '左转',
    CAR_TURN_RIGHT: '右转', CAR_STOP: '停止', STRING: '字符串', NUMBER: '数值'
});

return Blockly;
}

exports = addMsg;
