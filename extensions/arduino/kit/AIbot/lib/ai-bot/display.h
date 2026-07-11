#pragma once

#ifndef _DISPLAY_H_
#define _DISPLAY_H_

#include <esp_lcd_panel_ops.h>

#include <string>

#include "lvgl.h"

// ============================================================
//  Display — 公共基类（虚函数接口）
//  g_display 统一为 std::unique_ptr<Display>
// ============================================================
class Display {
 public:
  enum class Role : uint8_t {
    kSystem,
    kAssistant,
    kUser,
  };

  virtual ~Display() = default;
  virtual void Start() = 0;
  virtual void ShowStatus(const char* status) = 0;
  virtual void SetEmotion(const std::string& emotion) = 0;

  // LCD 版本使用带 Role 的 SetChatMessage
  virtual void SetChatMessage(const Role role, const std::string& content) {
    // 默认实现：忽略 role，调用无角色版本（供 OLED 使用）
    SetChatMessage(content);
  }

  // OLED 版本使用无 Role 的 SetChatMessage
  virtual void SetChatMessage(const std::string& content) {
    // 默认实现：空（供 LCD 覆盖时不需要实现此版本）
  }

 protected:
  uint32_t width_ = 0;
  uint32_t height_ = 0;
  lv_display_t* display_ = nullptr;
  lv_obj_t* container_ = nullptr;
  lv_obj_t* status_bar_ = nullptr;
  lv_obj_t* content_ = nullptr;
  lv_obj_t* content_left_ = nullptr;
  lv_obj_t* content_right_ = nullptr;
  lv_obj_t* emotion_label_ = nullptr;
  lv_obj_t* chat_message_label_ = nullptr;
  lv_obj_t* network_label_ = nullptr;
  lv_obj_t* notification_label_ = nullptr;
  lv_obj_t* status_label_ = nullptr;
  lv_obj_t* mute_label_ = nullptr;
};

// ============================================================
//  DisplayLcd — LCD (ST7789, SPI, 彩色) 版本
// ============================================================
class DisplayLcd : public Display {
 public:
  DisplayLcd(esp_lcd_panel_io_handle_t panel_io,
          esp_lcd_panel_handle_t panel,
          int width,
          int height,
          int offset_x,
          int offset_y,
          bool mirror_x,
          bool mirror_y,
          bool swap_xy);
  ~DisplayLcd() override;
  void Start() override;
  void SetChatMessage(const Role role, const std::string& content) override;
  void ShowStatus(const char* status) override;
  void SetEmotion(const std::string& emotion) override;

 private:
  struct ThemeColors {
    lv_color_t background;
    lv_color_t text;
    lv_color_t chat_background;
    lv_color_t user_bubble;
    lv_color_t assistant_bubble;
    lv_color_t system_bubble;
    lv_color_t system_text;
    lv_color_t border;
    lv_color_t low_battery;
  };
  ThemeColors current_theme_;
};

// ============================================================
//  DisplayOled — OLED (SSD1306, I2C, 单色) 版本
// ============================================================
class DisplayOled : public Display {
 public:
  DisplayOled(esp_lcd_panel_io_handle_t panel_io,
          esp_lcd_panel_handle_t panel,
          int width,
          int height,
          bool mirror_x,
          bool mirror_y);
  ~DisplayOled() override;
  void Start() override;

  // 无角色版本（OLED 主要使用）
  void SetChatMessage(const std::string& content) override;

  // 带 Role 的兼容重载
  void SetChatMessage(const Role role, const std::string& content) override {
    std::string prefix;
    switch (role) {
      case Role::kSystem:    prefix = ""; break;
      case Role::kAssistant: prefix = ""; break;
      case Role::kUser:      prefix = ""; break;
    }
    SetChatMessage(prefix + content);
  }

  void ShowStatus(const char* status) override;
  void SetEmotion(const std::string& emotion) override;
};

#endif  // _DISPLAY_H_
