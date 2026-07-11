const ESP32S3mini = formatMessage => ({
    name: 'ESP32S3mini development board',
    deviceId: 'ESP32S3mini_arduinoEsp32S3',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/ESP32S3mini.jpg',
    description: formatMessage({
        id: 'ESP32S3mini.description',
        default: 'ESP32S3mini',
        description: 'Description for the ESP32S3mini device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ESP32S3mini_big.svg',
    connectionSmallIconURL: 'asset/ESP32S3mini_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['ESP32S3mini'],
    deviceExtensionsCompatible: 'arduinoEsp32S3',
    helpLink: 'https://www.keyestudio.com/)'
});

module.exports = ESP32S3mini;
