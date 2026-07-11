/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales['en'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM init model %1 resolution %2',
        ESP32CAM_WIFI: 'ESP32-CAM connect WiFi SSID %1 password %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM start camera web server',
        ESP32CAM_SET_PARAM: 'ESP32-CAM set %1 to %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM serial control camera (O=on / F=off)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM serial control flash light %1 trigger char %2',
        ESP32CAM_LABEL_CAMERA: '── Camera Functions ──',
        ESP32CAM_LABEL_SERIAL: '── Serial Control ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM Init Modell %1 Auflösung %2',
        ESP32CAM_WIFI: 'ESP32-CAM WLAN verbinden SSID %1 Passwort %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM Kamera-Webserver starten',
        ESP32CAM_SET_PARAM: 'ESP32-CAM %1 auf %2 setzen',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM Seriell Kamera steuern (O=ein / F=aus)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM Seriell Blitzlicht %1 Auslösezeichen %2',
        ESP32CAM_LABEL_CAMERA: '── Kamerafunktionen ──',
        ESP32CAM_LABEL_SERIAL: '── Serielle Steuerung ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM iniciar modelo %1 resolución %2',
        ESP32CAM_WIFI: 'ESP32-CAM conectar WiFi SSID %1 contraseña %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM iniciar servidor web de cámara',
        ESP32CAM_SET_PARAM: 'ESP32-CAM establecer %1 en %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM control serie cámara (O=encender / F=apagar)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM control serie luz flash %1 carácter activador %2',
        ESP32CAM_LABEL_CAMERA: '── Funciones de cámara ──',
        ESP32CAM_LABEL_SERIAL: '── Control serie ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM init modèle %1 résolution %2',
        ESP32CAM_WIFI: 'ESP32-CAM connecter WiFi SSID %1 mot de passe %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM démarrer le serveur web caméra',
        ESP32CAM_SET_PARAM: 'ESP32-CAM régler %1 sur %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM contrôle série caméra (O=allumer / F=éteindre)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM contrôle série flash %1 caractère déclencheur %2',
        ESP32CAM_LABEL_CAMERA: '── Fonctions caméra ──',
        ESP32CAM_LABEL_SERIAL: '── Contrôle série ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM 初期化 モデル %1 解像度 %2',
        ESP32CAM_WIFI: 'ESP32-CAM WiFi接続 SSID %1 パスワード %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM カメラWebサーバー起動',
        ESP32CAM_SET_PARAM: 'ESP32-CAM %1 を %2 に設定',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM シリアルカメラ制御 (O=オン / F=オフ)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM シリアルフラッシュライト制御 %1 トリガー文字 %2',
        ESP32CAM_LABEL_CAMERA: '── カメラ機能 ──',
        ESP32CAM_LABEL_SERIAL: '── シリアル制御 ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM 초기화 모델 %1 해상도 %2',
        ESP32CAM_WIFI: 'ESP32-CAM WiFi 연결 SSID %1 비밀번호 %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM 카메라 웹서버 시작',
        ESP32CAM_SET_PARAM: 'ESP32-CAM %1 을(를) %2 로 설정',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM 시리얼 카메라 제어 (O=켜기 / F=끄기)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM 시리얼 플래시 라이트 제어 %1 트리거 문자 %2',
        ESP32CAM_LABEL_CAMERA: '── 카메라 기능 ──',
        ESP32CAM_LABEL_SERIAL: '── 시리얼 제어 ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM init model %1 rozdzielczość %2',
        ESP32CAM_WIFI: 'ESP32-CAM połącz WiFi SSID %1 hasło %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM uruchom serwer WWW kamery',
        ESP32CAM_SET_PARAM: 'ESP32-CAM ustaw %1 na %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM sterowanie kamerą przez serial (O=włącz / F=wyłącz)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM sterowanie lampą błyskową przez serial %1 znak wyzwalający %2',
        ESP32CAM_LABEL_CAMERA: '── Funkcje kamery ──',
        ESP32CAM_LABEL_SERIAL: '── Sterowanie serial ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM iniciar modelo %1 resolução %2',
        ESP32CAM_WIFI: 'ESP32-CAM conectar WiFi SSID %1 senha %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM iniciar servidor web da câmera',
        ESP32CAM_SET_PARAM: 'ESP32-CAM definir %1 para %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM controle serial câmera (O=ligar / F=desligar)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM controle serial luz flash %1 caractere gatilho %2',
        ESP32CAM_LABEL_CAMERA: '── Funções da câmera ──',
        ESP32CAM_LABEL_SERIAL: '── Controle serial ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM инициализация модель %1 разрешение %2',
        ESP32CAM_WIFI: 'ESP32-CAM подключить WiFi SSID %1 пароль %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM запустить веб-сервер камеры',
        ESP32CAM_SET_PARAM: 'ESP32-CAM установить %1 в %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM управление камерой через Serial (O=вкл / F=выкл)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM управление вспышкой через Serial %1 символ-триггер %2',
        ESP32CAM_LABEL_CAMERA: '── Функции камеры ──',
        ESP32CAM_LABEL_SERIAL: '── Управление Serial ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM init modello %1 risoluzione %2',
        ESP32CAM_WIFI: 'ESP32-CAM connetti WiFi SSID %1 password %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM avvia server web telecamera',
        ESP32CAM_SET_PARAM: 'ESP32-CAM imposta %1 su %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM controllo seriale telecamera (O=accendi / F=spegni)',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM controllo seriale flash %1 carattere trigger %2',
        ESP32CAM_LABEL_CAMERA: '── Funzioni fotocamera ──',
        ESP32CAM_LABEL_SERIAL: '── Controllo seriale ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM 初始化 型號 %1 解析度 %2',
        ESP32CAM_WIFI: 'ESP32-CAM 連接 WiFi SSID %1 密碼 %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM 啟動攝像頭網頁伺服器',
        ESP32CAM_SET_PARAM: 'ESP32-CAM 設定 %1 為 %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM 串口控制攝像頭（O=開 / F=關）',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM 串口控制照明燈 %1 觸發字元 %2',
        ESP32CAM_LABEL_CAMERA: '── 攝像頭功能 ──',
        ESP32CAM_LABEL_SERIAL: '── 串口控制 ──',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ESP32CAM_CATEGORY: 'ESP32-CAM',
        ESP32CAM_INIT: 'ESP32-CAM 初始化 型号 %1 分辨率 %2',
        ESP32CAM_WIFI: 'ESP32-CAM 连接 WiFi SSID %1 密码 %2',
        ESP32CAM_START_SERVER: 'ESP32-CAM 启动摄像头网页服务器',
        ESP32CAM_SET_PARAM: 'ESP32-CAM 设置 %1 为 %2',
        ESP32CAM_SERIAL_CAM: 'ESP32-CAM 串口控制摄像头（O=开 / F=关）',
        ESP32CAM_SERIAL_GPIO: 'ESP32-CAM 串口控制照明灯 %1 触发字符 %2',
        ESP32CAM_LABEL_CAMERA: '── 摄像头功能 ──',
        ESP32CAM_LABEL_SERIAL: '── 串口控制 ──',
    });
    return Blockly;
}
exports = addMsg;
