/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function addMsg(Blockly) {
    const commonMessages = {
        AI_TRACKING_CATEGORY: 'AI I2C 5-Way Line Tracking',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE: 'Register MCP tracking service %1 description %2 parameter %3 type %4',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE_TOOLTIP: 'Register a read-only MCP service for the five-way tracking value.',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME: 'MCP tracking service name is %1?',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME_TOOLTIP: 'Check whether the received MCP call is the selected tracking service.',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE: 'Get parameter %2 from MCP tracking service %1',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE_TOOLTIP: 'Read a string parameter from the received MCP request.',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE: 'Update MCP tracking service %1 parameter %2 to %3',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE_TOOLTIP: 'Store the current tracking result before reporting it to MCP.',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT: 'Report MCP tracking service %1 result',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT_TOOLTIP: 'Reply to the received MCP request with the stored tracking result.',
        TRACKING_SENSOR_INIT: 'Initialize I2C 5-way line tracking module address %1 SDA %2 SCL %3',
        TRACKING_SENSOR_INIT_TOOLTIP: 'Default settings are address 0x20, SDA 8, and SCL 9.',
        TRACKING_SENSOR_READ_ALL: 'Read 5-way line tracking value (left to right)',
        TRACKING_SENSOR_READ_ALL_TOOLTIP: 'Returns five digits from left to right: 0 for black line and 1 for white surface.',
        TRACKING_SENSOR_READ: 'Read line tracking sensor %1',
        TRACKING_SENSOR_READ_TOOLTIP: 'Returns 0 for black line and 1 for white surface.',
        TRACKING_SENSOR_DETECT: 'Line tracking sensor %1 detects %2',
        TRACKING_SENSOR_DETECT_TOOLTIP: 'Checks whether the selected sensor sees a black line or white surface.',
        TRACKING_SENSOR_IS_CONNECTED: 'I2C 5-way line tracking module is connected',
        TRACKING_SENSOR_IS_CONNECTED_TOOLTIP: 'Returns true after the PCF8574 tracking module is detected and initialized.',
        AI_TRACKING_SENSOR_LEFT: 'Far left',
        AI_TRACKING_SENSOR_LEFT_CENTER: 'Left center',
        AI_TRACKING_SENSOR_CENTER: 'Center',
        AI_TRACKING_SENSOR_RIGHT_CENTER: 'Right center',
        AI_TRACKING_SENSOR_RIGHT: 'Far right',
        AI_TRACKING_BLACK: 'Black line (0)',
        AI_TRACKING_WHITE: 'White surface (1)'
    };

    Object.assign(Blockly.ScratchMsgs.locales.en, commonMessages);
    Object.assign(Blockly.ScratchMsgs.locales.es, commonMessages, {AI_TRACKING_CATEGORY: 'Seguimiento de línea AI I2C de 5 vías'});
    Object.assign(Blockly.ScratchMsgs.locales.de, commonMessages, {AI_TRACKING_CATEGORY: 'KI I2C 5-fach-Linienverfolgung'});
    Object.assign(Blockly.ScratchMsgs.locales.fr, commonMessages, {AI_TRACKING_CATEGORY: 'Suivi de ligne IA I2C à 5 voies'});
    Object.assign(Blockly.ScratchMsgs.locales.ja, commonMessages, {AI_TRACKING_CATEGORY: 'AI I2C 5路ライントラッキング'});
    Object.assign(Blockly.ScratchMsgs.locales.ko, commonMessages, {AI_TRACKING_CATEGORY: 'AI I2C 5방향 라인 추적'});
    Object.assign(Blockly.ScratchMsgs.locales.pl, commonMessages, {AI_TRACKING_CATEGORY: 'AI I2C 5-kanałowe śledzenie linii'});
    Object.assign(Blockly.ScratchMsgs.locales.pt, commonMessages, {AI_TRACKING_CATEGORY: 'Rastreamento de linha AI I2C de 5 vias'});
    Object.assign(Blockly.ScratchMsgs.locales.ru, commonMessages, {AI_TRACKING_CATEGORY: 'AI I2C 5-канальный датчик линии'});
    Object.assign(Blockly.ScratchMsgs.locales.it, commonMessages, {AI_TRACKING_CATEGORY: 'Tracciamento linea AI I2C a 5 vie'});

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], commonMessages, {
        AI_TRACKING_CATEGORY: 'AI I2C 五路循迹模块',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE: '注册 MCP 循迹服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE_TOOLTIP: '为五路循迹结果注册只读 MCP 服务。',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME: 'MCP 循迹服务名称是 %1 吗？',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME_TOOLTIP: '判断当前接收的 MCP 调用是否为指定的循迹服务。',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE: '从 MCP 循迹服务 %1 获取参数 %2',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE_TOOLTIP: '读取当前 MCP 请求中的字符串参数。',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE: '更新 MCP 循迹服务 %1 的参数 %2 为 %3',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE_TOOLTIP: '在上报 MCP 结果前保存当前循迹值。',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT: '上报 MCP 循迹服务 %1 的执行结果',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT_TOOLTIP: '以已保存的循迹结果响应当前 MCP 请求。',
        TRACKING_SENSOR_INIT: '初始化 I2C 五路循迹模块 地址 %1 SDA %2 SCL %3',
        TRACKING_SENSOR_INIT_TOOLTIP: '默认地址为 0x20，SDA 为 8，SCL 为 9。',
        TRACKING_SENSOR_READ_ALL: '读取五路循迹值（从左到右）',
        TRACKING_SENSOR_READ_ALL_TOOLTIP: '返回从左到右的五位状态：0 表示黑线，1 表示白色表面。',
        TRACKING_SENSOR_READ: '读取循迹传感器 %1',
        TRACKING_SENSOR_READ_TOOLTIP: '0 表示检测到黑线，1 表示白色表面。',
        TRACKING_SENSOR_DETECT: '循迹传感器 %1 检测到 %2',
        TRACKING_SENSOR_DETECT_TOOLTIP: '判断指定传感器是否检测到黑线或白色表面。',
        TRACKING_SENSOR_IS_CONNECTED: 'I2C 五路循迹模块已连接',
        TRACKING_SENSOR_IS_CONNECTED_TOOLTIP: 'PCF8574 循迹模块被检测并初始化后返回真。',
        AI_TRACKING_SENSOR_LEFT: '最左',
        AI_TRACKING_SENSOR_LEFT_CENTER: '左中',
        AI_TRACKING_SENSOR_CENTER: '中间',
        AI_TRACKING_SENSOR_RIGHT_CENTER: '右中',
        AI_TRACKING_SENSOR_RIGHT: '最右',
        AI_TRACKING_BLACK: '黑线（0）',
        AI_TRACKING_WHITE: '白色表面（1）'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], commonMessages, {
        AI_TRACKING_CATEGORY: 'AI I2C 五路循跡模組',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE: '註冊 MCP 循跡服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_REGISTER_MCP_TRACKING_SENSOR_SERVICE_TOOLTIP: '為五路循跡結果註冊唯讀 MCP 服務。',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME: 'MCP 循跡服務名稱是 %1 嗎？',
        AIBOT_GET_TRACKING_SENSOR_MCP_NAME_TOOLTIP: '判斷目前接收的 MCP 呼叫是否為指定的循跡服務。',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE: '從 MCP 循跡服務 %1 取得參數 %2',
        AIBOT_GET_TRACKING_SENSOR_PARAM_VALUE_TOOLTIP: '讀取目前 MCP 請求中的字串參數。',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE: '更新 MCP 循跡服務 %1 的參數 %2 為 %3',
        AIBOT_UPDATE_TRACKING_SENSOR_STATE_TOOLTIP: '在回報 MCP 結果前儲存目前循跡值。',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT: '回報 MCP 循跡服務 %1 的執行結果',
        AIBOT_RESPONSE_TRACKING_SENSOR_RESULT_TOOLTIP: '以已儲存的循跡結果回應目前 MCP 請求。',
        TRACKING_SENSOR_INIT: '初始化 I2C 五路循跡模組 位址 %1 SDA %2 SCL %3',
        TRACKING_SENSOR_INIT_TOOLTIP: '預設位址為 0x20，SDA 為 8，SCL 為 9。',
        TRACKING_SENSOR_READ_ALL: '讀取五路循跡值（從左到右）',
        TRACKING_SENSOR_READ_ALL_TOOLTIP: '回傳從左到右的五位狀態：0 表示黑線，1 表示白色表面。',
        TRACKING_SENSOR_READ: '讀取循跡感測器 %1',
        TRACKING_SENSOR_READ_TOOLTIP: '0 表示偵測到黑線，1 表示白色表面。',
        TRACKING_SENSOR_DETECT: '循跡感測器 %1 偵測到 %2',
        TRACKING_SENSOR_DETECT_TOOLTIP: '判斷指定感測器是否偵測到黑線或白色表面。',
        TRACKING_SENSOR_IS_CONNECTED: 'I2C 五路循跡模組已連接',
        TRACKING_SENSOR_IS_CONNECTED_TOOLTIP: 'PCF8574 循跡模組被偵測並初始化後回傳真。',
        AI_TRACKING_SENSOR_LEFT: '最左',
        AI_TRACKING_SENSOR_LEFT_CENTER: '左中',
        AI_TRACKING_SENSOR_CENTER: '中間',
        AI_TRACKING_SENSOR_RIGHT_CENTER: '右中',
        AI_TRACKING_SENSOR_RIGHT: '最右',
        AI_TRACKING_BLACK: '黑線（0）',
        AI_TRACKING_WHITE: '白色表面（1）'
    });

    return Blockly;
}

exports = addMsg;
