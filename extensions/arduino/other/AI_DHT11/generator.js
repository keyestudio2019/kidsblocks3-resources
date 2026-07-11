/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addGenerator(Blockly) {

    // ===============================
    // 注册 DHT11 IoT 实体代码生成器
    // ===============================
    Blockly.Arduino['AIbot_register_dht11_sensor_driver_status'] = function (block) {
        const tempName        = Blockly.Arduino.valueToCode(block, 'TEMP_NAME',        Blockly.Arduino.ORDER_ATOMIC) || '"temp"';
        const tempDescription = Blockly.Arduino.valueToCode(block, 'TEMP_DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Temperature"';
        const humiName        = Blockly.Arduino.valueToCode(block, 'HUMI_NAME',        Blockly.Arduino.ORDER_ATOMIC) || '"humi"';
        const humiDescription = Blockly.Arduino.valueToCode(block, 'HUMI_DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Humidity"';

        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] =
                'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }

        Blockly.Arduino.definitions_['AIbot_dht11_entity'] =
            'std::shared_ptr<ai_vox::iot::Entity> g_dht11_sensor_iot_entity;';

        Blockly.Arduino.definitions_['AIbot_dht11_init'] =
            'void InitDht11SensorIot() {\n' +
            '    std::vector<ai_vox::iot::Property> props({\n' +
            '        { ' + tempName + ', ' + tempDescription + ', ai_vox::iot::ValueType::kString },\n' +
            '        { ' + humiName + ', ' + humiDescription + ', ai_vox::iot::ValueType::kString }\n' +
            '    });\n' +
            '    std::vector<ai_vox::iot::Function> funcs({});\n' +
            '    g_dht11_sensor_iot_entity = std::make_shared<ai_vox::iot::Entity>(\n' +
            '        "DHT11Sensor", "DHT11温湿度传感器",\n' +
            '        std::move(props), std::move(funcs));\n' +
            '    g_dht11_sensor_iot_entity->UpdateState(' + tempName + ', "0");\n' +
            '    g_dht11_sensor_iot_entity->UpdateState(' + humiName + ', "0");\n' +
            '    ai_vox_engine.RegisterIotEntity(g_dht11_sensor_iot_entity);\n' +
            '}';

        Blockly.Arduino.setups_['AIbot_register_dht11'] = 'InitDht11SensorIot();';
        return '';
    };

    // ===============================
    // 更新 DHT11 IoT 属性值代码生成器
    // ===============================
    Blockly.Arduino['AIbot_update_dht11_iot_state'] = function (block) {
        const propName  = Blockly.Arduino.valueToCode(block, 'PROP_NAME',  Blockly.Arduino.ORDER_ATOMIC) || '"temp"';
        const propValue = Blockly.Arduino.valueToCode(block, 'PROP_VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        return 'g_dht11_sensor_iot_entity->UpdateState(' + propName + ', std::to_string(' + propValue + '));\n';
    };

    // ===============================
    // DHT 初始化代码生成器
    // ===============================
    Blockly.Arduino['DHT_init'] = function (block) {
        const pin  = block.getFieldValue('PIN');
        const type = block.getFieldValue('TYPE');

        Blockly.Arduino.includes_['include_dht'] = '#include <DHT.h>';
        Blockly.Arduino.definitions_['var_declare_dht_' + pin] = 'DHT dht(' + pin + ', ' + type + ');';
        Blockly.Arduino.setups_['DHT_SETUP_' + pin] = 'dht.begin();';
        return '';
    };

    // ===============================
    // DHT 读取温度/湿度代码生成器
    // ===============================
    Blockly.Arduino['KE_dht'] = function (block) {
        const mode = block.getFieldValue('MODE');
        const code = (mode === 'temperature') ? 'dht.readTemperature()' : 'dht.readHumidity()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
