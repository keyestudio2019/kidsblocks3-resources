const keyes4WDRobot = formatMessage => ({
    name: 'Keyes 4WD Robot',
    deviceId: 'keyesRobot_arduinoUno',
    manufactor: 'keyes',
    leanMore: '',
    iconURL: 'asset/4wdrobot.jpg',
    description: formatMessage({
        id: 'keyes4WDRobot.description',
        default: 'keyes4WDRobot',
        description: 'Description for the keyes 4WD Robot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/4wdrobot_big.svg',
    connectionSmallIconURL: 'asset/4wdrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['robot'],
    deviceExtensions: ['keyes4WDRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: ''
});

module.exports = keyes4WDRobot;
