/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {
  //网页编辑初始化
  Blockly.Arduino.espdashpro_display_components = function () {
    var Label = Blockly.Arduino.valueToCode(
      this,
      "Label",
      Blockly.Arduino.ORDER_ATOMIC
    );
    var unit = Blockly.Arduino.valueToCode(
      this,
      "unit",
      Blockly.Arduino.ORDER_ATOMIC
    );
    var id = this.getFieldValue("id");
    var type = this.getFieldValue("type");
    var value = Blockly.Arduino.valueToCode(
      this,
      "value",
      Blockly.Arduino.ORDER_ATOMIC
    );
    Blockly.Arduino.includes_["include_ESPDash"] =
      "#include <AsyncTCP.h>\n#include <ESPAsyncWebServer.h>\n#include <ESPDash.h>\n";
    Blockly.Arduino.definitions_["var_declare_ESPDash"] =
      "AsyncWebServer server(80);\nESPDash dashboard(server);\n";
    if (type == 1) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::TemperatureCard temp_" + id + "(dashboard," + Label + ");\n";
    }
    if (type == 2) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::HumidityCard hum_" + id + "(dashboard," + Label + ");\n";
    }
    if (type == 3) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::GenericCard<int> air_" +
        id +
        "(dashboard, " +
        Label +
        ");\n";
    }
    if (type == 4) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::GenericCard<int> energy_" +
        id +
        "(dashboard, " +
        Label +
        ");\n";
    }
    if (type == 6) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::ProgressCard progress_" +
        id +
        "(dashboard, " +
        Label +
        ", 0, 100," + ' "%" ' + ");\n";
    }
    if (type == 7) {
      Blockly.Arduino.definitions_["var_declare_ESPDash1_" + type + id] =
        "dash::GenericCard<int> generic_" +
        id +
        "(dashboard, " +
        Label +
        ");\n";
    }
    Blockly.Arduino.setups_["var_ESPDash"] = "server.begin();";
    if (type == 1) {
      var code = "temp_" + id + ".setValue(" + value + ");\n";
    }
    if (type == 2) {
      var code = "hum_" + id + ".setValue(" + value + ");\n";
    }
    if (type == 3) {
      var code = "air_" + id + ".setValue(" + value + ");\n";
    }
    if (type == 4) {
      var code = "energy_" + id + ".setValue(" + value + ");\n";
    }
    if (type == 6) {
      var code = "progress_" + id + ".setValue(" + value + ");\n";
    }
    if (type == 7) {
      var code = "generic_" + id + ".setValue(" + value + ");\n";
    }
    code = "" + code + "dashboard.sendUpdates();\n";
    return code;
  };

  Blockly.Arduino.espdashpro_state_component = function () {
    var type = this.getFieldValue("type");
    var Label = Blockly.Arduino.valueToCode(
      this,
      "Label",
      Blockly.Arduino.ORDER_ATOMIC
    );
    var id = this.getFieldValue("id");
    var value = Blockly.Arduino.valueToCode(
      this,
      "value",
      Blockly.Arduino.ORDER_ATOMIC
    );
    Blockly.Arduino.includes_["include_ESPDash"] = "#include <ESPDash.h>";
    Blockly.Arduino.definitions_["var_declare_ESPDash"] =
      "AsyncWebServer server(80);\nESPDash dashboard(server);\n";
    Blockly.Arduino.definitions_["var_declare_ESPDash2_" + id] =
      "dash::FeedbackCard status_" +
      id +
      "(dashboard, " +
      Label +
      ', ' + 'dash:: Status::' + type + ');\n';
    Blockly.Arduino.setups_["var_ESPDash"] = "server.begin();";
    var code = "status_" + id + ".setFeedback(" + value + ', dash::Status::' + type + ');\n';
    code = "" + code + "dashboard.sendUpdates();\n";
    return code;
  };


  Blockly.Arduino.espdashpro_setting_permissions = function () {
    var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
    var pass = Blockly.Arduino.valueToCode(this, 'pass', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['include_webPro'] = '#include <ESPDash.h>';
    Blockly.Arduino.definitions_['var_declare_ESPDash'] = 'AsyncWebServer server(80);\nESPDash dashboard(server);\n';
    Blockly.Arduino.setups_['var_ESPDash'] = 'server.begin();';
    var code = 'dashboard.setAuthentication(' + name + ', ' + pass + ');\n';
    return code;
  };


  Blockly.Arduino.espdashpro_get_component_value = function () {
    var type = this.getFieldValue("type");
    var id = this.getFieldValue("id");
    var Label = Blockly.Arduino.valueToCode(
      this,
      "Label",
      Blockly.Arduino.ORDER_ATOMIC
    );
    var branch = Blockly.Arduino.statementToCode(this, "function");
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");
    Blockly.Arduino.includes_["include_ESPDash"] = "#include <ESPDash.h>";
    Blockly.Arduino.definitions_["var_declare_ESPDash"] =
      "AsyncWebServer server(80);\nESPDash dashboard(server);\n";
    if (type == 1) {
      Blockly.Arduino.setups_["var_declare_ESPDash_" + type + id] =
        "button_" +
        id +
        ".onChange([&](bool value) {\n" +
        branch +
        "button_" +
        id +
        ".setValue(value);\n" +
        "dashboard.refresh(" +
        "button_" +
        id +
        ");\n" +
        "});\n";
    }
    if (type == 2) {
      Blockly.Arduino.setups_["var_declare_ESPDash_" + type + id] =
        "slider_" +
        id +
        ".onChange([&](int value) {\n" +
        branch +
        "\n" +
        "slider_" +
        id +
        ".setValue(value);\n" +
        "dashboard.refresh(" + "slider_" + id + ");\n" +
        "});\n";
    }
    if (type == 1) {
      Blockly.Arduino.definitions_["var_declare_ESPDash4_" + type + id] =
        "dash::ToggleButtonCard button_" + id + "(dashboard," + Label + ");\n";
    }
    if (type == 2) {
      Blockly.Arduino.definitions_["var_declare_ESPDash4_" + type + id] =
        "dash::SliderCard slider_" +
        id +
        "(dashboard, " +
        Label +
        ', 0, 255, 1);\n';
    }

    Blockly.Arduino.setups_["var_ESPDash"] = "server.begin();";
    var code = "";
    return code;
  };

  Blockly.Arduino.QH_variables_get = function () {
    var name =
      Blockly.Arduino.valueToCode(this, "VAR", Blockly.Arduino.ORDER_ATOMIC) ||
      " ";
    name = name.replace(/\"/g, "");
    code = name;
    return [code, Blockly.Arduino.ORDER_NONE];
  };

  return Blockly;
}

exports = addGenerator;
