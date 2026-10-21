/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addGenerator(Blockly) {
    // ===============================
    // 循迹传感器 MCP 服务注册代码生成器
    // ===============================
    Blockly.Arduino['AIbot_register_mcp_tracking_sensor_service'] = function(block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"tracking"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"I2C five-way line tracking sensor; returns five values from left to right, where 0 is black line and 1 is white surface"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"value"';

        const serviceNameClean = serviceName.replace(/"/g, '');
        const paramNameClean = paramName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');

        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }

        Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] = 'std::string g_' + safeVarName + '_res = "";';
        Blockly.Arduino.setups_['AIbot_mcp_register_' + safeVarName] = `
    ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",
        ${description},
        {
            {"${paramNameClean}", ai_vox::ParamSchema<std::string>{.default_value = std::nullopt}},
        }
    );
`;
        return '';
    };

    // ===============================
    // 循迹传感器 MCP 名称判断代码生成器
    // ===============================
    Blockly.Arduino['AIbot_get_tracking_sensor_mcp_name'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"tracking"';
        return [`("self.${mcpName.replace(/"/g, '')}.get" == name)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 获取循迹传感器 MCP 参数值
    // ===============================
    Blockly.Arduino['AIbot_get_tracking_sensor_param_value'] = function(block) {
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"value"';
        const paramNameClean = paramName.trim().replace(/^["']|["']$/g, '') || 'value';
        return [`std::get<std::string>(param.at("${paramNameClean}"))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 更新循迹传感器 MCP 状态
    // ===============================
    Blockly.Arduino['AIbot_update_tracking_sensor_state'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"tracking"';
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || 'trackingSensorReadAll()';
        const safeVarName = mcpName.replace(/"/g, '').replace(/[^a-zA-Z0-9_]/g, '_');
        return `g_${safeVarName}_res = ${value};\n`;
    };

    // ===============================
    // 上报循迹传感器 MCP 执行结果
    // ===============================
    Blockly.Arduino['AIbot_response_tracking_sensor_result'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"tracking"';
        const safeVarName = mcpName.replace(/"/g, '').replace(/[^a-zA-Z0-9_]/g, '_');
        return `ai_vox_engine.SendMcpCallResponse(id, g_${safeVarName}_res);\n`;
    };

    // ===============================
    // I2C 五路循迹模块初始化代码生成器
    // ===============================
    Blockly.Arduino['tracking_sensor_init'] = function(block) {
        const address = block.getFieldValue('ADDRESS') || '0x20';
        const sda = Blockly.Arduino.valueToCode(block, 'SDA', Blockly.Arduino.ORDER_ATOMIC) || '8';
        const scl = Blockly.Arduino.valueToCode(block, 'SCL', Blockly.Arduino.ORDER_ATOMIC) || '9';

            // 直接读取 I2C 输入扩展器的原始字节，
        // 避免第三方库的缓存/输入模式初始化顺序造成状态长期保持为 HIGH。
        Blockly.Arduino.includes_['include_tracking_sensor'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['tracking_sensor_i2c'] = `
const uint8_t TRACKING_SENSOR_I2C_ADDRESS = ${address};
const uint8_t TRACKING_SENSOR_LEFT_PIN = 4;
const uint8_t TRACKING_SENSOR_LEFT_CENTER_PIN = 0;
const uint8_t TRACKING_SENSOR_CENTER_PIN = 1;
const uint8_t TRACKING_SENSOR_RIGHT_CENTER_PIN = 2;
const uint8_t TRACKING_SENSOR_RIGHT_PIN = 3;
bool tracking_sensor_connected = false;

bool trackingSensorReadRaw(uint8_t &rawValue) {
    if (!tracking_sensor_connected) return false;
    const uint8_t received = Wire.requestFrom(TRACKING_SENSOR_I2C_ADDRESS, static_cast<uint8_t>(1));
    if (received != 1 || !Wire.available()) return false;
    rawValue = Wire.read();
    return true;
}

int trackingSensorRead(uint8_t sensorPin) {
    uint8_t rawValue = 0;
    if (!trackingSensorReadRaw(rawValue)) return -1;
    return (rawValue >> sensorPin) & 0x01;
}

String trackingSensorReadAll() {
    uint8_t rawValue = 0;
    if (!trackingSensorReadRaw(rawValue)) return "ERROR";
    String trackingValue = "";
    trackingValue += String((rawValue >> TRACKING_SENSOR_LEFT_PIN) & 0x01);
    trackingValue += String((rawValue >> TRACKING_SENSOR_LEFT_CENTER_PIN) & 0x01);
    trackingValue += String((rawValue >> TRACKING_SENSOR_CENTER_PIN) & 0x01);
    trackingValue += String((rawValue >> TRACKING_SENSOR_RIGHT_CENTER_PIN) & 0x01);
    trackingValue += String((rawValue >> TRACKING_SENSOR_RIGHT_PIN) & 0x01);
    return trackingValue;
}
`;
        Blockly.Arduino.setups_['tracking_sensor_init'] = `
  Wire.begin(${sda}, ${scl});
  Wire.beginTransmission(TRACKING_SENSOR_I2C_ADDRESS);
  tracking_sensor_connected = (Wire.endTransmission() == 0);
  if (tracking_sensor_connected) {
    // 将五个传感器位释放为高电平，供外部传感器拉低读取。
    Wire.beginTransmission(TRACKING_SENSOR_I2C_ADDRESS);
    Wire.write(0xFF);
    tracking_sensor_connected = (Wire.endTransmission() == 0);
  }
`;
        return '';
    };

    // ===============================
    // 读取五路循迹值（从左到右）
    // ===============================
    Blockly.Arduino['tracking_sensor_read_all'] = function() {
        return ['trackingSensorReadAll()', Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 读取单个循迹传感器值
    // ===============================
    Blockly.Arduino['tracking_sensor_read'] = function(block) {
        const sensorMap = {
            left: 'TRACKING_SENSOR_LEFT_PIN',
            left_center: 'TRACKING_SENSOR_LEFT_CENTER_PIN',
            center: 'TRACKING_SENSOR_CENTER_PIN',
            right_center: 'TRACKING_SENSOR_RIGHT_CENTER_PIN',
            right: 'TRACKING_SENSOR_RIGHT_PIN'
        };
        const sensor = block.getFieldValue('SENSOR') || 'center';
        return [`trackingSensorRead(${sensorMap[sensor] || 'TRACKING_SENSOR_CENTER_PIN'})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 判断循迹传感器状态
    // ===============================
    Blockly.Arduino['tracking_sensor_detect'] = function(block) {
        const sensorMap = {
            left: 'TRACKING_SENSOR_LEFT_PIN',
            left_center: 'TRACKING_SENSOR_LEFT_CENTER_PIN',
            center: 'TRACKING_SENSOR_CENTER_PIN',
            right_center: 'TRACKING_SENSOR_RIGHT_CENTER_PIN',
            right: 'TRACKING_SENSOR_RIGHT_PIN'
        };
        const sensor = block.getFieldValue('SENSOR') || 'center';
        const state = block.getFieldValue('STATE') || '0';
        return [`(trackingSensorRead(${sensorMap[sensor] || 'TRACKING_SENSOR_CENTER_PIN'}) == ${state})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 读取模块连接状态
    // ===============================
    Blockly.Arduino['tracking_sensor_is_connected'] = function() {
        return ['tracking_sensor_connected', Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

addGenerator(Blockly);
