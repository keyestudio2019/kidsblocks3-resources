/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    const msgs = {
        en: {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision Video Module',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision video module initialize camera',
            TINYVISION_MONITOR_WIFI: 'TinyVision video module connect WiFi SSID %1 password %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision video module start MJPEG monitor web server',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision video module initialize display'
        },
        de: {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision Videomodul',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision Videomodul Kamera initialisieren',
            TINYVISION_MONITOR_WIFI: 'TinyVision Videomodul WLAN verbinden SSID %1 Passwort %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision Videomodul MJPEG-Monitor-Webserver starten',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision Videomodul Display initialisieren'
        },
        es: {
            TINYVISION_MONITOR_CATEGORY: 'Módulo de vídeo TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Módulo de vídeo TinyVision inicializar cámara',
            TINYVISION_MONITOR_WIFI: 'Módulo de vídeo TinyVision conectar WiFi SSID %1 contraseña %2',
            TINYVISION_MONITOR_START_SERVER: 'Módulo de vídeo TinyVision iniciar servidor web de monitor MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Módulo de vídeo TinyVision inicializar pantalla'
        },
        fr: {
            TINYVISION_MONITOR_CATEGORY: 'Module vidéo TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Module vidéo TinyVision initialiser caméra',
            TINYVISION_MONITOR_WIFI: 'Module vidéo TinyVision connecter WiFi SSID %1 mot de passe %2',
            TINYVISION_MONITOR_START_SERVER: 'Module vidéo TinyVision démarrer serveur web moniteur MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Module vidéo TinyVision initialiser écran'
        },
        ja: {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision ビデオモジュール',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision ビデオモジュール カメラを初期化',
            TINYVISION_MONITOR_WIFI: 'TinyVision ビデオモジュール WiFi接続 SSID %1 パスワード %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision ビデオモジュール MJPEG監視Webサーバー開始',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision ビデオモジュール ディスプレイを初期化'
        },
        ko: {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision 비디오 모듈',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision 비디오 모듈 카메라 초기화',
            TINYVISION_MONITOR_WIFI: 'TinyVision 비디오 모듈 WiFi 연결 SSID %1 비밀번호 %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision 비디오 모듈 MJPEG 모니터 웹서버 시작',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision 비디오 모듈 디스플레이 초기화'
        },
        pl: {
            TINYVISION_MONITOR_CATEGORY: 'Moduł wideo TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Moduł wideo TinyVision zainicjuj kamerę',
            TINYVISION_MONITOR_WIFI: 'Moduł wideo TinyVision połącz WiFi SSID %1 hasło %2',
            TINYVISION_MONITOR_START_SERVER: 'Moduł wideo TinyVision uruchom serwer monitoringu MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Moduł wideo TinyVision zainicjuj wyświetlacz'
        },
        pt: {
            TINYVISION_MONITOR_CATEGORY: 'Módulo de vídeo TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Módulo de vídeo TinyVision inicializar câmera',
            TINYVISION_MONITOR_WIFI: 'Módulo de vídeo TinyVision conectar WiFi SSID %1 senha %2',
            TINYVISION_MONITOR_START_SERVER: 'Módulo de vídeo TinyVision iniciar servidor web de monitor MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Módulo de vídeo TinyVision inicializar tela'
        },
        ru: {
            TINYVISION_MONITOR_CATEGORY: 'Видеомодуль TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Видеомодуль TinyVision инициализировать камеру',
            TINYVISION_MONITOR_WIFI: 'Видеомодуль TinyVision подключить WiFi SSID %1 пароль %2',
            TINYVISION_MONITOR_START_SERVER: 'Видеомодуль TinyVision запустить веб-сервер монитора MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Видеомодуль TinyVision инициализировать дисплей'
        },
        it: {
            TINYVISION_MONITOR_CATEGORY: 'Modulo video TinyVision',
            TINYVISION_MONITOR_CAMERA_INIT: 'Modulo video TinyVision inizializza fotocamera',
            TINYVISION_MONITOR_WIFI: 'Modulo video TinyVision connetti WiFi SSID %1 password %2',
            TINYVISION_MONITOR_START_SERVER: 'Modulo video TinyVision avvia server web monitor MJPEG',
            TINYVISION_MONITOR_TFT_INIT: 'Modulo video TinyVision inizializza display'
        },
        'zh-tw': {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision 視訊模組',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision 視訊模組 初始化攝像頭',
            TINYVISION_MONITOR_WIFI: 'TinyVision 視訊模組 連接 WiFi SSID %1 密碼 %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision 視訊模組 啟動 MJPEG 監視網頁伺服器',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision 視訊模組 初始化顯示屏'
        },
        'zh-cn': {
            TINYVISION_MONITOR_CATEGORY: 'TinyVision 视频模块',
            TINYVISION_MONITOR_CAMERA_INIT: 'TinyVision 视频模块 初始化摄像头',
            TINYVISION_MONITOR_WIFI: 'TinyVision 视频模块 连接 WiFi SSID %1 密码 %2',
            TINYVISION_MONITOR_START_SERVER: 'TinyVision 视频模块 启动 MJPEG 视频监视网页服务器',
            TINYVISION_MONITOR_TFT_INIT: 'TinyVision 视频模块 初始化显示屏'
        }
    };
    Object.keys(msgs).forEach(lang => {
        if (Blockly.ScratchMsgs.locales[lang]) Object.assign(Blockly.ScratchMsgs.locales[lang], msgs[lang]);
    });
    return Blockly;
}
exports = addMsg;
