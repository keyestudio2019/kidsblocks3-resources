/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    function ensureController (config, needsCommandState) {
        const settings = config || Blockly.Arduino._tinyVisionControllerConfig || {rx: '10', tx: '11'};
        Blockly.Arduino._tinyVisionControllerConfig = settings;
        Blockly.Arduino._tinyVisionNeedsCommandState = Boolean(Blockly.Arduino._tinyVisionNeedsCommandState || needsCommandState);

        Blockly.Arduino.includes_['aaa_tinyvision_software_serial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['aaa_tinyvision_controller_serial'] =
            '#define ESP_RX_PIN ' + settings.rx + '\n' +
            '#define ESP_TX_PIN ' + settings.tx + '\n\n' +
            'SoftwareSerial ESPSerial(ESP_RX_PIN, ESP_TX_PIN);' +
            (Blockly.Arduino._tinyVisionNeedsCommandState
                ? '\nchar tinyVisionLastCommand = \'\\0\';\nbool tinyVisionCommandAvailable = false;'
                : '');
        Blockly.Arduino.setups_['aaa_tinyvision_controller_serial'] =
            'Serial.begin(115200);\n' +
            '  ESPSerial.begin(9600);\n\n' +
            '  Serial.println("UNO ready");';
    }

    Blockly.Arduino['tinyvision_ctrl_init'] = function (block) {
        ensureController({
            rx: block.getFieldValue('rx') || '10',
            tx: block.getFieldValue('tx') || '11'
        });
        return '';
    };

    Blockly.Arduino['tinyvision_ctrl_read'] = function () {
        ensureController(null, true);
        return 'tinyVisionCommandAvailable = false;\n' +
            'if (ESPSerial.available()) {\n' +
            '  tinyVisionLastCommand = ESPSerial.read();\n' +
            '  tinyVisionCommandAvailable = true;\n\n' +
            '  Serial.print("Receive: ");\n' +
            '  Serial.println(tinyVisionLastCommand);\n' +
            '}\n' +
            'delay(20);\n';
    };

    Blockly.Arduino['tinyvision_ctrl_received'] = function (block) {
        ensureController(null, true);
        const command = block.getFieldValue('cmd') || 'S';
        return ['(tinyVisionCommandAvailable && tinyVisionLastCommand == \'' + command + '\')', Blockly.Arduino.ORDER_RELATIONAL];
    };

    return Blockly;
}
exports = addGenerator;
