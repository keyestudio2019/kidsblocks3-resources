#ifndef AI_VOX_EVENT_CORE_H
#define AI_VOX_EVENT_CORE_H

#include <WiFi.h>
#include <memory>
#include <string>
#include <vector>
#include <map>
#include <functional>
#include "ai_vox_engine.h"

#include <WiFi.h>
#include <driver/spi_common.h>
#include <esp_heap_caps.h>
#include "components/wifi_configurator/wifi_configurator.h"

#include "ai_vox_engine.h"

#include <driver/i2c_master.h>

#include "components/espressif/esp_audio_codec/esp_audio_simple_dec.h"
#include "audio_device/audio_device_es8311.h"

#include <esp_lcd_panel_io.h>
#include <esp_lcd_panel_ops.h>
#include <esp_lcd_panel_vendor.h>
#include "display.h"
#include "components/espressif/button/button_gpio.h"
#include "components/espressif/button/iot_button.h"


class AIVOXEventCore {
public:
    using ChatState = ai_vox::ChatState;
    using Gobserver = std::shared_ptr<ai_vox::Observer>;
    using StateChangeCallback = std::function<void(ChatState new_state)>;
    using ActivationCallback = std::function<void(const std::string& code, const std::string& message)>;
    using EmotionCallback = std::function<void(const std::string& emotion)>;
    using ChatMessageCallback = std::function<void(const std::string& role, const std::string& content)>;
    using McpToolCallback = std::function<void(const std::int64_t& id, const std::string& name,
                                               const std::map<std::string, std::variant<std::string, int64_t, bool>>& param)>;

    // ~AIVOXCore();
    void update(Gobserver g_observer);

    // 回调设置
    void onStateIdle(StateChangeCallback callback);
    void onStateInitted(StateChangeCallback callback);
    void onStateLoading(StateChangeCallback callback);
    void onStateLoadingFailed(StateChangeCallback callback);
    void onStateStandby(StateChangeCallback callback);
    void onStateConnecting(StateChangeCallback callback);
    void onStateListening(StateChangeCallback callback);
    void onStateSpeaking(StateChangeCallback callback);

    void onEmotion(EmotionCallback callback);
    void onChatMessage(ChatMessageCallback callback);
    void onMcpToolCall(McpToolCallback callback);
    void onActivation(ActivationCallback callback);

private:
    void handleEvents(const ai_vox::Event& event);

    
    EmotionCallback emotion_callback_;
    ChatMessageCallback chat_callback_;
    McpToolCallback mcp_callback_;
    ActivationCallback activation_callback_;

    StateChangeCallback state_idle_callback_;
    StateChangeCallback state_initted_callback_;
    StateChangeCallback state_loading_callback_;
    StateChangeCallback state_loadingFailed_callback_;
    StateChangeCallback state_standby_callback_;
    StateChangeCallback state_connecting_callback_;
    StateChangeCallback state_listening_callback_;
    StateChangeCallback state_speaking_callback_;

};

#endif // AI_VOX_CORE_H