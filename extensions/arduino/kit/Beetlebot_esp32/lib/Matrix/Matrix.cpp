#include "Matrix.h"

// ---------------------------------------------------------------
// ESP32 Arduino Core 3.x 兼容版本
// 原始版本使用软件模拟 I2C（IICbegin/IICstart/IICwrite/IICstop）
// 在 ESP32 Core 3.x 下会触发 StoreProhibited/LoadProhibited 崩溃
// 本版本参考 HT16K33_For_ESP32 的做法，改用硬件 Wire 库
// ---------------------------------------------------------------

Matrix::Matrix(uint8_t sda_port, uint8_t scl_port)
{
  SDA_pin = sda_port;
  SCL_pin = scl_port;
}

void Matrix::setBrightness(uint8_t b) {
  if (b > 15) b = 15;
  Wire.beginTransmission(i2c_addr);
  Wire.write(0xE0 | b);
  Wire.endTransmission();
}

void Matrix::blinkRate(uint8_t b) {
  if (b > 3) b = 0;
  Wire.beginTransmission(i2c_addr);
  Wire.write(HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | (b << 1));
  Wire.endTransmission();
}

void Matrix::begin(uint8_t _addr) {
  constructor(8, 8);
  i2c_addr = _addr;  // 直接使用 7 位地址（如 0x70），不需要左移

  // 参考 HT16K33_For_ESP32：直接 Wire.begin(sda, scl)，一步到位
  Wire.begin(SDA_pin, SCL_pin);

  // 开启 HT16K33 振荡器
  Wire.beginTransmission(i2c_addr);
  Wire.write(0x21);
  Wire.endTransmission();

  blinkRate(HT16K33_BLINK_OFF);
  setBrightness(15);
}

void Matrix::write(void) {
  Wire.beginTransmission(i2c_addr);
  Wire.write((uint8_t)0x00); // 从地址 0x00 开始写
  for (uint8_t i = 0; i < 8; i++) {
    Wire.write(displaybuffer[i] & 0xFF);
    Wire.write(displaybuffer[i] >> 8);
  }
  Wire.endTransmission();
}

void Matrix::clear(void) {
  for (uint8_t i = 0; i < 8; i++) {
    displaybuffer[i] = 0;
  }
}

void Matrix::fillScreen(uint16_t color) {
  fillRect(0, 0, _width, _height, color);
}

void Matrix::drawPixel(int16_t x, int16_t y, uint16_t color) {
  if ((y < 0) || (y >= 8)) return;
  if ((x < 0) || (x >= 8)) return;

  switch (getRotation()) {
    case 1:
      matrix_swap(x, y);
      x = 8 - x - 1;
      break;
    case 2:
      x = 8 - x - 1;
      y = 8 - y - 1;
      break;
    case 3:
      matrix_swap(x, y);
      y = 8 - y - 1;
      break;
  }

  if (color) {
    displaybuffer[y] |= 1 << x;
  } else {
    displaybuffer[y] &= ~(1 << x) & ~(1 << (x + 8));
  }
}

void Matrix::constructor(int16_t w, int16_t h) {
  _width = WIDTH = w;
  _height = HEIGHT = h;
  rotation = 0;
  cursor_y = cursor_x = 0;
  textsize = 1;
  textcolor = textbgcolor = 0xFFFF;
  wrap = true;
}

void Matrix::drawCircle(int16_t x0, int16_t y0, int16_t r, uint16_t color) {
  int16_t f = 1 - r;
  int16_t ddF_x = 1;
  int16_t ddF_y = -2 * r;
  int16_t x = 0;
  int16_t y = r;

  drawPixel(x0, y0 + r, color);
  drawPixel(x0, y0 - r, color);
  drawPixel(x0 + r, y0, color);
  drawPixel(x0 - r, y0, color);

  while (x < y) {
    if (f >= 0) { y--; ddF_y += 2; f += ddF_y; }
    x++; ddF_x += 2; f += ddF_x;
    drawPixel(x0 + x, y0 + y, color);
    drawPixel(x0 - x, y0 + y, color);
    drawPixel(x0 + x, y0 - y, color);
    drawPixel(x0 - x, y0 - y, color);
    drawPixel(x0 + y, y0 + x, color);
    drawPixel(x0 - y, y0 + x, color);
    drawPixel(x0 + y, y0 - x, color);
    drawPixel(x0 - y, y0 - x, color);
  }
}

