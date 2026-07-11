/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg(Blockly) {
    // English (en)
    Object.assign(Blockly.ScratchMsgs.locales['en'], {
        AI_WS2812_RGB_CATEGORY: 'RGB Strip Light',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Register MCP service %1 description %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCP service name is %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Get the value of parameter %2 for service %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Set RGB parameter %1 to %2 from MCP service %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Report MCP service RGB execution complete',
        WS2812_RGB_CONTROL: 'Initialize RGB strip light pin %1 number of lights %2'
    });

    // German (de)
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AI_WS2812_RGB_CATEGORY: 'RGB-Lichtleiste',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'MCP-Dienst %1 registrieren, Beschreibung %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCP-Dienstname ist %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Wert des Parameters %2 für Dienst %1 abrufen',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Setze RGB-Parameter %1 auf %2 vom MCP-Dienst %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Melden, dass die Ausführung des MCP-Dienstes RGB abgeschlossen ist',
        WS2812_RGB_CONTROL: 'Initialisiere RGB-Lichtleiste: Pin %1, Anzahl der Lichter %2'
    });

    // Spanish (es)
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AI_WS2812_RGB_CATEGORY: 'Tira de LED RGB',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Registrar servicio MCP %1 descripción %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'El nombre del servicio MCP es %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Obtener el valor del parámetro %2 del servicio %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Establecer el parámetro RGB %1 a %2 desde el servicio MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Informar ejecución completa del servicio RGB de MCP',
        WS2812_RGB_CONTROL: 'Inicializar tira de LED RGB: pin %1, número de luces %2'
    });

    // French (fr)
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AI_WS2812_RGB_CATEGORY: 'Bandeau LED RGB',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Enregistrer le service MCP %1 description %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'Le nom du service MCP est %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Obtenir la valeur du paramètre %2 du service %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Définir le paramètre RGB %1 à %2 depuis le service MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Signaler que l\'exécution du service RGB du MCP est terminée',
        WS2812_RGB_CONTROL: 'Initialiser le bandeau LED RGB : broche %1, nombre de lumières %2'
    });

    // Italian (it)
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        AI_WS2812_RGB_CATEGORY: 'Striscia LED RGB',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Registra servizio MCP %1 descrizione %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'Il nome del servizio MCP è %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Ottieni il valore del parametro %2 del servizio %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Imposta il parametro RGB %1 su %2 dal servizio MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Segnala il completamento dell\'esecuzione del servizio RGB MCP',
        WS2812_RGB_CONTROL: 'Inizializza striscia LED RGB: pin %1, numero di luci %2'
    });

    // Japanese (ja)
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AI_WS2812_RGB_CATEGORY: 'RGBストリップライト',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'MCPサービス %1 を登録、説明 %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCPサービス名は %1 です',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'サービス %1 のパラメータ %2 の値を取得',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'MCPサービス %3 からRGBパラメータ %1 を %2 に設定',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'MCPサービスRGBの実行完了を報告',
        WS2812_RGB_CONTROL: 'RGBストリップライトを初期化：ピン %1、ライトの数 %2'
    });

    // Korean (ko)
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AI_WS2812_RGB_CATEGORY: 'RGB 스트립 조명',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'MCP 서비스 %1 등록, 설명 %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCP 서비스 이름은 %1 입니다',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: '서비스 %1의 파라미터 %2 값 가져오기',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'MCP 서비스 %3에서 RGB 파라미터 %1을(를) %2로 설정',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'MCP 서비스 RGB 실행 완료 보고',
        WS2812_RGB_CONTROL: 'RGB 스트립 조명 초기화: 핀 %1, 조명 수 %2'
    });

    // Polish (pl)
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AI_WS2812_RGB_CATEGORY: 'Taśma LED RGB',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Zarejestruj usługę MCP %1, opis %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'Nazwa usługi MCP to %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Pobierz wartość parametru %2 dla usługi %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Ustaw parametr RGB %1 na %2 z usługi MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Zgłoś zakończenie wykonania usługi RGB MCP',
        WS2812_RGB_CONTROL: 'Zainicjuj taśmę LED RGB: pin %1, liczba diod %2'
    });

    // Portuguese (pt)
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AI_WS2812_RGB_CATEGORY: 'Fita de LED RGB',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Registrar serviço MCP %1 descrição %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'O nome do serviço MCP é %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Obter o valor do parâmetro %2 do serviço %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Definir parâmetro RGB %1 como %2 a partir do serviço MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Informar conclusão da execução do serviço RGB do MCP',
        WS2812_RGB_CONTROL: 'Inicializar fita de LED RGB: pino %1, número de luzes %2'
    });

    // Russian (ru)
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AI_WS2812_RGB_CATEGORY: 'RGB-лента',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: 'Зарегистрировать службу MCP %1 описание %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'Имя службы MCP: %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: 'Получить значение параметра %2 для службы %1',
        AIBOT_UPDATE_WS2812_RGB_STATE: 'Установить RGB-параметр %1 в значение %2 из службы MCP %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: 'Сообщить о завершении выполнения службы RGB MCP',
        WS2812_RGB_CONTROL: 'Инициализировать RGB-ленту: пин %1, количество светодиодов %2'
    });

    // Traditional Chinese (zh-tw)
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AI_WS2812_RGB_CATEGORY: 'RGB 燈條',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: '註冊MCP服務 %1 描述 %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCP服務名稱為 %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: '獲取服務 %1 的參數 %2 的值',
        AIBOT_UPDATE_WS2812_RGB_STATE: '從MCP服務 %3 設定RGB參數 %1 為 %2',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: '回報MCP服務 RGB 執行完成',
        WS2812_RGB_CONTROL: '初始化 RGB 燈條 引腳 %1 燈數 %2'
    });

    // Simplified Chinese (zh-cn)
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AI_WS2812_RGB_CATEGORY: 'RGB 彩灯',
        AIBOT_REGISTER_MCP_WS2812_RGB_SERVICE: '注册MCP服务 %1 描述 %2',
        AIBOT_GET_WS2812_RGB_MCP_NAME: 'MCP服务名称是 %1',
        AIBOT_GET_WS2812_RGB_PARAM_VALUE: '获取服务 %1 的参数 %2 的值',
        AIBOT_UPDATE_WS2812_RGB_STATE: '设置 RGB 参数 %1 为 %2 来自MCP服务 %3',
        AIBOT_RESPONSE_WS2812_RGB_RESULT: '上报MCP服务 RGB 执行完成',
        WS2812_RGB_CONTROL: '初始化 RGB 彩灯 引脚 %1 灯数量 %2'
    });
    return Blockly;
}

exports = addMsg;