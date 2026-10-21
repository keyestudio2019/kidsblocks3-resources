function addMsg(Blockly) {

// English
Object.assign(Blockly.ScratchMsgs.locales.en, {
    AI_CAR_CATEGORY_MECANUM: 'Mecanum Car Control',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Register MCP service %1 description %2 parameter %3 type %4 parameter %5 type %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Is MCP service name %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Get from MCP %1 parameter %2 type %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Set MCP service %1 parameter %2 value to %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Report MCP service %1 execution complete',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum Car',
    AIBOT_MCP_CAR_MECANUM_LF: 'FL', AIBOT_MCP_CAR_MECANUM_LB: 'RL',
    AIBOT_MCP_CAR_MECANUM_RF: 'FR', AIBOT_MCP_CAR_MECANUM_RB: 'RR',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Car action %1 speed %2',
    CAR_FORWARD: 'Forward', CAR_BACKWARD: 'Backward', CAR_TURN_LEFT: 'Turn left',
    CAR_TURN_RIGHT: 'Turn right', CAR_STOP: 'Stop', STRING: 'String', NUMBER: 'Number'
});

// Deutsch
Object.assign(Blockly.ScratchMsgs.locales.de, {
    AI_CAR_CATEGORY_MECANUM: 'Mecanum-Autosteuerung',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'MCP-Dienst %1 registrieren Beschreibung %2 Parameter %3 Typ %4 Parameter %5 Typ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Ist der MCP-Dienstname %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Von MCP %1 Parameter %2 Typ %3 abrufen',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'MCP-Dienst %1 Parameter %2 auf Wert %3 setzen',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Ausführung des MCP-Dienstes %1 melden',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum Auto',
    AIBOT_MCP_CAR_MECANUM_LF: 'VL', AIBOT_MCP_CAR_MECANUM_LB: 'HL',
    AIBOT_MCP_CAR_MECANUM_RF: 'VR', AIBOT_MCP_CAR_MECANUM_RB: 'HR',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Auto Aktion %1 Geschwindigkeit %2',
    CAR_FORWARD: 'Vorwärts', CAR_BACKWARD: 'Rückwärts', CAR_TURN_LEFT: 'Links drehen',
    CAR_TURN_RIGHT: 'Rechts drehen', CAR_STOP: 'Stopp', STRING: 'Zeichenkette', NUMBER: 'Zahl'
});

// Español
Object.assign(Blockly.ScratchMsgs.locales.es, {
    AI_CAR_CATEGORY_MECANUM: 'Control de coche Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Registrar servicio MCP %1 descripción %2 parámetro %3 tipo %4 parámetro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: '¿El nombre del servicio MCP es %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Obtener de MCP %1 parámetro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Establecer servicio MCP %1 parámetro %2 valor a %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Informar que el servicio MCP %1 ha finalizado',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Coche Mecanum',
    AIBOT_MCP_CAR_MECANUM_LF: 'DI', AIBOT_MCP_CAR_MECANUM_LB: 'TI',
    AIBOT_MCP_CAR_MECANUM_RF: 'DD', AIBOT_MCP_CAR_MECANUM_RB: 'TD',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Coche acción %1 velocidad %2',
    CAR_FORWARD: 'Adelante', CAR_BACKWARD: 'Atrás', CAR_TURN_LEFT: 'Girar izquierda',
    CAR_TURN_RIGHT: 'Girar derecha', CAR_STOP: 'Detener', STRING: 'Cadena', NUMBER: 'Número'
});

// Français
Object.assign(Blockly.ScratchMsgs.locales.fr, {
    AI_CAR_CATEGORY_MECANUM: 'Contrôle voiture Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Enregistrer le service MCP %1 description %2 paramètre %3 type %4 paramètre %5 type %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Le nom du service MCP est-il %1 ?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Obtenir depuis MCP %1 paramètre %2 type %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Définir le service MCP %1 paramètre %2 à la valeur %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Signaler que le service MCP %1 a terminé',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Voiture Mecanum',
    AIBOT_MCP_CAR_MECANUM_LF: 'AVG', AIBOT_MCP_CAR_MECANUM_LB: 'ARG',
    AIBOT_MCP_CAR_MECANUM_RF: 'AVD', AIBOT_MCP_CAR_MECANUM_RB: 'ARD',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Voiture action %1 vitesse %2',
    CAR_FORWARD: 'Avancer', CAR_BACKWARD: 'Reculer', CAR_TURN_LEFT: 'Tourner à gauche',
    CAR_TURN_RIGHT: 'Tourner à droite', CAR_STOP: 'Arrêter', STRING: 'Chaîne', NUMBER: 'Nombre'
});

// Italiano
Object.assign(Blockly.ScratchMsgs.locales.it, {
    AI_CAR_CATEGORY_MECANUM: 'Controllo auto Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Registrare servizio MCP %1 descrizione %2 parametro %3 tipo %4 parametro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Il nome del servizio MCP è %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Ottenere da MCP %1 parametro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Impostare servizio MCP %1 parametro %2 al valore %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Segnalare che il servizio MCP %1 ha completato',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Auto Mecanum',
    AIBOT_MCP_CAR_MECANUM_LF: 'AS', AIBOT_MCP_CAR_MECANUM_LB: 'PS',
    AIBOT_MCP_CAR_MECANUM_RF: 'AD', AIBOT_MCP_CAR_MECANUM_RB: 'PD',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Auto azione %1 velocità %2',
    CAR_FORWARD: 'Avanti', CAR_BACKWARD: 'Indietro', CAR_TURN_LEFT: 'Gira a sinistra',
    CAR_TURN_RIGHT: 'Gira a destra', CAR_STOP: 'Stop', STRING: 'Stringa', NUMBER: 'Numero'
});

// Русский
Object.assign(Blockly.ScratchMsgs.locales.ru, {
    AI_CAR_CATEGORY_MECANUM: 'Управление машиной Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Зарегистрировать службу MCP %1 описание %2 параметр %3 тип %4 параметр %5 тип %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Имя службы MCP — %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Получить из MCP %1 параметр %2 тип %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Установить для службы MCP %1 параметр %2 значение %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Сообщить, что служба MCP %1 завершила выполнение',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum Машина',
    AIBOT_MCP_CAR_MECANUM_LF: 'ПЛ', AIBOT_MCP_CAR_MECANUM_LB: 'ЗЛ',
    AIBOT_MCP_CAR_MECANUM_RF: 'ПП', AIBOT_MCP_CAR_MECANUM_RB: 'ЗП',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Машина действие %1 скорость %2',
    CAR_FORWARD: 'Вперёд', CAR_BACKWARD: 'Назад', CAR_TURN_LEFT: 'Повернуть налево',
    CAR_TURN_RIGHT: 'Повернуть направо', CAR_STOP: 'Стоп', STRING: 'Строка', NUMBER: 'Число'
});

// 日本語
Object.assign(Blockly.ScratchMsgs.locales.ja, {
    AI_CAR_CATEGORY_MECANUM: 'Mecanumカー制御',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'MCPサービス %1 を登録 説明 %2 パラメータ %3 タイプ %4 パラメータ %5 タイプ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'MCPサービス名は %1 ですか？',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'MCP %1 から パラメータ %2 タイプ %3 を取得',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'MCPサービス %1 パラメータ %2 の値を %3 に設定',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'MCPサービス %1 の実行完了を報告',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanumカー',
    AIBOT_MCP_CAR_MECANUM_LF: '左前', AIBOT_MCP_CAR_MECANUM_LB: '左後',
    AIBOT_MCP_CAR_MECANUM_RF: '右前', AIBOT_MCP_CAR_MECANUM_RB: '右後',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanumカー 動作 %1 速度 %2',
    CAR_FORWARD: '前進', CAR_BACKWARD: '後退', CAR_TURN_LEFT: '左折',
    CAR_TURN_RIGHT: '右折', CAR_STOP: '停止', STRING: '文字列', NUMBER: '数値'
});

// 한국어
Object.assign(Blockly.ScratchMsgs.locales.ko, {
    AI_CAR_CATEGORY_MECANUM: 'Mecanum 자동차 제어',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'MCP 서비스 %1 등록 설명 %2 매개변수 %3 유형 %4 매개변수 %5 유형 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'MCP 서비스 이름이 %1입니까?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'MCP %1 에서 매개변수 %2 유형 %3 가져오기',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'MCP 서비스 %1 매개변수 %2 값을 %3으로 설정',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'MCP 서비스 %1 실행 완료 보고',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum 자동차',
    AIBOT_MCP_CAR_MECANUM_LF: '좌전', AIBOT_MCP_CAR_MECANUM_LB: '좌후',
    AIBOT_MCP_CAR_MECANUM_RF: '우전', AIBOT_MCP_CAR_MECANUM_RB: '우후',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum 자동차 동작 %1 속도 %2',
    CAR_FORWARD: '앞으로', CAR_BACKWARD: '뒤로', CAR_TURN_LEFT: '왼쪽 회전',
    CAR_TURN_RIGHT: '오른쪽 회전', CAR_STOP: '정지', STRING: '문자열', NUMBER: '숫자'
});

// Polski
Object.assign(Blockly.ScratchMsgs.locales.pl, {
    AI_CAR_CATEGORY_MECANUM: 'Sterowanie samochodem Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Zarejestrować usługę MCP %1 opis %2 parametr %3 typ %4 parametr %5 typ %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'Czy nazwa usługi MCP to %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Pobrać z MCP %1 parametr %2 typ %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Ustawić w usłudze MCP %1 parametr %2 na wartość %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Zgłosić zakończenie wykonywania usługi MCP %1',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Samochód Mecanum',
    AIBOT_MCP_CAR_MECANUM_LF: 'PL', AIBOT_MCP_CAR_MECANUM_LB: 'TL',
    AIBOT_MCP_CAR_MECANUM_RF: 'PP', AIBOT_MCP_CAR_MECANUM_RB: 'TP',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Samochód akcja %1 prędkość %2',
    CAR_FORWARD: 'Do przodu', CAR_BACKWARD: 'Do tyłu', CAR_TURN_LEFT: 'Skręć w lewo',
    CAR_TURN_RIGHT: 'Skręć w prawo', CAR_STOP: 'Stop', STRING: 'Ciąg', NUMBER: 'Liczba'
});

// Português
Object.assign(Blockly.ScratchMsgs.locales.pt, {
    AI_CAR_CATEGORY_MECANUM: 'Controle de carro Mecanum',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: 'Registrar serviço MCP %1 descrição %2 parâmetro %3 tipo %4 parâmetro %5 tipo %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'O nome do serviço MCP é %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: 'Obter de MCP %1 parâmetro %2 tipo %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: 'Definir serviço MCP %1 parâmetro %2 com o valor %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: 'Relatar que o serviço MCP %1 concluiu a execução',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Carro Mecanum',
    AIBOT_MCP_CAR_MECANUM_LF: 'FE', AIBOT_MCP_CAR_MECANUM_LB: 'TE',
    AIBOT_MCP_CAR_MECANUM_RF: 'FD', AIBOT_MCP_CAR_MECANUM_RB: 'TD',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum Carro ação %1 velocidade %2',
    CAR_FORWARD: 'Para frente', CAR_BACKWARD: 'Para trás', CAR_TURN_LEFT: 'Virar à esquerda',
    CAR_TURN_RIGHT: 'Virar à direita', CAR_STOP: 'Parar', STRING: 'String', NUMBER: 'Número'
});

// 繁體中文
Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
    AI_CAR_CATEGORY_MECANUM: 'Mecanum 小車控制',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: '註冊 MCP 服務 %1 描述 %2 參數 %3 類型 %4 參數 %5 類型 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'MCP 服務名稱是 %1 嗎？',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: '從 MCP %1 取得參數 %2 類型 %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: '設置 MCP 服務 %1 參數 %2 的值為 %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: '上報 MCP 服務 %1 執行完成',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum 小車',
    AIBOT_MCP_CAR_MECANUM_LF: '左前', AIBOT_MCP_CAR_MECANUM_LB: '左後',
    AIBOT_MCP_CAR_MECANUM_RF: '右前', AIBOT_MCP_CAR_MECANUM_RB: '右後',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum 小車 動作 %1 速度 %2',
    CAR_FORWARD: '前進', CAR_BACKWARD: '後退', CAR_TURN_LEFT: '左轉',
    CAR_TURN_RIGHT: '右轉', CAR_STOP: '停止', STRING: '字串', NUMBER: '數值'
});

