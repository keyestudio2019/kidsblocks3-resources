/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * 代码生成器，用于 AIbot MCP 4WD 小车扩展。
 * 所有公共积木 generator 键名均加 _4wd 后缀，避免与 2WD 扩展冲突。
 */
function addGenerator(Blockly) {

  /* ================================================
   * 注册 小车 设备（MCP 服务注册）- 4WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_register_mcp_car_service_4wd'] = function(block) {
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
   * 判断当前 MCP 服务是否匹配指定名称 - 4WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_get_mcp_message_event_name_new_4wd'] = function(block) {
    const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    const mcpNameClean = mcpName.replace(/"/g, '');
    return [`("self.${mcpNameClean}.set" == name)`, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 获取 MCP 服务参数值 - 4WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_control_message_event_function_4wd'] = function(block) {
    const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"car"';
    let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"action"';
    const paramType = block.getFieldValue('PARAM_TYPE') || 'String';

    let paramNameClean = paramName.trim();
    if (!paramNameClean.startsWith('"') || !paramNameClean.endsWith('"')) {
      paramNameClean = paramNameClean.replace(/^["']|["']$/g, '');
      if (!paramNameClean) paramNameClean = 'action';
      paramNameClean = `"${paramNameClean}"`;
    }

    const getType = paramType === 'Number' ? 'int64_t' : 'std::string';
    return [`std::get<${getType}>(param.at(${paramNameClean}))`, Blockly.Arduino.ORDER_ATOMIC];
  };

  /* ================================================
   * 设置 MCP 服务数据 - 4WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_update_mcp_control_state_new_4wd'] = function(block) {
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
        callbackCode + '}\n';
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
   * 上报 MCP 服务执行完成 - 4WD 专用
   * ================================================ */
  Blockly.Arduino['AIbot_response_mcp_control_result_new_4wd'] = function(block) {
    return `ai_vox_engine.SendMcpCallResponse(id, true);\n`;
  };

  /* ================================================
   * 积木①：4WD 小车引脚定义
   * 生成：全局 PWM 对象声明 + setup 中的 pinMode / attachPin 初始化
   * 将引脚号存入全局变量供积木②使用
   * ================================================ */
  Blockly.Arduino['AIbot_mcp_car_4wd_init'] = function(block) {
    const lfDirPin = block.getFieldValue('lf_dir_pin') || '10';
    const lfPwmPin = block.getFieldValue('lf_pwm_pin') || '11';
    const lbDirPin = block.getFieldValue('lb_dir_pin') || '12';
    const lbPwmPin = block.getFieldValue('lb_pwm_pin') || '13';
    const rfDirPin = block.getFieldValue('rf_dir_pin') || '18';
    const rfPwmPin = block.getFieldValue('rf_pwm_pin') || '17';
    const rbDirPin = block.getFieldValue('rb_dir_pin') || '38';
    const rbPwmPin = block.getFieldValue('rb_pwm_pin') || '46';

    Blockly.Arduino.includes_.ESP32PWM = '#include <ESP32PWM.h>';

    Blockly.Arduino.definitions_['pwm_lf'] = 'ESP32PWM pwm_lf;';
    Blockly.Arduino.definitions_['pwm_lb'] = 'ESP32PWM pwm_lb;';
    Blockly.Arduino.definitions_['pwm_rf'] = 'ESP32PWM pwm_rf;';
    Blockly.Arduino.definitions_['pwm_rb'] = 'ESP32PWM pwm_rb;';

    // 全局引脚号变量（供积木②读取）
    Blockly.Arduino.definitions_['car4wd_pins'] =
      `int g_lf_dir=${lfDirPin}, g_lf_pwm=${lfPwmPin};\n` +
      `int g_lb_dir=${lbDirPin}, g_lb_pwm=${lbPwmPin};\n` +
      `int g_rf_dir=${rfDirPin}, g_rf_pwm=${rfPwmPin};\n` +
      `int g_rb_dir=${rbDirPin}, g_rb_pwm=${rbPwmPin};`;

    Blockly.Arduino.setups_['car_4wd_init'] = `
  // 4WD 小车引脚初始化
  pinMode(${lfDirPin}, OUTPUT); pinMode(${lfPwmPin}, OUTPUT);
  pinMode(${lbDirPin}, OUTPUT); pinMode(${lbPwmPin}, OUTPUT);
  pinMode(${rfDirPin}, OUTPUT); pinMode(${rfPwmPin}, OUTPUT);
  pinMode(${rbDirPin}, OUTPUT); pinMode(${rbPwmPin}, OUTPUT);
  pwm_lf.attachPin(${lfPwmPin}, 490, 8);
  pwm_lb.attachPin(${lbPwmPin}, 490, 8);
  pwm_rf.attachPin(${rfPwmPin}, 490, 8);
  pwm_rb.attachPin(${rbPwmPin}, 490, 8);
  delay(40);`;

    return '';
  };

  /* ================================================
   * 积木②：4WD 小车运动控制
   * 生成：根据动作设置方向引脚电平和 PWM 速度
   * 引脚号引用积木①定义的全局变量
   * ================================================ */
  Blockly.Arduino['AIbot_mcp_car_4wd_move'] = function(block) {
    const speed  = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '255';
    const action = block.getFieldValue('action');

    let code = '';
    switch (action) {
      case 'forward':
        code = `
  // 前进：四轮全部正转
  digitalWrite(g_lf_dir, HIGH); pwm_lf.write(${speed});
  digitalWrite(g_lb_dir, HIGH); pwm_lb.write(${speed});
  digitalWrite(g_rf_dir, HIGH); pwm_rf.write(${speed});
  digitalWrite(g_rb_dir, HIGH); pwm_rb.write(${speed});`;
        break;
      case 'backward':
        code = `
  // 后退：四轮全部反转
  digitalWrite(g_lf_dir, LOW); pwm_lf.write(${speed});
  digitalWrite(g_lb_dir, LOW); pwm_lb.write(${speed});
  digitalWrite(g_rf_dir, LOW); pwm_rf.write(${speed});
  digitalWrite(g_rb_dir, LOW); pwm_rb.write(${speed});`;
        break;
      case 'turn_left':
        code = `
  // 左转：左侧反转，右侧正转
  digitalWrite(g_lf_dir, LOW);  pwm_lf.write(${speed});
  digitalWrite(g_lb_dir, LOW);  pwm_lb.write(${speed});
  digitalWrite(g_rf_dir, HIGH); pwm_rf.write(${speed});
  digitalWrite(g_rb_dir, HIGH); pwm_rb.write(${speed});`;
        break;
      case 'turn_right':
        code = `
  // 右转：左侧正转，右侧反转
  digitalWrite(g_lf_dir, HIGH); pwm_lf.write(${speed});
  digitalWrite(g_lb_dir, HIGH); pwm_lb.write(${speed});
  digitalWrite(g_rf_dir, LOW);  pwm_rf.write(${speed});
  digitalWrite(g_rb_dir, LOW);  pwm_rb.write(${speed});`;
        break;
      case 'stop':
        code = `
  // 停止：四轮PWM置0
  pwm_lf.write(0); pwm_lb.write(0);
  pwm_rf.write(0); pwm_rb.write(0);`;
        break;
    }

    return code + '\n';
  };

  return Blockly;
}

exports = addGenerator;
