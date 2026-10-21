     const EasyPlug = formatMessage => ({
    name: 'EASY Plug Control Board V2.0',
    deviceId: 'easyplug_arduinoUno',
    manufactor: 'Keyestudio',
    leanMore: 'https://docs.keyestudio.com/projects/KS0240/en/latest/docs/KS0240.html',
    iconURL: 'asset/easyplug_control_board.jpeg',
    description: formatMessage({
        id: 'EasyPlug.description',
        default: 'EASY Plug Control Board V2.0',
        description: 'Description for the EASY Plug Control Board V2.0 device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null,
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/easyplug_big.svg',
    connectionSmallIconURL: 'asset/easyplug_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['EasyPlug'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://docs.keyestudio.com/en/latest/docs/easyplug/easyplug.html'
});

module.exports = EasyPlug;
