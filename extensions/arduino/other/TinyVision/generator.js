/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    // 1. 初始化 TinyVision
    Blockly.Arduino.tinyvision_init = function (block) {
        const rx = block.getFieldValue('RX');
        const tx = block.getFieldValue('TX');

        Blockly.Arduino.includes_.tinyvision_init = `#include "AiCam.h"`;
        Blockly.Arduino.definitions_[`tinyvision_instance`] = `AiCam aiCam(${rx}, ${tx});`;
        Blockly.Arduino.setups_[`tinyvision_setup`] = `aiCam.begin();`;

        return '';
    };

    // 2. 设置模式
    Blockly.Arduino.tinyvision_set_mode = function (block) {
        const mode = block.getFieldValue('MODE');
        return `aiCam.setAiCamMode("${mode}");\n`;
    };

    // 3. 读取串口数据
    Blockly.Arduino.tinyvision_read_serial = function (block) {
        return `aiCam.readEspSerial();\n`;
    };

    // 4. 获取人脸坐标
    Blockly.Arduino.tinyvision_get_face_coord = function (block) {
        const coord = block.getFieldValue('COORD');
        return [`aiCam.getFace${coord}()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 5. 人脸是否有效
    Blockly.Arduino.tinyvision_is_face_valid = function (block) {
        return [`aiCam.getFaceX() != 0 && aiCam.getFaceY() != 0`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 6. 获取颜色识别原始结果字符串
    Blockly.Arduino.tinyvision_get_color = function (block) {
        return [`aiCam.getColor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 7. 判断颜色是否匹配指定颜色
    Blockly.Arduino.tinyvision_is_color = function (block) {
        const colorVal = block.getFieldValue('COLOR');
        // aiCam.getColor() 返回大写颜色字符串，如 "RED"、"YELLOW"、"BLUE"、"GREEN"
        return [`(String(aiCam.getColor()) == "${colorVal}")`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 8. 获取二维码识别结果字符串
    Blockly.Arduino.tinyvision_get_qrcode = function (block) {
        return [`aiCam.getQrCode()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 9. 判断二维码识别结果是否为预设文本
    Blockly.Arduino.tinyvision_is_qrcode_content = function (block) {
        const qrcodeContent = block.getFieldValue('QRCODE_CONTENT');
        // 仅比较 aiCam.getQrCode() 返回的二维码文本，不调用颜色识别接口。
        return [`(String(aiCam.getQrCode()) == "${qrcodeContent}")`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 10. 获取卡片识别原始结果字符串
    Blockly.Arduino.tinyvision_get_card = function (block) {
        return [`aiCam.getCard()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 10. 判断卡片是否匹配指定卡片
    Blockly.Arduino.tinyvision_is_card = function (block) {
        const cardVal = block.getFieldValue('CARD');
        // aiCam.getCard() 返回大写卡片字符串，如 "STRAIGHT"、"UTURN"、"LEFT"、"RIGHT"、"PARKING"
        return [`(String(aiCam.getCard()) == "${cardVal}")`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 11. 获取线条偏移值，角度值，状态值
    Blockly.Arduino.tinyvision_get_line_value = function (block) {
        const value = block.getFieldValue('VALUE');
        return [`aiCam.getLine${value}()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    

    return Blockly;
}

exports = addGenerator;
