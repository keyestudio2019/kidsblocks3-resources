/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addGenerator(Blockly) {
    /* ================================================
     * 注册 电机 设备（MCP 服务注册） - 添加全局变量和初始化
     * ================================================ */
    Blockly.Arduino['AIbot_register_mcp_motor_service'] = function(block) {
      const serviceName =
        Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"motor"';
      const description =
        Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) ||
        '"Motor Control, direction: forward/backward/stop speed:0-255"';
      const param1Name =
        Blockly.Arduino.valueToCode(block, 'PARAM1_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"direction"';
      const param1Type = block.getFieldValue('PARAM1_TYPE') || 'String';
      const param2Name =
        Blockly.Arduino.valueToCode(block, 'PARAM2_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"speed"';
      const param2Type = block.getFieldValue('PARAM2_TYPE') || 'Number';
  
      // 去除引号
      const serviceNameClean = serviceName.replace(/"/g, '');
      const param1NameClean = param1Name.replace(/"/g, '');
      const param2NameClean = param2Name.replace(/"/g, '');
  
      // 保证服务名变量安全
      const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
  
      // 定义全局
      if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
        Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] =
          'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
      }
      Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] =
        'std::string g_' + safeVarName + '_res = "";';
  
      // 参数1 Schema
      let param1SchemaType = 'std::string';
      let param1Schema = '{.default_value = std::nullopt}';
      if (param1Type === 'Number') {
        param1SchemaType = 'int64_t';
        param1Schema = '{.default_value = std::nullopt, .min = 0, .max = 255}';
      }
  
      // 参数2 Schema
      let param2SchemaType = 'std::string';
      let param2Schema = '{.default_value = std::nullopt}';
      if (param2Type === 'Number') {
        param2SchemaType = 'int64_t';
        param2Schema = '{.default_value = std::nullopt, .min = 0, .max = 255}';
      }
  
      // setup 段生成（支持两个参数）
      const setupCode = `
  ai_vox_engine.SetObserver(g_observer);
  
  ai_vox_engine.AddMcpTool("self.${serviceNameClean}.set",
    ${description},
    {
      {"${param1NameClean}", ai_vox::ParamSchema<${param1SchemaType}>${param1Schema}},
      {"${param2NameClean}", ai_vox::ParamSchema<${param2SchemaType}>${param2Schema}},
    }
  );
  
  ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",
    ${description},
    {
      {"${param1NameClean}", ai_vox::ParamSchema<${param1SchemaType}>${param1Schema}},
      {"${param2NameClean}", ai_vox::ParamSchema<${param2SchemaType}>${param2Schema}},
    }
  );
      `;
  
      Blockly.Arduino.setups_[`AIbot_mcp_register_${safeVarName}`] = setupCode;
      return '';
    };
  
    /* ================================================
     * 判断当前 MCP 服务是否匹配指定名称
     * ================================================ */
    Blockly.Arduino['AIbot_get_mcp_message_event_name_motor'] = function(block) {
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"motor"';
      const mcpNameClean = mcpName.replace(/"/g, '');
      const code = `("self.${mcpNameClean}.set" == name)`;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
  
    /* ================================================
     * 获取 MCP 服务参数值
     * ================================================ */
    Blockly.Arduino['AIbot_control_message_event_motor'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"motor"';
        let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"direction"';
        const paramType = block.getFieldValue('PARAM_TYPE') || 'String';  // 获取类型
    
        let paramNameClean = paramName.trim();
        if (!paramNameClean.startsWith('"') || !paramNameClean.endsWith('"')) {
        paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
        if (!paramNameClean) paramNameClean = 'direction';
        paramNameClean = `"${paramNameClean}"`;
        }
    
        // 根据类型选择std::get
        let getType = 'std::string';
        if (paramType === 'Number') {
        getType = 'int64_t';
        }
        const code = `std::get<${getType}>(param.at(${paramNameClean}))`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    /* ================================================
     * 设置 MCP 服务数据
     * ================================================ */
    Blockly.Arduino['AIbot_update_mcp_control_state_motor'] = function(block) {
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"motor"';
      const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"direction"';
      const responseValue = Blockly.Arduino.valueToCode(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || '"done"';
  
      const mcpNameClean = mcpName.replace(/"/g, '');
      let paramNameClean = paramName.replace(/"/g, '');
      if (!paramNameClean) paramNameClean = 'direction';
  
      const callbackCode = `
  if ("self.${mcpNameClean}.get" == name) {
    const auto ${mcpNameClean}_${paramNameClean} = std::get<std::string>(param.at("${paramNameClean}"));
    ai_vox_engine.SendMcpCallResponse(id, ${responseValue});
  }
      `;
  
      if (!Blockly.Arduino.definitions_['AIbot_onMcpControl']) {
        Blockly.Arduino.definitions_['AIbot_onMcpControl'] =
          'void OnMcpControl(const std::int64_t& id, const std::string& name, ' +
          'const std::map<std::string, std::variant<std::string, int64_t, bool>>& param) {\n' +
          callbackCode +
          '}\n';
      } else {
        const existingFunction = Blockly.Arduino.definitions_['AIbot_onMcpControl'];
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
    Blockly.Arduino['AIbot_response_mcp_control_result_motor'] = function(block) {
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"motor"';
  
      // 这段代码应该在 OnMcpControl 函数内部使用，而不是直接生成
      const code = `ai_vox_engine.SendMcpCallResponse(id, true);\n`;
      return code;
    };
  
    Blockly.Arduino.Motor_setMotorState = function (block) {
      const in1Pin = block.getFieldValue('in1_pin') || '5';
      const in2Pin = block.getFieldValue('in2_pin') || '6';
      const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '255';
      const direction = block.getFieldValue('direction');
    
      Blockly.Arduino.includes_.ESP32PWM = '#include <ESP32PWM.h>';
    
      if (!Blockly.Arduino.definitions_['pwm_in1']) {
        Blockly.Arduino.definitions_['pwm_in1'] = 'ESP32PWM pwm_in1;';
      }
      if (!Blockly.Arduino.definitions_['pwm_in2']) {
        Blockly.Arduino.definitions_['pwm_in2'] = 'ESP32PWM pwm_in2;';
      }
    
      Blockly.Arduino.setups_.Motor_init = `
        pinMode(${in1Pin}, OUTPUT);
        pinMode(${in2Pin}, OUTPUT);
        pwm_in1.attachPin(${in1Pin}, 490, 8);
        pwm_in2.attachPin(${in2Pin}, 490, 8);
        delay(40);
      `;
    
      let code = '';
      switch (direction) {
        case 'forward':
          code = `
      pwm_in1.write(${speed});        // 正转：in1 PWM速度
      pwm_in2.write(0);
          `;
          break;
        case 'backward':
          code = `
      int motor_speed_back = constrain(${speed}, 0, 255);
      pwm_in1.write(0);
      pwm_in2.write(motor_speed_back);   // 反转：映射后的速度
          `;
          break;
        case 'stop':
          code = `
      pwm_in1.write(0);
      pwm_in2.write(0);
          `;
          break;
      }
    
      return code + '\n';
    }; 
    return Blockly;
  }
  
  exports = addGenerator;