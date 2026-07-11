/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    const msgs = {
        'en': {
            CAMCTRL_CATEGORY:       'CAM Controller',
            CAMCTRL_SERIAL_INIT:    'CAM Controller init serial baud %1',
            CAMCTRL_BUTTON_INIT:    'CAM Controller init button pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAM Controller button pin %1 toggle send %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAM Controller button pin %1 press send %2',
            CAMCTRL_SEND_CMD:       'CAM Controller send command %1',
            CAMCTRL_READ_SERIAL:    'CAM Controller read serial data'
        },
        'zh-cn': {
            CAMCTRL_CATEGORY:       'CAM 控制器',
            CAMCTRL_SERIAL_INIT:    'CAM 控制器 初始化串口 波特率 %1',
            CAMCTRL_BUTTON_INIT:    'CAM 控制器 初始化按键 引脚 %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAM 控制器 按键 引脚 %1 切换发送 %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAM 控制器 按键 引脚 %1 按下发送 %2',
            CAMCTRL_SEND_CMD:       'CAM 控制器 发送指令 %1',
            CAMCTRL_READ_SERIAL:    'CAM 控制器 读取串口数据'
        },
        'zh-tw': {
            CAMCTRL_CATEGORY:       'CAM 控制器',
            CAMCTRL_SERIAL_INIT:    'CAM 控制器 初始化串口 鮑率 %1',
            CAMCTRL_BUTTON_INIT:    'CAM 控制器 初始化按鍵 引腳 %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAM 控制器 按鍵 引腳 %1 切換發送 %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAM 控制器 按鍵 引腳 %1 按下發送 %2',
            CAMCTRL_SEND_CMD:       'CAM 控制器 發送指令 %1',
            CAMCTRL_READ_SERIAL:    'CAM 控制器 讀取串口資料'
        },
        'de': {
            CAMCTRL_CATEGORY:       'CAM Steuerung',
            CAMCTRL_SERIAL_INIT:    'CAM Steuerung seriell init Baudrate %1',
            CAMCTRL_BUTTON_INIT:    'CAM Steuerung Taste init Pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAM Steuerung Taste Pin %1 umschalten senden %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAM Steuerung Taste Pin %1 drücken senden %2',
            CAMCTRL_SEND_CMD:       'CAM Steuerung Befehl senden %1',
            CAMCTRL_READ_SERIAL:    'CAM Steuerung seriell lesen'
        },
        'es': {
            CAMCTRL_CATEGORY:       'Controlador CAM',
            CAMCTRL_SERIAL_INIT:    'Controlador CAM iniciar serie baudios %1',
            CAMCTRL_BUTTON_INIT:    'Controlador CAM iniciar botón pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'Controlador CAM botón pin %1 alternar enviar %2 / %3',
            CAMCTRL_BUTTON_SEND:    'Controlador CAM botón pin %1 presionar enviar %2',
            CAMCTRL_SEND_CMD:       'Controlador CAM enviar comando %1',
            CAMCTRL_READ_SERIAL:    'Controlador CAM leer serie'
        },
        'fr': {
            CAMCTRL_CATEGORY:       'Contrôleur CAM',
            CAMCTRL_SERIAL_INIT:    'Contrôleur CAM init série baud %1',
            CAMCTRL_BUTTON_INIT:    'Contrôleur CAM init bouton pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'Contrôleur CAM bouton pin %1 basculer envoyer %2 / %3',
            CAMCTRL_BUTTON_SEND:    'Contrôleur CAM bouton pin %1 appuyer envoyer %2',
            CAMCTRL_SEND_CMD:       'Contrôleur CAM envoyer commande %1',
            CAMCTRL_READ_SERIAL:    'Contrôleur CAM lire série'
        },
        'ja': {
            CAMCTRL_CATEGORY:       'CAMコントローラー',
            CAMCTRL_SERIAL_INIT:    'CAMコントローラー シリアル初期化 ボーレート %1',
            CAMCTRL_BUTTON_INIT:    'CAMコントローラー ボタン初期化 ピン %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAMコントローラー ボタン ピン %1 切替送信 %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAMコントローラー ボタン ピン %1 押して送信 %2',
            CAMCTRL_SEND_CMD:       'CAMコントローラー コマンド送信 %1',
            CAMCTRL_READ_SERIAL:    'CAMコントローラー シリアル読取'
        },
        'ko': {
            CAMCTRL_CATEGORY:       'CAM 컨트롤러',
            CAMCTRL_SERIAL_INIT:    'CAM 컨트롤러 시리얼 초기화 보드레이트 %1',
            CAMCTRL_BUTTON_INIT:    'CAM 컨트롤러 버튼 초기화 핀 %1',
            CAMCTRL_BUTTON_TOGGLE:  'CAM 컨트롤러 버튼 핀 %1 토글 전송 %2 / %3',
            CAMCTRL_BUTTON_SEND:    'CAM 컨트롤러 버튼 핀 %1 누르면 전송 %2',
            CAMCTRL_SEND_CMD:       'CAM 컨트롤러 명령 전송 %1',
            CAMCTRL_READ_SERIAL:    'CAM 컨트롤러 시리얼 읽기'
        },
        'ru': {
            CAMCTRL_CATEGORY:       'Контроллер CAM',
            CAMCTRL_SERIAL_INIT:    'Контроллер CAM инициализация порта бод %1',
            CAMCTRL_BUTTON_INIT:    'Контроллер CAM инициализация кнопки пин %1',
            CAMCTRL_BUTTON_TOGGLE:  'Контроллер CAM кнопка пин %1 переключить отправить %2 / %3',
            CAMCTRL_BUTTON_SEND:    'Контроллер CAM кнопка пин %1 нажать отправить %2',
            CAMCTRL_SEND_CMD:       'Контроллер CAM отправить команду %1',
            CAMCTRL_READ_SERIAL:    'Контроллер CAM читать порт'
        },
        'pl': {
            CAMCTRL_CATEGORY:       'Sterownik CAM',
            CAMCTRL_SERIAL_INIT:    'Sterownik CAM init serial baudrate %1',
            CAMCTRL_BUTTON_INIT:    'Sterownik CAM init przycisk pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'Sterownik CAM przycisk pin %1 przełącz wyślij %2 / %3',
            CAMCTRL_BUTTON_SEND:    'Sterownik CAM przycisk pin %1 naciśnij wyślij %2',
            CAMCTRL_SEND_CMD:       'Sterownik CAM wyślij polecenie %1',
            CAMCTRL_READ_SERIAL:    'Sterownik CAM odczyt serial'
        },
        'it': {
            CAMCTRL_CATEGORY:       'Controller CAM',
            CAMCTRL_SERIAL_INIT:    'Controller CAM init seriale baud %1',
            CAMCTRL_BUTTON_INIT:    'Controller CAM init pulsante pin %1',
            CAMCTRL_BUTTON_TOGGLE:  'Controller CAM pulsante pin %1 alternare invia %2 / %3',
            CAMCTRL_BUTTON_SEND:    'Controller CAM pulsante pin %1 premere invia %2',
            CAMCTRL_SEND_CMD:       'Controller CAM invia comando %1',
            CAMCTRL_READ_SERIAL:    'Controller CAM leggi seriale'
        }
    };

    Object.keys(msgs).forEach(lang => {
        if (Blockly.ScratchMsgs.locales[lang]) {
            Object.assign(Blockly.ScratchMsgs.locales[lang], msgs[lang]);
        }
    });

    return Blockly;
}
exports = addMsg;
