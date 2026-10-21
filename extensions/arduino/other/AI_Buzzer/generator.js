/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addGenerator(Blockly) {
    // 音乐播放器与停止积木共用的非阻塞控制标志。
    const ensureStopRequestFlag = () => {
        if (!Blockly.Arduino.definitions_['ai_buzzer_stop_request']) {
            Blockly.Arduino.definitions_['ai_buzzer_stop_request'] = 'volatile bool aiBuzzerStopRequested = false;';
        }
    };

    // 仅在使用基础音调积木时生成原生 LEDC 辅助函数。
    // 这些函数不依赖 ESP32_music_lib，也不会影响仅播放音乐的项目。
    const ensureNativeToneHelpers = () => {
        ensureStopRequestFlag();
        if (!Blockly.Arduino.definitions_['ai_buzzer_native_tone_helpers']) {
            Blockly.Arduino.definitions_['ai_buzzer_native_tone_helpers'] = `
void aiBuzzerNativeTone(uint8_t pin, uint32_t frequency, uint32_t duration) {
  if (!ledcAttach(pin, frequency, 8)) return;
  ledcWriteTone(pin, frequency);
  if (duration) {
    delay(duration);
    ledcWriteTone(pin, 0);
    ledcDetach(pin);
  }
}

void aiBuzzerNativeNoTone(uint8_t pin) {
  ledcWriteTone(pin, 0);
  ledcDetach(pin);
}
`;
        }
    };

    // ===============================
    // 注册蜂鸣器 MCP 服务
    // ===============================
    Blockly.Arduino['AIbot_register_mcp_buzzer_service'] = function(block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"buzzer"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Passive buzzer control: play tone, stop tone, or play built-in music"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"command"';
        const paramType = block.getFieldValue('PARAM_TYPE') || 'String';

        const serviceNameClean = serviceName.replace(/"/g, '');
        const paramNameClean = paramName.replace(/"/g, '');
        const safeVarName = serviceNameClean.replace(/[^a-zA-Z0-9_]/g, '_');
        let paramSchemaType = 'std::string';
        let paramSchema = '{.default_value = std::nullopt}';
        if (paramType === 'Number') {
            paramSchemaType = 'int64_t';
            paramSchema = '{.default_value = std::nullopt, .min = 0, .max = 20000}';
        }

        if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
            Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }

        const setupCode = `
  ai_vox_engine.SetObserver(g_observer);
  ai_vox_engine.AddMcpTool("self.${serviceNameClean}.set",
    ${description},
    {
      {"${paramNameClean}", ai_vox::ParamSchema<${paramSchemaType}>${paramSchema}},
    }
  );
  ai_vox_engine.AddMcpTool("self.${serviceNameClean}.get",
    ${description},
    {
      {"${paramNameClean}", ai_vox::ParamSchema<${paramSchemaType}>${paramSchema}},
    }
  );
`;
        Blockly.Arduino.setups_[`AIbot_mcp_register_${safeVarName}`] = setupCode;
        return '';
    };

    // ===============================
    // 判断当前 MCP 服务是否匹配蜂鸣器服务
    // ===============================
    Blockly.Arduino['AIbot_get_mcp_message_event_name_buzzer'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"buzzer"';
        const mcpNameClean = mcpName.replace(/"/g, '');
        return [`("self.${mcpNameClean}.set" == name)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 获取蜂鸣器 MCP 参数值
    // ===============================
    Blockly.Arduino['AIbot_control_message_event_buzzer'] = function(block) {
        let paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"command"';
        const paramType = block.getFieldValue('PARAM_TYPE') || 'String';
        let paramNameClean = paramName.trim().replace(/^["']|["']$/g, '');
        paramNameClean = `"${paramNameClean || 'command'}"`;
        const valueType = paramType === 'Number' ? 'int64_t' : 'std::string';
        return [`std::get<${valueType}>(param.at(${paramNameClean}))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ===============================
    // 设置蜂鸣器 MCP 服务数据
    // ===============================
    Blockly.Arduino['AIbot_update_mcp_control_state_buzzer'] = function(block) {
        const mcpName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"buzzer"';
        const paramName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"command"';
        const command = block.getFieldValue('COMMAND') || 'play_tone';
        const responseValue = JSON.stringify(command);
        const mcpNameClean = mcpName.replace(/"/g, '');
        const paramNameClean = paramName.replace(/"/g, '') || 'command';
        const callbackCode = `
  if ("self.${mcpNameClean}.get" == name) {
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

    // ===============================
    // 上报蜂鸣器 MCP 服务执行完成
    // ===============================
    Blockly.Arduino['AIbot_response_mcp_control_result_buzzer'] = function() {
        return 'ai_vox_engine.SendMcpCallResponse(id, true);\n';
    };

    // ===============================
    // 无源蜂鸣器初始化
    // ===============================
    Blockly.Arduino['buzzer_init'] = function(block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '2';
        // 初始化积木只配置 GPIO，不加载音乐库。
        Blockly.Arduino.setups_['ai_buzzer_init_' + pin] = `pinMode(${pin}, OUTPUT);`;
        return '';
    };

    // ===============================
    // 播放指定音调
    // ===============================
    Blockly.Arduino['buzzer_play_tone'] = function(block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '2';
        const frequency = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC) || '440';
        const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '500';
        ensureNativeToneHelpers();
        return `aiBuzzerNativeTone(${pin}, ${frequency}, ${duration});\n`;
    };

    // ===============================
    // 停止蜂鸣器
    // ===============================
    Blockly.Arduino['buzzer_stop_tone'] = function(block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '2';
        ensureNativeToneHelpers();
        return `aiBuzzerStopRequested = true;\naiBuzzerNativeNoTone(${pin});\n`;
    };

    // ===============================
    // 播放内置音乐
    // ===============================
    Blockly.Arduino['buzzer_play_music'] = function(block) {
        const pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '2';
        const musicMethod = block.getFieldValue('MUSIC') || 'birthday';
        const allowedMethods = ['birthday', 'tetris', 'Ode_to_Joy', 'christmas', 'super_mario', 'star_war_tone'];
        const method = allowedMethods.includes(musicMethod) ? musicMethod : 'birthday';
        ensureStopRequestFlag();
        Blockly.Arduino.includes_['include_ai_buzzer_music'] = '#include <musicESP32.h>';
        Blockly.Arduino.definitions_['ai_buzzer_music_player'] = `music ai_buzzer_music_player(${pin});`;
        return `aiBuzzerStopRequested = false;\nai_buzzer_music_player.${method}();\n`;
    };

    return Blockly;
}

// 调用以注册（与其他 AI 插件一致）
addGenerator(Blockly);
