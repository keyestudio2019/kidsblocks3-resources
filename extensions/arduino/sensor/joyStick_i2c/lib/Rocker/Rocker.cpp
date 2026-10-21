#include "Rocker.h"

void ROCKER::begin(uint8_t address, TwoWire &wirePort) {
  delay(5);
  _address = address;
  _i2cPort = &wirePort;
  _i2cPort->begin();
}

void ROCKER::IIC_Write_Byte(uint8_t reg, uint8_t data) {
  _i2cPort->beginTransmission(_address);
  _i2cPort->write(reg);
  _i2cPort->write(data);
  _i2cPort->endTransmission();
}

void ROCKER::IIC_Read_Byte(uint8_t reg, uint8_t *buf, uint8_t length) {
  uint8_t i = 0;
  _i2cPort->beginTransmission(_address);
  _i2cPort->write(reg);
  _i2cPort->endTransmission(false);
  _i2cPort->requestFrom(_address, length);

  while (_i2cPort->available() && i < length) {
    *buf++ = _i2cPort->read();
    i++;
  }
}

void ROCKER::_dataConversion(uint8_t dataHigh, uint8_t dataLow, uint16_t *result) {
  *result = (static_cast<uint16_t>(dataLow >> 6) |
             (static_cast<uint16_t>(dataHigh) << 2)) & 0x03FF;
}

void ROCKER::measure(void) {
  B = readB();
  X = readX();
  Y = readY();
}

int ROCKER::readB(void) {
  uint8_t value = 0;
  IIC_Read_Byte(BTN, &value, 1);
  B = value;
  return B;
}

uint16_t ROCKER::readX(void) {
  uint8_t high = 0;
  uint8_t low = 0;
  IIC_Read_Byte(ADC1_H, &high, 1);
  IIC_Read_Byte(ADC1_L, &low, 1);
  _dataConversion(high, low, &X);
  delay(5);
  return X;
}

uint16_t ROCKER::readY(void) {
  uint8_t high = 0;
  uint8_t low = 0;
  IIC_Read_Byte(ADC2_H, &high, 1);
  IIC_Read_Byte(ADC2_L, &low, 1);
  _dataConversion(high, low, &Y);
  delay(5);
  return Y;
}
