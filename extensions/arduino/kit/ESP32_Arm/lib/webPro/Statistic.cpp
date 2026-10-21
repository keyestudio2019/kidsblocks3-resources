#include "Statistic.h"

Statistic::Statistic(ESPDash *dashboard, const char *key, const char *value) {
    _dashboard = dashboard;
    #if defined(ESP8266)
        _id = RANDOM_REG32;
    #elif defined(ESP32)
        _id = esp_random();
    #endif
    strncpy(_key, key, sizeof(_key) - 1);
    _key[sizeof(_key) - 1] = '\0';
    strncpy(_value, value, sizeof(_value) - 1);
    _value[sizeof(_value) - 1] = '\0';
    _dashboard->add(this);
}

void Statistic::set(const char *key, const char *value) {
    strncpy(_key, key, sizeof(_key) - 1);
    _key[sizeof(_key) - 1] = '\0';
    strncpy(_value, value, sizeof(_value) - 1);
    _value[sizeof(_value) - 1] = '\0';
    _changed = true;
}

Statistic::~Statistic() {
    _dashboard->remove(this);
}
