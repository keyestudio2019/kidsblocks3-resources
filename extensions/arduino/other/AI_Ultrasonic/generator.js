/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addGenerator(Blockly) {
    // ===============================  
    // 超声波传感器 MCP 服务注册代码生成器
    // ===============================
    Blockly.Arduino['AIbot_register_mcp_ultrasonic_sensor_service'] = function(block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"ultrasonic"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Ultrasonic Sensor, read distance value"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"distance"';
        const paramType = block.getFieldValue('PARAM_TYPE') || 'Number';
    
        const serviceNameClean = serviceName.replace(/"/g, '');
        const paramNameClean = paramName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
    
        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }
    
        let paramSchemaType;
        let paramSchemaDetails;
        if (paramType === 'Number') {
            paramSchemaType = 'int64_t';
            paramSchemaDetails = '{.default_value = std::nullopt, .min = 0, .max = 400}';  // 假设最大距离400cm
            Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] = 'int64_t g_' + safeVarName + '_res = 0;';
        } else {
            paramSchemaType = 'std::string';
            paramSchemaDetails = '{.default_value = std::nullopt}';
            Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] = 'std::string g_' + safeVarName + '_res = "";';
        }
    
        const setupCode = `
    // 为 "${serviceNameClean}" 服务进行 MCP 工具注册
    ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",
        ${description},
        {
            {${paramName}, ai_vox::ParamSchema<${paramSchemaType}>${paramSchemaDetails}},
        }
    );
    `;
    
        Blockly.Arduino.setups_[`AIbot_mcp_register_${safeVarName}`] = setupCode;
        return '';
    };
    

    // ===============================  
    // 超声波传感器 MCP 名称判断代码生成器
    // ===============================
    Blockly.Arduino['AIbot_get_ultrasonic_sensor_mcp_name'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"ultrasonic"';
        const code = `("self.${mcpName.replace(/"/g, '')}.get" == name)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // ===============================  
    // 超声波传感器参数值获取代码生成器
    // ===============================
    Blockly.Arduino['AIbot_get_ultrasonic_sensor_param_value'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"ultrasonic"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"distance"';
        
        let paramNameClean = paramName.trim();
        paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
        paramNameClean = `"${paramNameClean}"`;
        
        const code = `std::get<int64_t>(param.at(${paramNameClean}))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // ===============================  
    // 超声波传感器状态更新代码生成器
    // ===============================
    Blockly.Arduino['AIbot_update_ultrasonic_sensor_state'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"ultrasonic"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"distance"';
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
        
        const serviceNameClean = mcpName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
        
        const code = `g_${safeVarName}_res = ${value};\n`;
        return code;
    };
    
    // ===============================  
    // 超声波传感器结果上报代码生成器
    // ===============================
    Blockly.Arduino['AIbot_response_ultrasonic_sensor_result'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"ultrasonic"';
        
        const serviceNameClean = mcpName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
        
        const code = `ai_vox_engine.SendMcpCallResponse(id, g_${safeVarName}_res);\n`;
        return code;
    };

    // ===============================  
    // 超声波传感器读取代码生成器（只测量厘米单位）
    // ===============================
    Blockly.Arduino['ultrasonic_sensor_read'] = function(block) {
        const trigPin = block.getFieldValue('trig_pin');
        const echoPin = block.getFieldValue('echo_pin');

        // 添加引脚初始化到 setup
        Blockly.Arduino.setups_['ultrasonic_sensor_init'] = `
    pinMode(${trigPin}, OUTPUT);
    pinMode(${echoPin}, INPUT);
        `;

        // 生成触发和测量代码（固定为厘米单位）
        const speedOfSound = '0.034';  // cm/μs

        const code = `([](int trig, int echo) -> float {
            digitalWrite(trig, LOW);
            delayMicroseconds(2);
            digitalWrite(trig, HIGH);
            delayMicroseconds(10);
            digitalWrite(trig, LOW);
            long duration = pulseIn(echo, HIGH);
            return (duration * ${speedOfSound} / 2);
        })(${trigPin}, ${echoPin})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}
    
exports = addGenerator;