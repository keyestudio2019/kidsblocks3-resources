/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    // ============ ESP32 机械手臂（来自 ESP32_Arm v1.6.2） ============
    const color = '#6E56CF';
    const secondaryColour = '#5946A8';
    const armIconUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkVTUDMyIG1lY2hhbmljYWwgYXJtIj4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgcng9IjI0IiBmaWxsPSIjNkU1NkNGIi8+CiAgPHBhdGggZD0iTTE4IDEwMGg5MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjkxIiByPSIxMyIgZmlsbD0iI0Q5RDJGRiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjYiLz4KICA8cGF0aCBkPSJNNDEgODIgNjEgNTUgODYgNzAgMTAxIDQ0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjYxIiBjeT0iNTUiIHI9IjgiIGZpbGw9IiNEOUQyRkYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgPGNpcmNsZSBjeD0iODYiIGN5PSI3MCIgcj0iOCIgZmlsbD0iI0Q5RDJGRiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiLz4KICA8cGF0aCBkPSJtOTkgNDUgMTAtMTJtLTUgMTcgMTIgOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
    // Read localized messages and dropdown labels only when each block is initialized.
    Blockly.Blocks.mechanical_arm_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_INIT,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'input_value', name: 'BASE_PIN'},
                    {type: 'input_value', name: 'LEFT_PIN'},
                    {type: 'input_value', name: 'RIGHT_PIN'},
                    {type: 'input_value', name: 'GRIPPER_PIN'}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_move_joint = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_MOVE_JOINT,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'JOINT', options: [[Blockly.Msg.MECHANICAL_ARM_BASE, 'base'], [Blockly.Msg.MECHANICAL_ARM_LEFT, 'left'], [Blockly.Msg.MECHANICAL_ARM_RIGHT, 'right'], [Blockly.Msg.MECHANICAL_ARM_GRIPPER, 'gripper']]},
                    {type: 'input_value', name: 'ANGLE'},
                    {type: 'field_dropdown', name: 'SPEED', options: [[Blockly.Msg.MECHANICAL_ARM_SPEED_SLOW, 'slow'], [Blockly.Msg.MECHANICAL_ARM_SPEED_NORMAL, 'normal'], [Blockly.Msg.MECHANICAL_ARM_SPEED_FAST, 'fast']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_gripper_simple = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_GRIPPER_SIMPLE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'ACTION', options: [[Blockly.Msg.MECHANICAL_ARM_OPEN, 'open'], [Blockly.Msg.MECHANICAL_ARM_CLOSE, 'close']]},
                    {type: 'field_dropdown', name: 'SPEED', options: [[Blockly.Msg.MECHANICAL_ARM_SPEED_SLOW, 'slow'], [Blockly.Msg.MECHANICAL_ARM_SPEED_NORMAL, 'normal'], [Blockly.Msg.MECHANICAL_ARM_SPEED_FAST, 'fast']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_home_simple = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_HOME_SIMPLE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'SPEED', options: [[Blockly.Msg.MECHANICAL_ARM_SPEED_SLOW, 'slow'], [Blockly.Msg.MECHANICAL_ARM_SPEED_NORMAL, 'normal'], [Blockly.Msg.MECHANICAL_ARM_SPEED_FAST, 'fast']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_get_joint_angle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_GET_JOINT_ANGLE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'JOINT', options: [[Blockly.Msg.MECHANICAL_ARM_BASE, 'base'], [Blockly.Msg.MECHANICAL_ARM_LEFT, 'left'], [Blockly.Msg.MECHANICAL_ARM_RIGHT, 'right'], [Blockly.Msg.MECHANICAL_ARM_GRIPPER, 'gripper']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_move_pose = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_MOVE_POSE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'input_value', name: 'BASE'},
                    {type: 'input_value', name: 'LEFT'},
                    {type: 'input_value', name: 'RIGHT'},
                    {type: 'input_value', name: 'GRIPPER'},
                    {type: 'field_dropdown', name: 'SPEED', options: [[Blockly.Msg.MECHANICAL_ARM_SPEED_SLOW, 'slow'], [Blockly.Msg.MECHANICAL_ARM_SPEED_NORMAL, 'normal'], [Blockly.Msg.MECHANICAL_ARM_SPEED_FAST, 'fast']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_record_pose = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_RECORD_POSE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_play_recorded_poses_simple = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_PLAY_RECORDED_POSES_SIMPLE,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'SPEED', options: [[Blockly.Msg.MECHANICAL_ARM_SPEED_SLOW, 'slow'], [Blockly.Msg.MECHANICAL_ARM_SPEED_NORMAL, 'normal'], [Blockly.Msg.MECHANICAL_ARM_SPEED_FAST, 'fast']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_clear_recorded_poses = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_CLEAR_RECORDED_POSES,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_recorded_pose_count = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_RECORDED_POSE_COUNT,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_joystick_axis = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_JOYSTICK_AXIS,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'JOYSTICK', options: [[Blockly.Msg.MECHANICAL_ARM_LEFT_JOYSTICK, 'left'], [Blockly.Msg.MECHANICAL_ARM_RIGHT_JOYSTICK, 'right']]},
                    {type: 'field_dropdown', name: 'AXIS', options: [['X', 'x'], ['Y', 'y']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_joystick_pressed = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.MECHANICAL_ARM_JOYSTICK_PRESSED,
                args0: [{type: 'field_image', src: armIconUrl, width: 32, height: 32}],
                args1: [
                    {type: 'field_dropdown', name: 'JOYSTICK', options: [[Blockly.Msg.MECHANICAL_ARM_LEFT_JOYSTICK, 'left'], [Blockly.Msg.MECHANICAL_ARM_RIGHT_JOYSTICK, 'right']]}
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.mechanical_arm_joystick_control = {
        init: function () {
            this.jsonInit({
                message0: '%1 ' + Blockly.Msg.MECHANICAL_ARM_JOYSTICK_CONTROL,
                args0: [
                    {type: 'field_image', src: armIconUrl, width: 32, height: 32},
                    {type: 'input_value', name: 'LEFT_X_PIN', check: 'Number'},
                    {type: 'input_value', name: 'LEFT_Y_PIN', check: 'Number'},
                    {type: 'input_value', name: 'LEFT_B_PIN', check: 'Number'},
                    {type: 'input_value', name: 'RIGHT_X_PIN', check: 'Number'},
                    {type: 'input_value', name: 'RIGHT_Y_PIN', check: 'Number'},
                    {type: 'input_value', name: 'RIGHT_B_PIN', check: 'Number'}
                ],
                previousStatement: null,
                nextStatement: null,
                colour: color,
                secondaryColour: secondaryColour
            });
        }
    };

    // ============ WiFi（来自 WiFi v1.0.0） ============
    const color9 = '#FFA500';
    const wifiIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5ODAuMDM5ODYgODYxLjI5OTk5IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcxMCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iV2lGaS5zdmciCiAgIHdpZHRoPSI5ODAuMDM5ODYiCiAgIGhlaWdodD0iODYxLjI5OTk5IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnMxNCIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxMiIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41MzU5ODY5NCIKICAgaW5rc2NhcGU6Y3g9IjQ5MC42ODM2IgogICBpbmtzY2FwZTpjeT0iNDQ0Ljk3MzUzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEyNzEiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTAiPjxzb2RpcG9kaTpndWlkZQogICAgIHBvc2l0aW9uPSIxODcuODEwNzcsLTEzNi42ODIzMyIKICAgICBvcmllbnRhdGlvbj0iLTAuNzA3MTA2NzgsLTAuNzA3MTA2NzgiCiAgICAgaWQ9Imd1aWRlMTYiCiAgICAgaW5rc2NhcGU6bG9ja2VkPSJmYWxzZSIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTIiPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPgo8ZwogICBpZD0iZzgiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4wNzg0MDYsLTY5LjMpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgIGQ9Im0gNDk4LjUsNjkuMyBjIC0xNzYuMiwwIC0zNTIuNCw3MS40IC00NzguMiwxOTQuNSAtMTguNSwyMy44IC0xMS45LDY4LjggMTkuOSw3OS40IDIxLjIsNy45IDQ1LDEuMyA1OS42LC0xNS45IDEzMy44LC0xMjMuMSAzMjguNSwtMTc5LjkgNTA4LjcsLTE0NC4yIDExMS4zLDIxLjIgMjE4LjYsNzQuMSAyOTkuNCwxNTMuNSAyNS4yLDE5LjggNjguOSwxMS45IDc5LjUsLTE4LjUgNi42LC0yMi41IDEuMywtNDkgLTE3LjIsLTYyLjIgQyA4NDQuMiwxMzguMSA2NzIsNjkuMyA0OTguNSw2OS4zIFogbSAtOCwyMDUuMSBjIC04Mi4xLDIuNiAtMTY0LjMsMjMuOCAtMjM0LjUsNjYuMiAtMzguNCwyMi41IC03NC4yLDQ5IC0xMDIsODIgLTE1LjksMTkuOCAtMTEuOSw1MC4zIDcuOSw2Ni4yIDE5LjksMTcuMiA1MS43LDE1LjkgNzAuMiwtMS4zIEMgMzA5LDQwOCA0MjQuMywzNjUuNyA1MzUuNSwzNzguOSBjIDg2LjEsNy45IDE3MC45LDQ2LjMgMjMwLjUsMTA4LjUgMTguNSwxNy4yIDUwLjMsMTguNSA3MC4yLDEuMyAxOS45LC0xNS45IDIzLjgsLTQ2LjMgNy45LC02Ni4yIEMgODEyLjMsMzg2LjggNzcyLjYsMzU3LjcgNzMxLjUsMzMzLjggNjU3LjQsMjkyLjkgNTc0LDI3My4xIDQ5MC41LDI3NC40IFogbSA2LjYsMjA1LjEgYyAtNDcuNywxLjMgLTk2LjcsMTQuNiAtMTM3LjgsMzkuNyAtMjMuOCwxNC42IC00Ni40LDMwLjQgLTYzLjYsNTEuNiAtMjEuMiwzMy4xIDkuMyw4MC43IDQ3LjcsNzguMSAyMy44LC0xLjMgMzguNCwtMjMuOCA1NywtMzQuNCAzOS43LC0yNy44IDg4LjgsLTQxIDEzNi40LC0yOS4xIDM1LjgsNS4zIDY2LjIsMjcuOCA5MS40LDUyLjkgMTguNSwxNS45IDQ5LDEzLjIgNjQuOSwtNS4zIDE4LjUsLTE3LjIgMjEuMiwtNDkgMi42LC02OC44IC01MC4yLC01MS42IC0xMjMuMSwtODcuNCAtMTk4LjYsLTg0LjcgeiIKICAgICBpZD0icGF0aDQiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgIGQ9Im0gNDk5LjgsNjk3LjggYyAtNjQuOSwwIC0xMTcuOSw1MS42IC0xMTcuOSwxMTYuNCAwLDYzLjUgNTMsMTE2LjQgMTE3LjksMTE2LjQgNjQuOSwwIDExNi42LC01Mi45IDExNi42LC0xMTYuNCAwLC02NC44IC01MS43LC0xMTYuNCAtMTE2LjYsLTExNi40IHoiCiAgICAgaWQ9InBhdGg2IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPgo8L3N2Zz4K';    
    Blockly.Blocks.wifi_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWD'
                    }
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_read_ip = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_IP,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.wifi_client_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_CLIENT_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_client_connected = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_CLIENT_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.wifi_read_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.wifi_send_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_SEND_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    // ============ Web Page Editing PRO（来自 ESP_WEB_PRO v1.0.0） ============
    const QH_WEB_COLOR = '#7b68ee';
    const QH_WEB_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwNzkwNTUwMTU2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzMjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg1OSA3OS4yN0gxNjVhOTAgOTAgMCAwIDAtOTAgOTB2Njk0YTkwIDkwIDAgMCAwIDkwIDkwaDY5NGE5MCA5MCAwIDAgMCA5MC05MHYtNjk0YTkwIDkwIDAgMCAwLTkwLTkweiBtLTY5MyA2MGg2OTRhMzAgMzAgMCAwIDEgMzAgMzB2MTQ1SDEzNnYtMTQ1YTMwIDMwIDAgMCAxIDMwLTMweiBtNjkzIDc1NEgxNjVhMzAgMzAgMCAwIDEtMzAtMzB2LTQ4OWg3NTR2NDg5YTMwIDMwIDAgMCAxLTMwIDMweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjMuNDcgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuMDggMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyMyI+PC9wYXRoPjxwYXRoIGQ9Ik00ODIuNjkgMjI3Ljk4bS01MCAwYTUwIDUwIDAgMSAwIDEwMCAwIDUwIDUwIDAgMSAwLTEwMCAwWiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iNjMyNCI+PC9wYXRoPjwvc3ZnPg==';

    Blockly.Blocks.espdashpro_display_components = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_display_components,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                      type: "input_value",
                      name: "unit"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.temperature,'1'],
                                [Blockly.Msg.humidity,'2'],
                                [Blockly.Msg.air_pressure,'3'],
                                [Blockly.Msg.energy,'4'],
                                [Blockly.Msg.progress_bar,'6'],
                                [Blockly.Msg.tags,'7']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_state_component = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_state_component,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.success,'success'],
                                [Blockly.Msg.warning,'warning'],
                                [Blockly.Msg.danger,'danger'],
                                [Blockly.Msg.idle,'idle']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_update_chart = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_update_chart,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BAR_CHART,'1'],
                                [Blockly.Msg.LINE_CHART,'2'],
                                [Blockly.Msg.AREA_CHART,'3'],
                                [Blockly.Msg.PIE_CHART,'4']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "abscissa"
                    },
                    {
                      type: "input_value",
                      name: "ordinate"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_display_components1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_display_components1,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BUTTON_CARD,'1'],
                                [Blockly.Msg.SLIDER_CARD,'2'],
                                [Blockly.Msg.TEXT_INPUT_CARD,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_value",
                      name: "value"
                    },
                    {
                      type: "field_number",
                      name: "min",
                      value: 0,
                      min: 0,
                      max: 255
                    },
                    {
                      type: "field_number",
                      name: "max",
                      value: 180,
                      min: 0,
                      max: 255
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_get_component_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_get_component_value,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.BUTTON_CARD,'1'],
                                [Blockly.Msg.SLIDER_CARD,'2'],
                                [Blockly.Msg.TEXT_INPUT_CARD,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "field_number",
                      name: "min",
                      value: 0,
                      min: 0,
                      max: 255
                    },
                    {
                      type: "field_number",
                      name: "max",
                      value: 180,
                      min: 0,
                      max: 255
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    Blockly.Blocks.espdashpro_get_joystick_value = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_get_joystick_value,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Label"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[
                                [Blockly.Msg.bothway,'1'],
                                [Blockly.Msg.lockx,'2'],
                                [Blockly.Msg.locky,'3']
                                ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_hat']
            });
        }
    };

    Blockly.Blocks.espdashpro_set_title = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_set_title,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "title"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_setting_permissions = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_setting_permissions,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "name"
                    },
                    {
                      type: "input_value",
                      name: "pass"
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_add_page = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_add_page,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "page"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_add_statistics = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_add_statistics,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "Statistic"
                    },
                    {
                      type: "input_value",
                      name: "Value"
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.espdashpro_set_component_page = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.espdashpro_set_component_page,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_WEB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[Blockly.Msg.temperature,"temp"], [Blockly.Msg.humidity,"hum"], [Blockly.Msg.air_pressure,"air"], [Blockly.Msg.energy,"energy"], [Blockly.Msg.status,"status"], [Blockly.Msg.progress_bar,"progress"], [Blockly.Msg.tags,"generic"], [Blockly.Msg.BUTTON_CARD,"button"], [Blockly.Msg.SLIDER_CARD,"slider"], [Blockly.Msg.TEXT_INPUT_CARD,"text"], [Blockly.Msg.joystick,"joystick"], [Blockly.Msg.BAR_CHART,"bar"], [Blockly.Msg.LINE_CHART,"line"], [Blockly.Msg.AREA_CHART,"area"], [Blockly.Msg.PIE_CHART,"pie"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'page_id',
                        options:[["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]
                    }
                ],
                "tooltip": "",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.QH_variables_get = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:QH_WEB_COLOR,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }     
    };

    // ============ 从 UnoV4.0 迁入：变量类型、文本、计时器 ============
    const ksVariableColor = '#FF4500';
    const ksTextColor = '#800000';
    const ksTimerColor = '#41be8a';

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
                colour:ksVariableColor,
                extensions: ['shape_statement']
            });
        }
    };

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
                colour:ksVariableColor,
                extensions: ['output_number']
            });
        }
    };

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
                colour:ksVariableColor,
                extensions: ['shape_statement']
            });
        }     
    };

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
                colour:ksVariableColor,
                extensions: ['shape_statement']
            });
        }     
    };

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
                colour:ksVariableColor,
                extensions: ['shape_statement']
            });
        }     
    };

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
                colour:ksTextColor,
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
                colour:ksTextColor,
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
                colour:ksTextColor,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_millis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MILLIS,
                colour: ksTimerColor,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.KS_micros = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_MICROS,
                colour: ksTimerColor,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

module.exports = addBlocks;
