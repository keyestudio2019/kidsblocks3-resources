/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function addBlocks (Blockly) {
    const color = '#FF4500';
    const color1 = '#41be8a';
    const color2 = '#4C97FF';
    const color3 = '#4CAF50';
    const color4 = '#FF9800';
    const color5 = '#9C27B0';
    const color6 = '#795548';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    //变量
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'variables_type',
                        options:[[(Blockly.Msg.KS_global), "global_variate"],[(Blockly.Msg.KS_local), "local_variate"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.KS_MATH_INT, 'int'],[Blockly.Msg.KS_MATH_UNSIGNED_INT, 'unsigned int'],[Blockly.Msg.KS_MATH_LONG, 'long'],[Blockly.Msg.KS_MATH_UNSIGNED_LONG, 'unsigned long'],[Blockly.Msg.KS_MATH_FLOAT, 'float'],[Blockly.Msg.KS_MATH_DOUBLE, 'double'],[Blockly.Msg.KS_MATH_BOOLEAN, 'boolean'],[Blockly.Msg.KS_MATH_BYTE, 'byte'],[Blockly.Msg.KS_MATH_CHAR, 'char'],[Blockly.Msg.KS_MATH_UNSIGNED_CHAR, 'unsigned char'],[Blockly.Msg.KS_MATH_STRING, 'String']]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE',
                    },    
                ],
                "tooltip": "创建变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };
    //变量get
    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color,
                extensions: ['output_number']
            });
        }
    };
        //变量get
    Blockly.Blocks.KS_variables_get_bool = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.KS_variables_value,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'VAR'
                        } 
                    ],
                    "tooltip": "获取变量",
                    colour:color,
                    extensions: ['output_boolean'],
                });
            }
        };
    //变量set
    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };
    //变量++--
    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[['++', '++'],['- -', '--']]
                    }
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符串变量set
    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置字符串变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }
    };
    
    //logic
    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE1',
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'judge',
                        options:[["==", "=="],["≠", "!="],[">", ">"],[">=", ">="],["<", "<"],["<=", "<="]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2',
                    },    
                ],
                "tooltip": "逻辑比较",
                colour:color2,
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.KS_millis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MILLIS,
                colour: color2,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.KS_micros = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MICROS,
                colour: color2,
                extensions: ['output_number']
            });
        }
    };
    /* -------------------- 初始化类积木 -------------------- */
    Blockly.Blocks.AIbot_init_wifi = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_INIT_WIFI,
                extensions: ['shape_statement'],
                colour: color3
            });
        }
    };
    Blockly.Blocks.AIbot_init_mic = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_INIT_MIC,
                args0: [
                    { type: "field_dropdown", name: "MIC_BCLK", options: digitalPins },
                    { type: "field_dropdown", name: "MIC_WS", options: digitalPins },
                    { type: "field_dropdown", name: "MIC_DIN", options: digitalPins },
                ],
                extensions: ['shape_statement'],
                colour: color3
            });
        }
    };

    Blockly.Blocks.AIbot_init_audio = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_INIT_AUDIO,
                args0: [
                    { type: "field_dropdown", name: "SPK_BCLK", options: digitalPins },
                    { type: "field_dropdown", name: "SPK_WS", options: digitalPins },
                    { type: "field_dropdown", name: "SPK_DOUT", options: digitalPins },
                ],
                extensions: ['shape_statement'],
                colour: color3
            });
        }
    };

    Blockly.Blocks.AIbot_init_lcd = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_INIT_LCD,
                args0: [
                    { type: 'field_dropdown', name: 'backLight', options: digitalPins },
                    { type: 'field_dropdown', name: 'MOSI', options: digitalPins },
                    { type: 'field_dropdown', name: 'CLK', options: digitalPins },
                    { type: 'field_dropdown', name: 'DC', options: digitalPins },
                    { type: 'field_dropdown', name: 'RST', options: digitalPins },
                    { type: 'field_dropdown', name: 'CS', options: digitalPins }
                ],
                extensions: ['shape_statement'],
                colour: color3
            });
        }
    };

    Blockly.Blocks.AIbot_init_oled = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AI_BOT_INIT_OLED || "初始化 OLED显示屏 SDA %1 SCL %2",
                args0: [
                    { type: "field_dropdown", name: "SDA", options: digitalPins },
                    { type: "field_dropdown", name: "SCL", options: digitalPins }
                ],
                colour: color3,
                extensions: ['shape_statement'],
                tooltip: "初始化 AI-bot OLED 屏幕SSD1306, I2C。仅设置 SDA/SCL 引脚。"
            });
        }
    };


        /* -------------------- 配置后台 -------------------- */

    Blockly.Blocks['AIbot_config_websocket'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_CONFIG_WEBSOCKET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BACKEND',  
                        options: [
                            [Blockly.Msg.AIBOT_BACKEND_XIAOZHI, 'XIAOZHI'],  
                            [Blockly.Msg.AIBOT_BACKEND_KEYES, 'KEYES']   
                        ]
                    }
                ],
                extensions: ['shape_statement'], 
                colour: color3 
            });
        }
    };

    Blockly.Blocks.AIbot_start_engine = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_START_ENGINE,
                args0: [
                    {
                        "type": "field_dropdown",
                        "name": "AIbot_language",
                        "options": [
                          [ "EN", "EN" ], 
                          [ "中文", "CN" ]
                        ]
                    },
                    { type: 'input_value', name: 'AIbot_volume' },
                ],
                extensions: ['shape_statement'],
                colour: color3
            });
        }
    };
    /* -------------------- 事件类积木 -------------------- */
    Blockly.Blocks.AIbot_loop_state_change = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_STATE_CHANGE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'chat_state',
                        options: [
                            [Blockly.Msg.AIBOT_STATE_IDLE, 'Idle'],
                            [Blockly.Msg.AIBOT_STATE_INITTED, 'Initted'],
                            [Blockly.Msg.AIBOT_STATE_LOADING, 'Loading'],
                            [Blockly.Msg.AIBOT_STATE_LOADING_FAILED, 'LoadingFailed'],
                            [Blockly.Msg.AIBOT_STATE_STANDBY, 'Standby'],
                            [Blockly.Msg.AIBOT_STATE_CONNECTING, 'Connecting'],
                            [Blockly.Msg.AIBOT_STATE_LISTENING, 'Listening'],
                            [Blockly.Msg.AIBOT_STATE_SPEAKING, 'Speaking']
                        ]
                    },
                    { type: 'input_dummy' },
                    { type: 'input_statement', name: 'DO' }
                ],
                extensions: ['shape_statement'],
                colour: color4
            });
        }
    };
    Blockly.Blocks.AIbot_lcd_show_status = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LCD_SHOW_STATUS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'location',
                        options: [
                            [Blockly.Msg.AIBOT_LCD_STATUS, 'ShowStatus'],
                            [Blockly.Msg.AIBOT_LCD_EMOTION, 'SetEmotion'],
                            [Blockly.Msg.AIBOT_LCD_CHAT, 'SetChatMessage']
                        ]
                    },
                    { type: 'input_value', name: 'AIbot_content' }
                ],
                extensions: ['shape_statement'],
                colour: color2
            });
        }
    }; 
    Blockly.Blocks.AIbot_oled_show_status = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_OLED_SHOW_STATUS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'location',
                        options: [
                            [Blockly.Msg.AIBOT_OLED_STATUS_BOX, 'ShowStatus'],
                            [Blockly.Msg.AIBOT_OLED_EMOTION_BOX, 'SetEmotion'],
                            [Blockly.Msg.AIBOT_OLED_CONTENT_BOX, 'SetChatMessage']
                        ]
                    },
                    { type: 'input_value', name: 'AIbot_content' }
                ],
                extensions: ['shape_statement'],
                colour: color2
            });
        }
    };


    Blockly.Blocks.AIbot_loop_activation = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_ACTIVATION,
                args0: [
                    { type: 'input_dummy' },
                    { type: 'input_statement', name: 'DO' }
                ],
                extensions: ['shape_statement'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.get_AIbot_activation_message = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.GET_AIBOT_ACTIVATION_MESSAGE,
                args0: [
                    { type: 'field_dropdown', name: 'activation_type',
                      options: [
                        [Blockly.Msg.AIBOT_ACTIVATION_CODE, 'code'],
                        [Blockly.Msg.AIBOT_ACTIVATION_MESSAGE, 'message']
                      ] }
                ],
                extensions: ['output_string'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.AIbot_loop_emotion = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_EMOTION,
                args0: [
                    { type: 'input_dummy' },
                    { type: 'input_statement', name: 'DO' }
                ],
                extensions: ['shape_statement'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.get_AIbot_emotion_result = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.GET_AIBOT_EMOTION_RESULT,
                extensions: ['output_string'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.AIbot_emotion = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_EMOTION,
                args0: [
                    { type: 'field_dropdown', name: 'emotion',
                      options: [
                          [Blockly.Msg.AIBOT_EMOTION_HAPPY, "happy"],
                          [Blockly.Msg.AIBOT_EMOTION_COOL, "cool"],
                          [Blockly.Msg.AIBOT_EMOTION_LAUGHING, "laughing"],
                          [Blockly.Msg.AIBOT_EMOTION_FUNNY, "funny"],
                          [Blockly.Msg.AIBOT_EMOTION_SAD, "sad"],
                          [Blockly.Msg.AIBOT_EMOTION_ANGRY, "angry"],
                          [Blockly.Msg.AIBOT_EMOTION_CRYING, "crying"],
                          [Blockly.Msg.AIBOT_EMOTION_LOVING, "loving"],
                          [Blockly.Msg.AIBOT_EMOTION_EMBARRASSED, "embarrassed"],
                          [Blockly.Msg.AIBOT_EMOTION_SURPRISED, "surprised"],
                          [Blockly.Msg.AIBOT_EMOTION_SHOCKED, "shocked"],
                          [Blockly.Msg.AIBOT_EMOTION_THINKING, "thinking"],
                          [Blockly.Msg.AIBOT_EMOTION_WINKING, "winking"],
                          [Blockly.Msg.AIBOT_EMOTION_RELAXED, "relaxed"],
                          [Blockly.Msg.AIBOT_EMOTION_DELICIOUS, "delicious"],
                          [Blockly.Msg.AIBOT_EMOTION_KISSY, "kissy"],
                          [Blockly.Msg.AIBOT_EMOTION_CONFIDENT, "confident"],
                          [Blockly.Msg.AIBOT_EMOTION_SLEEPY, "sleepy"],
                          [Blockly.Msg.AIBOT_EMOTION_SILLY, "silly"],
                          [Blockly.Msg.AIBOT_EMOTION_CONFUSED, "confused"]
                      ] }
                ],
                extensions: ['output_boolean'],
                colour: color4
            });
        }
    };
    
    Blockly.Blocks.AIbot_emotion_list = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_EMOTION_LIST,
                args0: [
                    { type: 'field_dropdown', name: 'emotion',
                      options: [
                          [Blockly.Msg.AIBOT_EMOTION_HAPPY, "happy"],
                          [Blockly.Msg.AIBOT_EMOTION_COOL, "cool"],
                          [Blockly.Msg.AIBOT_EMOTION_LAUGHING, "laughing"],
                          [Blockly.Msg.AIBOT_EMOTION_FUNNY, "funny"],
                          [Blockly.Msg.AIBOT_EMOTION_SAD, "sad"],
                          [Blockly.Msg.AIBOT_EMOTION_ANGRY, "angry"],
                          [Blockly.Msg.AIBOT_EMOTION_CRYING, "crying"],
                          [Blockly.Msg.AIBOT_EMOTION_LOVING, "loving"],
                          [Blockly.Msg.AIBOT_EMOTION_EMBARRASSED, "embarrassed"],
                          [Blockly.Msg.AIBOT_EMOTION_SURPRISED, "surprised"],
                          [Blockly.Msg.AIBOT_EMOTION_SHOCKED, "shocked"],
                          [Blockly.Msg.AIBOT_EMOTION_THINKING, "thinking"],
                          [Blockly.Msg.AIBOT_EMOTION_WINKING, "winking"],
                          [Blockly.Msg.AIBOT_EMOTION_RELAXED, "relaxed"],
                          [Blockly.Msg.AIBOT_EMOTION_DELICIOUS, "delicious"],
                          [Blockly.Msg.AIBOT_EMOTION_KISSY, "kissy"],
                          [Blockly.Msg.AIBOT_EMOTION_CONFIDENT, "confident"],
                          [Blockly.Msg.AIBOT_EMOTION_SLEEPY, "sleepy"],
                          [Blockly.Msg.AIBOT_EMOTION_SILLY, "silly"],
                          [Blockly.Msg.AIBOT_EMOTION_CONFUSED, "confused"]
                      ] }
                ],
                extensions: ['output_string'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.AIbot_loop_chat_message = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_CHAT_MESSAGE,
                args0: [
                    { type: 'input_dummy' },
                    { type: 'input_statement', name: 'DO' }
                ],
                extensions: ['shape_statement'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.AIbot_loop_chat_message_role_var = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_CHAT_MESSAGE_ROLE_VAR,
                args0: [
                    { type: 'field_dropdown', name: 'chat_role',
                      options: [
                        [Blockly.Msg.AIBOT_ROLE_ASSISTANT, 'assistant'],
                        [Blockly.Msg.AIBOT_ROLE_USER, 'user']
                      ] }
                ],
                extensions: ['output_boolean'],
                colour: color4
            });
        }
    };

    Blockly.Blocks.AIbot_loop_chat_message_msg_var = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_CHAT_MESSAGE_MSG_VAR,
                extensions: ['output_string'],
                colour: color4
            });
        }
    };
      Blockly.Blocks.AIbot_loop_mcp = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_LOOP_MCP,
                args0: [
                    { type: 'input_dummy' },
                    { type: 'input_statement', name: 'DO' }
                ],
                extensions: ['shape_statement'],
                colour: color4
            });
        }
    };


    return Blockly;
}

exports = addBlocks;