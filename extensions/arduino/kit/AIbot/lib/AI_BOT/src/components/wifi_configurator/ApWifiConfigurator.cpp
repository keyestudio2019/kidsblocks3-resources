#include "ApWifiConfigurator.h"

ApWifiConfigurator::ApWifiConfigurator(Display* display) : g_display(display) {}

void ApWifiConfigurator::begin() {
  // 初始化
  g_preferences.begin(PREF_NAMESPACE, false);
  currentLanguage = g_preferences.getString(PREF_KEY_LANGUAGE, "zh-cn");
  g_preferences.end();
}

/**
 * @brief 生成 AP 热点名称（带唯一芯片 ID 后缀，更可靠）
 */
String ApWifiConfigurator::generateApSsid() {
  // 获取芯片的唯一ID
  uint64_t chipid = ESP.getEfuseMac(); 
  
  // 定义后缀数组，'-' + 4个十六进制字符 + 结束符 = 6
  char suffix[6]; 

  // 只使用芯片ID的最后2个字节，格式化成 "-XXYY" 的形式
  snprintf(suffix, sizeof(suffix), "-%02X%02X",
           (uint8_t)(chipid >> 8),  // 取出倒数第二个字节
           (uint8_t)chipid);       // 取出最后一个字节

  return String(AP_SSID_PREFIX) + suffix;
}

/**
 * @brief 获取配网页面 HTML
 */
String ApWifiConfigurator::getConfigPageHtml() {
  String html = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>)rawliteral" + translate("wifiConfigTitle", currentLanguage) + R"rawliteral(</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            position: relative; /* For positioning child elements */
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            box-sizing: border-box;
            transition: border-color 0.3s;
        }
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: scale(1.02);
        }
        #scan-btn {
            background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
            margin-bottom: 15px;
        }
        #ssid-select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            margin-top: 10px;
        }
        .status {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            border-radius: 8px;
        }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
        
        /* Language selection styling */
        .language-select-container {
            position: absolute;
            top: 20px;
            right: 25px;
            display: flex;
            align-items: center;
        }
        .globe-icon {
            width: 20px;
            height: 20px;
            stroke: #555;
            margin-right: 8px;
        }
        #language-select {
            padding: 5px;
            font-size: 14px;
            border-radius: 5px;
            border: 1px solid #ddd;
            cursor: pointer;
            background: transparent;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="language-select-container">
            <svg class="globe-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <select id="language-select" onchange="changeLanguage(this.value)">
                <option value="zh-cn" )rawliteral" + String(currentLanguage == "zh-cn" ? "selected" : "") + R"rawliteral(>简体中文</option>
                <option value="zh-tw" )rawliteral" + String(currentLanguage == "zh-tw" ? "selected" : "") + R"rawliteral(>繁體中文</option>
                <option value="en" )rawliteral" + String(currentLanguage == "en" ? "selected" : "") + R"rawliteral(>English</option>
                <option value="de" )rawliteral" + String(currentLanguage == "de" ? "selected" : "") + R"rawliteral(>Deutsch</option>
                <option value="es" )rawliteral" + String(currentLanguage == "es" ? "selected" : "") + R"rawliteral(>Español</option>
                <option value="fr" )rawliteral" + String(currentLanguage == "fr" ? "selected" : "") + R"rawliteral(>Français</option>
                <option value="it" )rawliteral" + String(currentLanguage == "it" ? "selected" : "") + R"rawliteral(>Italiano</option>
                <option value="ja" )rawliteral" + String(currentLanguage == "ja" ? "selected" : "") + R"rawliteral(>日本語</option>
                <option value="ko" )rawliteral" + String(currentLanguage == "ko" ? "selected" : "") + R"rawliteral(>한국어</option>
                <option value="pl" )rawliteral" + String(currentLanguage == "pl" ? "selected" : "") + R"rawliteral(>Polski</option>
                <option value="pt" )rawliteral" + String(currentLanguage == "pt" ? "selected" : "") + R"rawliteral(>Português</option>
                <option value="ru" )rawliteral" + String(currentLanguage == "ru" ? "selected" : "") + R"rawliteral(>Русский</option>
            </select>
        </div>
        <h1>)rawliteral" + translate("wifiConfigTitle", currentLanguage) + R"rawliteral(</h1>
        <form action="/save" method="POST">
            <div class="form-group">
                <label for="ssid">)rawliteral" + translate("ssidLabel", currentLanguage) + R"rawliteral(</label>
                <input type="text" id="ssid" name="ssid" required placeholder=")rawliteral" + translate("ssidLabel", currentLanguage) + R"rawliteral(">
                <button type="button" id="scan-btn" onclick="scanWifi()">)rawliteral" + translate("scanButton", currentLanguage) + R"rawliteral(</button>
                <select id="ssid-select" onchange="selectSsid(this.value)" style="display: none;">
                    <option value="">)rawliteral" + translate("selectWifi", currentLanguage) + R"rawliteral(</option>
                </select>
            </div>
            <div class="form-group">
                <label for="password">)rawliteral" + translate("passwordLabel", currentLanguage) + R"rawliteral(</label>
                <input type="password" id="password" name="password" placeholder=")rawliteral" + translate("passwordLabel", currentLanguage) + R"rawliteral(">
            </div>
            <button type="submit">)rawliteral" + translate("saveButton", currentLanguage) + R"rawliteral(</button>
        </form>
        <div id="status" class="status"></div>
    </div>
    <script>
        function scanWifi() {
            const status = document.getElementById('status');
            status.innerHTML = ')rawliteral" + translate("scanning", currentLanguage) + R"rawliteral(';
            status.className = 'status';

            fetch('/scan')
                .then(response => response.json())
                .then(data => {
                    const select = document.getElementById('ssid-select');
                    select.innerHTML = '<option value="">)rawliteral" + translate("selectWifi", currentLanguage) + R"rawliteral(</option>';
                    data.forEach(network => {
                        const option = document.createElement('option');
                        option.value = network.ssid;
                        option.text = `${network.ssid} (${network.rssi} dBm)`;
                        select.appendChild(option);
                    });
                    select.style.display = 'block';
                    status.innerHTML = data.length > 0 ? ')rawliteral" + translate("scanComplete", currentLanguage) + R"rawliteral(' : '未找到 WiFi';
                    status.className = data.length > 0 ? 'status success' : 'status error';
                })
                .catch(error => {
                    status.innerHTML = '扫描失败: ' + error;
                    status.className = 'status error';
                });
        }

        function selectSsid(ssid) {
            document.getElementById('ssid').value = ssid;
        }

        function changeLanguage(lang) {
            window.location.href = "/language?lang=" + lang;
        }
    </script>
</body>
</html>
)rawliteral";
  return html;
}