void Matrix::drawCircleHelper(int16_t x0, int16_t y0, int16_t r, uint8_t cornername, uint16_t color) {
  int16_t f = 1 - r, ddF_x = 1, ddF_y = -2 * r, x = 0, y = r;
  while (x < y) {
    if (f >= 0) { y--; ddF_y += 2; f += ddF_y; }
    x++; ddF_x += 2; f += ddF_x;
    if (cornername & 0x4) { drawPixel(x0 + x, y0 + y, color); drawPixel(x0 + y, y0 + x, color); }
    if (cornername & 0x2) { drawPixel(x0 + x, y0 - y, color); drawPixel(x0 + y, y0 - x, color); }
    if (cornername & 0x8) { drawPixel(x0 - y, y0 + x, color); drawPixel(x0 - x, y0 + y, color); }
    if (cornername & 0x1) { drawPixel(x0 - y, y0 - x, color); drawPixel(x0 - x, y0 - y, color); }
  }
}

void Matrix::fillCircle(int16_t x0, int16_t y0, int16_t r, uint16_t color) {
  drawFastVLine(x0, y0 - r, 2 * r + 1, color);
  fillCircleHelper(x0, y0, r, 3, 0, color);
}

void Matrix::fillCircleHelper(int16_t x0, int16_t y0, int16_t r, uint8_t cornername, int16_t delta, uint16_t color) {
  int16_t f = 1 - r, ddF_x = 1, ddF_y = -2 * r, x = 0, y = r;
  while (x < y) {
    if (f >= 0) { y--; ddF_y += 2; f += ddF_y; }
    x++; ddF_x += 2; f += ddF_x;
    if (cornername & 0x1) { drawFastVLine(x0 + x, y0 - y, 2 * y + 1 + delta, color); drawFastVLine(x0 + y, y0 - x, 2 * x + 1 + delta, color); }
    if (cornername & 0x2) { drawFastVLine(x0 - x, y0 - y, 2 * y + 1 + delta, color); drawFastVLine(x0 - y, y0 - x, 2 * x + 1 + delta, color); }
  }
}

void Matrix::drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color) {
  int16_t steep = abs(y1 - y0) > abs(x1 - x0);
  if (steep) { matrix_swap(x0, y0); matrix_swap(x1, y1); }
  if (x0 > x1) { matrix_swap(x0, x1); matrix_swap(y0, y1); }
  int16_t dx = x1 - x0, dy = abs(y1 - y0), err = dx / 2, ystep = (y0 < y1) ? 1 : -1;
  for (; x0 <= x1; x0++) {
    if (steep) drawPixel(y0, x0, color); else drawPixel(x0, y0, color);
    err -= dy;
    if (err < 0) { y0 += ystep; err += dx; }
  }
}

void Matrix::drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color) {
  drawFastHLine(x, y, w, color);
  drawFastHLine(x, y + h - 1, w, color);
  drawFastVLine(x, y, h, color);
  drawFastVLine(x + w - 1, y, h, color);
}

void Matrix::drawFastVLine(int16_t x, int16_t y, int16_t h, uint16_t color) {
  drawLine(x, y, x, y + h - 1, color);
}

void Matrix::drawFastHLine(int16_t x, int16_t y, int16_t w, uint16_t color) {
  drawLine(x, y, x + w - 1, y, color);
}

void Matrix::fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color) {
  for (int16_t i = x; i < x + w; i++) drawFastVLine(i, y, h, color);
}

void Matrix::write(uint16_t color) {
  fillRect(0, 0, _width, _height, color);
}

void Matrix::drawRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, uint16_t color) {
  drawFastHLine(x + r, y, w - 2 * r, color);
  drawFastHLine(x + r, y + h - 1, w - 2 * r, color);
  drawFastVLine(x, y + r, h - 2 * r, color);
  drawFastVLine(x + w - 1, y + r, h - 2 * r, color);
  drawCircleHelper(x + r, y + r, r, 1, color);
  drawCircleHelper(x + w - r - 1, y + r, r, 2, color);
  drawCircleHelper(x + w - r - 1, y + h - r - 1, r, 4, color);
  drawCircleHelper(x + r, y + h - r - 1, r, 8, color);
}

void Matrix::fillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, uint16_t color) {
  fillRect(x + r, y, w - 2 * r, h, color);
  fillCircleHelper(x + w - r - 1, y + r, r, 1, h - 2 * r - 1, color);
  fillCircleHelper(x + r, y + r, r, 2, h - 2 * r - 1, color);
}

void Matrix::drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color) {
  drawLine(x0, y0, x1, y1, color);
  drawLine(x1, y1, x2, y2, color);
  drawLine(x2, y2, x0, y0, color);
}