// 简体中文
Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
    AI_CAR_CATEGORY_MECANUM: 'Mecanum小车控制',
    AIBOT_REGISTER_MCP_CAR_SERVICE_MECANUM: '注册MCP服务 %1 描述 %2 参数 %3 类型 %4 参数 %5 类型 %6',
    AIBOT_GET_MCP_MESSAGE_EVENT_NAME_NEW_MECANUM: 'MCP服务名称是 %1?',
    AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_MECANUM: '从MCP %1 获取参数 %2 类型 %3',
    AIBOT_UPDATE_MCP_CONTROL_STATE_NEW_MECANUM: '设置MCP服务 %1 参数 %2 的值为 %3',
    AIBOT_RESPONSE_MCP_CONTROL_RESULT_NEW_MECANUM: '上报MCP服务 %1 执行完成',
    AIBOT_MCP_CAR_MECANUM_INIT_TITLE: 'Mecanum小车',
    AIBOT_MCP_CAR_MECANUM_LF: '左前', AIBOT_MCP_CAR_MECANUM_LB: '左后',
    AIBOT_MCP_CAR_MECANUM_RF: '右前', AIBOT_MCP_CAR_MECANUM_RB: '右后',
    AIBOT_MCP_CAR_MECANUM_MOVE: 'Mecanum小车 动作 %1 速度 %2',
    CAR_FORWARD: '前进', CAR_BACKWARD: '后退', CAR_TURN_LEFT: '左转',
    CAR_TURN_RIGHT: '右转', CAR_STOP: '停止', STRING: '字符串', NUMBER: '数值'
});

