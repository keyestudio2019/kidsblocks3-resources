#pragma once

#ifndef _DISPLAY_H_
#define _DISPLAY_H_

#include <esp_lcd_panel_ops.h>

#include <string>

struct lv_display_t;
struct lv_obj_t;

class Display {
 public:
  Display(esp_lcd_panel_io_handle_t panel_io, esp_lcd_panel_handle_t panel, int width, int height, bool mirror_x, bool mirror_y);
  ~Display();
  void Start();

  // 已有：无角色版本（保留）
  void SetChatMessage(std::string content);

  void ShowStatus(const char* status);
  void SetEmotion(const std::string& emotion);

  // 新增：角色枚举
  enum class Role { kSystem, kAssistant, kUser };

  // 新增：带 Role 的兼容重载（内联实现，直接复用已有无角色版本）
  inline void SetChatMessage(Role role, const char* text) {
    std::string line = RolePrefix(role);
    if (text) line += text;
    SetChatMessage(std::move(line));  // 复用无角色版本
  }

  inline void SetChatMessage(Role role, const std::string& text) {
    std::string line = RolePrefix(role) + text;
    SetChatMessage(std::move(line));  // 复用无角色版本
  }

 private:
  // 新增：角色前缀工具（内联）
  static inline const char* RolePrefix(Role role) {
    switch (role) {
      case Role::kSystem:    return "System: ";
      case Role::kAssistant: return "Assistant: ";
      case Role::kUser:      return "User: ";
    }
    return "";
  }

 private:
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

#endif