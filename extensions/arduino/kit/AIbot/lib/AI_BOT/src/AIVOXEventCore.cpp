#include "AIVOXEventCore.h"

void AIVOXEventCore::update(Gobserver g_observer){
	// auto& engine = ai_vox::Engine::GetInstance();
	const auto events = g_observer->PopEvents();
	for (auto& event : events) {
		handleEvents(event);
	}
}

void AIVOXEventCore::handleEvents(const ai_vox::Event& event) {
  if (auto text_received_event = std::get_if<ai_vox::TextReceivedEvent>(&event)) {
        // 文本接收事件处理
        printf("Text received: %s\n", text_received_event->content.c_str());
    } else if (auto activation_event = std::get_if<ai_vox::ActivationEvent>(&event)) {
        if (activation_callback_) {
            activation_callback_(activation_event->code, activation_event->message);
        }
    } else if (auto state_changed_event = std::get_if<ai_vox::StateChangedEvent>(&event)) {
        if (state_idle_callback_) {
            state_idle_callback_(state_changed_event->new_state);
        }
        if(state_initted_callback_) {
            state_initted_callback_(state_changed_event->new_state);
        }
        if(state_loading_callback_) {
            state_loading_callback_(state_changed_event->new_state);
        }
        if(state_loadingFailed_callback_) {
            state_loadingFailed_callback_(state_changed_event->new_state);
        }    
        if(state_standby_callback_) {
            state_standby_callback_(state_changed_event->new_state);
        }  
        if(state_connecting_callback_) {
            state_connecting_callback_(state_changed_event->new_state);
        }  
        if(state_listening_callback_) {
            state_listening_callback_(state_changed_event->new_state);
        } 
        if(state_speaking_callback_) {
            state_speaking_callback_(state_changed_event->new_state);
        } 
    } else if (auto emotion_event = std::get_if<ai_vox::EmotionEvent>(&event)) {
        if (emotion_callback_) {
            emotion_callback_(emotion_event->emotion);
        }
    } else if (auto chat_message_event = std::get_if<ai_vox::ChatMessageEvent>(&event)) {
        if (chat_callback_) {
            std::string role = (chat_message_event->role == ai_vox::ChatRole::kAssistant) ? "assistant" : "user";
            chat_callback_(role, chat_message_event->content);
        }
    } else if (auto mcp_tool_call_event = std::get_if<ai_vox::McpToolCallEvent>(&event)) {
        if (mcp_callback_) {
            mcp_callback_(mcp_tool_call_event->id, mcp_tool_call_event->name, mcp_tool_call_event->params);
        }
    }
}

void AIVOXEventCore::onEmotion(EmotionCallback callback) {
    emotion_callback_ = callback;
}

void AIVOXEventCore::onChatMessage(ChatMessageCallback callback) {
    chat_callback_ = callback;
}

void AIVOXEventCore::onMcpToolCall(McpToolCallback callback) {
    mcp_callback_ = callback;
}

void AIVOXEventCore::onActivation(ActivationCallback callback) {
    activation_callback_ = callback;
}

void AIVOXEventCore::onStateIdle(StateChangeCallback callback) {
    state_idle_callback_ = callback;
}

void AIVOXEventCore::onStateInitted(StateChangeCallback callback) {
    state_initted_callback_ = callback;
}

void AIVOXEventCore::onStateLoading(StateChangeCallback callback) {
    state_loading_callback_ = callback;
}

void AIVOXEventCore::onStateLoadingFailed(StateChangeCallback callback) {
    state_loadingFailed_callback_ = callback;
}

void AIVOXEventCore::onStateStandby(StateChangeCallback callback) {
    state_standby_callback_ = callback;
}

void AIVOXEventCore::onStateConnecting(StateChangeCallback callback) {
    state_connecting_callback_ = callback;
}

void AIVOXEventCore::onStateListening(StateChangeCallback callback) {
    state_listening_callback_ = callback;
}

void AIVOXEventCore::onStateSpeaking(StateChangeCallback callback) {
    state_speaking_callback_ = callback;
}
