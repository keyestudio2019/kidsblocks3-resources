/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

function addGenerator(Blockly) {
  /* ================================================
   * 注册 LED 设备（MCP 服务注册） - 添加全局变量和初始化
   * ================================================ */
  Blockly.Arduino['AIbot_register_mcp_led_service'] = function(block) {
      const serviceName =
          Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"led"';
      const description =
          Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) ||
          '"LED, true for on, false for off"';
      const paramName =
          Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"state"';
      const paramType = block.getFieldValue('PARAM_TYPE') || 'Boolean';
      const minVal =
          Blockly.Arduino.valueToCode(block, 'MIN_VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
      const maxVal =
          Blockly.Arduino.valueToCode(block, 'MAX_VALUE', Blockly.Arduino.ORDER_ATOMIC) || '100';
  
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
          'bool g_' + safeVarName + '_res = false;';
  
      // ---- 参数 Schema ----
      let paramSchemaType = 'bool';
      let paramSchema = '{.default_value = std::nullopt}';
      if (paramType === 'Number') {
          paramSchemaType = 'int64_t';
          paramSchema = `{.default_value = std::nullopt, .min = ${minVal}, .max = ${maxVal}}`;
      }
  
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
  Blockly.Arduino['AIbot_get_mcp_message_event_name_led'] = function(block) {
      // 获取块中的服务名称输入，例如 "led"
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"led"';
  
      // 去除引号
      const mcpNameClean = mcpName.replace(/"/g, '');
  
      // 生成对应的 C++ 判断字符串，与 name 比较
      const code = `("self.${mcpNameClean}.set" == name)`;
  
      // 返回表达式 (供 if 判断使用)
      return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 获取 MCP 服务参数值（修复版本 - 确保引号正确）
   * ================================================ */
  Blockly.Arduino['AIbot_control_message_event_led'] = function(block) {
      // 获取 block 上的参数
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"led"';
      let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"state"';
      
      // 清理参数名并确保有引号
      let paramNameClean = paramName.trim();
      
      // 如果没有引号，添加引号
      if (!paramNameClean.startsWith('"') || !paramNameClean.endsWith('"')) {
          // 先移除可能存在的引号
          paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
          // 确保不是空字符串
          if (!paramNameClean || paramNameClean.trim() === '') {
              paramNameClean = 'state'; // 默认值
          }
          // 添加双引号
          paramNameClean = `"${paramNameClean}"`;
      }
      
      // 生成代码，确保参数名有引号
      const code = `std::get<bool>(param.at(${paramNameClean}))`;
      
      return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 设置 MCP 服务数据（修复版本）
   * ================================================ */
  Blockly.Arduino['AIbot_update_mcp_control_state_led'] = function(block) {
      // 获取 Blockly 参数
      const mcpName =
          Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"led"';
      const paramName =
          Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"state"';
      const responseValue =
          Blockly.Arduino.valueToCode(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || '"keyes"';
  
      // 去掉引号
      const mcpNameClean = mcpName.replace(/"/g, '');
      let paramNameClean = paramName.replace(/"/g, '');
      
      // 确保参数名不为空
      if (!paramNameClean.trim()) {
          paramNameClean = 'state';
      }
  
      // 生成正确的 C++ MCP 控制代码（确保字符串字面量有引号）
      const callbackCode = `
  if ("self.${mcpNameClean}.get" == name) {
      const auto ${mcpNameClean}_${paramNameClean} = std::get<bool>(param.at("${paramNameClean}"));
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
  Blockly.Arduino['AIbot_response_mcp_control_result_led'] = function(block) {
      const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"led"';  // 保持兼容，但实际不使用
      const code = `ai_vox_engine.SendMcpCallResponse(id, true);\n`;
      return code;
  };

  Blockly.Arduino.LED_setLEDState = function (block) {
    //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('pin');
    const state = this.getFieldValue('state');

    Blockly.Arduino.setups_.Led_init = `pinMode(${pin}, OUTPUT);`;

    return `digitalWrite(${pin}, ${state});\n`;
};

  return Blockly;
}

// 调用以注册（在你的KidsBlock主脚本中添加这个）
addGenerator(Blockly);