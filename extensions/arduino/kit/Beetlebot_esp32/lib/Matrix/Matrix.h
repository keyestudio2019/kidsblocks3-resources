#ifndef _MATRIX_H
#define _MATRIX_H

#include "Arduino.h"
#include <Wire.h>
#include "Print.h"
#include "glcdfont.c"

#define MATRIX_LED_ON 2
#define MATRIX_LED_OFF 0

#define HT16K33_BLINK_CMD 0x80
#define HT16K33_BLINK_DISPLAYON 0x01
#define HT16K33_BLINK_OFF 0
#define HT16K33_BLINK_2HZ  1
#define HT16K33_BLINK_1HZ  2
#define HT16K33_BLINK_HALFHZ  3

#define matrix_swap(a, b) { int16_t t = a; a = b; b = t; }

class Matrix : public Print{
public:
  Matrix(uint8_t sda_port, uint8_t scl_port);
  void begin(uint8_t _addr);
  void setBrightness(uint8_t b);
  void blinkRate(uint8_t b);
  void write(void);
  void clear(void);
  void scrollMessage(String s, int displayScrollSpeed);
  void scrollMessage(int num, int displayScrollSpeed);
  void scrollMessage(float num, int displayScrollSpeed);
  uint16_t displaybuffer[8];
  void drawPixel(int16_t x, int16_t y, uint16_t color);
  void init(uint8_t a);
  void constructor(int16_t w, int16_t h);
  void invertDisplay(boolean i);
  void drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);
  void drawFastVLine(int16_t x, int16_t y, int16_t h, uint16_t color);
  void drawFastHLine(int16_t x, int16_t y, int16_t w, uint16_t color);
  void drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);
  void fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);
  void fillScreen(uint16_t color);
  void write(uint16_t color);
  void drawCircle(int16_t x0, int16_t y0, int16_t r, uint16_t color);
  void drawCircleHelper(int16_t x0, int16_t y0, int16_t r, uint8_t cornername, uint16_t color);
  void fillCircle(int16_t x0, int16_t y0, int16_t r, uint16_t color);
  void fillCircleHelper(int16_t x0, int16_t y0, int16_t r, uint8_t cornername, int16_t delta, uint16_t color);
  void drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);
  void fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);
  void drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);
  void fillRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);
  void drawChar(int16_t x, int16_t y, unsigned char c, uint16_t color, uint16_t bg, uint8_t size);
  virtual size_t write(uint8_t);
  void setCursor(int16_t x, int16_t y);
  void setTextColor(uint16_t c);
  void setTextColor(uint16_t c, uint16_t bg);
  void setTextSize(uint8_t s);
  void setTextWrap(boolean w);
  int16_t height(void);
  int16_t width(void);
  void setRotation(uint8_t r);
  uint8_t getRotation(void);
  uint8_t SCL_pin, SDA_pin;
protected:
  int16_t  WIDTH, HEIGHT;
  int16_t  _width, _height;
  int16_t  cursor_x, cursor_y;
  uint16_t textcolor, textbgcolor;
  uint8_t  textsize;
  uint8_t  rotation;
  boolean  wrap;
private:
  uint8_t i2c_addr;
  // 注意：原始软件 I2C 方法（IICbegin/IICstart/IICwrite/IICstop）
  // 已全部移除，改用硬件 Wire 库，兼容 ESP32 Arduino Core 3.x
};

#endif
