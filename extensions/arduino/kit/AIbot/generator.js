function addGenerator(Blockly) {
  
Blockly.Arduino.KS_variables_declare = function() {
    var type = this.getFieldValue('TYPE');
    var VARIABLES_TYPE = this.getFieldValue('variables_type');
    var name = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || ' ';
    name = name.replace(/\"/g, '');
    var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || ' ';
    value = value.replace(/\"/g, '');

    // 将 String 类型映射为 std::string
    var cppType = type;
    if (type === 'String') {
        cppType = 'std::string';
    }

    // 处理空值情况
    if (!value || value.trim() === '') {
        if (type === 'String') {
            value = '';  // 空字符串
        } else if (type === 'boolean') {
            value = 'false';
        } else if (type === 'char') {
            value = '\'\\0\'';
        } else if (type === 'float' || type === 'double') {
            value = '0.0';
        } else {
            value = '0';
        }
    }

    let code = '';
    if (VARIABLES_TYPE == 'global_variate') {
        // 全局变量
        if (type == 'String') {
            Blockly.Arduino.definitions_['var_declare' + name] = cppType + ' ' + name + ' = "' + value + '";\n';
        } else {
            Blockly.Arduino.definitions_['var_declare' + name] = cppType + ' ' + name + ' = ' + value + ';\n';
        }
    } else {
        // 局部变量
        if (type == 'String') {
            code = cppType + ' ' + name + ' = "' + value + '";\n';
        } else {
            code = cppType + ' ' + name + ' = ' + value + ';\n';
        }
    }

    return code;
};
  Blockly.Arduino.KS_variables_get = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      code = name;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
  Blockly.Arduino.KS_variables_get_bool = function() {
    var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
    name = name.replace(/\"/g,'');
    code = name;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  Blockly.Arduino.KS_variables_set = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC) || ' ';
      name = name.replace(/\"/g,'');
      var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || ' ';
      var code = name + ' = ' + value + ';\n';
      return code;
  };
  Blockly.Arduino.KS_variables_stringSet = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      code = name+'\='+value+';\n';
      return code;
  };
  Blockly.Arduino.KS_variables_change = function() {
      var type = this.getFieldValue('TYPE');
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      code = name+type+';\n';
      return code;
  };
  Blockly.Arduino.KS_CHAR = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      return [`\'${name}\'`, Blockly.Arduino.ORDER_ATOMIC];
  };
  Blockly.Arduino.KS_STRING = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||" " ;
      name = name.replace(/\"/g,'');
      return [`\"${name}\"`, Blockly.Arduino.ORDER_ATOMIC];
  };
  Blockly.Arduino.KS_data = function() {
      var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      name = name.replace(/\"/g,'');
      code = name;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
  };
  Blockly.Arduino.KS_judge = function() {
      var val1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      val1 = val1.replace(/\"/g,'');
      var val2 = Blockly.Arduino.valueToCode(this, 'VALUE2',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
      val2 = val2.replace(/\"/g,'');
      var judge = this.getFieldValue('judge');
      return [`${val1} ${judge} ${val2}`, Blockly.Arduino.ORDER_ATOMIC];
  }; 
  Blockly.Arduino.KS_millis = function() {
      var code = "millis()";
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
  Blockly.Arduino.KS_micros = function() {
      var code = "micros()";
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino['AIbot_init_wifi'] = function (block) {
      
      Blockly.Arduino.includes_.AIbot_include_aivox_engine = '#include "ai_vox_engine.h"';
      Blockly.Arduino.includes_.AIbot_include_wifi = '#include <WiFi.h>';
      Blockly.Arduino.includes_.AIbot_include_spi_common = '#include <driver/spi_common.h>';
      Blockly.Arduino.includes_.AIbot_include_ap_wifi_configurator = '#include "components/wifi_configurator/ApWifiConfigurator.h"'; 
    
      Blockly.Arduino.definitions_.AIbot_chatRole = 'std::string chatRole;';
      Blockly.Arduino.definitions_.AIbot_global_ap_wifi_configurator = 'ApWifiConfigurator* apWifiConfigurator;';
    
      let setupCode = '';
      return '';
    };
Blockly.Arduino['AIbot_wifi_state'] = function (block) {
  const state = block.getFieldValue('STATE');
  let code = '(false)';
  if (state === 'kConnecting') code = 'wifi_configurator->WaitStateChanged() == WifiConfigurator::State::kConnecting';
  if (state === 'kFinished') code = 'wifi_configurator->WaitStateChanged() == WifiConfigurator::State::kFinished';
  return [code, Blockly.Arduino.ORDER_EQUAL];
};
Blockly.Arduino['AIbot_init_mic'] = function (block) {
  const micBclk = block.getFieldValue('MIC_BCLK') || '5';
  const micWs = block.getFieldValue('MIC_WS') || '4';
  const micDin = block.getFieldValue('MIC_DIN') || '6';

  Blockly.Arduino.includes_.AIbot_include_aivox_engine = '#include "ai_vox_engine.h"';
  Blockly.Arduino.includes_.AIbot_include_aivox_observer = '#include "ai_vox_observer.h"';
  Blockly.Arduino.includes_.AIbot_include_i2s_std_input = '#include "audio_input_device_sph0645.h"';
  Blockly.Arduino.includes_.AIbot_include_button_gpio = '#include "components/espressif/button/button_gpio.h"';
  Blockly.Arduino.includes_.AIbot_include_iot_button = '#include "components/espressif/button/iot_button.h"';

  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }
  
  Blockly.Arduino.definitions_.AIbot_kMicPinBclk = `constexpr gpio_num_t kMicPinBclk = GPIO_NUM_${micBclk};`;
  Blockly.Arduino.definitions_.AIbot_kMicPinWs = `constexpr gpio_num_t kMicPinWs = GPIO_NUM_${micWs};`;
  Blockly.Arduino.definitions_.AIbot_kMicPinDin = `constexpr gpio_num_t kMicPinDin = GPIO_NUM_${micDin};`;
  Blockly.Arduino.definitions_.AIbot_input_device = `auto g_audio_input_device = std::make_shared<AudioInputDeviceSph0645>(kMicPinBclk, kMicPinWs, kMicPinDin);`;
  
  if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
    Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
  }

  if (!Blockly.Arduino.setups_['AIbot_global_button_cfg']) {
    Blockly.Arduino.setups_['AIbot_global_button_cfg'] =
      'const button_config_t btn_cfg = {\n' +
      '  .long_press_time  = 1000,\n' +
      '  .short_press_time = 50,\n' +
      '};\n' +
      '\n' +
      'const button_gpio_config_t gpio_cfg = {\n' +
      '  .gpio_num          = GPIO_NUM_0,\n' +
      '  .active_level      = 0,\n' +
      '  .enable_power_save = false,\n' +
      '  .disable_pull      = false,\n' +
      '};\n';
  }
  return '';
};
Blockly.Arduino['AIbot_init_audio'] = function (block) {
  const spkBclk = block.getFieldValue('SPK_BCLK') || '15';
  const spkWs = block.getFieldValue('SPK_WS') || '16';
  const spkDout = block.getFieldValue('SPK_DOUT') || '7';

  Blockly.Arduino.includes_.AIbot_include_aivox_engine = '#include "ai_vox_engine.h"';
  Blockly.Arduino.includes_.AIbot_include_aivox_observer = '#include "ai_vox_observer.h"';
  Blockly.Arduino.includes_.AIbot_include_i2s_std_output = '#include "audio_device/audio_output_device_i2s_std.h"';
  Blockly.Arduino.includes_.AIbot_include_button_gpio = '#include "components/espressif/button/button_gpio.h"';
  Blockly.Arduino.includes_.AIbot_include_iot_button = '#include "components/espressif/button/iot_button.h"';

  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }
  
  Blockly.Arduino.definitions_.AIbot_kSpeakerPinBclk = `constexpr gpio_num_t kSpeakerPinBclk = GPIO_NUM_${spkBclk};`;
  Blockly.Arduino.definitions_.AIbot_kSpeakerPinWs = `constexpr gpio_num_t kSpeakerPinWs = GPIO_NUM_${spkWs};`;
  Blockly.Arduino.definitions_.AIbot_kSpeakerPinDout = `constexpr gpio_num_t kSpeakerPinDout = GPIO_NUM_${spkDout};`;
  Blockly.Arduino.definitions_.AIbot_output_device = `auto g_audio_output_device = std::make_shared<ai_vox::AudioOutputDeviceI2sStd>(kSpeakerPinBclk, kSpeakerPinWs, kSpeakerPinDout);`;
  
  if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
    Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
  }

  if (!Blockly.Arduino.setups_['AIbot_global_button_cfg']) {
    Blockly.Arduino.setups_['AIbot_global_button_cfg'] =
      'const button_config_t btn_cfg = {\n' +
      '  .long_press_time  = 1000,\n' +
      '  .short_press_time = 50,\n' +
      '};\n' +
      '\n' +
      'const button_gpio_config_t gpio_cfg = {\n' +
      '  .gpio_num          = GPIO_NUM_0,\n' +
      '  .active_level      = 0,\n' +
      '  .enable_power_save = false,\n' +
      '  .disable_pull      = false,\n' +
      '};\n';
  }
  return '';
};
Blockly.Arduino['AIbot_init_lcd'] = function (block) {
  const backLight = block.getFieldValue('backLight') || '42';
  const mosi = block.getFieldValue('MOSI') || '47';
  const clk = block.getFieldValue('CLK') || '21';
  const dc = block.getFieldValue('DC') || '40';
  const rst = block.getFieldValue('RST') || '45';
  const cs = block.getFieldValue('CS') || '41';

  Blockly.Arduino.includes_.AIbot_include_esp_lcd_panel_io = '#include <esp_lcd_panel_io.h>';
  Blockly.Arduino.includes_.AIbot_include_esp_lcd_panel_ops = '#include <esp_lcd_panel_ops.h>';
  Blockly.Arduino.includes_.AIbot_include_esp_lcd_panel_vendor = '#include <esp_lcd_panel_vendor.h>';
  Blockly.Arduino.includes_.AIbot_include_button_gpio = '#include "components/espressif/button/button_gpio.h"';
  Blockly.Arduino.includes_.AIbot_include_iot_button = '#include "components/espressif/button/iot_button.h"';
  Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';

  if (!Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle) {
    Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle = 'button_handle_t g_button_boot_handle = nullptr;';
  }
  
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayWidth = 'constexpr uint32_t kDisplayWidth  = 240;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayHeight = 'constexpr uint32_t kDisplayHeight = 240;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayMirrorX = 'constexpr bool kDisplayMirrorX      = false;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayMirrorY = 'constexpr bool kDisplayMirrorY      = false;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayInvertColor = 'constexpr bool kDisplayInvertColor  = true;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplaySwapXY = 'constexpr bool kDisplaySwapXY       = false;';
  Blockly.Arduino.definitions_.AIbot_lcd_kDisplayRgbElementOrder = 'constexpr auto kDisplayRgbElementOrder = LCD_RGB_ELEMENT_ORDER_RGB;';
  Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  Blockly.Arduino.definitions_.AIbot_lcd_init_display_func =
    'void InitDisplay() {\n' +
    '  pinMode(GPIO_NUM_' + backLight + ', OUTPUT);\n' +
    '  digitalWrite(GPIO_NUM_' + backLight + ', HIGH); \n' + 
    '\n' +
    '  spi_bus_config_t buscfg = {\n' +
    '      .mosi_io_num        = GPIO_NUM_' + mosi + ',\n' +
    '      .miso_io_num        = GPIO_NUM_NC,\n' +
    '      .sclk_io_num        = GPIO_NUM_' + clk + ',\n' +
    '      .quadwp_io_num      = GPIO_NUM_NC,\n' +
    '      .quadhd_io_num      = GPIO_NUM_NC,\n' +
    '      .data4_io_num       = GPIO_NUM_NC,\n' +
    '      .data5_io_num       = GPIO_NUM_NC,\n' +
    '      .data6_io_num       = GPIO_NUM_NC,\n' +
    '      .data7_io_num       = GPIO_NUM_NC,\n' +
    '      .data_io_default_level = false,\n' +
    '      .max_transfer_sz    = kDisplayWidth * kDisplayHeight * sizeof(uint16_t),\n' +
    '      .flags              = 0,\n' +
    '      .isr_cpu_id         = ESP_INTR_CPU_AFFINITY_AUTO,\n' +
    '      .intr_flags         = 0,\n' +
    '  };\n' +
    '  ESP_ERROR_CHECK(spi_bus_initialize(SPI3_HOST, &buscfg, SPI_DMA_CH_AUTO));\n' +
    '\n' +
    '  esp_lcd_panel_io_handle_t panel_io = nullptr;\n' +
    '  esp_lcd_panel_handle_t panel = nullptr;\n' +
    '\n' +
    '  esp_lcd_panel_io_spi_config_t io_config = {};\n' +
    '  io_config.cs_gpio_num       = GPIO_NUM_' + cs + ';\n' +
    '  io_config.dc_gpio_num       = GPIO_NUM_' + dc + ';\n' +
    '  io_config.spi_mode          = 0;\n' +
    '  io_config.pclk_hz           = 40 * 1000 * 1000;\n' +
    '  io_config.trans_queue_depth = 10;\n' +
    '  io_config.lcd_cmd_bits      = 8;\n' +
    '  io_config.lcd_param_bits    = 8;\n' +
    '  ESP_ERROR_CHECK(esp_lcd_new_panel_io_spi(SPI3_HOST, &io_config, &panel_io));\n' +
    '\n' +
    '  esp_lcd_panel_dev_config_t panel_config = {};\n' +
    '  panel_config.reset_gpio_num  = GPIO_NUM_' + rst + ';\n' +
    '  panel_config.rgb_ele_order   = LCD_RGB_ELEMENT_ORDER_RGB;\n' +
    '  panel_config.bits_per_pixel  = 16;\n' +
    '  ESP_ERROR_CHECK(esp_lcd_new_panel_st7789(panel_io, &panel_config, &panel));\n' +
    '\n' +
    '  esp_lcd_panel_reset(panel);\n' +
    '  esp_lcd_panel_init(panel);\n' +
    '  esp_lcd_panel_invert_color(panel, kDisplayInvertColor);\n' +
    '  esp_lcd_panel_swap_xy(panel, kDisplaySwapXY);\n' +
    '  esp_lcd_panel_mirror(panel, kDisplayMirrorX, kDisplayMirrorY);\n' +
    '\n' +
    '  g_display = std::make_unique<DisplayLcd>(\n' +
    '      panel_io, panel, kDisplayWidth, kDisplayHeight,\n' +
    '      0, 0, kDisplayMirrorX, kDisplayMirrorY, kDisplaySwapXY\n' +
    '  );\n' +
    '  g_display->Start();\n' +
    '}\n';

  Blockly.Arduino.setups_['AIbot_lcd_button_display_init'] =
    'ESP_ERROR_CHECK(iot_button_new_gpio_device(&btn_cfg, &gpio_cfg, &g_button_boot_handle));\n' +
    'InitDisplay();\n';

  return '';
};
Blockly.Arduino['AIbot_start_engine'] = function (block) {
  const volume = Blockly.Arduino.valueToCode(block, 'AIbot_volume', Blockly.Arduino.ORDER_ATOMIC) || '100';
  const language = block.getFieldValue('AIbot_language') || 'EN';

  let language_pack_initialization_code = '';

  if (language === 'CN') {
    Blockly.Arduino.includes_['AIbot_lang_mp3_cn_config'] = '#include "network_config_mode_mp3_cn.h"';
    Blockly.Arduino.includes_['AIbot_lang_mp3_cn_connected'] = '#include "network_connected_mp3_cn.h"';
    
    language_pack_initialization_code = 
      'const LanguageAudioPack g_lang_pack = {kNetworkConfigModeMp3Cn, sizeof(kNetworkConfigModeMp3Cn), kNetworkConnectedMp3Cn, sizeof(kNetworkConnectedMp3Cn)};';

  } else {
    Blockly.Arduino.includes_['AIbot_lang_mp3_en_config'] = '#include "network_config_mode_mp3_en.h"';
    Blockly.Arduino.includes_['AIbot_lang_mp3_en_connected'] = '#include "network_connected_mp3_en.h"';

    language_pack_initialization_code = 
      'const LanguageAudioPack g_lang_pack = {kNetworkConfigModeMp3En, sizeof(kNetworkConfigModeMp3En), kNetworkConnectedMp3En, sizeof(kNetworkConnectedMp3En)};';
  }

  const struct_definition_code = 
    'struct LanguageAudioPack {\n' +
    '  const uint8_t* network_config_mode_mp3;\n' +
    '  size_t network_config_mode_mp3_size;\n' +
    '  const uint8_t* network_connected_mp3;\n' +
    '  size_t network_connected_mp3_size;\n' +
    '};\n';

  Blockly.Arduino.definitions_['AIbot_language_pack_struct'] = struct_definition_code;
  Blockly.Arduino.definitions_['AIbot_language_pack_instance'] = language_pack_initialization_code;

  Blockly.Arduino.includes_.AIbot_include_base_headers = 
    '#include "components/espressif/button/button_gpio.h"\n' +
    '#include "components/espressif/button/iot_button.h"\n' +
    '#include "components/espressif/esp_audio_codec/esp_audio_simple_dec.h"\n' +
    '#include "components/espressif/esp_audio_codec/esp_mp3_dec.h"';
    
  if (!Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle) {
    Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle = 'button_handle_t g_button_boot_handle = nullptr;';
  }
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }
  if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
    Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox::Engine::GetInstance();';
  }
  if (!Blockly.Arduino.definitions_.AIbot_global_ap_wifi_configurator) {
    Blockly.Arduino.definitions_.AIbot_global_ap_wifi_configurator = 'ApWifiConfigurator* apWifiConfigurator;';
  }

  if (!Blockly.Arduino.definitions_.AIbot_play_mp3_func) {
    Blockly.Arduino.definitions_.AIbot_play_mp3_func =
      'void PlayMp3(const uint8_t* data, size_t size) {\n' +
      '  auto ret = esp_mp3_dec_register();\n' +
      '  if (ret != ESP_AUDIO_ERR_OK) {\n' +
      '    printf("Failed to register mp3 decoder: %d\\n", ret);\n' +
      '    abort();\n' +
      '  }\n' +
      '  esp_audio_simple_dec_handle_t decoder = nullptr;\n' +
      '  esp_audio_simple_dec_cfg_t audio_dec_cfg{\n' +
      '      .dec_type = ESP_AUDIO_SIMPLE_DEC_TYPE_MP3,\n' +
      '      .dec_cfg = nullptr,\n' +
      '      .cfg_size = 0,\n' +
      '  };\n' +
      '  ret = esp_audio_simple_dec_open(&audio_dec_cfg, &decoder);\n' +
      '  if (ret != ESP_AUDIO_ERR_OK) {\n' +
      '    printf("Failed to open mp3 decoder: %d\\n", ret);\n' +
      '    abort();\n' +
      '  }\n' +
      '  g_audio_output_device->OpenOutput(16000);\n' +
      '  esp_audio_simple_dec_raw_t raw = {\n' +
      '      .buffer = const_cast<uint8_t*>(data),\n' +
      '      .len = size,\n' +
      '      .eos = true,\n' +
      '      .consumed = 0,\n' +
      '      .frame_recover = ESP_AUDIO_SIMPLE_DEC_RECOVERY_NONE,\n' +
      '  };\n' +
      '  uint8_t* frame_data = (uint8_t*)malloc(4096);\n' +
      '  esp_audio_simple_dec_out_t out_frame = {\n' +
      '      .buffer = frame_data,\n' +
      '      .len = 4096,\n' +
      '      .needed_size = 0,\n' +
      '      .decoded_size = 0,\n' +
      '  };\n' +
      '  while (raw.len > 0) {\n' +
      '    const auto ret = esp_audio_simple_dec_process(decoder, &raw, &out_frame);\n' +
      '    if (ret == ESP_AUDIO_ERR_BUFF_NOT_ENOUGH) {\n' +
      '      out_frame.buffer = reinterpret_cast<uint8_t*>(realloc(out_frame.buffer, out_frame.needed_size));\n' +
      '      if (out_frame.buffer == nullptr) {\n' +
      '        break;\n' +
      '      }\n' +
      '      out_frame.len = out_frame.needed_size;\n' +
      '      continue;\n' +
      '    }\n' +
      '    if (ret != ESP_AUDIO_ERR_OK) {\n' +
      '      break;\n' +
      '    }\n' +
      '    g_audio_output_device->Write(reinterpret_cast<int16_t*>(out_frame.buffer), out_frame.decoded_size >> 1);\n' +
      '    raw.len -= raw.consumed;\n' +
      '    raw.buffer += raw.consumed;\n' +
      '  }\n' +
      '  free(frame_data);\n' +
      '  g_audio_output_device->CloseOutput();\n' +
      '  esp_audio_simple_dec_close(decoder);\n' +
      '  esp_audio_dec_unregister(ESP_AUDIO_TYPE_MP3);\n' +
      '}\n';
  }

  Blockly.Arduino.setups_['AIbot_aivox_start_engine'] =
    '  Serial.begin(115200);\n' +
    '  apWifiConfigurator = new ApWifiConfigurator(g_display.get());\n' +
    '  apWifiConfigurator->begin();\n' +
    '  if (!apWifiConfigurator->connectToSavedWifi()) {\n' +
    '    if (g_display) g_display->ShowStatus("AP Config Mode");\n' +
    '    PlayMp3(g_lang_pack.network_config_mode_mp3, g_lang_pack.network_config_mode_mp3_size);\n' +
    '    apWifiConfigurator->enterWifiConfigMode();\n' +
    '    return;\n' +
    '  }\n' +
    '  if (g_display) g_display->ShowStatus("Network Connected");\n' +
    '  PlayMp3(g_lang_pack.network_connected_mp3, g_lang_pack.network_connected_mp3_size);\n' +
    '  ai_vox_engine.SetObserver(g_observer);\n' +
    '  ai_vox_engine.Start(g_audio_input_device, g_audio_output_device);\n' +
    '  ESP_ERROR_CHECK(iot_button_register_cb(\n' +
    '      g_button_boot_handle, BUTTON_PRESS_DOWN, nullptr,\n' +
    '      [](void*, void* data) {\n' +
    '        Serial.println("boot button pressed - advance engine");\n' +
    '        ai_vox::Engine::GetInstance().Advance();\n' +
    '      },\n' +
    '      nullptr));\n' +
    '  ESP_ERROR_CHECK(iot_button_register_cb(g_button_boot_handle,\n' +
    '                                             BUTTON_LONG_PRESS_START, nullptr,\n' +
    '                                             [](void* btn, void* usr_data){\n' +
    '                                                Serial.println("Long press detected - resetting WiFi config and entering AP mode");\n' +
    '                                                apWifiConfigurator->clearSavedWifiCredentials();\n' +
    '                                                delay(1000);\n' +
    '                                                ESP.restart();\n' +
    '                                             }, nullptr));\n' +
    '  g_audio_output_device->set_volume(' + volume + ');\n';

  return '';
};
Blockly.Arduino['AIbot_init_oled'] = function (block) {
  const sda = block.getFieldValue('SDA');
  const scl = block.getFieldValue('SCL');
  const i2cPort = block.getFieldValue('I2C_PORT') || '0';     
  const i2cAddr = block.getFieldValue('I2C_ADDR') || '0x3C';  
  const width   = block.getFieldValue('WIDTH')      || '128';
  const height  = block.getFieldValue('HEIGHT')     || '64';
  const mirrorX = block.getFieldValue('MIRROR_X') === 'TRUE' ? 'false' : 'true';
  const mirrorY = block.getFieldValue('MIRROR_Y') === 'TRUE' ? 'false' : 'true';

  Blockly.Arduino.includes_.AIbot_include_i2c_master = '#include <driver/i2c_master.h>';
  Blockly.Arduino.includes_.AIbot_include_esp_lcd_io_i2c = '#include <esp_lcd_io_i2c.h>';
  Blockly.Arduino.includes_.AIbot_include_esp_lcd_panel_ops = '#include <esp_lcd_panel_ops.h>';
  Blockly.Arduino.includes_.AIbot_include_esp_lcd_panel_ssd1306 = '#include <esp_lcd_panel_ssd1306.h>';
  Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  Blockly.Arduino.includes_.AIbot_include_button_gpio = '#include "components/espressif/button/button_gpio.h"';
  Blockly.Arduino.includes_.AIbot_include_iot_button = '#include "components/espressif/button/iot_button.h"';

  if (!Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle) {
    Blockly.Arduino.definitions_.AIbot_global_g_button_boot_handle = 'button_handle_t g_button_boot_handle = nullptr;';
  }

  Blockly.Arduino.definitions_.AIbot_oled_sda = `constexpr gpio_num_t kI2cPinSda = GPIO_NUM_${sda};`;
  Blockly.Arduino.definitions_.AIbot_oled_scl = `constexpr gpio_num_t kI2cPinScl = GPIO_NUM_${scl};`;
  Blockly.Arduino.definitions_.AIbot_oled_port = `constexpr i2c_port_t kI2cPort = I2C_NUM_${i2cPort};`;
  Blockly.Arduino.definitions_.AIbot_oled_addr = `constexpr uint8_t kOledI2cAddr = ${i2cAddr};`;
  Blockly.Arduino.definitions_.AIbot_oled_width   = `constexpr int kDisplayWidth  = ${width};`;   
  Blockly.Arduino.definitions_.AIbot_oled_height  = `constexpr int kDisplayHeight = ${height};`;
  Blockly.Arduino.definitions_.AIbot_oled_mirrorx = `constexpr bool kDisplayMirrorX = ${mirrorX};`;
  Blockly.Arduino.definitions_.AIbot_oled_mirrory = `constexpr bool kDisplayMirrorY = ${mirrorY};`;
  // 与 LCD 共用同一个 key，避免两个积木同时存在时 g_display 重复定义
  Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  Blockly.Arduino.definitions_.AIbot_oled_InitDisplay =
      `void InitDisplay() {
          i2c_master_bus_handle_t display_i2c_bus;
          i2c_master_bus_config_t bus_config = {
              .i2c_port = kI2cPort,
              .sda_io_num = kI2cPinSda,
              .scl_io_num = kI2cPinScl,
              .clk_source = I2C_CLK_SRC_DEFAULT,
              .glitch_ignore_cnt = 7,
              .intr_priority = 0,
              .trans_queue_depth = 0,
              .flags = {
                  .enable_internal_pullup = 1,
                  .allow_pd = false,
              },
          };
          ESP_ERROR_CHECK(i2c_new_master_bus(&bus_config, &display_i2c_bus));
      
          esp_lcd_panel_io_handle_t panel_io = nullptr;
          esp_lcd_panel_io_i2c_config_t io_config = {
              .dev_addr = kOledI2cAddr,
              .on_color_trans_done = nullptr,
              .user_ctx = nullptr,
              .control_phase_bytes = 1,
              .dc_bit_offset = 6,
              .lcd_cmd_bits = 8,
              .lcd_param_bits = 8,
              .flags = {
                  .dc_low_on_data = 0,
                  .disable_control_phase = 0,
              },
              .scl_speed_hz = 400 * 1000,
          };
          ESP_ERROR_CHECK(esp_lcd_new_panel_io_i2c_v2(display_i2c_bus, &io_config, &panel_io));
      
          esp_lcd_panel_handle_t panel = nullptr;
          esp_lcd_panel_dev_config_t panel_config = {};
          panel_config.reset_gpio_num = -1;
          panel_config.bits_per_pixel = 1;
      
          esp_lcd_panel_ssd1306_config_t ssd1306_config = {
              .height = static_cast<uint8_t>(kDisplayHeight),
          };
          panel_config.vendor_config = &ssd1306_config;
      
          ESP_ERROR_CHECK(esp_lcd_new_panel_ssd1306(panel_io, &panel_config, &panel));
          ESP_ERROR_CHECK(esp_lcd_panel_reset(panel));
          ESP_ERROR_CHECK(esp_lcd_panel_init(panel));
          ESP_ERROR_CHECK(esp_lcd_panel_disp_on_off(panel, true));
      
          g_display = std::make_unique<DisplayOled>(panel_io,panel,kDisplayWidth,kDisplayHeight,kDisplayMirrorX,kDisplayMirrorY);
          g_display->Start();
      }`;

  if (!Blockly.Arduino.setups_['AIbot_global_button_cfg']) {
    Blockly.Arduino.setups_['AIbot_global_button_cfg'] =
      'const button_config_t btn_cfg = {\n' +
      '  .long_press_time  = 1000,\n' +
      '  .short_press_time = 50,\n' +
      '};\n' +
      '\n' +
      'const button_gpio_config_t gpio_cfg = {\n' +
      '  .gpio_num          = GPIO_NUM_0,\n' +
      '  .active_level      = 0,\n' +
      '  .enable_power_save = false,\n' +
      '  .disable_pull      = false,\n' +
      '};\n';
  }

  Blockly.Arduino.setups_['AIbot_oled_button_display_init'] =
    'ESP_ERROR_CHECK(iot_button_new_gpio_device(&btn_cfg, &gpio_cfg, &g_button_boot_handle));\n' +
    'InitDisplay();\n';

  return '';
};


Blockly.Arduino['AIbot_loop_state_change'] = function (block) {
  const state = block.getFieldValue('chat_state');
  const statementsDo = Blockly.Arduino.statementToCode(block, 'DO');

  Blockly.Arduino.includes_.AIbot_include_aivox_event_core = '#include "AIVOXEventCore.h"';
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_eventcore) {
    Blockly.Arduino.definitions_.AIbot_aivox_eventcore = 'AIVOXEventCore aivoxEventCore;';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_chatRole) {
    Blockly.Arduino.definitions_.AIbot_chatRole = 'std::string chatRole;';
  }

  // 强制添加 g_display 依赖，确保在函数定义前声明
  if (!Blockly.Arduino.definitions_.AIbot_lcd_g_display) {
    Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  }
  if (!Blockly.Arduino.includes_.AIbot_include_display) {
    Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  }
  
  Blockly.Arduino.definitions_[`AIbot_aivox_onStateChange_${state}`] =
    'void OnState' + state + '(ai_vox::ChatState state) {\n' +
    '  if (state == ai_vox::ChatState::k' + state + ') {\n' +
    (statementsDo || '') +
    '  }\n' +
    '}\n';

  Blockly.Arduino.setups_[`AIbot_setup_onStateChange_${state}`] =
    'aivoxEventCore.onState' + state + '(OnState' + state + ');\n';

  Blockly.Arduino.loops_.AIbot_aivox_eventcore_update =
    'aivoxEventCore.update(g_observer);\n';

  return '';
};
Blockly.Arduino['AIbot_lcd_show_status'] = function (block) {
  const content = Blockly.Arduino.valueToCode(block, 'AIbot_content', Blockly.Arduino.ORDER_ATOMIC) || '""';
  const location = block.getFieldValue('location');

  // 强制添加 g_display 依赖
  if (!Blockly.Arduino.definitions_.AIbot_lcd_g_display) {
    Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  }
  if (!Blockly.Arduino.includes_.AIbot_include_display) {
    Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  }

  if (location === 'ShowStatus') {
    return `g_display->ShowStatus(${content});\n`;
  }
  if (location === 'SetEmotion') {
    return `g_display->SetEmotion(${content});\n`;
  }
  if (location === 'SetChatMessage') {
    return (
      'if(chatRole == "assistant"){\n' +
      `  g_display->SetChatMessage(Display::Role::kAssistant, ${content});\n` +
      '}else if(chatRole == "user"){\n' +
      `  g_display->SetChatMessage(Display::Role::kUser, ${content});\n` +
      '}else{\n' +
      `  g_display->SetChatMessage(Display::Role::kSystem, ${content});\n` +
      '}\n'
    );
  }
  return '';
};
Blockly.Arduino['AIbot_oled_show_status'] = function (block) {
  const content = Blockly.Arduino.valueToCode(block, 'AIbot_content', Blockly.Arduino.ORDER_ATOMIC) || '""';
  const location = block.getFieldValue('location');
  
  if (location === 'ShowStatus') {
    return `if (g_display) g_display->ShowStatus(${content});\n`;
  }
  if (location === 'SetEmotion') {
    return `if (g_display) g_display->SetEmotion(${content});\n`;
  }
  if (location === 'SetChatMessage') {
    return (
      'if (g_display) {\n' +
      '  if(chatRole == "assistant"){\n' +
      `    g_display->SetChatMessage(Display::Role::kAssistant, ${content});\n` +
      '  }else if(chatRole == "user"){\n' +
      `    g_display->SetChatMessage(Display::Role::kUser, ${content});\n` +
      '  }else{\n' +
      `    g_display->SetChatMessage(Display::Role::kSystem, ${content});\n` +
      '  }\n' +
      '}\n'
    );
  }
  return '';
};


Blockly.Arduino['AIbot_loop_activation'] = function (block) {
  const statementsDo = Blockly.Arduino.statementToCode(block, 'DO');

  Blockly.Arduino.includes_.AIbot_include_aivox_event_core = '#include "AIVOXEventCore.h"';
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_eventcore) {
    Blockly.Arduino.definitions_.AIbot_aivox_eventcore = 'AIVOXEventCore aivoxEventCore;';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }

  if (!Blockly.Arduino.definitions_.AIbot_lcd_g_display) {
    Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  }
  if (!Blockly.Arduino.includes_.AIbot_include_display) {
    Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  }
  
  Blockly.Arduino.definitions_.AIbot_aivox_onActivation =
    'void OnActivation(const std::string& code, const std::string& message) {\n' +
    (statementsDo || '') +
    '}\n';

  Blockly.Arduino.setups_.AIbot_setup_onActivation =
    'aivoxEventCore.onActivation(OnActivation);\n';

  Blockly.Arduino.loops_.AIbot_aivox_eventcore_update =
    'aivoxEventCore.update(g_observer);\n';

  return '';
};
Blockly.Arduino['get_AIbot_activation_message'] = function (block) {
  const type = block.getFieldValue('activation_type');
  if (type === 'code') return ['code', Blockly.Arduino.ORDER_ATOMIC];
  if (type === 'message') return ['message', Blockly.Arduino.ORDER_ATOMIC];
  return ['""', Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['AIbot_loop_emotion'] = function (block) {
  const statementsDo = Blockly.Arduino.statementToCode(block, 'DO');

  Blockly.Arduino.includes_.AIbot_include_aivox_event_core = '#include "AIVOXEventCore.h"';
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_eventcore) {
    Blockly.Arduino.definitions_.AIbot_aivox_eventcore = 'AIVOXEventCore aivoxEventCore;';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }

  if (!Blockly.Arduino.definitions_.AIbot_lcd_g_display) {
    Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  }
  if (!Blockly.Arduino.includes_.AIbot_include_display) {
    Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  }
  
  Blockly.Arduino.definitions_.AIbot_aivox_onEmotion =
    'void OnEmotion(const std::string& emotion) {\n' +
    (statementsDo || '') +
    '}\n';

  Blockly.Arduino.setups_.AIbot_setup_onEmotion =
    'aivoxEventCore.onEmotion(OnEmotion);\n';

  Blockly.Arduino.loops_.AIbot_aivox_eventcore_update =
    'aivoxEventCore.update(g_observer);\n';

  return '';
};
Blockly.Arduino['get_AIbot_emotion_result'] = function () {
  return ['emotion', Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['AIbot_emotion'] = function (block) {
  const e = block.getFieldValue('emotion');
  return [`(emotion == "${e}")`, Blockly.Arduino.ORDER_EQUAL];
};
Blockly.Arduino['AIbot_emotion_list'] = function (block) {
  const e = block.getFieldValue('emotion');
  return [`"${e}"`, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['AIbot_loop_chat_message'] = function (block) {
  const statementsDo = Blockly.Arduino.statementToCode(block, 'DO');

  Blockly.Arduino.includes_.AIbot_include_aivox_event_core = '#include "AIVOXEventCore.h"';
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_eventcore) {
    Blockly.Arduino.definitions_.AIbot_aivox_eventcore = 'AIVOXEventCore aivoxEventCore;';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_chatRole) {
    Blockly.Arduino.definitions_.AIbot_chatRole = 'std::string chatRole;';
  }

  if (!Blockly.Arduino.definitions_.AIbot_lcd_g_display) {
    Blockly.Arduino.definitions_.AIbot_lcd_g_display = 'std::unique_ptr<Display> g_display;';
  }
  if (!Blockly.Arduino.includes_.AIbot_include_display) {
    Blockly.Arduino.includes_.AIbot_include_display = '#include "display.h"';
  }
  
  Blockly.Arduino.definitions_.AIbot_aivox_onChatMessage =
    'void OnChatMessage(const std::string& role, const std::string& message) {\n' +
    '  chatRole = role;\n' +
    (statementsDo || '') +
    '}\n';

  Blockly.Arduino.setups_.AIbot_setup_onChatMessage =
    'aivoxEventCore.onChatMessage(OnChatMessage);\n';

  Blockly.Arduino.loops_.AIbot_aivox_eventcore_update =
    'aivoxEventCore.update(g_observer);\n';

  return '';
};
Blockly.Arduino['AIbot_loop_chat_message_role_var'] = function (block) {
  const r = block.getFieldValue('chat_role');
  return [`(role == "${r}")`, Blockly.Arduino.ORDER_EQUAL];
};
Blockly.Arduino['AIbot_loop_chat_message_msg_var'] = function () {
  return ['message', Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['AIbot_config_websocket'] = function (block) {
  const backend = block.getFieldValue('BACKEND');
  let code = '';

  if (!Blockly.Arduino.definitions_['AIbot_aivox_engine_global']) {
    Blockly.Arduino.definitions_['AIbot_aivox_engine_global'] = 'auto& ai_vox_engine = ai_vox::Engine::GetInstance();';
  }

  if (backend === 'XIAOZHI') {
    code = 'ai_vox_engine.SetOtaUrl("https://api.tenclass.net/xiaozhi/ota/");\n' +
           'ai_vox_engine.ConfigWebsocket("wss://api.tenclass.net/xiaozhi/v1/", {{"Authorization", "Bearer test-token"}});\n';
  } else if (backend === 'KEYES') {
    code = 'ai_vox_engine.SetOtaUrl("https://ai.keyestudio.com/api/ota/");\n' +
           'ai_vox_engine.ConfigWebsocket("wss://ai.keyestudio.com/ws", {{"Authorization", "Bearer test-token"}});\n';
  }

  Blockly.Arduino.setups_['AIbot_config_websocket'] = code;
  return '';
};
Blockly.Arduino['AIbot_loop_mcp'] = function (block) {
  const statementsDo = Blockly.Arduino.statementToCode(block, 'DO');

  Blockly.Arduino.includes_.AIbot_include_aivox_event_core = '#include "AIVOXEventCore.h"';

  if (!Blockly.Arduino.definitions_.AIbot_aivox_eventcore) {
    Blockly.Arduino.definitions_.AIbot_aivox_eventcore = 'AIVOXEventCore aivoxEventCore;';
  }
  
  if (!Blockly.Arduino.definitions_.AIbot_aivox_observer) {
    Blockly.Arduino.definitions_.AIbot_aivox_observer = 'auto g_observer = std::make_shared<ai_vox::Observer>();';
  }

  Blockly.Arduino.definitions_.AIbot_onMcpControl =
      'void OnMcpControl(const std::int64_t& id, const std::string& name, '
      + 'const std::map<std::string, std::variant<std::string, int64_t, bool>>& param) {\n'
      + (statementsDo || '')
      + '}\n';

  Blockly.Arduino.setups_.AIbot_setup_onMcpToolCall =
      'aivoxEventCore.onMcpToolCall(OnMcpControl);\n';

  Blockly.Arduino.loops_.AIbot_aivox_eventcore_update =
      'aivoxEventCore.update(g_observer);\n';
  return '';
};

return Blockly;
}  

exports = addGenerator;