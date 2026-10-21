const ESP32Arm = formatMessage => ({
    name: 'ESP32 Robot Arm',
    extensionId: 'ESP32Arm',
    version: '1.0.2',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'ESP32Arm.description',
        default: 'Four-servo mechanical arm kit with dual-joystick control, merged with Web Page Editing PRO dashboard for ESP32.'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com'
});

module.exports = ESP32Arm;