/**
 * @brief 翻译文本
 */
String ApWifiConfigurator::translate(const String& key, const String& lang) {
  if (languageData.count(key) && languageData[key].count(lang)) {
    return languageData[key][lang];
  }
  // 返回默认简体中文
  return languageData[key]["zh-cn"];
}

/**
 * @brief 处理 WiFi 扫描请求，返回 JSON
 */
void ApWifiConfigurator::handleScan() {
  int n = WiFi.scanNetworks();
  String json = "[";
  for (int i = 0; i < n; ++i) {
    if (i > 0)
      json += ",";
    json += "{";
    json += "\"ssid\":\"" + WiFi.SSID(i) + "\",";
    json += "\"rssi\":" + String(WiFi.RSSI(i));
    json += "}";
  }
  json += "]";
  g_web_server->send(200, "application/json", json);
  WiFi.scanDelete(); // 清理扫描结果
}

/**
 * @brief 获取保存成功页面 HTML
 */
String ApWifiConfigurator::getSuccessPageHtml() {
  String html = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>)rawliteral" + translate("configSuccessTitle", currentLanguage) + R"rawliteral(</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            text-align: center;
        }
        h1 { color: #155724; }
        p { color: #555; font-size: 16px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>)rawliteral" + translate("configSuccessTitle", currentLanguage) + R"rawliteral(</h1>
        <p>)rawliteral" + translate("configSuccessMessage1", currentLanguage) + R"rawliteral(</p>
        <p>)rawliteral" + translate("configSuccessMessage2", currentLanguage) + R"rawliteral(</p>
        <p>)rawliteral" + translate("configSuccessMessage3", currentLanguage) + R"rawliteral(</p>
    </div>
</body>
</html>
)rawliteral";
  return html;
}
/**
 * @brief 处理语言选择
 */
void ApWifiConfigurator::handleLanguage() {
    String lang = g_web_server->arg("lang");
    if (lang.length() > 0) {
        currentLanguage = lang;
        g_preferences.begin(PREF_NAMESPACE, false);
        g_preferences.putString(PREF_KEY_LANGUAGE, currentLanguage);
        g_preferences.end();
    }
    g_web_server->sendHeader("Location", "/", true);
    g_web_server->send(302, "text/plain", "");
}

/**
 * @brief 处理配网页面请求
 */
void ApWifiConfigurator::handleRoot() {
  g_web_server->send(200, "text/html", getConfigPageHtml());
}

/**
 * @brief 处理保存 WiFi 配置请求
 */
