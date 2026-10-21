/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function addMsg(Blockly) {
    const commonMessages = {
        AI_BUZZER_CATEGORY: 'AI Passive Buzzer',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE: 'Register MCP service %1 description %2 parameter %3 type %4',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE_TOOLTIP: 'Register a buzzer MCP service for the AIBot chatbot.',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER: 'MCP buzzer service name is %1?',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER_TOOLTIP: 'Check whether the received MCP call is the selected buzzer service.',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER: 'Get MCP %1 parameter %2 type %3',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER_TOOLTIP: 'Read the selected parameter from the received MCP request.',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER: 'Update MCP %1 parameter %2 to %3',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER_TOOLTIP: 'Add a response action for the selected buzzer MCP service.',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER: 'Report MCP buzzer %1 result',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER_TOOLTIP: 'Reply that the buzzer command has finished.',
        BUZZER_INIT: 'Initialize passive buzzer on pin %1',
        BUZZER_INIT_TOOLTIP: 'Default pin is 2. Use the pin connected to the passive buzzer signal input.',
        BUZZER_PLAY_TONE: 'Play passive buzzer on pin %1 frequency %2 Hz for %3 ms',
        BUZZER_PLAY_TONE_TOOLTIP: 'Generates a tone using the ESP32 built-in LEDC interface.',
        BUZZER_STOP_TONE: 'Stop passive buzzer on pin %1',
        BUZZER_STOP_TONE_TOOLTIP: 'Stops tone generation on the selected pin.',
        BUZZER_PLAY_MUSIC: 'Play built-in music %1 on passive buzzer pin %2',
        BUZZER_PLAY_MUSIC_TOOLTIP: 'Plays a melody supplied by the included ESP32 music library. Playback is blocking until the melody finishes.',
        AI_BUZZER_MUSIC_BIRTHDAY: 'Birthday melody',
        AI_BUZZER_MUSIC_TETRIS: 'Tetris melody',
        AI_BUZZER_MUSIC_ODE_TO_JOY: 'Ode to Joy melody',
        AI_BUZZER_MUSIC_CHRISTMAS: 'Christmas melody',
        AI_BUZZER_MUSIC_SUPER_MARIO: 'Super Mario melody',
        AI_BUZZER_MUSIC_STAR_WAR: 'Star war melody'
    };

    Object.assign(Blockly.ScratchMsgs.locales.en, commonMessages);
    Object.assign(Blockly.ScratchMsgs.locales.es, commonMessages, {AI_BUZZER_CATEGORY: 'Zumbador pasivo AI'});
    Object.assign(Blockly.ScratchMsgs.locales.de, commonMessages, {AI_BUZZER_CATEGORY: 'KI-Passivsummer'});
    Object.assign(Blockly.ScratchMsgs.locales.fr, commonMessages, {AI_BUZZER_CATEGORY: 'Buzzer passif IA'});
    Object.assign(Blockly.ScratchMsgs.locales.ja, commonMessages, {AI_BUZZER_CATEGORY: 'AI パッシブブザー'});
    Object.assign(Blockly.ScratchMsgs.locales.ko, commonMessages, {AI_BUZZER_CATEGORY: 'AI 수동 부저'});
    Object.assign(Blockly.ScratchMsgs.locales.pl, commonMessages, {AI_BUZZER_CATEGORY: 'Pasywny brzęczyk AI'});
    Object.assign(Blockly.ScratchMsgs.locales.pt, commonMessages, {AI_BUZZER_CATEGORY: 'Buzzer passivo AI'});
    Object.assign(Blockly.ScratchMsgs.locales.ru, commonMessages, {AI_BUZZER_CATEGORY: 'Пассивный зуммер ИИ'});
    Object.assign(Blockly.ScratchMsgs.locales.it, commonMessages, {AI_BUZZER_CATEGORY: 'Cicalino passivo AI'});

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], commonMessages, {
        AI_BUZZER_CATEGORY: 'AI 无源蜂鸣器',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE: '注册 MCP 蜂鸣器服务 %1 描述 %2 参数 %3 类型 %4',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE_TOOLTIP: '为 AIBot 聊天机器人注册蜂鸣器 MCP 服务。',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER: 'MCP 蜂鸣器服务名称是 %1 吗？',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER_TOOLTIP: '判断当前接收的 MCP 调用是否为指定蜂鸣器服务。',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER: '从 MCP %1 获取参数 %2 类型 %3',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER_TOOLTIP: '读取当前 MCP 请求中的指定参数。',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER: '更新 MCP %1 的参数 %2 为 %3',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER_TOOLTIP: '为指定蜂鸣器 MCP 服务添加响应动作。',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER: '上报 MCP 蜂鸣器 %1 执行结果',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER_TOOLTIP: '响应蜂鸣器命令已执行完成。',
        BUZZER_INIT: '初始化无源蜂鸣器 引脚 %1',
        BUZZER_INIT_TOOLTIP: '默认引脚为 2，请设置为无源蜂鸣器信号线连接的引脚。',
        BUZZER_PLAY_TONE: '无源蜂鸣器 引脚 %1 播放频率 %2 Hz 持续 %3 ms',
        BUZZER_PLAY_TONE_TOOLTIP: '使用 ESP32 内置 LEDC 接口生成指定音调。',
        BUZZER_STOP_TONE: '停止无源蜂鸣器 引脚 %1',
        BUZZER_STOP_TONE_TOOLTIP: '停止指定引脚的音调输出。',
        BUZZER_PLAY_MUSIC: '无源蜂鸣器 引脚 %2 播放内置音乐 %1',
        BUZZER_PLAY_MUSIC_TOOLTIP: '播放随插件附带的 ESP32 音乐库旋律，播放期间程序会等待旋律结束。',
        AI_BUZZER_MUSIC_BIRTHDAY: '生日快乐',
        AI_BUZZER_MUSIC_TETRIS: '俄罗斯方块',
        AI_BUZZER_MUSIC_ODE_TO_JOY: '欢乐颂',
        AI_BUZZER_MUSIC_CHRISTMAS: '圣诞旋律',
        AI_BUZZER_MUSIC_SUPER_MARIO: '超级玛丽',
        AI_BUZZER_MUSIC_STAR_WAR: '星球大战'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], commonMessages, {
        AI_BUZZER_CATEGORY: 'AI 無源蜂鳴器',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE: '註冊 MCP 蜂鳴器服務 %1 描述 %2 參數 %3 類型 %4',
        AIBOT_REGISTER_MCP_BUZZER_SERVICE_TOOLTIP: '為 AIBot 聊天機器人註冊蜂鳴器 MCP 服務。',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER: 'MCP 蜂鳴器服務名稱是 %1 嗎？',
        AIBOT_GET_MCP_MESSAGE_EVENT_NAME_BUZZER_TOOLTIP: '判斷目前接收的 MCP 呼叫是否為指定蜂鳴器服務。',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER: '從 MCP %1 取得參數 %2 類型 %3',
        AIBOT_CONTROL_MESSAGE_EVENT_BUZZER_TOOLTIP: '讀取目前 MCP 請求中的指定參數。',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER: '更新 MCP %1 的參數 %2 為 %3',
        AIBOT_UPDATE_MCP_CONTROL_STATE_BUZZER_TOOLTIP: '為指定蜂鳴器 MCP 服務加入回應動作。',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER: '回報 MCP 蜂鳴器 %1 執行結果',
        AIBOT_RESPONSE_MCP_CONTROL_RESULT_BUZZER_TOOLTIP: '回應蜂鳴器命令已執行完成。',
        BUZZER_INIT: '初始化無源蜂鳴器 腳位 %1',
        BUZZER_INIT_TOOLTIP: '預設腳位為 2，請設定為無源蜂鳴器訊號線連接的腳位。',
        BUZZER_PLAY_TONE: '無源蜂鳴器 腳位 %1 播放頻率 %2 Hz 持續 %3 ms',
        BUZZER_PLAY_TONE_TOOLTIP: '使用 ESP32 內建 LEDC 介面產生指定音調。',
        BUZZER_STOP_TONE: '停止無源蜂鳴器 腳位 %1',
        BUZZER_STOP_TONE_TOOLTIP: '停止指定腳位的音調輸出。',
        BUZZER_PLAY_MUSIC: '無源蜂鳴器 腳位 %2 播放內建音樂 %1',
        BUZZER_PLAY_MUSIC_TOOLTIP: '播放隨插件附帶的 ESP32 音樂函式庫旋律，播放期間程式會等待旋律結束。',
        AI_BUZZER_MUSIC_BIRTHDAY: '生日快樂',
        AI_BUZZER_MUSIC_TETRIS: '俄羅斯方塊',
        AI_BUZZER_MUSIC_ODE_TO_JOY: '歡樂頌',
        AI_BUZZER_MUSIC_CHRISTMAS: '聖誕旋律',
        AI_BUZZER_MUSIC_SUPER_MARIO: '超級瑪麗',
        AI_BUZZER_MUSIC_STAR_WAR: '星際大戰'
    });

    return Blockly;
}

exports = addMsg;
