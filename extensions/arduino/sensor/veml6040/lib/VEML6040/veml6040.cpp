#include "Wire.h"
#ifndef __MATH_H
#include <math.h>
#endif
#include "veml6040.h"


VEML6040::VEML6040(void) {
  
}

bool VEML6040::begin(void) {
  bool sensorExists;
  Wire.begin();
  Wire.beginTransmission(VEML6040_I2C_ADDRESS);
  if (Wire.endTransmission() == 0) {
    sensorExists = true;
  }
  return sensorExists;
}

void VEML6040::setConfiguration(uint8_t configuration) {
  Wire.beginTransmission(VEML6040_I2C_ADDRESS);  
  Wire.write(COMMAND_CODE_CONF); 
  Wire.write(configuration); 
  Wire.write(0);
  Wire.endTransmission(); 
  lastConfiguration = configuration;
}

uint16_t VEML6040::read(uint8_t commandCode) {
  uint16_t data = 0; 
  
  Wire.beginTransmission(VEML6040_I2C_ADDRESS);
  Wire.write(commandCode);
  Wire.endTransmission(false);
  Wire.requestFrom(VEML6040_I2C_ADDRESS,2);
  while(Wire.available()) 
  {
    data = Wire.read(); 
    data |= Wire.read() << 8;
  }
  
  return data; 
}

uint16_t VEML6040::getRed(void) {
  return(read(COMMAND_CODE_RED));
}

uint16_t VEML6040::getGreen(void) {
  return(read(COMMAND_CODE_GREEN));
}

uint16_t VEML6040::getBlue(void) {
  return(read(COMMAND_CODE_BLUE));
}

uint16_t VEML6040::getWhite(void) {
  return(read(COMMAND_CODE_WHITE));
}

float VEML6040::getAmbientLight(void) {
  uint16_t sensorValue; 
  float ambientLightInLux;
  
  sensorValue = read(COMMAND_CODE_GREEN);
  
  switch(lastConfiguration & 0x70) {
  
    case VEML6040_IT_40MS:    ambientLightInLux = sensorValue * VEML6040_GSENS_40MS;
                              break;
    case VEML6040_IT_80MS:    ambientLightInLux = sensorValue * VEML6040_GSENS_80MS;
                              break;
    case VEML6040_IT_160MS:   ambientLightInLux = sensorValue * VEML6040_GSENS_160MS;
                              break;
    case VEML6040_IT_320MS:   ambientLightInLux = sensorValue * VEML6040_GSENS_320MS;
                              break;
    case VEML6040_IT_640MS:   ambientLightInLux = sensorValue * VEML6040_GSENS_640MS;
                              break; 
    case VEML6040_IT_1280MS:  ambientLightInLux = sensorValue * VEML6040_GSENS_1280MS; 
                              break;   
    default:                  ambientLightInLux = -1;
                              break;                             
  } 
  return ambientLightInLux;
}

uint16_t VEML6040::getCCT(float offset) {
  uint16_t red,blue,green;
  float cct,ccti;
  
  red = read(COMMAND_CODE_RED);
  green = read(COMMAND_CODE_GREEN);
  blue = read(COMMAND_CODE_BLUE);
  
  ccti = ((float)red-(float)blue) / (float)green;
  ccti = ccti + offset; 
  cct = 4278.6 * pow(ccti,-1.2455);
  
  return((uint16_t)cct);
}

void VEML6040::GETRGB888(uint16_t _r,uint16_t _g,uint16_t _b)
{
  float i = 1;
  uint16_t DATA_R,DATA_G,DATA_B;
  DATA_R = _r;
  DATA_G = _g;
  DATA_B = _b; 
  if(DATA_R >= DATA_G && DATA_R >= DATA_B)
  {
    i = DATA_R / 255 + 1;  
  }
  else if(DATA_G >= DATA_R && DATA_G >= DATA_B)
  {
    i = DATA_G / 255 + 1;
  }
  else if(DATA_B >= DATA_G && DATA_B >= DATA_R)
  {
    i = DATA_B / 255 + 1;
  }
  if(0 != i)
  {
    DATA_R = DATA_R / i;
    DATA_G = DATA_G / i;
    DATA_B = DATA_B / i;
  }
//
//  if(DATA_R > 30)
//  {
//    DATA_R = DATA_R - 30;
//  }
//  if(DATA_G > 30)
//  {
//    DATA_G = DATA_G - 30;
//  }
//  if(DATA_B > 30)
//  {
//    DATA_B = DATA_B - 30;
//  }

  DATA_R = DATA_R * 255 / 255;
  DATA_G = DATA_G * 255 / 255;
  DATA_B = DATA_B * 255 / 255;

  if(DATA_R > 255)
    DATA_R = 255;
  if(DATA_G > 255)
    DATA_G = 255;
  if(DATA_B > 255)
    DATA_B = 255;

  R = DATA_R;
  G = DATA_G;
  B = DATA_B;
}
