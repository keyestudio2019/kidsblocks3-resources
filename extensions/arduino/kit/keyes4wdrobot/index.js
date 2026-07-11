const keyes4WDRobot = formatMessage => ({
    name: 'keyes 4WD Robot',
    extensionId: 'keyes4WDRobot',
    version: '1.0.0',
    supportDevice: ['keyes4WDRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'keyes4WDRobot.description',
        default: 'keyes4WDRobot',
        description: 'Description of keyes 4WD Robot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: ''
});

module.exports = keyes4WDRobot;