void Matrix::fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color) {
  int16_t a, b, y, last;
  if (y0 > y1) { matrix_swap(y0, y1); matrix_swap(x0, x1); }
  if (y1 > y2) { matrix_swap(y2, y1); matrix_swap(x2, x1); }
  if (y0 > y1) { matrix_swap(y0, y1); matrix_swap(x0, x1); }
  if (y0 == y2) {
    a = b = x0;
    if (x1 < a) a = x1; else if (x1 > b) b = x1;
    if (x2 < a) a = x2; else if (x2 > b) b = x2;
    drawFastHLine(a, y0, b - a + 1, color);
    return;
  }
  int16_t dx01 = x1 - x0, dy01 = y1 - y0, dx02 = x2 - x0, dy02 = y2 - y0;
  int16_t dx12 = x2 - x1, dy12 = y2 - y1, sa = 0, sb = 0;
  last = (y1 == y2) ? y1 : y1 - 1;
  for (y = y0; y <= last; y++) {
    a = x0 + sa / dy01; b = x0 + sb / dy02; sa += dx01; sb += dx02;
    if (a > b) matrix_swap(a, b);
    drawFastHLine(a, y, b - a + 1, color);
  }
  sa = dx12 * (y - y1); sb = dx02 * (y - y0);
  for (; y <= y2; y++) {
    a = x1 + sa / dy12; b = x0 + sb / dy02; sa += dx12; sb += dx02;
    if (a > b) matrix_swap(a, b);
    drawFastHLine(a, y, b - a + 1, color);
  }
}

// 修复：int8_t x 改为 int16_t x，避免字符串较长时溢出死循环
void Matrix::scrollMessage(String s, int displayScrollSpeed) {
  int a = s.length();
  setTextSize(1);
  setTextWrap(false);
  setTextColor(MATRIX_LED_ON);
  for (int16_t x = 7; x >= -a * 6; x--) {
    clear();
    setCursor(x, 0);
    print(s);
    write();
    delay(displayScrollSpeed);
  }
}

void Matrix::scrollMessage(int num, int displayScrollSpeed) {
  String s = String("") + num;
  scrollMessage(s, displayScrollSpeed);
}

void Matrix::scrollMessage(float num, int displayScrollSpeed) {
  String s = String("") + num;
  scrollMessage(s, displayScrollSpeed);
}

size_t Matrix::write(uint8_t c) {
  if (c == '\n') {
    cursor_y += textsize * 8;
    cursor_x = 0;
  } else if (c == '\r') {
    // skip
  } else {
    drawChar(cursor_x, cursor_y, c, textcolor, textbgcolor, textsize);
    cursor_x += textsize * 6;
    if (wrap && (cursor_x > (_width - textsize * 6))) {
      cursor_y += textsize * 8;
      cursor_x = 0;
    }
  }
  return 1;
}

void Matrix::drawChar(int16_t x, int16_t y, unsigned char c, uint16_t color, uint16_t bg, uint8_t size) {
  if ((x >= _width) || (y >= _height) || ((x + 5 * size - 1) < 0) || ((y + 8 * size - 1) < 0)) return;
  for (int8_t i = 0; i < 6; i++) {
    // 修复：使用标准 pgm_read_byte(&font[...]) 写法，兼容 ESP32 Core 3.x
    uint8_t line = (i == 5) ? 0x0 : pgm_read_byte(&font[(c * 5) + i]);
    for (int8_t j = 7; j >= 0; j--) {
      if (line & 0x1) {
        if (size == 1) drawPixel(x + i, y + j, color);
        else fillRect(x + (i * size), y + (j * size), size, size, color);
      } else if (bg != color) {
        if (size == 1) drawPixel(x + i, y + j, bg);
        else fillRect(x + i * size, y + j * size, size, size, bg);
      }
      line >>= 1;
    }
  }
}

void Matrix::setCursor(int16_t x, int16_t y) { cursor_x = x; cursor_y = y; }
void Matrix::setTextSize(uint8_t s) { textsize = (s > 0) ? s : 1; }
void Matrix::setTextColor(uint16_t c) { textcolor = textbgcolor = c; }
void Matrix::setTextColor(uint16_t c, uint16_t b) { textcolor = c; textbgcolor = b; }
void Matrix::setTextWrap(boolean w) { wrap = w; }
uint8_t Matrix::getRotation(void) { rotation %= 4; return rotation; }

void Matrix::setRotation(uint8_t x) {
  x %= 4;
  rotation = x;
  switch (x) {
    case 0: case 2: _width = WIDTH; _height = HEIGHT; break;
    case 1: case 3: _width = HEIGHT; _height = WIDTH; break;
  }
}

void Matrix::invertDisplay(boolean i) {}
int16_t Matrix::width(void) { return _width; }
int16_t Matrix::height(void) { return _height; }
