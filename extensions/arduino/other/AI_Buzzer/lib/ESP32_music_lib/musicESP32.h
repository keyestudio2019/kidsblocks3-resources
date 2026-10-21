#ifndef _MUSIC_H_
#define _MUSIC_H_

#include <Arduino.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

// 由插件生成代码定义。停止积木将其置为 true，音乐播放器会在下一次
// 状态更新时立即停止当前旋律。
extern volatile bool aiBuzzerStopRequested;

// ESP32 Arduino 核心原生 LEDC 蜂鸣器控制，不依赖 ESP32Tone。
void aiBuzzerTone(uint8_t pin, uint32_t frequency, uint32_t duration = 0);
void aiBuzzerNoTone(uint8_t pin);

class music {
public:
    explicit music(uint8_t pin);

    // 非阻塞接口：只设置播放状态，旋律由后台状态任务按 millis() 推进。
    void start(uint8_t melodyId);
    void update();
    void stop();
    bool isPlaying() const;

    // 保留原有方法名以兼容已有项目；所有方法均改为非阻塞启动。
    void birthday();
    void tetris();
    void Ode_to_Joy();
    void christmas();
    void super_mario();
    void star_war_tone();

private:
    enum MelodyId : uint8_t {
        BIRTHDAY = 0,
        TETRIS = 1,
        ODE_TO_JOY = 2,
        CHRISTMAS = 3,
        SUPER_MARIO = 4,
        STAR_WAR = 5
    };

    static void taskRunner(void *parameter);
    void ensureTask();
    bool readNextNote(int &note, uint32_t &durationMs);

    uint8_t buzzer_pin;
    volatile bool playing;
    uint8_t currentMelody;
    uint16_t noteIndex;
    uint32_t nextNoteAt;
    TaskHandle_t taskHandle;
};

#endif
