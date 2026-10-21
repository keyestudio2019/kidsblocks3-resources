/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AI_STEPPER_CATEGORY: 'AI Stepper Motor',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Register MCP service %1 description %2 direction parameter %3 steps parameter %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'MCP service name is %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Get %1 parameter from MCP %2 as %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Report MCP %1 execution result',
        AI_STEPPER_INIT: 'Initialize 28BYJ-48 stepper IN1 %1 IN2 %2 IN3 %3 IN4 %4 steps per revolution %5 step interval (µs) %6',
        AI_STEPPER_MOVE: 'Run stepper direction %1 steps %2',
        AI_STEPPER_TURNS: 'Run stepper direction %1 turns %2',
        AI_STEPPER_RELEASE: 'Release stepper motor',
        AI_STEPPER_FORWARD: 'Forward',
        AI_STEPPER_REVERSE: 'Reverse'
    });
    Object.assign(Blockly.ScratchMsgs.locales.es, {
        AI_STEPPER_CATEGORY: 'Motor paso a paso AI',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Registrar servicio MCP %1 descripción %2 parámetro de dirección %3 parámetro de pasos %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: '¿El nombre del servicio MCP es %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Obtener parámetro %1 de MCP %2 como %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Informar resultado de ejecución de MCP %1',
        AI_STEPPER_INIT: 'Inicializar motor 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 pasos por vuelta %5 intervalo de paso (µs) %6',
        AI_STEPPER_MOVE: 'Ejecutar motor paso a paso dirección %1 pasos %2',
        AI_STEPPER_TURNS: 'Ejecutar motor paso a paso dirección %1 vueltas %2',
        AI_STEPPER_RELEASE: 'Liberar motor paso a paso',
        AI_STEPPER_FORWARD: 'Adelante',
        AI_STEPPER_REVERSE: 'Reversa'
    });
    Object.assign(Blockly.ScratchMsgs.locales.de, {
        AI_STEPPER_CATEGORY: 'KI-Schrittmotor',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'MCP-Dienst %1 registrieren Beschreibung %2 Richtungsparameter %3 Schrittparameter %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'Ist der MCP-Dienstname %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Parameter %1 von MCP %2 als %3 abrufen',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Ausführungsergebnis von MCP %1 melden',
        AI_STEPPER_INIT: '28BYJ-48-Schrittmotor initialisieren IN1 %1 IN2 %2 IN3 %3 IN4 %4 Schritte pro Umdrehung %5 Schrittintervall (µs) %6',
        AI_STEPPER_MOVE: 'Schrittmotor Richtung %1 Schritte %2 ausführen',
        AI_STEPPER_TURNS: 'Schrittmotor Richtung %1 Umdrehungen %2 ausführen',
        AI_STEPPER_RELEASE: 'Schrittmotor freigeben',
        AI_STEPPER_FORWARD: 'Vorwärts',
        AI_STEPPER_REVERSE: 'Rückwärts'
    });
    Object.assign(Blockly.ScratchMsgs.locales.fr, {
        AI_STEPPER_CATEGORY: 'Moteur pas à pas IA',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Enregistrer le service MCP %1 description %2 paramètre de direction %3 paramètre de pas %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'Le nom du service MCP est-il %1 ?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Obtenir le paramètre %1 de MCP %2 en tant que %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Signaler le résultat d’exécution de MCP %1',
        AI_STEPPER_INIT: 'Initialiser le moteur 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 pas par tour %5 intervalle de pas (µs) %6',
        AI_STEPPER_MOVE: 'Faire tourner le moteur pas à pas direction %1 pas %2',
        AI_STEPPER_TURNS: 'Faire tourner le moteur pas à pas direction %1 tours %2',
        AI_STEPPER_RELEASE: 'Libérer le moteur pas à pas',
        AI_STEPPER_FORWARD: 'Avant',
        AI_STEPPER_REVERSE: 'Arrière'
    });
    Object.assign(Blockly.ScratchMsgs.locales.ja, {
        AI_STEPPER_CATEGORY: 'AI ステッピングモーター',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'MCP サービス %1 を登録 説明 %2 方向パラメーター %3 ステップパラメーター %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'MCP サービス名は %1 ですか？',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'MCP %2 からパラメーター %1 を %3 として取得',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'MCP %1 の実行結果を報告',
        AI_STEPPER_INIT: '28BYJ-48 ステッピングモーターを初期化 IN1 %1 IN2 %2 IN3 %3 IN4 %4 1 回転あたりのステップ数 %5 ステップ間隔 (µs) %6',
        AI_STEPPER_MOVE: 'ステッピングモーター 方向 %1 ステップ数 %2 を実行',
        AI_STEPPER_TURNS: 'ステッピングモーター 方向 %1 回転数 %2 を実行',
        AI_STEPPER_RELEASE: 'ステッピングモーターを解放',
        AI_STEPPER_FORWARD: '正転',
        AI_STEPPER_REVERSE: '逆転'
    });
    Object.assign(Blockly.ScratchMsgs.locales.ko, {
        AI_STEPPER_CATEGORY: 'AI 스테퍼 모터',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'MCP 서비스 %1 등록 설명 %2 방향 매개변수 %3 단계 매개변수 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'MCP 서비스 이름이 %1인가요?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'MCP %2에서 매개변수 %1을(를) %3으로 가져오기',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'MCP %1 실행 결과 보고',
        AI_STEPPER_INIT: '28BYJ-48 스테퍼 모터 초기화 IN1 %1 IN2 %2 IN3 %3 IN4 %4 회전당 단계 %5 단계 간격 (µs) %6',
        AI_STEPPER_MOVE: '스테퍼 모터 방향 %1 단계 %2 실행',
        AI_STEPPER_TURNS: '스테퍼 모터 방향 %1 회전 %2 실행',
        AI_STEPPER_RELEASE: '스테퍼 모터 해제',
        AI_STEPPER_FORWARD: '정방향',
        AI_STEPPER_REVERSE: '역방향'
    });
    Object.assign(Blockly.ScratchMsgs.locales.pl, {
        AI_STEPPER_CATEGORY: 'Silnik krokowy AI',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Zarejestruj usługę MCP %1 opis %2 parametr kierunku %3 parametr kroków %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'Czy nazwa usługi MCP to %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Pobierz parametr %1 z MCP %2 jako %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Zgłoś wynik wykonania MCP %1',
        AI_STEPPER_INIT: 'Zainicjuj silnik 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 kroki na obrót %5 interwał kroku (µs) %6',
        AI_STEPPER_MOVE: 'Uruchom silnik krokowy kierunek %1 kroki %2',
        AI_STEPPER_TURNS: 'Uruchom silnik krokowy kierunek %1 obroty %2',
        AI_STEPPER_RELEASE: 'Zwolnij silnik krokowy',
        AI_STEPPER_FORWARD: 'Do przodu',
        AI_STEPPER_REVERSE: 'Wstecz'
    });
    Object.assign(Blockly.ScratchMsgs.locales.pt, {
        AI_STEPPER_CATEGORY: 'Motor de passo AI',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Registrar serviço MCP %1 descrição %2 parâmetro de direção %3 parâmetro de passos %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'O nome do serviço MCP é %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Obter parâmetro %1 do MCP %2 como %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Relatar resultado de execução do MCP %1',
        AI_STEPPER_INIT: 'Inicializar motor 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 passos por volta %5 intervalo de passo (µs) %6',
        AI_STEPPER_MOVE: 'Executar motor de passo direção %1 passos %2',
        AI_STEPPER_TURNS: 'Executar motor de passo direção %1 voltas %2',
        AI_STEPPER_RELEASE: 'Liberar motor de passo',
        AI_STEPPER_FORWARD: 'Avançar',
        AI_STEPPER_REVERSE: 'Reverter'
    });
    Object.assign(Blockly.ScratchMsgs.locales.ru, {
        AI_STEPPER_CATEGORY: 'AI-шаговый двигатель',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Зарегистрировать службу MCP %1 описание %2 параметр направления %3 параметр шагов %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'Имя службы MCP — %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Получить параметр %1 из MCP %2 как %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Сообщить результат выполнения MCP %1',
        AI_STEPPER_INIT: 'Инициализировать шаговый двигатель 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 шагов на оборот %5 интервал шага (мкс) %6',
        AI_STEPPER_MOVE: 'Запустить шаговый двигатель направление %1 шагов %2',
        AI_STEPPER_TURNS: 'Запустить шаговый двигатель направление %1 оборотов %2',
        AI_STEPPER_RELEASE: 'Отключить шаговый двигатель',
        AI_STEPPER_FORWARD: 'Вперёд',
        AI_STEPPER_REVERSE: 'Назад'
    });
    Object.assign(Blockly.ScratchMsgs.locales.it, {
        AI_STEPPER_CATEGORY: 'Motore passo-passo AI',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: 'Registra servizio MCP %1 descrizione %2 parametro direzione %3 parametro passi %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'Il nome del servizio MCP è %1?',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: 'Ottieni il parametro %1 da MCP %2 come %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: 'Segnala il risultato di esecuzione di MCP %1',
        AI_STEPPER_INIT: 'Inizializza motore 28BYJ-48 IN1 %1 IN2 %2 IN3 %3 IN4 %4 passi per giro %5 intervallo di passo (µs) %6',
        AI_STEPPER_MOVE: 'Esegui motore passo-passo direzione %1 passi %2',
        AI_STEPPER_TURNS: 'Esegui motore passo-passo direzione %1 giri %2',
        AI_STEPPER_RELEASE: 'Rilascia motore passo-passo',
        AI_STEPPER_FORWARD: 'Avanti',
        AI_STEPPER_REVERSE: 'Indietro'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_STEPPER_CATEGORY: 'AI 步进电机',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: '注册 MCP 服务 %1 描述 %2 方向参数 %3 步数参数 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'MCP 服务名称是 %1 吗？',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: '从 MCP %2 获取参数 %1，类型为 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: '上报 MCP %1 执行结果',
        AI_STEPPER_INIT: '初始化 28BYJ-48 步进电机 IN1 %1 IN2 %2 IN3 %3 IN4 %4 每圈步数 %5 步进间隔（微秒）%6',
        AI_STEPPER_MOVE: '步进电机 方向 %1 运行步数 %2',
        AI_STEPPER_TURNS: '步进电机 方向 %1 运行圈数 %2',
        AI_STEPPER_RELEASE: '释放步进电机',
        AI_STEPPER_FORWARD: '正转',
        AI_STEPPER_REVERSE: '反转'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_STEPPER_CATEGORY: 'AI 步進馬達',
        AIBOT_REGISTER_MCP_STEPPER_SERVICE: '註冊 MCP 服務 %1 描述 %2 方向參數 %3 步數參數 %4',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_STEPPER: 'MCP 服務名稱是 %1 嗎？',
        AIBOT_CONTROL_MESSAGE_EVENT_STEPPER: '從 MCP %2 取得參數 %1，類型為 %3',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_STEPPER: '回報 MCP %1 執行結果',
        AI_STEPPER_INIT: '初始化 28BYJ-48 步進馬達 IN1 %1 IN2 %2 IN3 %3 IN4 %4 每圈步數 %5 步進間隔（微秒）%6',
        AI_STEPPER_MOVE: '步進馬達 方向 %1 運行步數 %2',
        AI_STEPPER_TURNS: '步進馬達 方向 %1 運行圈數 %2',
        AI_STEPPER_RELEASE: '釋放步進馬達',
        AI_STEPPER_FORWARD: '正轉',
        AI_STEPPER_REVERSE: '反轉'
    });
    return Blockly;
}

exports = addMsg;
