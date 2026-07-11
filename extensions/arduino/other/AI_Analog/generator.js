/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addGenerator(Blockly) {
    // ===============================  
    // 模拟传感器 MCP 服务注册代码生成器
    // ===============================
    Blockly.Arduino['AIbot_register_mcp_analog_sensor_service'] = function(block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"analog"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Analog Sensor, read analog value"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"value"';
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
            paramSchemaDetails = '{.default_value = std::nullopt, .min = 0, .max = 4095}';
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
    // 模拟传感器 MCP 名称判断代码生成器
    // ===============================
    Blockly.Arduino['AIbot_get_analog_sensor_mcp_name'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"analog"';
        const code = `("self.${mcpName.replace(/"/g, '')}.get" == name)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // ===============================  
    // 模拟传感器参数值获取代码生成器
    // ===============================
    Blockly.Arduino['AIbot_get_analog_sensor_param_value'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"analog"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"value"';
        
        let paramNameClean = paramName.trim();
        paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
        paramNameClean = `"${paramNameClean}"`;
        
        const code = `std::get<int64_t>(param.at(${paramNameClean}))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // ===============================  
    // 模拟传感器状态更新代码生成器
    // ===============================
    Blockly.Arduino['AIbot_update_analog_sensor_state'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"analog"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"value"';
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
        
        const serviceNameClean = mcpName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
        
        const code = `g_${safeVarName}_res = ${value};\n`;
        return code;
    };
    
    // ===============================  
    // 模拟传感器结果上报代码生成器
    // ===============================
    Blockly.Arduino['AIbot_response_analog_sensor_result'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"analog"';
        
        const serviceNameClean = mcpName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
        
        const code = `ai_vox_engine.SendMcpCallResponse(id, g_${safeVarName}_res);\n`;
        return code;
    };

        // ===============================  
    // 模拟传感器读取代码生成器
    // ===============================
    Blockly.Arduino['analog_sensor_read'] = function(block) {
        const pin = block.getFieldValue('pin');
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    
    return Blockly;
    }
    
    // 调用以注册
    addGenerator(Blockly);