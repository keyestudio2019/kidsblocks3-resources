/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    // ============ ESP32 机械手臂（来自 ESP32_Arm v1.6.2） ============
    const armJoint = {
        base: {object: 'armBase', angle: 'BaseServoAngle', min: 0, max: 180, home: 90, move: 'mechanicalArmSetBase'},
        left: {object: 'armLeft', angle: 'LeftServoAngle', min: 0, max: 110, home: 60, move: 'mechanicalArmSetLeft'},
        right: {object: 'armRight', angle: 'RightServoAngle', min: 60, max: 180, home: 130, move: 'mechanicalArmSetRight'},
        gripper: {object: 'armGripper', angle: 'GripperServoAngle', min: 0, max: 100, home: 0, move: 'mechanicalArmSetGripper'}
    };
    const defaultServoPins = {base: '16', left: '17', right: '4', gripper: '5'};
    const defaultJoystickPins = {leftX: '33', leftY: '32', leftB: '25', rightX: '13', rightY: '15', rightB: '12'};

    const value = function (block, input, fallback) {
        return Blockly.Arduino.valueToCode(block, input, Blockly.Arduino.ORDER_ATOMIC) || fallback;
    };
    const speedDelay = function (speed) {
        return {slow: 20, normal: 10, fast: 5}[speed] || 10;
    };
    const servoPins = function () {
        return Object.assign({}, defaultServoPins, Blockly.Arduino.mechanicalArmServoPins_ || {});
    };
    const joystickPins = function () {
        return Object.assign({}, defaultJoystickPins, Blockly.Arduino.mechanicalArmJoystickPins_ || {});
    };

    // 只由“初始化机械手臂”积木调用；其他积木仅生成自身语句。
    const generateArmInitialization = function () {
        const pins = servoPins();
        Blockly.Arduino.includes_.mechanical_arm_esp32 = '#include <ESP32Servo.h>';
        Blockly.Arduino.definitions_.mechanical_arm_esp32 = `
const int baseServoPin = ${pins.base};
const int leftServoPin = ${pins.left};
const int rightServoPin = ${pins.right};
const int gripperServoPin = ${pins.gripper};

Servo armBase;
Servo armLeft;
Servo armRight;
Servo armGripper;

int BaseServoAngle = 90;
int LeftServoAngle = 60;
int RightServoAngle = 130;
int GripperServoAngle = 0;

const uint8_t mechanicalArmMaxPoses = 10;
int mechanicalArmPoseData[mechanicalArmMaxPoses][4];
uint8_t mechanicalArmPoseCount = 0;

void smoothMove(Servo &servo, int startAng, int targetAng, int minAngle, int maxAngle, int stepDelay = 10) {
  startAng = constrain(startAng, minAngle, maxAngle);
  targetAng = constrain(targetAng, minAngle, maxAngle);
  stepDelay = constrain(stepDelay, 1, 50);
  if (startAng < targetAng) {
    for (int angle = startAng; angle <= targetAng; angle++) {
      servo.write(angle);
      delay(targetAng - angle < 15 ? stepDelay + 3 : stepDelay);
    }
  } else {
    for (int angle = startAng; angle >= targetAng; angle--) {
      servo.write(angle);
      delay(angle - targetAng < 15 ? stepDelay + 3 : stepDelay);
    }
  }
}

void mechanicalArmSetBase(int targetAngle, int stepDelay = 10) {
  int startAngle = BaseServoAngle;
  BaseServoAngle = constrain(targetAngle, 0, 180);
  smoothMove(armBase, startAngle, BaseServoAngle, 0, 180, stepDelay);
}

void mechanicalArmSetLeft(int targetAngle, int stepDelay = 10) {
  int startAngle = LeftServoAngle;
  LeftServoAngle = constrain(targetAngle, 0, 110);
  smoothMove(armLeft, startAngle, LeftServoAngle, 0, 110, stepDelay);
}

void mechanicalArmSetRight(int targetAngle, int stepDelay = 10) {
  int startAngle = RightServoAngle;
  RightServoAngle = constrain(targetAngle, 60, 180);
  smoothMove(armRight, startAngle, RightServoAngle, 60, 180, stepDelay);
}

void mechanicalArmSetGripper(int targetAngle, int stepDelay = 10) {
  int startAngle = GripperServoAngle;
  GripperServoAngle = constrain(targetAngle, 0, 100);
  smoothMove(armGripper, startAngle, GripperServoAngle, 0, 100, stepDelay);
}

void mechanicalArmRecordPose() {
  if (mechanicalArmPoseCount >= mechanicalArmMaxPoses) return;
  mechanicalArmPoseData[mechanicalArmPoseCount][0] = BaseServoAngle;
  mechanicalArmPoseData[mechanicalArmPoseCount][1] = LeftServoAngle;
  mechanicalArmPoseData[mechanicalArmPoseCount][2] = RightServoAngle;
  mechanicalArmPoseData[mechanicalArmPoseCount][3] = GripperServoAngle;
  mechanicalArmPoseCount++;
}

void mechanicalArmClearRecordedPoses() {
  mechanicalArmPoseCount = 0;
}

void mechanicalArmPlayRecordedPoses(int stepDelay = 10) {
  for (uint8_t pose = 0; pose < mechanicalArmPoseCount; pose++) {
    mechanicalArmSetBase(mechanicalArmPoseData[pose][0], stepDelay);
    mechanicalArmSetLeft(mechanicalArmPoseData[pose][1], stepDelay);
    mechanicalArmSetRight(mechanicalArmPoseData[pose][2], stepDelay);
    mechanicalArmSetGripper(mechanicalArmPoseData[pose][3], stepDelay);
  }
}
`;
        Blockly.Arduino.setups_.mechanical_arm_esp32 = `
armBase.attach(baseServoPin);
armLeft.attach(leftServoPin);
armRight.attach(rightServoPin);
armGripper.attach(gripperServoPin);
armBase.write(BaseServoAngle);
delay(1000);
armLeft.write(LeftServoAngle);
delay(1000);
armRight.write(RightServoAngle);
delay(1000);
armGripper.write(GripperServoAngle);
delay(1000);
`;
    };

    const ensureJoystick = function () {
        const pins = joystickPins();
        Blockly.Arduino.definitions_.mechanical_arm_joystick_pins = `
const int left_X = ${pins.leftX};
const int left_Y = ${pins.leftY};
const int left_B = ${pins.leftB};
const int right_X = ${pins.rightX};
const int right_Y = ${pins.rightY};
const int right_B = ${pins.rightB};
`;
        Blockly.Arduino.setups_.mechanical_arm_joystick_pins = `
pinMode(left_X, INPUT);
pinMode(left_Y, INPUT);
pinMode(left_B, INPUT);
pinMode(right_X, INPUT);
pinMode(right_Y, INPUT);
pinMode(right_B, INPUT);
`;
    };

    // 1. 初始化：此积木是四个舵机 GPIO 的唯一设置入口。
    Blockly.Arduino.mechanical_arm_init = function (block) {
        Blockly.Arduino.mechanicalArmServoPins_ = {
            base: value(block, 'BASE_PIN', defaultServoPins.base),
            left: value(block, 'LEFT_PIN', defaultServoPins.left),
            right: value(block, 'RIGHT_PIN', defaultServoPins.right),
            gripper: value(block, 'GRIPPER_PIN', defaultServoPins.gripper)
        };
        generateArmInitialization();
        return '';
    };

    // 2. 单关节平滑移动。
    Blockly.Arduino.mechanical_arm_move_joint = function (block) {
        const joint = block.getFieldValue('JOINT');
        return `${armJoint[joint].move}(${value(block, 'ANGLE', `${armJoint[joint].home}`)}, ${speedDelay(block.getFieldValue('SPEED'))});\n`;
    };

    // 3. 夹爪打开或闭合。
    Blockly.Arduino.mechanical_arm_gripper_simple = function (block) {
        const targetAngle = block.getFieldValue('ACTION') === 'open' ? 100 : 0;
        return `mechanicalArmSetGripper(${targetAngle}, ${speedDelay(block.getFieldValue('SPEED'))});\n`;
    };

    // 4. 回到四关节初始姿态。
    Blockly.Arduino.mechanical_arm_home_simple = function (block) {
        const delay = speedDelay(block.getFieldValue('SPEED'));
        return `mechanicalArmSetBase(90, ${delay});\nmechanicalArmSetLeft(60, ${delay});\nmechanicalArmSetRight(130, ${delay});\nmechanicalArmSetGripper(0, ${delay});\n`;
    };

    // 5. 报告程序最后设定的关节角度。
    Blockly.Arduino.mechanical_arm_get_joint_angle = function (block) {
        return [armJoint[block.getFieldValue('JOINT')].angle, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 6. 以四个角度组成一个完整姿态。
    Blockly.Arduino.mechanical_arm_move_pose = function (block) {
        const delay = speedDelay(block.getFieldValue('SPEED'));
        return `mechanicalArmSetBase(${value(block, 'BASE', '90')}, ${delay});\nmechanicalArmSetLeft(${value(block, 'LEFT', '60')}, ${delay});\nmechanicalArmSetRight(${value(block, 'RIGHT', '130')}, ${delay});\nmechanicalArmSetGripper(${value(block, 'GRIPPER', '0')}, ${delay});\n`;
    };

    // 7. 记录当前姿态。
    Blockly.Arduino.mechanical_arm_record_pose = function () {
        return 'mechanicalArmRecordPose();\n';
    };

    // 8. 播放所有已记录姿态。
    Blockly.Arduino.mechanical_arm_play_recorded_poses_simple = function (block) {
        return `mechanicalArmPlayRecordedPoses(${speedDelay(block.getFieldValue('SPEED'))});\n`;
    };

    // 9. 清空已记录姿态。
    Blockly.Arduino.mechanical_arm_clear_recorded_poses = function () {
        return 'mechanicalArmClearRecordedPoses();\n';
    };

    // 10. 报告已记录姿态数量。
    Blockly.Arduino.mechanical_arm_recorded_pose_count = function () {
        return ['mechanicalArmPoseCount', Blockly.Arduino.ORDER_ATOMIC];
    };

    // 11. 双摇杆实时控制。
    Blockly.Arduino.mechanical_arm_joystick_control = function (block) {
        Blockly.Arduino.mechanicalArmJoystickPins_ = {
            leftX: value(block, 'LEFT_X_PIN', defaultJoystickPins.leftX),
            leftY: value(block, 'LEFT_Y_PIN', defaultJoystickPins.leftY),
            leftB: value(block, 'LEFT_B_PIN', defaultJoystickPins.leftB),
            rightX: value(block, 'RIGHT_X_PIN', defaultJoystickPins.rightX),
            rightY: value(block, 'RIGHT_Y_PIN', defaultJoystickPins.rightY),
            rightB: value(block, 'RIGHT_B_PIN', defaultJoystickPins.rightB)
        };
        ensureJoystick();
        Blockly.Arduino.definitions_.mechanical_arm_joystick_control = `
void mechanicalArmJoystickControl() {
  int leftX = analogRead(left_X);
  int leftY = analogRead(left_Y);
  int rightX = analogRead(right_X);
  int rightY = analogRead(right_Y);

  if (leftX > 3000) mechanicalArmSetBase(BaseServoAngle + 1, 10);
  else if (leftX < 20) mechanicalArmSetBase(BaseServoAngle - 1, 10);
  if (leftY > 3000) mechanicalArmSetLeft(LeftServoAngle + 1, 10);
  else if (leftY < 20) mechanicalArmSetLeft(LeftServoAngle - 1, 10);
  if (rightY > 3000) mechanicalArmSetRight(RightServoAngle - 1, 10);
  else if (rightY < 20) mechanicalArmSetRight(RightServoAngle + 1, 10);
  if (rightX > 3000) mechanicalArmSetGripper(GripperServoAngle + 1, 10);
  else if (rightX < 20) mechanicalArmSetGripper(GripperServoAngle - 1, 10);
}
`;
        return 'mechanicalArmJoystickControl();\n';
    };

    // 12. 报告指定摇杆的模拟轴数值。
    Blockly.Arduino.mechanical_arm_joystick_axis = function (block) {
        ensureJoystick();
        const joystick = block.getFieldValue('JOYSTICK');
        const axis = block.getFieldValue('AXIS');
        return [`analogRead(${joystick}_${axis.toUpperCase()})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // 13. 报告指定摇杆按键状态。
    Blockly.Arduino.mechanical_arm_joystick_pressed = function (block) {
        ensureJoystick();
        return [`(digitalRead(${block.getFieldValue('JOYSTICK')}_B) == 1)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ============ WiFi（来自 WiFi v1.0.0） ============
    Blockly.Arduino.wifi_init = function (block) {
      const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
      const passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);

      Blockly.Arduino.includes_.wifi_init = '#include <WiFi.h>\n';
      Blockly.Arduino.definitions_.wifi_init = 'const char* ssid = '+ssid+';\nconst char* password = '+passwd+';\n';
      Blockly.Arduino.setups_['wifi_setup'] = 'WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }';

      return '';
    };

    // Blockly.Arduino.wifi_read = function () {
    //     return [`req`, Blockly.Arduino.ORDER_ATOMIC];
    // };


    Blockly.Arduino.wifi_read_ip = function () {
        return [`WiFi.localIP()`, Blockly.Arduino.ORDER_ATOMIC]
    };

    Blockly.Arduino.wifi_client_init = function (block) {

        return 'WiFiClient client = server.available();\n';
    };

    Blockly.Arduino.wifi_client_connected = function (block) {

        Blockly.Arduino.definitions_.wifi_client_connected = 'WiFiServer server(80);\n';
        Blockly.Arduino.setups_.wifi_client_connected = 'server.begin();\n';

        return [`(client == 0 && client.connected() == 0)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_read_data = function (block) {

        return [`request`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // ============ Web Page Editing PRO（来自 ESP_WEB_PRO v1.0.0） ============
    //网页编辑初始化
    Blockly.Arduino.espdashpro_display_components = function() {
        var Label =  Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        var unit = Blockly.Arduino.valueToCode(this, 'unit', Blockly.Arduino.ORDER_ATOMIC);
        var id= this.getFieldValue('id');
        var type= this.getFieldValue('type');
        var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        if(type==1)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card temp_'+ id +'(&dashboard, TEMPERATURE_CARD, '+ Label +', '+ unit +');\n';
      }
        if(type==2)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card hum_'+ id +'(&dashboard, HUMIDITY_CARD, '+ Label +', '+ unit +');\n';
      }   
        if(type==3)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card air_'+ id +'(&dashboard, AIR_CARD, '+ Label +', '+ unit +');\n';
      }   
        if(type==4)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card energy_'+ id +'(&dashboard, ENERGY_CARD, '+ Label +', '+ unit +');\n';
      }   
        if(type==5)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card status_'+ id +'(&dashboard, STATUS_CARD, '+ Label +', '+ unit +');\n';
      }   
        if(type==6)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card progress_'+ id +'(&dashboard, PROGRESS_CARD, '+ Label +', '+ unit +', 0, 100);\n';
      }   
        if(type==7)
      {
        Blockly.Arduino.definitions_['var_declare_webPro1_'+ type + id] = 'Card generic_'+ id +'(&dashboard, GENERIC_CARD, '+ Label +', '+ unit +');\n';
      }   
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        if(type==1)
      {
        var code='temp_'+ id +'.update((int)'+ value +');\n';
      }
        if(type==2)
      {
        var code='hum_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==3)
      {
        var code='air_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==4)
      {
        var code='energy_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==5)
      {
        var code='status_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==6)
      {
        var code='progress_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==7)
      {
        var code='generic_'+ id +'.update((int)'+ value +');\n';
      } 
        code=''+ code +'dashboard.sendUpdates();\n';   
        return code;
    };

    Blockly.Arduino.espdashpro_state_component = function() {
        var type= this.getFieldValue('type');
        var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        var id= this.getFieldValue('id');
        var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.definitions_['var_declare_webPro2_' + id] = 'Card status_'+ id +'(&dashboard, STATUS_CARD, '+ Label +', "success");\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='status_'+ id +'.update('+ value +', "'+ type +'");\n';
        code=''+ code +'dashboard.sendUpdates();\n'; 
        return code;
    };

    Blockly.Arduino.espdashpro_update_chart = function() {
        var abscissa = Blockly.Arduino.valueToCode(this, 'abscissa', Blockly.Arduino.ORDER_ATOMIC);
        var ordinate = Blockly.Arduino.valueToCode(this, 'ordinate', Blockly.Arduino.ORDER_ATOMIC);
        var id= this.getFieldValue('id');
        var type= this.getFieldValue('type');
        var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        if(type==1)
      {
        Blockly.Arduino.definitions_['var_declare_webPro3_'+ type + id] = 'Chart bar_'+ id +'(&dashboard, BAR_CHART, '+ Label +');\n';
      }
        if(type==2)
      {
        Blockly.Arduino.definitions_['var_declare_webPro3_'+ type + id] = 'Chart line_'+ id +'(&dashboard, LINE_CHART, '+ Label +');\n';
      }   
        if(type==3)
      {
        Blockly.Arduino.definitions_['var_declare_webPro3_'+ type + id] = 'Chart area_'+ id +'(&dashboard, AREA_CHART, '+ Label +');\n';
      }   
        if(type==4)
      {
        Blockly.Arduino.definitions_['var_declare_webPro3_'+ type + id] = 'Chart pie_'+ id +'(&dashboard, PIE_CHART, '+ Label +');\n';
      }    
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        if(type==1)
      {
        var code='bar_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\nbar_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
      }
        if(type==2)
      {
        var code='line_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\nline_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
      }   
        if(type==3)
      {
        var code='area_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\narea_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
      }   
        if(type==4)
      {
        var code='pie_'+ id +'.updateX('+ abscissa +', sizeof('+ abscissa +')/sizeof('+ abscissa +'[0]));\npie_'+ id +'.updateY('+ ordinate +', sizeof('+ ordinate +')/sizeof('+ ordinate +'[0]));\n';
      }   
        code=''+ code +'dashboard.sendUpdates();\n';   
        return code;
    };


    Blockly.Arduino.espdashpro_display_components1 = function() {
        var id= this.getFieldValue('id');
        var type= this.getFieldValue('type');
        var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
        var min= this.getFieldValue('min');
        var max= this.getFieldValue('max');
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        if(type==1)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card button_'+ id +'(&dashboard, BUTTON_CARD, '+ Label +');\n';
      }
        if(type==2)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card slider_'+ id +'(&dashboard, SLIDER_CARD, '+ Label +', "", '+ min +', '+ max +');\n';
      }   
        if(type==3)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card text_'+ id +'(&dashboard, TEXT_INPUT_CARD, '+ Label +');\n';
      }     
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        if(type==1)
      {
        var code='button_'+ id +'.update((int)'+ value +');\n';
      }
        if(type==2)
      {
        var code='slider_'+ id +'.update((int)'+ value +');\n';
      }   
        if(type==3)
      {
        var code='text_'+ id +'.update(String('+ value +'));\n';
      }    
        code=''+ code +'dashboard.sendUpdates();\n';   
        return code;
    };

    Blockly.Arduino.espdashpro_set_title = function() {
        var title = Blockly.Arduino.valueToCode(this, 'title', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='dashboard.setTitle('+ title +');\n';
        return code;
    };

    Blockly.Arduino.espdashpro_setting_permissions = function() {
        var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
        var pass = Blockly.Arduino.valueToCode(this, 'pass', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='dashboard.setAuthentication('+ name +', '+ pass +');\n';
        return code;
    };

    Blockly.Arduino.espdashpro_add_page = function() {
        var id= this.getFieldValue('id');
        var page = Blockly.Arduino.valueToCode(this, 'page', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.definitions_['var_declare_webPro5_'+ id] = 'Tab settings_'+ id +'(&dashboard, '+ page +');\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='';
        return code;
    };

    Blockly.Arduino.espdashpro_add_statistics = function() {
        var id= this.getFieldValue('id');
        var Statistic = Blockly.Arduino.valueToCode(this, 'Statistic', Blockly.Arduino.ORDER_ATOMIC);
        var Value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.definitions_['var_declare_webPro6_'+ id] = 'Statistic stat_'+ id +'(&dashboard, '+ Statistic +', '+ Value +');\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='';
        return code;
    };

    Blockly.Arduino.espdashpro_set_component_page = function() {
        var id= this.getFieldValue('id');
        var page_id= this.getFieldValue('page_id');
        var type= this.getFieldValue('type');
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code=''+ type +'_'+ id +'.setTab(&settings_'+ page_id +');\n';
        return code;
    };

    Blockly.Arduino.espdashpro_get_component_value = function () {
        var type= this.getFieldValue('type');
        var id= this.getFieldValue('id');
        var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        var branch = Blockly.Arduino.statementToCode(this, 'function');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");
        var min= this.getFieldValue('min');
        var max= this.getFieldValue('max');
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        if(type==1)
      {
        Blockly.Arduino.setups_['var_declare_webPro_'+ type + id] = 'button_'+ id +'.attachCallback([&](int value) {\n'
                                                                       +''+ branch +'\n'
                                                                       +'button_'+ id +'.update(value);\n'
                                                                       +'dashboard.sendUpdates();\n'
                                                                       +'});\n';
      }
        if(type==2)
      {
        Blockly.Arduino.setups_['var_declare_webPro_'+ type + id] = 'slider_'+ id +'.attachCallback([&](int value) {\n'
                                                                       +'v'+ id +' = value;\n'
                                                                       +'slider_'+ id +'.update(value);\n'
                                                                       +'dashboard.sendUpdates();\n'
                                                                       +'});\n';
      }   
            var cleanBranch = String(branch)
              .replace(/repeat\s*\(\s*\)\s*;/g, '')
              .replace(/while\s*\(!\s*\(\s*([^)]+?)\s*<\s*(t\d+)\s*\)\s*\)/g, function (m, a, b) { return 'while (' + a.trim() + ' < ' + b.trim() + ')'; })
              .replace(/while\s*\(!\s*\(\s*([^)]+?)\s*>\s*(t\d+)\s*\)\s*\)/g, function (m, a, b) { return 'while (' + a.trim() + ' > ' + b.trim() + ')'; })
          .replace(/\((\w+) \/ (\d+)\) \* (\d+)/g, '($1 * $3) / $2');
            Blockly.Arduino.loops_['webpro_slider_branch_'+ type + id] = ''+ cleanBranch +'\n';
        if(type==3)
      {
        Blockly.Arduino.setups_['var_declare_webPro_'+ type + id] = 'text_'+ id +'.attachCallback([&](const char* value) {\n'
                                                                       +''+ branch +'\n'
                                                                       +'text_'+ id +'.update(value);\n'
                                                                       +'dashboard.sendUpdates();\n'
                                                                       +'});\n';
      }
        if(type==1)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card button_'+ id +'(&dashboard, BUTTON_CARD, '+ Label +');\n';
      }
        if(type==2)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card slider_'+ id +'(&dashboard, SLIDER_CARD, '+ Label +', "", '+ min +', '+ max +');\n';
      }   
        if(type==3)
      {
        Blockly.Arduino.definitions_['var_declare_webPro4_'+ type + id] = 'Card text_'+ id +'(&dashboard, TEXT_INPUT_CARD, '+ Label +');\n';
      }  
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='';
        return code;
    };

    Blockly.Arduino.espdashpro_get_joystick_value = function () {
        var type= this.getFieldValue('type');
        var id= this.getFieldValue('id');
        var Label = Blockly.Arduino.valueToCode(this, 'Label', Blockly.Arduino.ORDER_ATOMIC);
        var branch = Blockly.Arduino.statementToCode(this, 'function');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");
        Blockly.Arduino.includes_['include_webPro'] ='#include <webPro.h>';
        Blockly.Arduino.definitions_['var_declare_webPro'] = 'AsyncWebServer server(80);\nESPDash dashboard(&server, 1);\n';
        Blockly.Arduino.setups_['var_declare_webPro_'+ type + id] = 'joystick_'+ id +'.attachCallback([&](int8_t x, int8_t y) {\n'
                                                                       +''+ branch +'\n'
                                                                       +'});\n';
        if(type==1)
      {
        Blockly.Arduino.definitions_['var_declare_webPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +');\n';
      }
        if(type==2)
      {
        Blockly.Arduino.definitions_['var_declare_webPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +', "lockX");\n';
      }   
        if(type==3)
      {
        Blockly.Arduino.definitions_['var_declare_webPro6_'+ type + id] = 'Card joystick_'+ id +'(&dashboard, JOYSTICK_CARD, '+ Label +', "lockY");\n';
      }  
        Blockly.Arduino.setups_['var_webPro'] = 'server.begin();';
        var code='';
        return code;
    };
    Blockly.Arduino.QH_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_NONE];
    };

    // ============ 从 UnoV4.0 迁入：变量类型、文本、计时器 ============
    Blockly.Arduino.KS_variables_declare = function (block) {
        block = block || this;
        var type = block.getFieldValue('TYPE');
        var VARIABLES_TYPE = block.getFieldValue('variables_type');
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || ' ';
        value = value.replace(/\"/g,'');

        let code ='';
        //code = type + ' ' + name + ' = '+value+';\n';
        if(VARIABLES_TYPE == 'global_variate')
        {
            if(type == 'String')
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = '+value+';\n';
            }
        }
          
        else
        {
            if(type == 'String')
            {
                code = type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                code = type + ' ' + name + ' = '+value+';\n';
            }
          
        }

        return code;
    };

    Blockly.Arduino.KS_variables_get = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };

    Blockly.Arduino.KS_variables_set = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        value = value.replace(/\"/g,'');
        var code = name+'\='+value+';\n';
        return code;
    };

    Blockly.Arduino.KS_variables_change = function (block) {
        block = block || this;
        var type = block.getFieldValue('TYPE');
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var code = name+type+';\n';
        return code;
    };

    Blockly.Arduino.KS_variables_stringSet = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(block, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        var code = name+'\='+value+';\n';
        return code;
    };

    Blockly.Arduino.KS_CHAR = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        return [`\'${name}\'`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_STRING = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||" " ;
        name = name.replace(/\"/g,'');
        return [`\"${name}\"`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_data = function (block) {
        block = block || this;
        var name = Blockly.Arduino.valueToCode(block, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };

    Blockly.Arduino.KS_millis = function (block) {
        block = block || this;
        var code = "millis()";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
      };

    Blockly.Arduino.KS_micros = function (block) {
        block = block || this;
        var code = "micros()";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
      };

    return Blockly;
}

module.exports = addGenerator;
