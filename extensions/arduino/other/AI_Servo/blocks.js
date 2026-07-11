/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */  // 处理长字符串

/**
 * 添加Blockly块定义，用于AIbot MCP服务控制扩展，针对0-180度舵机。
 * @param {Object} Blockly - Blockly核心对象。
 * @returns {Object} Blockly - 返回修改后的Blockly。
 */
function addBlocks(Blockly) {
    const color1 = '#4CAF50';  // 用于语句块（绿色）
    const color2 = '#4C97FF';  // 用于值块（蓝色）

    const ServoIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNDkuMyA1NC42IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OS4zIDU0LjY7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLoiLXmnLouc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTM1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMzMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MzEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTUuODc5MTIxIgogICBpbmtzY2FwZTpjeD0iMjQuNjUiCiAgIGlua3NjYXBlOmN5PSIyNy4yOTk5OTkiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRTYwMDEyO30KPC9zdHlsZT4KPGcKICAgaWQ9ImcyOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiI+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMCw0OS4xQzAsNDksMCw0OSwwLDQ4LjljMC4xLTAuNCwwLjMtMC43LDAuNi0wLjhsNi44LTMuN2MwLjQtMC4yLDEtMC4yLDEuNCwwLjFsNC4zLDMuNyAgIGMwLjMsMC4zLDAuNCwwLjYsMC40LDFzLTAuMiwwLjctMC42LDAuOWwtNy4yLDQuM2MtMC41LDAuMy0xLjEsMC4yLTEuNS0wLjJjLTAuNC0wLjQtMy42LTMuOS0zLjktNC4zQzAuMSw0OS44LDAsNDkuNSwwLDQ5LjEgICAgTTcuOCw0Ni44bC00LjcsMi42YzAuNiwwLjcsMS41LDEuNiwyLjIsMi40bDQuOS0zTDcuOCw0Ni44eiIKICAgaWQ9InBhdGg0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsNDkuMUwxMS4xLDQ5LjFjMC0wLjcsMC42LTEuMiwxLjItMS4ybDE3LjUsMC4zYzAuMiwwLDguNCwwLjcsMTEuNi0zLjVjMi44LTMuNy0wLjctNi42LTEuMS02LjkgICBjLTAuNS0wLjQtMC42LTEuMi0wLjItMS43YzAuNC0wLjUsMS4xLTAuNiwxLjctMC4yYzIsMS41LDUsNS43LDEuNiwxMC4yYy00LDUuMy0xMy4yLDQuNS0xMy42LDQuNWwtMTcuNS0wLjMgICBDMTEuNiw1MC4zLDExLjEsNDkuOCwxMS4xLDQ5LjEiCiAgIGlkPSJwYXRoNiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik04LjgsNDcuMUw4LjgsNDcuMWMwLTAuNywwLjYtMS4yLDEuMi0xLjJsMTguNCwwLjNjMi4xLDAsNy45LTAuNCwxMC4zLTIuNmMwLjktMC44LDEuMy0xLjYsMS4yLTIuMiAgIGMtMC4yLTEuMS0xLjYtMi0yLTIuM2MtMC42LTAuMy0wLjgtMS0wLjUtMS42czEtMC44LDEuNi0wLjVjMC4zLDAuMiwzLDEuNiwzLjQsNC4xYzAuMiwxLjUtMC40LDMtMiw0LjNjLTMuNiwzLjMtMTEuNiwzLjItMTIsMy4yICAgTDEwLDQ4LjNDOS4zLDQ4LjMsOC44LDQ3LjgsOC44LDQ3LjEiCiAgIGlkPSJwYXRoOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik02LjgsNDUuNUM2LjgsNDUuNSw2LjgsNDUuMyw2LjgsNDUuNWMwLTAuNywwLjYtMS4yLDEuMi0xLjJsMTYuMSwwLjNjMy45LDAuMiwxMC42LTAuMiwxMi4zLTEuOCAgIGMwLjItMC4yLDAuNy0wLjcsMC42LTEuMWMtMC4xLTAuNS0xLjItMS4yLTEuOS0xLjRjLTAuNi0wLjItMC45LTAuOS0wLjctMS41czAuOS0wLjksMS41LTAuN2MwLjMsMC4xLDMsMS4xLDMuNCwzLjIgICBjMC4yLDAuOCwwLDItMS40LDMuM2MtMywyLjgtMTIuOSwyLjQtMTQsMi40TDcuOCw0Ni43QzcuMyw0Ni42LDYuOCw0Niw2LjgsNDUuNSIKICAgaWQ9InBhdGgxMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC41LDMxLjVMMTAuNSwzMS41bDAuNi0yNC40YzAtMC43LDAuNi0xLjIsMS4yLTEuMmMwLjcsMCwxLjIsMC42LDEuMiwxLjJsLTAuNiwyMy42TDMwLjQsNDBsMTAuOC00LjUgICBsLTAuNi02LjljLTAuMS0wLjcsMC40LTEuMiwxLjEtMS4zYzAuNy0wLjEsMS4yLDAuNCwxLjMsMS4xbDAuNiw3LjdjMCwwLjUtMC4zLDEtMC43LDEuMmwtMTIuMSw1LjJjLTAuMywwLjEtMC43LDAuMS0xLDAgICBsLTE4LjYtOS45QzEwLjcsMzIuNSwxMC41LDMyLDEwLjUsMzEuNSIKICAgaWQ9InBhdGgxMiIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yLjgsMTEuM0MyLjgsMTEuMywyLjgsMTEuMiwyLjgsMTEuM2MwLTAuNSwwLjMtMC45LDAuNy0xLjFMMjMuMywwLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwbDYuOCwzLjZMMzcsMC45ICAgYzAuNC0wLjIsMS0wLjIsMS4zLDAuMkw0Mi44LDVjMC4zLDAuMiwwLjQsMC42LDAuNCwxUzQzLDYuNyw0Mi42LDYuOWwtMy4zLDIuMWwzLjMsMi4zYzAuNCwwLjMsMC42LDAuNywwLjUsMS4xbC0wLjYsNS4yICAgYzEuNSwwLjksNC41LDIuOSw2LjMsNC4yYzAuMywwLjIsMC41LDAuNiwwLjUsMWMwLDAuMiwwLDAuMy0wLjEsMC41bDAuMSwxLjJjMCwwLjUtMC4yLDAuOS0wLjUsMS4xbC0xMSw3LjIgICBjLTAuNCwwLjMtMC45LDAuMy0xLjMsMEwzLjQsMTIuM0MzLDEyLjEsMi44LDExLjgsMi44LDExLjMgTTIzLjgsMi42TDYuNCwxMS41bDIzLDE0LjJjLTAuMy0wLjQtMC40LTEtMC4xLTEuNCAgIGMwLjQtMC41LDEuMS0wLjcsMS43LTAuM2w2LDQuMWw4LjgtNS4zYy0yLjQtMS42LTQuOC0zLjItNS4yLTMuM2MtMC41LTAuMi0wLjgtMC43LTAuNy0xLjNsMC43LTUuM0wzNi40LDEwICAgYy0wLjMtMC4yLTAuNS0wLjYtMC41LTFzMC4yLTAuOCwwLjYtMWwzLjYtMi4ybC0yLjctMi4zbC01LjcsMi44Yy0wLjMsMC4yLTAuOCwwLjItMS4xLDBMMjMuOCwyLjZ6IgogICBpZD0icGF0aDE0IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTI5LjIsMjQuOGMwLTAuNCwwLjItMC44LDAuNi0xbDEwLjctNi43YzAuNi0wLjQsMS4zLTAuMiwxLjcsMC40czAuMiwxLjMtMC40LDEuN2wtMTAuNyw2LjcgICBjLTAuNiwwLjQtMS4zLDAuMi0xLjctMC40QzI5LjMsMjUuMywyOS4yLDI1LjEsMjkuMiwyNC44IgogICBpZD0icGF0aDE2IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPgoJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTTExLjEsNy4xYzAtMC4yLDAuMS0wLjQsMC4yLTAuNmMwLjQtMC42LDEuMS0wLjcsMS43LTAuNEwyNS42LDE0bDQuNi0zLjdjMC40LTAuMywwLjktMC40LDEuNC0wLjFsNS44LDMuNCAgIGw0LjItMC44YzAuNy0wLjEsMS4zLDAuMywxLjQsMC45YzAuMSwwLjctMC4zLDEuMy0wLjksMS40bC00LjcsMC45Yy0wLjMsMC4xLTAuNiwwLTAuOC0wLjFsLTUuNS0zLjJsLTQuOCwzLjcgICBjLTAuNCwwLjMtMSwwLjQtMS40LDAuMUwxMS42LDguMUMxMS4zLDcuOSwxMS4xLDcuNSwxMS4xLDcuMSIKICAgaWQ9InBhdGgxOCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xOC45LDEyYzAtMC40LDAuMi0wLjgsMC42LTFsNS0yLjhsLTQuNy00LjRjLTAuNS0wLjUtMC41LTEuMy0wLjEtMS44YzAuNS0wLjUsMS4yLTAuNSwxLjctMC4xbDUuOSw1LjYgICBjMC4zLDAuMywwLjQsMC42LDAuNCwxcy0wLjMsMC43LTAuNiwwLjlMMjAuNywxM2MtMC42LDAuMy0xLjMsMC4xLTEuNi0wLjRDMTksMTIuNCwxOC45LDEyLjIsMTguOSwxMiIKICAgaWQ9InBhdGgyMCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0zMCw1LjFjMC0wLjYsMC41LTEuMiwxLjEtMS4yYzAuNywwLDEuMiwwLjUsMS4zLDEuMWwwLjIsMi45YzAsMC43LTAuNSwxLjItMS4xLDEuM2MtMC43LDAtMS4yLTAuNS0xLjMtMS4xICAgTDMwLDUuMUwzMCw1LjEiCiAgIGlkPSJwYXRoMjIiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJNMjkuMSw0MS41TDI5LjEsNDEuNWwwLjEtMjIuOWMwLTAuNCwwLjItMC43LDAuNS0xbDUuOS00LjJjMC41LTAuNCwxLjMtMC4zLDEuNywwLjNjMC40LDAuNSwwLjMsMS4zLTAuMywxLjcgICBsLTUuNCwzLjhsLTAuMSwyMi4zYzAsMC43LTAuNSwxLjItMS4yLDEuMkMyOS43LDQyLjYsMjkuMSw0Mi4xLDI5LjEsNDEuNSIKICAgaWQ9InBhdGgyNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0yNC40LDE1LjRjMC0wLjIsMC4xLTAuNCwwLjItMC42YzAuNC0wLjYsMS4xLTAuNywxLjctMC40bDQuOSwzLjFjMC42LDAuNCwwLjcsMS4xLDAuNCwxLjcgICBjLTAuNCwwLjYtMS4xLDAuNy0xLjcsMC40TDI1LDE2LjZDMjQuNiwxNi4yLDI0LjQsMTUuOCwyNC40LDE1LjQiCiAgIGlkPSJwYXRoMjYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    // ===============================  
    // 注册舵机控制服务
    // ===============================
    Blockly.Blocks['AIbot_register_mcp_servo_service'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_REGISTER_MCP_SERVO_SERVICE || '注册 MCP 舵机服务 %1 描述 %2 参数 %3 类型 %4',  // 示例消息
                args0: [
                    {
                        type: 'input_value',
                        name: 'SERVICE_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'DESCRIPTION'
                    },
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PARAM_TYPE',
                        options: [
                            [Blockly.Msg.NUMBER, 'Number']  // 针对角度，使用 Number 类型
                        ]
                    }
                ],
                colour: color1,
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================  
    // 判断 MCP 服务名称是否匹配（舵机版本，与原版类似）
    // ===============================
    Blockly.Blocks['AIbot_get_mcp_message_event_name_servo'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_GET_MCP_MESSAGE_EVENT_NAME_SERVO || 'MCP 舵机服务名称是 %1 吗？',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME'
                    }
                ],
                colour: color2,
                extensions: ['output_boolean']
            });
        }
    };

    // ===============================  
    // 获取 MCP 参数值（舵机版本，与原版类似）
    // ===============================
    Blockly.Blocks['AIbot_control_message_event_function_servo'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_CONTROL_MESSAGE_EVENT_FUNCTION_SERVO || '获取 MCP 舵机 %1 的参数 %2',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME'
                    }
                ],
                colour: color2,
                extensions: ['output_number']  // 输出为数值（角度）
            });
        }
    };

    // ===============================  
    // 设置 MCP 服务的状态（舵机版本，与原版类似）
    // ===============================
    Blockly.Blocks['AIbot_update_mcp_control_state_servo'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_UPDATE_MCP_CONTROL_STATE_SERVO || '更新 MCP 舵机 %1 的 %2 为 %3',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'PARAM_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    }
                ],
                colour: color1,  // 语句块颜色（绿色）
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================  
    // 上报 MCP 执行结果（舵机版本，与原版类似）
    // ===============================
    Blockly.Blocks['AIbot_response_mcp_control_result_servo'] = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.AIBOT_RESPONSE_MCP_CONTROL_RESULT_SERVO || '上报 MCP 舵机 %1 执行结果',
                args0: [
                    {
                        type: 'input_value',
                        name: 'MCP_NAME'
                    }
                ],
                colour: color1,  // 语句块颜色（绿色）
                extensions: ['shape_statement']
            });
        }
    };

    // ===============================  
    // 设置舵机角度（0-180度）
    // ===============================
    Blockly.Blocks['servo_setAngle'] = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SERVO_SET_ANGLE || '设置引脚%1 舵机角度%2 延时%3毫秒',
                args0: [
                    {
                        type: 'field_image',
                        src: ServoIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins 
                    },
                    {
                        type: 'input_value',
                        name: 'angle'
                    },
                    {
                        type: 'input_value',
                        name: 'time'
                    }
                ],
                colour: color2,
                extensions: ['shape_statement']
            });
        }
    };

    // 读取舵机角度
    Blockly.Blocks['servo_read'] = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SERVO_READ || '读取引脚%1 舵机角度',
                args0: [
                    {
                        type: 'field_image',
                        src: ServoIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color2,
                extensions: ['output_number']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;