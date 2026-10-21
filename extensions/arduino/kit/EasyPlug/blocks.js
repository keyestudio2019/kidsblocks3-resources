/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color1 = '#800000';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#00bfff';
    const color5 = '#0000ff';
    const color6 = '#7fff00';
    const color7 = '#9acd32';
    const color8 = '#556b2f';
    const color9 = '#008b8b';
    const color10 = '#ff1493';
    const color11 = '#ff00ff';
    const color12 = '#4b0082';
    const color13 = '#7b68ee';
    const color14 = '#006400';
    const color15 = '#00ff00';
    const color16 = '#8fbc8b';
    const color17 = '#008080';
    const color18 = '#ffd700';

    const secondaryColour = '#CD5C5C';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();
    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();
    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.easyplug_led_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LED_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_LED_WHITE,
                                'WHITE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_LED_RED,
                                'RED'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_LED_YELLOW,
                                'YELLOW'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_LED_BLUE,
                                'BLUE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_LED_GREEN,
                                'GREEN'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_ON,
                                'HIGH'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_OFF,
                                'LOW'
                            ]
                        ]
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_led_brightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LED_BRIGHTNESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: pwmPins
                    },
                    {
                        type: 'input_value',
                        name: 'val',
                        check: 'Number'
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_switch_module_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_SWITCH_MODULE_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODULE',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_ACTIVE_BUZZER,
                                'ACTIVE_BUZZER'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_RELAY,
                                'RELAY'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_ON,
                                'HIGH'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_OFF,
                                'LOW'
                            ]
                        ]
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    // 无源蜂鸣器：严格参考 buzzer 插件。保留无图标布局与执行器蓝色主题。
    const easyplugBuzzerFrequencies = [
        ['NOTE_C3', '131'], ['NOTE_D3', '147'], ['NOTE_E3', '165'], ['NOTE_F3', '175'],
        ['NOTE_G3', '196'], ['NOTE_A3', '220'], ['NOTE_B3', '247'], ['NOTE_C4', '262'],
        ['NOTE_D4', '294'], ['NOTE_E4', '330'], ['NOTE_F4', '349'], ['NOTE_G4', '392'],
        ['NOTE_A4', '440'], ['NOTE_B4', '494'], ['NOTE_C5', '532'], ['NOTE_D5', '587'],
        ['NOTE_E5', '659'], ['NOTE_F5', '698'], ['NOTE_G5', '784'], ['NOTE_A5', '880'],
        ['NOTE_B5', '988']
    ];
    const easyplugBuzzerDurations = [
        ['1/4', '250'], ['2/4', '500'], ['3/4', '750'], ['4/4', '1000'],
        ['1/8', '125'], ['3/8', '375']
    ];
    const easyplugBuzzerMusic = [
        ['Birthday', 'Music.birthday();'], ['Tetris', 'Music.tetris();'],
        ['Ode to Joy', 'Music.Ode_to_Joy();'], ['Christmas', 'Music.christmas();'],
        ['Super mario', 'Music.super_mario();'], ['Star war tone', 'Music.star_war_tone();']
    ];

    Blockly.Blocks.easyplug_passive_buzzer_tone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_BUZZER_TONE,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'field_dropdown', name: 'fre', options: easyplugBuzzerFrequencies}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_passive_buzzer_tone_d = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_BUZZER_TONE_D,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'field_dropdown', name: 'fre', options: easyplugBuzzerFrequencies},
                    {type: 'field_dropdown', name: 'dur', options: easyplugBuzzerDurations}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_passive_buzzer_music = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_BUZZER_MUSIC,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'field_dropdown', name: 'mus', options: easyplugBuzzerMusic}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_passive_buzzer_notone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_BUZZER_NOTONE,
                args0: [{type: 'field_dropdown', name: 'PIN', options: digitalPins}],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_servo_angle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_SERVO_ANGLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'angle',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'time',
                        check: 'Number'
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_fan_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_FAN_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN_A',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN_B',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_FORWARD,
                                'FORWARD'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_REVERSE,
                                'REVERSE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_STOP,
                                'STOP'
                            ]
                        ]
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_rgb2812_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_rgb2812_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'INDEX',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'R',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'G',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'B',
                        check: 'Number'
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_rgb2812_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_CLEAR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#00A0E9',
                secondaryColour: '#0079AF',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };


    // 2812 RGB：整体亮度、全灯设色和常用彩虹效果。
    Blockly.Blocks.easyplug_rgb2812_brightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_BRIGHTNESS,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'input_value', name: 'BRIGHTNESS', check: 'Number'}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_rgb2812_fill = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_FILL,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'input_value', name: 'R', check: 'Number'}, {type: 'input_value', name: 'G', check: 'Number'}, {type: 'input_value', name: 'B', check: 'Number'}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_rgb2812_rainbow = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_RGB2812_RAINBOW,
                args0: [
                    {type: 'field_dropdown', name: 'PIN', options: digitalPins},
                    {type: 'input_value', name: 'CYCLES', check: 'Number'}, {type: 'input_value', name: 'SPEED', check: 'Number'}
                ],
                colour: '#00A0E9', secondaryColour: '#0079AF', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_tm1650_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_TM1650_INIT,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_tm1650_show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_TM1650_SHOW,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_tm1650_brightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_TM1650_BRIGHTNESS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE',
                        check: 'Number'
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_tm1650_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_TM1650_CLEAR,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    // 8×8 点阵屏：严格采用 iic_matrix8 参考插件的 Matrix 库接口与图案编辑器数据模型。
    Blockly.Blocks.easyplug_matrix_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_INIT,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_pixel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_PIXEL,
                args0: [
                    {type: 'input_value', name: 'xVal'},
                    {type: 'input_value', name: 'yVal'},
                    {type: 'field_dropdown', name: 'state', options: [[Blockly.Msg.EASYPLUG_ON, 'HIGH'], [Blockly.Msg.EASYPLUG_OFF, 'LOW']]}
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_text = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_TEXT,
                args0: [{type: 'input_value', name: 'TEXT'}],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_scroll = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_SCROLL,
                args0: [{type: 'input_value', name: 'MESSAGE'}, {type: 'input_value', name: 'SPEED'}],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_pattern = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_PATTERN,
                args0: [
                    {type: 'input_value', name: 'MATRIX_EIGHT'},
                    {type: 'input_value', name: 'NUMBER'},
                    {type: 'input_value', name: 'VAR'}
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_icon = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_ICON,
                args0: [{
                    type: 'field_dropdown',
                    name: 'face',
                    options: [
                        ['∩_∩', 'matrix_smile'], ['￣へ￣', 'matrix_tsundere'], ['>_<', 'matrix_squinting'],
                        ['﹂_﹂', 'matrix_despise1'], ['￣□￣', 'matrix_speechless'], ['♥', 'matrix_heart'],
                        ['↑', 'matrix_front'], ['↓', 'matrix_back'], ['→', 'matrix_right'], ['←', 'matrix_left'],
                        ['STOP', 'matrix_stop']
                    ]
                }],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_REFRESH,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_matrix_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_MATRIX_CLEAR,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_lcd1602_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LCD1602_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ADDRESS',
                        options: [
                            [
                                '0x27',
                                '0x27'
                            ],
                            [
                                '0x3F',
                                '0x3F'
                            ]
                        ]
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_lcd1602_cursor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LCD1602_CURSOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'COL',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'ROW',
                        check: 'Number'
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_lcd1602_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LCD1602_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_lcd1602_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_LCD1602_CLEAR,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_oled_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ADDRESS',
                        options: [
                            [
                                '0x3C',
                                '0x3C'
                            ],
                            [
                                '0x3D',
                                '0x3D'
                            ]
                        ]
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_oled_text = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_TEXT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'Y',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'SIZE',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };


    // OLED：常用几何图形绘制，使用刷新积木统一提交显示。
    // 必须在积木实例化时读取语言包；扩展注册阶段语言包可能尚未同步。
    function easyplugOledColourOptions () {
        const msg = Blockly.Msg || {};
        return [
            [msg.EASYPLUG_OLED_WHITE || 'White', 'SSD1306_WHITE'],
            [msg.EASYPLUG_OLED_BLACK || 'Black', 'SSD1306_BLACK'],
            [msg.EASYPLUG_OLED_INVERSE || 'Inverse', 'SSD1306_INVERSE']
        ];
    }
    Blockly.Blocks.easyplug_oled_draw_line = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_DRAW_LINE,
                args0: [
                    {type: 'input_value', name: 'X0', check: 'Number'}, {type: 'input_value', name: 'Y0', check: 'Number'},
                    {type: 'input_value', name: 'X1', check: 'Number'}, {type: 'input_value', name: 'Y1', check: 'Number'},
                    {type: 'field_dropdown', name: 'COLOUR', options: easyplugOledColourOptions()}
                ],
                colour: '#009944', secondaryColour: '#006B30', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_oled_draw_rect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_DRAW_RECT,
                args0: [
                    {type: 'input_value', name: 'X', check: 'Number'}, {type: 'input_value', name: 'Y', check: 'Number'},
                    {type: 'input_value', name: 'W', check: 'Number'}, {type: 'input_value', name: 'H', check: 'Number'},
                    {type: 'field_dropdown', name: 'COLOUR', options: easyplugOledColourOptions()}
                ],
                colour: '#009944', secondaryColour: '#006B30', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_oled_fill_rect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_FILL_RECT,
                args0: [
                    {type: 'input_value', name: 'X', check: 'Number'}, {type: 'input_value', name: 'Y', check: 'Number'},
                    {type: 'input_value', name: 'W', check: 'Number'}, {type: 'input_value', name: 'H', check: 'Number'},
                    {type: 'field_dropdown', name: 'COLOUR', options: easyplugOledColourOptions()}
                ],
                colour: '#009944', secondaryColour: '#006B30', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_oled_draw_circle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_DRAW_CIRCLE,
                args0: [
                    {type: 'input_value', name: 'X', check: 'Number'}, {type: 'input_value', name: 'Y', check: 'Number'},
                    {type: 'input_value', name: 'R', check: 'Number'},
                    {type: 'field_dropdown', name: 'COLOUR', options: easyplugOledColourOptions()}
                ],
                colour: '#009944', secondaryColour: '#006B30', extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.easyplug_oled_fill_circle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_FILL_CIRCLE,
                args0: [
                    {type: 'input_value', name: 'X', check: 'Number'}, {type: 'input_value', name: 'Y', check: 'Number'},
                    {type: 'input_value', name: 'R', check: 'Number'},
                    {type: 'field_dropdown', name: 'COLOUR', options: easyplugOledColourOptions()}
                ],
                colour: '#009944', secondaryColour: '#006B30', extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.easyplug_oled_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_CLEAR,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_oled_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_OLED_REFRESH,
                args0: [],
                colour: '#009944',
                secondaryColour: '#006B30',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_digital_sensor_triggered = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_DIGITAL_SENSOR_TRIGGERED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SENSOR',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_HALL,
                                'HALL'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_COLLISION,
                                'COLLISION'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_BUTTON,
                                'BUTTON'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_TOUCH,
                                'TOUCH'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_KNOCK,
                                'KNOCK'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_TILT,
                                'TILT'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_FLAME,
                                'FLAME'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_VIBRATION,
                                'VIBRATION'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_REED,
                                'REED'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_LINE,
                                'LINE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_PHOTO_INTERRUPTER,
                                'PHOTO_INTERRUPTER'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_OBSTACLE,
                                'OBSTACLE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_PIR,
                                'PIR'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#8A6A00',
                secondaryColour: '#5D4700',
                extensions: [
                    'output_boolean'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_dht11_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_DHT11_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MEASURE',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_TEMPERATURE,
                                'TEMPERATURE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_HUMIDITY,
                                'HUMIDITY'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#8A6A00',
                secondaryColour: '#5D4700',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ds18b20_temperature = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_DS18B20_TEMPERATURE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#8A6A00',
                secondaryColour: '#5D4700',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_analog_sensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_ANALOG_SENSOR_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SENSOR',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_SOUND,
                                'SOUND'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_PHOTOCELL,
                                'PHOTOCELL'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_TEMT6000,
                                'TEMT6000'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_WATER,
                                'WATER'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_SOIL,
                                'SOIL'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_ROTATION,
                                'ROTATION'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_SLIDE,
                                'SLIDE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_ALCOHOL,
                                'ALCOHOL'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_GAS,
                                'GAS'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_PRESSURE,
                                'PRESSURE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SENSOR_STEAM,
                                'STEAM'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: '#E50012',
                secondaryColour: '#A9000D',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_analog_temperature_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_ANALOG_TEMPERATURE_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODEL',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_THERMISTOR,
                                'THERMISTOR'
                            ],
                            [
                                'LM35',
                                'LM35'
                            ]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    }
                ],
                colour: '#E50012',
                secondaryColour: '#A9000D',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_joystick_axis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_JOYSTICK_AXIS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_AXIS_X,
                                'A6'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_AXIS_Y,
                                'A7'
                            ]
                        ]
                    }
                ],
                colour: '#AB47BC',
                secondaryColour: '#8D6E63',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_joystick_pressed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_JOYSTICK_PRESSED,
                args0: [],
                colour: '#AB47BC',
                secondaryColour: '#8D6E63',
                extensions: [
                    'output_boolean'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_adxl345_axis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_ADXL345_AXIS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_AXIS_X,
                                'X'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_AXIS_Y,
                                'Y'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_AXIS_Z,
                                'Z'
                            ]
                        ]
                    }
                ],
                colour: '#AB47BC',
                secondaryColour: '#8D6E63',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ultrasonic_distance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_ULTRASONIC_DISTANCE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TRIG',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ECHO',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_CM,
                                'CM'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_INCH,
                                'INCH'
                            ]
                        ]
                    }
                ],
                colour: '#AB47BC',
                secondaryColour: '#8D6E63',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ir_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_IR_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ir_available = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_IR_AVAILABLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'output_boolean'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ir_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_IR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ir_resume = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_IR_RESUME,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ds3231_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_DS3231_SET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'YEAR',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'MONTH',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'DAY',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'HOUR',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'MINUTE',
                        check: 'Number'
                    },
                    {
                        type: 'input_value',
                        name: 'SECOND',
                        check: 'Number'
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'shape_statement'
                ]
            });
        }
    };

    Blockly.Blocks.easyplug_ds3231_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EASYPLUG_DS3231_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PART',
                        options: [
                            [
                                Blockly.Msg.EASYPLUG_YEAR,
                                'YEAR'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_MONTH,
                                'MONTH'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_DAY,
                                'DAY'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_HOUR,
                                'HOUR'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_MINUTE,
                                'MINUTE'
                            ],
                            [
                                Blockly.Msg.EASYPLUG_SECOND,
                                'SECOND'
                            ]
                        ]
                    }
                ],
                colour: '#F7931E',
                secondaryColour: '#B85E00',
                extensions: [
                    'output_number'
                ]
            });
        }
    };

    // 变量类型（严格按参考代码的单行积木写法）
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {type: 'field_dropdown', name: 'variables_type', options: [[Blockly.Msg.KS_global, 'global_variate'], [Blockly.Msg.KS_local, 'local_variate']]},
                    {type: 'field_dropdown', name: 'TYPE', options: [[Blockly.Msg.KS_MATH_INT || 'int', 'int'], [Blockly.Msg.KS_MATH_UNSIGNED_INT || 'unsigned int', 'unsigned int'], [Blockly.Msg.KS_MATH_LONG || 'long', 'long'], [Blockly.Msg.KS_MATH_UNSIGNED_LONG || 'unsigned long', 'unsigned long'], [Blockly.Msg.KS_MATH_FLOAT || 'float', 'float'], [Blockly.Msg.KS_MATH_DOUBLE || 'double', 'double'], [Blockly.Msg.KS_MATH_BOOLEAN || 'boolean', 'boolean'], [Blockly.Msg.KS_MATH_BYTE || 'byte', 'byte'], [Blockly.Msg.KS_MATH_CHAR || 'char', 'char'], [Blockly.Msg.KS_MATH_UNSIGNED_CHAR || 'unsigned char', 'unsigned char'], [Blockly.Msg.KS_MATH_STRING || 'String', 'String']]},
                    {type: 'input_value', name: 'VAR'},
                    {type: 'input_value', name: 'VALUE'}
                ],
                tooltip: Blockly.Msg.KS_TOOLTIP_VARIABLE_DECLARE,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [{type: 'input_value', name: 'VAR'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_VARIABLE_VALUE,
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [{type: 'input_value', name: 'VAR'}, {type: 'input_value', name: 'VALUE'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_VARIABLE_SET,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [{type: 'input_value', name: 'VAR'}, {type: 'field_dropdown', name: 'TYPE', options: [['++', '++'], ['- -', '--']]}],
                tooltip: Blockly.Msg.KS_TOOLTIP_VARIABLE_CHANGE,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [{type: 'input_value', name: 'VAR'}, {type: 'input_value', name: 'VALUE'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_VARIABLE_STRING_SET,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    // 文本（严格按参考代码的单行积木写法）
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [{type: 'input_value', name: 'VAR'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_CHAR,
                colour: color1,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [{type: 'input_value', name: 'VAR'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_STRING,
                colour: color1,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [{type: 'input_value', name: 'VAR'}],
                tooltip: Blockly.Msg.KS_TOOLTIP_DATA,
                colour: color1,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge || '%1 %2 %3',
                args0: [
                    {type: 'input_value', name: 'VALUE1'},
                    {type: 'field_dropdown', name: 'judge', options: [['==', '=='], ['≠', '!='], ['>', '>'], ['>=', '>='], ['<', '<'], ['<=', '<=']]},
                    {type: 'input_value', name: 'VALUE2'}
                ],
                tooltip: Blockly.Msg.KS_TOOLTIP_JUDGE,
                colour: color2,
                extensions: ['output_boolean']
            });
        }
    };

    // 计时器（严格按参考代码的单行积木写法）
    Blockly.Blocks.KS_millis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MILLIS,
                tooltip: Blockly.Msg.KS_TOOLTIP_MILLIS,
                colour: color2,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_micros = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MICROS,
                tooltip: Blockly.Msg.KS_TOOLTIP_MICROS,
                colour: color2,
                extensions: ['output_number']
            });
        }
        };

    // 兼容旧项目中已保存的 EasyPlug 通用积木类型；新工具箱统一使用 KS 命名。
    Blockly.Blocks.easyplug_variables_declare = Blockly.Blocks.KS_variables_declare;
    Blockly.Blocks.easyplug_variables_get = Blockly.Blocks.KS_variables_get;
    Blockly.Blocks.easyplug_variables_set = Blockly.Blocks.KS_variables_set;
    Blockly.Blocks.easyplug_variables_change = Blockly.Blocks.KS_variables_change;
    Blockly.Blocks.easyplug_variables_string_set = Blockly.Blocks.KS_variables_stringSet;
    Blockly.Blocks.easyplug_char = Blockly.Blocks.KS_CHAR;
    Blockly.Blocks.easyplug_string = Blockly.Blocks.KS_STRING;
    Blockly.Blocks.easyplug_data = Blockly.Blocks.KS_data;
    Blockly.Blocks.easyplug_judge = Blockly.Blocks.KS_judge;
    Blockly.Blocks.easyplug_millis = Blockly.Blocks.KS_millis;
    Blockly.Blocks.easyplug_micros = Blockly.Blocks.KS_micros;
    return Blockly;
}
exports = addBlocks;
