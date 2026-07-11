#ifndef ApWifiConfigurator_H
#define ApWifiConfigurator_H

#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <Preferences.h> // ESP32 持久化存储
#include "display.h"       // 包含 display.h
#include <map>

// 配网配置
#define AP_SSID_PREFIX "KEYES-AI"
#define AP_PASSWORD "" // 空密码，开放热点
#define AP_IP IPAddress(192, 168, 4, 1)
#define AP_GATEWAY IPAddress(192, 168, 4, 1)
#define AP_SUBNET IPAddress(255, 255, 255, 0)
#define DNS_PORT 53

// 持久化存储
#define PREF_NAMESPACE "wifi_config"
#define PREF_KEY_SSID "ssid"
#define PREF_KEY_PASSWORD "password"
#define PREF_KEY_LANGUAGE "language" // 保存选择的语言

class ApWifiConfigurator {
public:
  ApWifiConfigurator(Display* display);
  void begin();
  bool connectToSavedWifi();
  void enterWifiConfigMode();
  void clearSavedWifiCredentials();

private:
  String generateApSsid();
  String getConfigPageHtml();
  String translate(const String& key, const String& lang); // 翻译函数
  void handleRoot();
  void handleScan();
  void handleSave();
  void handleNotFound();
  String getSuccessPageHtml();
  void handleLanguage();           //处理语言选择

  WebServer* g_web_server = nullptr;
  DNSServer* g_dns_server = nullptr;
  Preferences g_preferences; // Preferences 成员变量
  Display* g_display; // 显示屏指针
  String currentLanguage = "zh-cn"; // 默认语言