const mecanumMotionMessages = {
    MECANUM_STRAFE_LEFT: 'Strafe left',
    MECANUM_STRAFE_RIGHT: 'Strafe right',
    MECANUM_FORWARD_LEFT: 'Forward-left',
    MECANUM_FORWARD_RIGHT: 'Forward-right',
    MECANUM_BACKWARD_LEFT: 'Backward-left',
    MECANUM_BACKWARD_RIGHT: 'Backward-right',
    MECANUM_FORWARD_LEVEL: 'Forward level',
    MECANUM_LEVEL_HIGH: 'High',
    MECANUM_LEVEL_LOW: 'Low',
    AIBOT_MCP_CAR_MECANUM_INIT_TOOLTIP: 'Define Mecanum wheel car direction and PWM pins. Set the forward level to calibrate motor polarity.'
};
Object.keys(Blockly.ScratchMsgs.locales).forEach(locale => {
    Object.assign(Blockly.ScratchMsgs.locales[locale], mecanumMotionMessages);
});
Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
    MECANUM_STRAFE_LEFT: '左移',
    MECANUM_STRAFE_RIGHT: '右移',
    MECANUM_FORWARD_LEFT: '左前斜移',
    MECANUM_FORWARD_RIGHT: '右前斜移',
    MECANUM_BACKWARD_LEFT: '左后斜移',
    MECANUM_BACKWARD_RIGHT: '右后斜移',
    MECANUM_FORWARD_LEVEL: '正转',
    MECANUM_LEVEL_HIGH: '高电平',
    MECANUM_LEVEL_LOW: '低电平',
    AIBOT_MCP_CAR_MECANUM_INIT_TOOLTIP: '定义麦克娜姆轮小车的方向与PWM引脚；正转电平用于校准电机接线。'
});

return Blockly;
}

exports = addMsg;
