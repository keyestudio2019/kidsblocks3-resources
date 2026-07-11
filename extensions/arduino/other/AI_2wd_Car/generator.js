/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 代码生成器，用于 AIbot MCP 2WD 小车扩展。
 * 所有公共积木 generator 键名均加 _2wd 后缀，避免与 4WD 扩展冲突。
 */
function addGenerator(Blockly) {

  /* ================================================
   * 注册 小车 设备（MCP 服务注册）- 2WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_register_mcp_car_service_2wd'] = function(block) {
    const serviceName =
      Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    const description =
      Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) ||
      '"Car Control, action: forward/backward/turn_left/turn_right/stop speed:0-255"';
    const param1Name =
      Blockly.Arduino.valueToCode(block, 'PARAM1_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"action"';
    const param1Type = block.getFieldValue('PARAM1_TYPE') || 'String';
    const param2Name =
      Blockly.Arduino.valueToCode(block, 'PARAM2_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"speed"';
    const param2Type = block.getFieldValue('PARAM2_TYPE') || 'Number';

    const serviceNameClean = serviceName.replace(/"/g, '');
    const param1NameClean = param1Name.replace(/"/g, '');
    const param2NameClean = param2Name.replace(/"/g, '');
    const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');

    if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
      Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] =
        'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
    }
    Blockly.Arduino.definitions_['AIbot_define_' + safeVarName + '_res'] =
      'std::string g_' + safeVarName + '_res = "";';

    let param1SchemaType = 'std::string';
    let param1Schema = '{.default_value = std::nullopt}';
    if (param1Type === 'Number') {
      param1SchemaType = 'int64_t';
      param1Schema = '{.default_value = std::nullopt, .min = 0, .max = 255}';
    }

    let param2SchemaType = 'std::string';
    let param2Schema = '{.default_value = std::nullopt}';
    if (param2Type === 'Number') {
      param2SchemaType = 'int64_t';
      param2Schema = '{.default_value = std::nullopt, .min = 0, .max = 255}';
    }

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
   * 判断当前 MCP 服务是否匹配指定名称 - 2WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_get_mcp_message_event_name_new_2wd'] = function(block) {
    const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    const mcpNameClean = mcpName.replace(/"/g, '');
    const code = `("self.${mcpNameClean}.set" == name)`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 获取 MCP 服务参数值 - 2WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_control_message_event_function_2wd'] = function(block) {
    const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"action"';
    const paramType = block.getFieldValue('PARAM_TYPE') || 'String';

    let paramNameClean = paramName.trim();
    if (!paramNameClean.startsWith('"') || !paramNameClean.endsWith('"')) {
      paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
      if (!paramNameClean) paramNameClean = 'action';
      paramNameClean = `"${paramNameClean}"`;
    }

    let getType = 'std::string';
    if (paramType === 'Number') {
      getType = 'int64_t';
    }
    const code = `std::get<${getType}>(param.at(${paramNameClean}))`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 设置 MCP 服务数据 - 2WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_update_mcp_control_state_new_2wd'] = function(block) {
    const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"action"';
    const responseValue = Blockly.Arduino.valueToCode(block, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || '"done"';

    const mcpNameClean = mcpName.replace(/"/g, '');
    let paramNameClean = paramName.replace(/"/g, '');
    if (!paramNameClean) paramNameClean = 'action';

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
   * 上报 MCP 服务执行完成 - 2WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_response_mcp_control_result_new_2wd'] = function(block) {
    const code = `ai_vox_engine.SendMcpCallResponse(id, true);\n`;
    return code;
  };

  /* ================================================
   * 2WD 小车运动控制（引脚 + 动作 + 速度）
   * ================================================ */
  Blockly.Arduino['AIbot_mcp_car_2wd_control'] = function(block) {
    const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '255';
    const action = block.getFieldValue('action');

    const leftDirPin  = block.getFieldValue('left_dir_pin')  || '5';
    const leftPwmPin  = block.getFieldValue('left_pwm_pin')  || '6';
    const rightDirPin = block.getFieldValue('right_dir_pin') || '7';
    const rightPwmPin = block.getFieldValue('right_pwm_pin') || '8';

    Blockly.Arduino.includes_.ESP32PWM = '#include <ESP32PWM.h>';

    if (!Blockly.Arduino.definitions_['pwm_left']) {
      Blockly.Arduino.definitions_['pwm_left'] = 'ESP32PWM pwm_left;';
    }
    if (!Blockly.Arduino.definitions_['pwm_right']) {
      Blockly.Arduino.definitions_['pwm_right'] = 'ESP32PWM pwm_right;';
    }

    Blockly.Arduino.setups_.Car_2wd_init = `
  pinMode(${leftDirPin}, OUTPUT);
  pinMode(${leftPwmPin}, OUTPUT);
  pinMode(${rightDirPin}, OUTPUT);
  pinMode(${rightPwmPin}, OUTPUT);
  pwm_left.attachPin(${leftPwmPin}, 490, 8);
  pwm_right.attachPin(${rightPwmPin}, 490, 8);
  delay(40);
    `;

    let code = '';
    switch (action) {
      case 'forward':
        code = `
  digitalWrite(${leftDirPin}, HIGH);
  pwm_left.write(${speed});
  digitalWrite(${rightDirPin}, HIGH);
  pwm_right.write(${speed});
        `;
        break;
      case 'backward':
        code = `
  digitalWrite(${leftDirPin}, LOW);
  pwm_left.write(${speed});
  digitalWrite(${rightDirPin}, LOW);
  pwm_right.write(${speed});
        `;
        break;
      case 'turn_left':
        code = `
  digitalWrite(${leftDirPin}, LOW);
  pwm_left.write(${speed});
  digitalWrite(${rightDirPin}, HIGH);
  pwm_right.write(${speed});
        `;
        break;
      case 'turn_right':
        code = `
  digitalWrite(${leftDirPin}, HIGH);
  pwm_left.write(${speed});
  digitalWrite(${rightDirPin}, LOW);
  pwm_right.write(${speed});
        `;
        break;
      case 'stop':
        code = `
  pwm_left.write(0);
  pwm_right.write(0);
        `;
        break;
    }

    return code + '\n';
  };

  return Blockly;
}

exports = addGenerator;