  // 多语言文本 (保持不变)
  std::map<String, std::map<String, String>> languageData = {
    {"wifiConfigTitle", {
      {"zh-cn", "🤖 KEYES WiFi 配置"}, {"zh-tw", "🤖 KEYES WiFi 配置"}, {"en", "🤖 KEYES WiFi Configuration"},
      {"de", "🤖 KEYES WiFi Konfiguration"}, {"es", "🤖 KEYES WiFi Configuración"}, {"fr", "🤖 KEYES WiFi Configuration"},
      {"it", "🤖 KEYES WiFi Configurazione"}, {"ja", "🤖 KEYES WiFi 設定"}, {"ko", "🤖 KEYES WiFi 구성"},
      {"pl", "🤖 KEYES WiFi Konfiguracja"}, {"pt", "🤖 KEYES WiFi Configuração"}, {"ru", "🤖 KEYES WiFi Настройка"}
    }},
    {"ssidLabel", {
      {"zh-cn", "WiFi 名称 (SSID)"}, {"zh-tw", "WiFi 名稱 (SSID)"}, {"en", "WiFi Name (SSID)"},
      {"de", "WiFi Name (SSID)"}, {"es", "Nombre de WiFi (SSID)"}, {"fr", "Nom WiFi (SSID)"},
      {"it", "Nome WiFi (SSID)"}, {"ja", "WiFi名 (SSID)"}, {"ko", "WiFi 이름 (SSID)"},
      {"pl", "Nazwa WiFi (SSID)"}, {"pt", "Nome WiFi (SSID)"}, {"ru", "Имя WiFi (SSID)"}
    }},
    {"passwordLabel", {
      {"zh-cn", "WiFi 密码"}, {"zh-tw", "WiFi 密碼"}, {"en", "WiFi Password"},
      {"de", "WiFi Passwort"}, {"es", "Contraseña de WiFi"}, {"fr", "Mot de passe WiFi"},
      {"it", "Password WiFi"}, {"ja", "WiFiパスワード"}, {"ko", "WiFi 비밀번호"},
      {"pl", "Hasło WiFi"}, {"pt", "Senha WiFi"}, {"ru", "Пароль WiFi"}
    }},
    {"scanButton", {
      {"zh-cn", "扫描 WiFi"}, {"zh-tw", "掃描 WiFi"}, {"en", "Scan WiFi"},
      {"de", "WiFi scannen"}, {"es", "Escanear WiFi"}, {"fr", "Scanner WiFi"},
      {"it", "Scansiona WiFi"}, {"ja", "WiFiスキャン"}, {"ko", "WiFi 스캔"},
      {"pl", "Skanuj WiFi"}, {"pt", "Escanear WiFi"}, {"ru", "Сканировать WiFi"}
    }},
    {"saveButton", {
      {"zh-cn", "保存并连接"}, {"zh-tw", "儲存並連接"}, {"en", "Save and Connect"},
      {"de", "Speichern und verbinden"}, {"es", "Guardar y conectar"}, {"fr", "Enregistrer et connecter"},
      {"it", "Salva e connetti"}, {"ja", "保存して接続"}, {"ko", "저장하고 연결"},
      {"pl", "Zapisz i połącz"}, {"pt", "Salvar e conectar"}, {"ru", "Сохранить и подключиться"}
    }},
    {"configSuccessTitle", {
      {"zh-cn", "✅ 配置成功！"}, {"zh-tw", "✅ 配置成功！"}, {"en", "✅ Configuration Successful!"},
      {"de", "✅ Konfiguration erfolgreich!"}, {"es", "✅ ¡Configuración exitosa!"}, {"fr", "✅ Configuration réussie !"},
      {"it", "✅ Configurazione riuscita!"}, {"ja", "✅ 設定成功！"}, {"ko", "✅ 구성 성공!"},
      {"pl", "✅ Konfiguracja zakończona sukcesem!"}, {"pt", "✅ Configuração bem-sucedida!"}, {"ru", "✅ Настройка выполнена успешно!"}
    }},
    {"configSuccessMessage1", {
      {"zh-cn", "WiFi 配置已保存"}, {"zh-tw", "WiFi 配置已儲存"}, {"en", "WiFi configuration saved"},
      {"de", "WiFi-Konfiguration gespeichert"}, {"es", "Configuración WiFi guardada"}, {"fr", "Configuration WiFi enregistrée"},
      {"it", "Configurazione WiFi salvata"}, {"ja", "WiFi設定は保存されました"}, {"ko", "WiFi 구성이 저장되었습니다"},
      {"pl", "Konfiguracja WiFi zapisana"}, {"pt", "Configuração WiFi salva"}, {"ru", "Конфигурация WiFi сохранена"}
    }},
    {"configSuccessMessage2", {
      {"zh-cn", "设备将在 3 秒后重启..."}, {"zh-tw", "設備將在 3 秒後重新啟動..."}, {"en", "Device will restart in 3 seconds..."},
      {"de", "Gerät startet in 3 Sekunden neu..."}, {"es", "El dispositivo se reiniciará en 3 segundos..."}, {"fr", "L'appareil redémarrera dans 3 secondes..."},
      {"it", "Il dispositivo si riavvierà tra 3 secondi..."}, {"ja", "デバイスは3秒後に再起動します..."}, {"ko", "장치가 3초 후에 다시 시작됩니다..."},
      {"pl", "Urządzenie zostanie ponownie uruchomione za 3 sekundy..."}, {"pt", "O dispositivo será reiniciado em 3 segundos..."}, {"ru", "Устройство перезагрузится через 3 секунды..."}
    }},
    {"configSuccessMessage3", {
      {"zh-cn", "请稍候，设备将自动连接到您的 WiFi"}, {"zh-tw", "請稍候，設備將自動連接到您的 WiFi"}, {"en", "Please wait, the device will automatically connect to your WiFi"},
      {"de", "Bitte warten, das Gerät verbindet sich automatisch mit Ihrem WiFi"}, {"es", "Por favor espere, el dispositivo se conectará automáticamente a su WiFi"}, {"fr", "Veuillez patienter, l'appareil se connectera automatiquement à votre WiFi"},
      {"it", "Attendere, il dispositivo si connetterà automaticamente al tuo WiFi"}, {"ja", "しばらくお待ちください、デバイスは自動的にあなたのWiFiに接続します"}, {"ko", "잠시 기다려 주십시오. 장치가 자동으로 WiFi에 연결됩니다"},
      {"pl", "Proszę czekać, urządzenie automatycznie połączy się z Twoją siecią WiFi"}, {"pt", "Aguarde, o dispositivo se conectará automaticamente à sua rede WiFi"}, {"ru", "Пожалуйста, подождите, устройство автоматически подключится к вашей сети WiFi"}
    }},
    {"scanning", {
      {"zh-cn", "正在扫描..."}, {"zh-tw", "正在掃描..."}, {"en", "Scanning..."},
      {"de", "Scannen..."}, {"es", "Escaneando..."}, {"fr", "Analyse en cours..."},
      {"it", "Scansione in corso..."}, {"ja", "スキャン中..."}, {"ko", "검색 중..."},
      {"pl", "Skanowanie..."}, {"pt", "A escanear..."}, {"ru", "Сканирование..."}
    }},
    {"scanComplete", {
      {"zh-cn", "扫描完成"}, {"zh-tw", "掃描完成"}, {"en", "Scan Complete"},
      {"de", "Scan abgeschlossen"}, {"es", "Escaneo completo"}, {"fr", "Analyse terminée"},
      {"it", "Scansione completata"}, {"ja", "スキャン完了"}, {"ko", "스캔 완료"},
      {"pl", "Skanowanie zakończone"}, {"pt", "Digitalização concluída"}, {"ru", "Сканирование завершено"}
    }},
    {"selectWifi", {
      {"zh-cn", "-- 选择 WiFi --"}, {"zh-tw", "-- 選擇 WiFi --"}, {"en", "-- Select WiFi --"},
      {"de", "-- Wähle WiFi --"}, {"es", "-- Seleccionar WiFi --"}, {"fr", "-- Sélectionner WiFi --"},
      {"it", "-- Seleziona WiFi --"}, {"ja", "-- WiFiを選択 --"}, {"ko", "-- WiFi 선택 --"},
      {"pl", "-- Wybierz WiFi --"}, {"pt", " -- Selecionar WiFi --"}, {"ru", "-- Выбрать WiFi --"}
    }}
  };
};

#endif