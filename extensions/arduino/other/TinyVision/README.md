# TinyVision KidsBlock 扩展插件

这是为 **TinyVision AI 摄像头模块**开发的 KidsBlock / OpenBlock 扩展插件。

## 目录结构

```
aicam_extension/
├── asset/
│   └── tinyvision.png     # 插件图标
├── lib/
│   └── AiCam/
│       ├── AiCam.h        # Arduino 库头文件
│       └── AiCam.cpp      # Arduino 库源文件
├── index.js               # 插件入口和配置
├── blocks.js              # 图形化积木块定义
├── generator.js           # Arduino 代码生成器逻辑
├── toolbox.js             # 工具箱分类和积木列表
├── msg.js                 # 多语言翻译（中英文）
└── msg.json               # 默认英文翻译
```

## 功能积木一览

| 积木 | 类型 | 说明 |
|------|------|------|
| 初始化 TinyVision RX [引脚] TX [引脚] | 执行 | 初始化串口通信，放在 setup 中 |
| 设置 TinyVision 模式为 [模式] | 执行 | 切换识别模式 |
| 读取 TinyVision 串口数据 | 执行 | 放在 loop 中持续调用 |
| 是否检测到人脸？ | 布尔 | 返回 true/false |
| 获取人脸 [X/Y] 坐标 | 数值 | 返回人脸中心坐标 |
| 获取颜色识别结果 | 字符串 | 返回原始颜色字符串 |
| 识别到的颜色是 [颜色] ？ | 布尔 | 固定选项：红/黄/蓝/绿 |
| 获取二维码识别结果 | 字符串 | 返回二维码内容字符串 |
| 获取卡片识别结果 | 字符串 | 返回原始卡片字符串 |
| 识别到的卡片是 [卡片] ？ | 布尔 | 固定选项：直行/掉头/左转/右转/停车 |

## 颜色识别选项（固定）

| 显示名称 | 内部值 |
|----------|--------|
| 红色（RED） | RED |
| 黄色（YELLOW） | YELLOW |
| 蓝色（BLUE） | BLUE |
| 绿色（GREEN） | GREEN |

## 卡片识别选项（固定）

| 显示名称 | 内部值 |
|----------|--------|
| 直行（STRAIGHT） | STRAIGHT |
| 掉头（UTURN） | UTURN |
| 左转（LEFT） | LEFT |
| 右转（RIGHT） | RIGHT |
| 停车（PARKING） | PARKING |

## 安装方法

1. 将整个文件夹复制到 KidsBlock / OpenBlock 的扩展目录（`extensions/arduino/sensor/tinyvision`）。
2. 在 KidsBlock 软件中刷新或重新加载扩展列表。
