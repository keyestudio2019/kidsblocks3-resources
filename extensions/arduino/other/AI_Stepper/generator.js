/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

function addGenerator (Blockly) {
    const stepperState = () => `
const int AI_STEPPER_SEQUENCE[8][4] = {
    {1, 0, 0, 0}, {1, 1, 0, 0}, {0, 1, 0, 0}, {0, 1, 1, 0},
    {0, 0, 1, 0}, {0, 0, 1, 1}, {0, 0, 0, 1}, {1, 0, 0, 1}
};
int ai_stepper_in1 = -1;
int ai_stepper_in2 = -1;
int ai_stepper_in3 = -1;
int ai_stepper_in4 = -1;
int ai_stepper_position = 0;
unsigned long ai_stepper_interval_us = 1500;

void aiStepperWriteSequence(int sequenceIndex) {
    digitalWrite(ai_stepper_in1, AI_STEPPER_SEQUENCE[sequenceIndex][0]);
    digitalWrite(ai_stepper_in2, AI_STEPPER_SEQUENCE[sequenceIndex][1]);
    digitalWrite(ai_stepper_in3, AI_STEPPER_SEQUENCE[sequenceIndex][2]);
    digitalWrite(ai_stepper_in4, AI_STEPPER_SEQUENCE[sequenceIndex][3]);
}

void aiStepperRelease() {
    digitalWrite(ai_stepper_in1, LOW);
    digitalWrite(ai_stepper_in2, LOW);
    digitalWrite(ai_stepper_in3, LOW);
    digitalWrite(ai_stepper_in4, LOW);
}

void aiStepperMove(long stepCount, bool forward) {
    long totalSteps = abs(stepCount);
    for (long index = 0; index < totalSteps; index++) {
        ai_stepper_position = forward ? (ai_stepper_position + 1) % 8 : (ai_stepper_position + 7) % 8;
        aiStepperWriteSequence(ai_stepper_position);
        delayMicroseconds(ai_stepper_interval_us);
    }
}
`;

    Blockly.Arduino.AIbot_register_mcp_stepper_service = function (block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'SERVICE_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"stepper"';
        const description = Blockly.Arduino.valueToCode(block, 'DESCRIPTION', Blockly.Arduino.ORDER_ATOMIC) || '"Stepper motor control. direction: forward or reverse; steps: 1 to 4096."';
        const directionParam = Blockly.Arduino.valueToCode(block, 'DIRECTION_PARAM', Blockly.Arduino.ORDER_ATOMIC) || '"direction"';
        const stepsParam = Blockly.Arduino.valueToCode(block, 'STEPS_PARAM', Blockly.Arduino.ORDER_ATOMIC) || '"steps"';
        const serviceNameClean = serviceName.replace(/["']/g, '').replace(/[^a-zA-Z0-9_]/g, '_') || 'stepper';
        const directionParamClean = directionParam.replace(/["']/g, '') || 'direction';
        const stepsParamClean = stepsParam.replace(/["']/g, '') || 'steps';

        if (!Blockly.Arduino.definitions_.AIbot_aivox_engine_global) {
            Blockly.Arduino.definitions_.AIbot_aivox_engine_global = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
        }
        Blockly.Arduino.setups_[`AIbot_mcp_register_${serviceNameClean}`] = `
  ai_vox_engine.SetObserver(g_observer);
  ai_vox_engine.AddMcpTool("self.${serviceNameClean}.set",
    ${description},
    {
      {"${directionParamClean}", ai_vox::ParamSchema<std::string>{.default_value = std::nullopt}},
      {"${stepsParamClean}", ai_vox::ParamSchema<int64_t>{.default_value = std::nullopt, .min = 1, .max = 4096}},
    }
  );`;
        return '';
    };

    Blockly.Arduino.AIbot_get_mcp_message_event_name_stepper = function (block) {
        const serviceName = Blockly.Arduino.valueToCode(block, 'MCP_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"stepper"';
        const serviceNameClean = serviceName.replace(/["']/g, '').replace(/[^a-zA-Z0-9_]/g, '_') || 'stepper';
        return [`("self.${serviceNameClean}.set" == name)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.AIbot_control_message_event_stepper = function (block) {
        const parameterName = Blockly.Arduino.valueToCode(block, 'PARAM_NAME', Blockly.Arduino.ORDER_ATOMIC) || '"steps"';
        const parameterType = block.getFieldValue('PARAM_TYPE') || 'Number';
        const parameterNameClean = parameterName.replace(/^['"]|['"]$/g, '') || 'steps';
        const cppType = parameterType === 'Number' ? 'int64_t' : 'std::string';
        return [`std::get<${cppType}>(param.at("${parameterNameClean}"))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.AIbot_response_mcp_control_result_stepper = function () {
        return 'ai_vox_engine.SendMcpCallResponse(id, true);\n';
    };

    Blockly.Arduino.AI_stepper_init = function (block) {
        const in1 = block.getFieldValue('IN1') || '8';
        const in2 = block.getFieldValue('IN2') || '9';
        const in3 = block.getFieldValue('IN3') || '13';
        const in4 = block.getFieldValue('IN4') || '14';
        const stepsPerRevolution = Blockly.Arduino.valueToCode(block, 'STEPS_PER_REVOLUTION', Blockly.Arduino.ORDER_ATOMIC) || '4096';
        const interval = Blockly.Arduino.valueToCode(block, 'STEP_INTERVAL_US', Blockly.Arduino.ORDER_ATOMIC) || '1500';

        Blockly.Arduino.definitions_.AI_stepper_state = stepperState();
        Blockly.Arduino.definitions_.AI_stepper_steps_per_revolution = `const long AI_STEPPER_STEPS_PER_REVOLUTION = ${stepsPerRevolution};`;
        Blockly.Arduino.setups_.AI_stepper_setup = `
  ai_stepper_in1 = ${in1};
  ai_stepper_in2 = ${in2};
  ai_stepper_in3 = ${in3};
  ai_stepper_in4 = ${in4};
  ai_stepper_interval_us = ${interval};
  pinMode(ai_stepper_in1, OUTPUT);
  pinMode(ai_stepper_in2, OUTPUT);
  pinMode(ai_stepper_in3, OUTPUT);
  pinMode(ai_stepper_in4, OUTPUT);
  aiStepperRelease();`;
        return '';
    };

    Blockly.Arduino.AI_stepper_move = function (block) {
        const direction = block.getFieldValue('DIRECTION') || 'forward';
        const steps = Blockly.Arduino.valueToCode(block, 'STEPS', Blockly.Arduino.ORDER_ATOMIC) || '4096';
        const forward = direction === 'forward' ? 'true' : 'false';
        return `aiStepperMove(${steps}, ${forward});\n`;
    };

    Blockly.Arduino.AI_stepper_turns = function (block) {
        const direction = block.getFieldValue('DIRECTION') || 'forward';
        const turns = Blockly.Arduino.valueToCode(block, 'TURNS', Blockly.Arduino.ORDER_ATOMIC) || '1';
        const forward = direction === 'forward' ? 'true' : 'false';
        return `aiStepperMove((${turns}) * AI_STEPPER_STEPS_PER_REVOLUTION, ${forward});\n`;
    };

    Blockly.Arduino.AI_stepper_release = function () {
        return 'aiStepperRelease();\n';
    };

    return Blockly;
}

exports = addGenerator;
