/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_SERVO360_CATEGORY: 'servo 360°',
        KS_SERVO360_FORWARD: 'forward',
        KS_SERVO360_REVERSE: 'reverse',
        KS_SERVO360_SPEED: '360° servo PIN#%1 channel%2 %3 speed%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: '360° servo PIN#%1 channel%2 angle%3 delay%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_SERVO360_CATEGORY: 'Servo 360°',
        KS_SERVO360_FORWARD: 'vorwärts',
        KS_SERVO360_REVERSE: 'rückwärts',
        KS_SERVO360_SPEED: 'Servo-PIN#%1 Kanal%2 %3 Geschwindigkeit%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'Servo-PIN#%1 Kanal%2 Winkel%3 Verzögerung%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_SERVO360_CATEGORY: 'servo 360°',
        KS_SERVO360_FORWARD: 'adelante',
        KS_SERVO360_REVERSE: 'reversa',
        KS_SERVO360_SPEED: 'servo PIN#%1 canal%2 %3 velocidad%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'servo PIN#%1 canal%2 ángulo%3 demora%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_SERVO360_CATEGORY: 'servo 360°',
        KS_SERVO360_FORWARD: 'avant',
        KS_SERVO360_REVERSE: 'arrière',
        KS_SERVO360_SPEED: 'servo PIN#%1 canal%2 %3 vitesse%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'servo PIN#%1 canal%2 angle%3 délai%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_SERVO360_CATEGORY: 'サーボ 360°',
        KS_SERVO360_FORWARD: '正転',
        KS_SERVO360_REVERSE: '逆転',
        KS_SERVO360_SPEED: 'サーボ PIN#%1 チャンネル%2 %3 速度%4（0–200）',
        KS_SERVO360_TURN_ANGLE: 'サーボ PIN#%1 チャンネル%2 角度%3 待機%4ミリ秒'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_SERVO360_CATEGORY: '서보 360°',
        KS_SERVO360_FORWARD: '정회전',
        KS_SERVO360_REVERSE: '역회전',
        KS_SERVO360_SPEED: '서보 PIN#%1 채널%2 %3 속도%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: '서보 PIN#%1 채널%2 각도%3 지연%4밀리초'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_SERVO360_CATEGORY: 'serwo 360°',
        KS_SERVO360_FORWARD: 'naprzód',
        KS_SERVO360_REVERSE: 'wstecz',
        KS_SERVO360_SPEED: 'serwo PIN#%1 kanał%2 %3 prędkość%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'serwo PIN#%1 kanał%2 kąt%3 opóźnienie%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_SERVO360_CATEGORY: 'servo 360°',
        KS_SERVO360_FORWARD: 'avanço',
        KS_SERVO360_REVERSE: 'reverso',
        KS_SERVO360_SPEED: 'servo PIN#%1 canal%2 %3 velocidade%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'servo PIN#%1 canal%2 ângulo%3 atraso%4 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_SERVO360_CATEGORY: 'серво 360°',
        KS_SERVO360_FORWARD: 'вперёд',
        KS_SERVO360_REVERSE: 'назад',
        KS_SERVO360_SPEED: 'сервопривод PIN#%1 канал%2 %3 скорость%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'сервопривод PIN#%1 канал%2 угол%3 задержка%4 мс'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_SERVO360_CATEGORY: '舵機360度',
        KS_SERVO360_FORWARD: '正轉',
        KS_SERVO360_REVERSE: '反轉',
        KS_SERVO360_SPEED: '360度舵機 引腳%1 通道%2 %3 速度%4（0–200）',
        KS_SERVO360_TURN_ANGLE: '360度舵機 引腳%1 通道%2 角度%3 延時%4毫秒'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_SERVO360_CATEGORY: '舵机360度',
        KS_SERVO360_FORWARD: '正转',
        KS_SERVO360_REVERSE: '反转',
        KS_SERVO360_SPEED: '360度舵机 引脚%1 通道%2 %3 速度%4（0–200）',
        KS_SERVO360_TURN_ANGLE: '360度舵机 引脚%1 通道%2 角度%3 延时%4毫秒'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        KS_SERVO360_CATEGORY: 'Servo 360 gradi',
        KS_SERVO360_FORWARD: 'avanti',
        KS_SERVO360_REVERSE: 'indietro',
        KS_SERVO360_SPEED: 'Servo Pin%1 canale%2 %3 velocità%4 (0–200)',
        KS_SERVO360_TURN_ANGLE: 'Servo Pin%1 canale%2 angolo%3 ritardo%4 ms'
    });
    return Blockly;
}

exports = addMsg;
