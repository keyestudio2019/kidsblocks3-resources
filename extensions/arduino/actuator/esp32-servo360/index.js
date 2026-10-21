const ESP32_servo360 = formatMessage => ({
    name: formatMessage({
        id: 'ESP32_servo360',
        default: 'ESP32 Servo 360',
        description: 'ESP32 Servo 360'
    }),
    extensionId: 'ESP32_servo360',
    version: '1.6.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/servo.jpg`,
    description: formatMessage({
        id: 'ESP32_servo360.description',
        default: 'ESP32 360 degree continuous servo driver',
        description: 'Description of ESP32_servo360'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://keyestudio.com'
});

module.exports = ESP32_servo360;
