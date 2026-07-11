/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addGenerator(Blockly) {
    /* ================================================
     * 注册舵机设备（MCP 服务注册） - 添加全局变量和初始化
     * ================================================ */
    Blockly.Arduino['AIbot_register_mcp_servo_service'] = function(block) {
        const serviceName =
            Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"servo"';
        const description =
            Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) ||
            '"Servo motor, angle from 0 to 180 degrees"';
        const paramName =
            Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"angle"';
        const paramType = block.getFieldValue('PARAM_TYPE') || 'Number';
        const minVal = '0';  // 固定为0-180范围
        const maxVal = '180';
    
        // 去除引号
        const serviceNameClean = serviceName.replace(/"/g, '');
        const paramNameClean = paramName.replace(/"/g, '');
    
        // 保证服务名变量安全（防止非法字符）
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
    
        // ---- 定义（只定义一次 ai_vox_engine，全局静态变量每服务独立） ----
        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] =
                'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }
        Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] =
            'int64_t g_' + safeVarName + '_res = 0;';  // 对于舵机，使用 int64_t
    
        // ---- 参数 Schema ----
        let paramSchemaType = 'int64_t';  // 舵机角度为数值
        let paramSchema = `{.default_value = std::nullopt, .min = ${minVal}, .max = ${maxVal}}`;
    
        // ---- setup 段生成 ----
        const setupCode = `
    ai_vox_engine.SetObserver(g_observer);
    
    ai_vox_engine.AddMcpTool("self.${serviceNameClean}.set",                                       
        ${description},
        {
          {"${paramNameClean}", ai_vox::ParamSchema<${paramSchemaType}>${paramSchema},},
        }
    );
    
    ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",                                     
        ${description},
        {
          {"${paramNameClean}", ai_vox::ParamSchema<${paramSchemaType}>${paramSchema},},
        }
    );
    `;
    
        Blockly.Arduino.setups_[`AIbot_mcp_register_${safeVarName}`] = setupCode;
        return '';
    };
  
    /* ================================================
     * 判断当前 MCP 服务是否匹配指定名称
     * ================================================ */
    Blockly.Arduino['AIbot_get_mcp_message_event_name_servo'] = function(block) {
        // 获取块中的服务名称输入，例如 "servo"
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"servo"';
    
        // 去除引号
        const mcpNameClean = mcpName.replace(/"/g, '');
    
        // 生成对应的 C++ 判断字符串，与 name 比较
        const code = `("self.${mcpNameClean}.set" == name)`;
    
        // 返回表达式 (供 if 判断使用)
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
  
    /* ================================================
     * 获取 MCP 服务参数值（舵机版本 - 输出为 int64_t）
     * ================================================ */
    Blockly.Arduino['AIbot_control_message_event_function_servo'] = function(block) {
        // 获取 block 上的参数
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"servo"';
        let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"angle"';
        
        // 清理参数名并确保有引号
        let paramNameClean = paramName.trim();
        
        // 如果没有引号，添加引号
        if (!paramNameClean.startsWith('"') || !paramNameClean.endsWith('"')) {
            // 先移除可能存在的引号
            paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
            // 确保不是空字符串
            if (!paramNameClean || paramNameClean.trim() === '') {
                paramNameClean = 'angle'; // 默认值
            }
            // 添加双引号
            paramNameClean = `"${paramNameClean}"`;
        }
        
        // 生成代码，确保参数名有引号，并使用 int64_t
        const code = `std::get<int64_t>(param.at(${paramNameClean}))`;
        
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
  
    /* ================================================
     * 设置 MCP 服务数据（舵机版本）
     * ================================================ */
    Blockly.Arduino['AIbot_update_mcp_control_state_servo'] = function(block) {
        // 获取 Blockly 参数
        const mcpName =
            Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"servo"';
        const paramName =
            Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"angle"';
        const responseValue =
            Blockly.Arduino.valueToCode(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || '0';
    
        // 去掉引号
        const mcpNameClean = mcpName.replace(/"/g, '');
        let paramNameClean = paramName.replace(/"/g, '');
        
        // 确保参数名不为空
        if (!paramNameClean.trim()) {
            paramNameClean = 'angle';
        }
    
        // 生成正确的 C++ MCP 控制代码（确保字符串字面量有引号，使用 int64_t）
        const callbackCode = `
    if ("self.${mcpNameClean}.get" == name) {
        const auto ${mcpNameClean}_${paramNameClean} = std::get<int64_t>(param.at("${paramNameClean}"));
        ai_vox_engine.SendMcpCallResponse(id, ${responseValue});
    }
    `;
    
        // 不放到 setups_，而是追加到 definitions_.AIbot_onMcpControl（回调函数体）
        // 如果回调函数已存在，追加；否则初始化
        if (!Blockly.Arduino.definitions_['AIbot_onMcpControl']) {
            Blockly.Arduino.definitions_['AIbot_onMcpControl'] = 
                'void OnMcpControl(const std::int64_t& id, const std::string& name, ' +
                'const std::map<std::string, std::variant<std::string, int64_t, bool>>& param) {\n' +
                callbackCode +
                '}\n';
        } else {
            // 追加到现有函数体
            const existingFunction = Blockly.Arduino.definitions_['AIbot_onMcpControl'];
            // 在函数结束的 '}' 之前插入新代码
            const insertPos = existingFunction.lastIndexOf('}');
            if (insertPos > -1) {
                Blockly.Arduino.definitions_['AIbot_onMcpControl'] = 
                    existingFunction.slice(0, insertPos) + callbackCode + existingFunction.slice(insertPos);
            }
        }
    
        return '';
    };
  
    /* ================================================
     * 上报 MCP 服务执行完成
     * ================================================ */
    Blockly.Arduino['AIbot_response_mcp_control_result_servo'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"servo"';  // 保持兼容，但实际不使用
        const code = `ai_vox_engine.SendMcpCallResponse(id, true);\n`;
        return code;
    };
  
    /* ================================================
     * 设置舵机角度（0-180度）
     * ================================================ */
    Blockly.Arduino['servo_setAngle'] = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC) || '90';
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC) || '1000';
        
        // 使用 ESP32Servo 库
        Blockly.Arduino.includes_['include_esp32servo'] = '#include <ESP32Servo.h>';
        
        // 声明 Servo 对象（根据引脚命名）
        const servoVar = `servo_pin_${pin}`;
        Blockly.Arduino.definitions_[`var_${servoVar}`] = `Servo ${servoVar};`;
        
        // 在 setup 中 attach 引脚
        Blockly.Arduino.setups_[`servo_attach_${pin}`] = `${servoVar}.attach(${pin});`;
        
        // 生成代码：设置角度 + 延时
        return `${servoVar}.write(${angle});\ndelay(${time});\n`;
    };

    // 读取舵机角度 - 代码生成器
    Blockly.Arduino['servo_read'] = function (block) {
        const pin = block.getFieldValue('pin');
        
        // 使用 ESP32Servo 库
        Blockly.Arduino.includes_['include_esp32servo'] = '#include <ESP32Servo.h>';
        
        // 声明 Servo 对象（与设置角度块使用相同的命名格式）
        const servoVar = `servo_pin_${pin}`;
        Blockly.Arduino.definitions_[`var_${servoVar}`] = `Servo ${servoVar};`;
        
        // 在 setup 中 attach 引脚
        Blockly.Arduino.setups_[`servo_attach_${pin}`] = `${servoVar}.attach(${pin});`;
        
        // 返回读取角度的表达式
        return [`${servoVar}.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };
  
    return Blockly;
  }
  
  // 调用以注册（在你的KidsBlock主脚本中添加这个）
  addGenerator(Blockly);