const AIbot = formatMessage => ({
    name: 'AI Chat Bot ',
    deviceId: 'AIbot_arduinoEsp32S3',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/AIbot.jpeg',
    description: formatMessage({
        id: 'AIbot.description',
        default: 'AIbot',
        description: 'Description for the AIbot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '115200',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/AIbot_big.svg',
    connectionSmallIconURL: 'asset/AIbot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['AI'],
    deviceExtensions: ['AIbot'],
    deviceExtensionsCompatible: 'arduinoEsp32S3',
    helpLink: 'https://www.keyestudio.com/)'
});

module.exports = AIbot;
