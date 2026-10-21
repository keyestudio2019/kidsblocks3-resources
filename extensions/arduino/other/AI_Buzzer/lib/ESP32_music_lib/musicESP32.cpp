#include "musicESP32.h"
#include "array.h"

#include <freertos/FreeRTOS.h>
#include <freertos/task.h>

// ESP32 Arduino 核心原生 LEDC 蜂鸣器控制。duration 为 0 时只开始发声，
// 不等待；这让音乐状态机可以由 millis() 在后台切换音符。
void aiBuzzerTone(uint8_t pin, uint32_t frequency, uint32_t duration)
{
    if (!ledcAttach(pin, frequency, 8)) {
        return;
    }
    ledcWriteTone(pin, frequency);
    if (duration) {
        delay(duration);
        ledcWriteTone(pin, 0);
        ledcDetach(pin);
    }
}

void aiBuzzerNoTone(uint8_t pin)
{
    ledcWriteTone(pin, 0);
    ledcDetach(pin);
}

namespace {
const int birthdayNotes[] = {
    294, 440, 392, 532, 494, 392, 440, 392, 587, 532, 392,
    784, 659, 532, 494, 440, 698, 659, 532, 587, 532
};
const uint16_t birthdayDurations[] = {
    325, 325, 325, 325, 325, 325, 325, 325, 325, 325, 325,
    325, 325, 325, 325, 325, 325, 325, 325, 325, 650
};

const int starWarNotes[] = {
    NOTE_A4, NOTE_A4, NOTE_A4, NOTE_F4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_C5, NOTE_A4,
    REST,
    NOTE_E5, NOTE_E5, NOTE_E5, NOTE_F5, NOTE_C5, NOTE_GS4, NOTE_F4, NOTE_C5, NOTE_A4,
    REST,
    NOTE_A5, NOTE_A4, NOTE_A4, NOTE_A5, NOTE_GS5, NOTE_G5, NOTE_FS5, NOTE_F5, NOTE_FS5,
    REST,
    NOTE_AE4, NOTE_DS5, NOTE_D5, NOTE_CS5, NOTE_C5, NOTE_AS4, NOTE_C5,
    NOTE_F4, NOTE_GS4, NOTE_F4, NOTE_A4, NOTE_C5, NOTE_A4, NOTE_C5, NOTE_E5,
    REST,
    NOTE_A5, NOTE_A4, NOTE_A4, NOTE_A5, NOTE_GS5, NOTE_G5, NOTE_FS5, NOTE_F5, NOTE_FS5,
    REST,
    NOTE_AE4, NOTE_DS5, NOTE_D5, NOTE_CS5, NOTE_C5, NOTE_AS4, NOTE_C5,
    NOTE_F4, NOTE_GS4, NOTE_F4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_C5, NOTE_A4
};
const uint16_t starWarDurations[] = {
    500, 500, 500, 350, 150, 500, 350, 150, 650,
    500,
    500, 500, 500, 350, 150, 500, 350, 150, 650,
    500,
    500, 300, 150, 500, 325, 175, 125, 125, 250,
    325,
    250, 500, 325, 175, 125, 125, 250,
    250, 500, 350, 125, 500, 375, 125, 650,
    500,
    500, 300, 150, 500, 325, 175, 125, 125, 250,
    325,
    250, 500, 325, 175, 125, 125, 250,
    250, 500, 375, 125, 500, 375, 125, 650
};

const uint16_t countOfBirthday = sizeof(birthdayNotes) / sizeof(birthdayNotes[0]);
const uint16_t countOfStarWar = sizeof(starWarNotes) / sizeof(starWarNotes[0]);
const uint16_t countOfTetris = sizeof(melody) / sizeof(melody[0]) / 2;
const uint16_t countOfOde = sizeof(tune) / sizeof(tune[0]);
const uint16_t countOfChristmas = sizeof(tune_christmas) / sizeof(tune_christmas[0]);
const uint16_t countOfMarioMain = sizeof(melody_mario) / sizeof(melody_mario[0]);
const uint16_t countOfMarioUnderworld = sizeof(underworld_melody_mario) / sizeof(underworld_melody_mario[0]);
}

