const ESP32Arm = formatMessage => ({
    name: 'ESP32 Robot Arm',
    deviceId: 'esp32arm_arduinoEsp32',
    manufactor: 'keyestudio',
    iconURL: 'asset/esp32arm.jpg',
    description: formatMessage({
        id: 'ESP32Arm.description',
        default: 'ESP32 Arm Robot Arm',
        description: 'Description for the ESP32 Robot arm'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/esp32arm_big.svg',
    connectionSmallIconURL: 'asset/esp32arm_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['ESP32Arm'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://docs.espressif.com/projects/arduino-esp32/en/latest/'
});

module.exports = ESP32Arm;
