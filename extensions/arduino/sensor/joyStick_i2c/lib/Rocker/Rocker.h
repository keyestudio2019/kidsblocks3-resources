#ifndef ROCKER_H
#define ROCKER_H

#include <Arduino.h>
#include <Wire.h>

#define I2C_ADDR 0x39

#define BTN    0x31  // Button state
#define ADC1_H 0x32  // X-axis: high byte of left-aligned 10-bit ADC data
#define ADC1_L 0x33  // X-axis: bits 7:6 contain low ADC bits
#define ADC2_H 0x34  // Y-axis: high byte of left-aligned 10-bit ADC data
#define ADC2_L 0x35  // Y-axis: bits 7:6 contain low ADC bits

class ROCKER {
  private:
    uint8_t _address;
    TwoWire *_i2cPort;

    void IIC_Write_Byte(uint8_t reg, uint8_t data);
    void IIC_Read_Byte(uint8_t reg, uint8_t *buf, uint8_t length);
    void _dataConversion(uint8_t dataHigh, uint8_t dataLow, uint16_t *result);

  public:
    uint16_t X;
    uint16_t Y;
    int B;

    void begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    void measure(void);
    int readB(void);
    uint16_t readX(void);
    uint16_t readY(void);
};

#endif
