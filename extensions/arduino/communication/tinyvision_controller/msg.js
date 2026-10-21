/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    const msgs = {
        en: {
            TINYVISION_CTRL_CATEGORY: 'Video Module',
            TINYVISION_CTRL_INIT: 'TinyVision video module connect controller board RX pin %1 TX pin %2',
            TINYVISION_CTRL_READ: 'Controller board read TinyVision video module serial command',
            TINYVISION_CTRL_RECEIVED: 'Controller board received TinyVision video module serial command %1'
        },
        de: {
            TINYVISION_CTRL_CATEGORY: 'Videomodul',
            TINYVISION_CTRL_INIT: 'TinyVision Videomodul mit Steuerplatine verbinden RX-Pin %1 TX-Pin %2',
            TINYVISION_CTRL_READ: 'Steuerplatine TinyVision-Videomodul-Seriellbefehl lesen',
            TINYVISION_CTRL_RECEIVED: 'Steuerplatine hat TinyVision-Videomodul-Seriellbefehl %1 erhalten'
        },
        es: {
            TINYVISION_CTRL_CATEGORY: 'Módulo de vídeo',
            TINYVISION_CTRL_INIT: 'Módulo de vídeo TinyVision conectar placa de control pin RX %1 pin TX %2',
            TINYVISION_CTRL_READ: 'Placa de control leer comando serie del módulo de vídeo TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Placa de control recibió comando serie del módulo de vídeo TinyVision %1'
        },
        fr: {
            TINYVISION_CTRL_CATEGORY: 'Module vidéo',
            TINYVISION_CTRL_INIT: 'Module vidéo TinyVision connecter carte de contrôle broche RX %1 broche TX %2',
            TINYVISION_CTRL_READ: 'Carte de contrôle lire commande série du module vidéo TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Carte de contrôle a reçu la commande série du module vidéo TinyVision %1'
        },
        ja: {
            TINYVISION_CTRL_CATEGORY: 'ビデオモジュール',
            TINYVISION_CTRL_INIT: 'TinyVisionビデオモジュール 制御基板に接続 RXピン %1 TXピン %2',
            TINYVISION_CTRL_READ: '制御基板 TinyVisionビデオモジュールのシリアルコマンドを読む',
            TINYVISION_CTRL_RECEIVED: '制御基板がTinyVisionビデオモジュールのシリアルコマンド %1 を受信'
        },
        ko: {
            TINYVISION_CTRL_CATEGORY: '비디오 모듈',
            TINYVISION_CTRL_INIT: 'TinyVision 비디오 모듈 제어 보드 연결 RX 핀 %1 TX 핀 %2',
            TINYVISION_CTRL_READ: '제어 보드 TinyVision 비디오 모듈 시리얼 명령 읽기',
            TINYVISION_CTRL_RECEIVED: '제어 보드가 TinyVision 비디오 모듈 시리얼 명령 %1 수신'
        },
        pl: {
            TINYVISION_CTRL_CATEGORY: 'Moduł wideo',
            TINYVISION_CTRL_INIT: 'Moduł wideo TinyVision połącz płytę sterującą pin RX %1 pin TX %2',
            TINYVISION_CTRL_READ: 'Płyta sterująca odczytaj polecenie szeregowe modułu wideo TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Płyta sterująca odebrała polecenie szeregowe modułu wideo TinyVision %1'
        },
        pt: {
            TINYVISION_CTRL_CATEGORY: 'Módulo de vídeo',
            TINYVISION_CTRL_INIT: 'Módulo de vídeo TinyVision conectar placa de controle pino RX %1 pino TX %2',
            TINYVISION_CTRL_READ: 'Placa de controle ler comando serial do módulo de vídeo TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Placa de controle recebeu comando serial do módulo de vídeo TinyVision %1'
        },
        ru: {
            TINYVISION_CTRL_CATEGORY: 'Видеомодуль',
            TINYVISION_CTRL_INIT: 'Видеомодуль TinyVision подключить плату управления пин RX %1 пин TX %2',
            TINYVISION_CTRL_READ: 'Плата управления прочитать последовательную команду видеомодуля TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Плата управления получила последовательную команду видеомодуля TinyVision %1'
        },
        it: {
            TINYVISION_CTRL_CATEGORY: 'Modulo video',
            TINYVISION_CTRL_INIT: 'Modulo video TinyVision collega scheda di controllo pin RX %1 pin TX %2',
            TINYVISION_CTRL_READ: 'Scheda di controllo leggi comando seriale del modulo video TinyVision',
            TINYVISION_CTRL_RECEIVED: 'Scheda di controllo ha ricevuto comando seriale del modulo video TinyVision %1'
        },
        'zh-tw': {
            TINYVISION_CTRL_CATEGORY: '視訊模組',
            TINYVISION_CTRL_INIT: 'TinyVision視訊模組 連接開發板 RX 引腳 %1 TX 引腳 %2',
            TINYVISION_CTRL_READ: '開發板讀取 TinyVision視訊模組 串口指令',
            TINYVISION_CTRL_RECEIVED: '開發板收到 TinyVision視訊模組 串口指令 %1'
        },
        'zh-cn': {
            TINYVISION_CTRL_CATEGORY: '视频模块',
            TINYVISION_CTRL_INIT: 'TinyVision视频模块 连接开发板 RX 引脚 %1 TX 引脚 %2',
            TINYVISION_CTRL_READ: '开发板读取 TinyVision视频模块 串口命令',
            TINYVISION_CTRL_RECEIVED: '开发板收到 TinyVision视频模块 串口命令 %1'
        }
    };
    Object.keys(msgs).forEach(lang => {
        if (Blockly.ScratchMsgs.locales[lang]) Object.assign(Blockly.ScratchMsgs.locales[lang], msgs[lang]);
    });
    return Blockly;
}
exports = addMsg;