void ApWifiConfigurator::handleSave() {
  String ssid = g_web_server->arg("ssid");
  String password = g_web_server->arg("password");

  Serial.printf("Received WiFi config - SSID: %s\n", ssid.c_str());

  // 保存到持久化存储
  g_preferences.begin(PREF_NAMESPACE, false);
  g_preferences.putString(PREF_KEY_SSID, ssid);
  g_preferences.putString(PREF_KEY_PASSWORD, password);
  g_preferences.end();

  g_web_server->send(200, "text/html", getSuccessPageHtml());

  // 延时后重启
  delay(3000);
  ESP.restart();
}

/**
 * @brief 处理 404 请求（重定向到配网页面）
 */
void ApWifiConfigurator::handleNotFound() {
  // 所有未知请求都重定向到配网页面（强制门户效果）
  g_web_server->sendHeader("Location", "/", true);
  g_web_server->send(302, "text/plain", "");
}

/**
 * @brief 进入 AP 配网模式
 */
void ApWifiConfigurator::enterWifiConfigMode() {
  Serial.println("Entering WiFi AP Config Mode...");

  // 生成 AP 名称
  String ap_ssid = generateApSsid();
  Serial.printf("AP SSID: %s\n", ap_ssid.c_str());

  // 配置 AP 模式
  WiFi.mode(WIFI_AP);
  WiFi.softAPConfig(AP_IP, AP_GATEWAY, AP_SUBNET);
  WiFi.softAP(ap_ssid.c_str(), AP_PASSWORD);

  // 启动 DNS 服务器（强制门户）
  g_dns_server = new DNSServer();
  g_dns_server->start(DNS_PORT, "*", AP_IP);

  // 启动 Web 服务器
  g_web_server = new WebServer(80);
  g_web_server->on("/", std::bind(&ApWifiConfigurator::handleRoot, this));
  g_web_server->on("/scan",
                   std::bind(&ApWifiConfigurator::handleScan, this)); // 新增：WiFi 扫描路由
  g_web_server->on("/save", HTTP_POST,
                   std::bind(&ApWifiConfigurator::handleSave, this));
    g_web_server->on("/language", std::bind(&ApWifiConfigurator::handleLanguage, this)); // 语言切换
  g_web_server->onNotFound(std::bind(&ApWifiConfigurator::handleNotFound, this));
  g_web_server->begin();

  Serial.printf("Web server started at http://192.168.4.1\n");

  // 显示提示信息
  if (g_display) {
    String hint = "Connect to: " + ap_ssid + "\nBrowser: http://192.168.4.1";
    g_display->ShowStatus("WiFi Config Mode");
    g_display->SetChatMessage(Display::Role::kSystem, hint.c_str());
  }

  // 无限循环处理请求（配网完成后会重启）
  while (true) {
    g_dns_server->processNextRequest();
    g_web_server->handleClient();
    delay(10);
  }
}

/**
 * @brief 清除保存的 WiFi 凭据
 */
void ApWifiConfigurator::clearSavedWifiCredentials() {
  g_preferences.begin(PREF_NAMESPACE, false); // 打开可写模式
  g_preferences.remove(PREF_KEY_SSID);
  g_preferences.remove(PREF_KEY_PASSWORD);
  g_preferences.end();
  Serial.println("WiFi credentials cleared.");
}

/**
 * @brief 从持久化存储加载 WiFi 配置并连接
 * @return true 如果连接成功
 */
bool ApWifiConfigurator::connectToSavedWifi() {
  g_preferences.begin(PREF_NAMESPACE, true); // 只读模式
  String saved_ssid = g_preferences.getString(PREF_KEY_SSID, "");
  String saved_password = g_preferences.getString(PREF_KEY_PASSWORD, "");
  currentLanguage = g_preferences.getString(PREF_KEY_LANGUAGE, "zh-cn");
  g_preferences.end();

  if (saved_ssid.length() == 0) {
    return false;
  }

  Serial.printf("Connecting to saved WiFi: %s\n", saved_ssid.c_str());

  WiFi.mode(WIFI_STA);
  WiFi.begin(saved_ssid.c_str(), saved_password.c_str());

  int timeout = 10; // 10 秒超时
  while (WiFi.status() != WL_CONNECTED && timeout > 0) {
    delay(1000);
    Serial.print(".");
    timeout--;
  }
  Serial.println();

  if (WiFi.status() == WL_CONNECTED) {
    Serial.printf("Connected! IP: %s\n", WiFi.localIP().toString().c_str());
    return true;
  } else {
    Serial.printf("Connection failed!\n");
    return false;
  }
}