music::music(uint8_t pin) :
    buzzer_pin(pin),
    playing(false),
    currentMelody(BIRTHDAY),
    noteIndex(0),
    nextNoteAt(0),
    taskHandle(nullptr)
{
}

void music::ensureTask()
{
    if (taskHandle == nullptr) {
        xTaskCreate(taskRunner, "AI_BuzzerMusic", 4096, this, 1, &taskHandle);
    }
}

void music::taskRunner(void *parameter)
{
    music *player = static_cast<music *>(parameter);
    for (;;) {
        player->update();
        vTaskDelay(pdMS_TO_TICKS(2));
    }
}

void music::start(uint8_t melodyId)
{
    stop();
    currentMelody = melodyId <= STAR_WAR ? melodyId : BIRTHDAY;
    noteIndex = 0;
    nextNoteAt = millis();
    aiBuzzerStopRequested = false;
    playing = true;
    ensureTask();
}

void music::stop()
{
    playing = false;
    aiBuzzerNoTone(buzzer_pin);
    aiBuzzerStopRequested = false;
}

bool music::isPlaying() const
{
    return playing;
}

void music::update()
{
    if (!playing) {
        return;
    }

    if (aiBuzzerStopRequested) {
        stop();
        return;
    }

    const uint32_t now = millis();
    if (static_cast<int32_t>(now - nextNoteAt) < 0) {
        return;
    }

    aiBuzzerNoTone(buzzer_pin);

    int note = REST;
    uint32_t durationMs = 0;
    if (!readNextNote(note, durationMs)) {
        stop();
        return;
    }

    if (note > REST) {
        aiBuzzerTone(buzzer_pin, static_cast<uint32_t>(note));
    }
    nextNoteAt = now + (durationMs == 0 ? 1 : durationMs);
}

bool music::readNextNote(int &note, uint32_t &durationMs)
{
    switch (currentMelody) {
    case BIRTHDAY:
        if (noteIndex >= countOfBirthday) return false;
        note = birthdayNotes[noteIndex];
        durationMs = birthdayDurations[noteIndex++];
        return true;

    case TETRIS: {
        if (noteIndex >= countOfTetris) return false;
        const int divider = melody[noteIndex * 2 + 1];
        note = melody[noteIndex * 2];
        ++noteIndex;
        const uint32_t wholeNote = (60000UL * 4UL) / 144UL;
        durationMs = divider > 0 ? wholeNote / divider : (wholeNote * 3UL) / (2UL * static_cast<uint32_t>(-divider));
        return true;
    }

    case ODE_TO_JOY:
        if (noteIndex >= countOfOde) return false;
        note = tune[noteIndex];
        durationMs = static_cast<uint32_t>(300.0f * durt[noteIndex++]);
        return true;

    case CHRISTMAS:
        if (noteIndex >= countOfChristmas) return false;
        note = tune_christmas[noteIndex];
        durationMs = static_cast<uint32_t>(300.0f * durt_christmas[noteIndex++]);
        return true;

    case SUPER_MARIO:
        if (noteIndex < countOfMarioMain * 2U) {
            const uint16_t index = noteIndex % countOfMarioMain;
            note = melody_mario[index];
            durationMs = static_cast<uint32_t>((1000UL / tempo_mario[index]) * 13UL / 10UL);
            ++noteIndex;
            return true;
        }
        if (noteIndex < countOfMarioMain * 2U + countOfMarioUnderworld) {
            const uint16_t index = noteIndex - countOfMarioMain * 2U;
            note = underworld_melody_mario[index];
            durationMs = static_cast<uint32_t>((1000UL / underworld_tempo_mario[index]) * 13UL / 10UL);
            ++noteIndex;
            return true;
        }
        return false;

    case STAR_WAR:
        if (noteIndex >= countOfStarWar) return false;
        note = starWarNotes[noteIndex];
        durationMs = starWarDurations[noteIndex++];
        return true;

    default:
        return false;
    }
}

void music::birthday() { start(BIRTHDAY); }
void music::tetris() { start(TETRIS); }
void music::Ode_to_Joy() { start(ODE_TO_JOY); }
void music::christmas() { start(CHRISTMAS); }
void music::super_mario() { start(SUPER_MARIO); }
void music::star_war_tone() { start(STAR_WAR); }
