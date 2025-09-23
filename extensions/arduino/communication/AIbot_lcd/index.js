/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot_lcd = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_lcd.name',
        default: ' AI chat robot with lcd'
    }),
    extensionId: 'AIbot_lcd',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AIbot.png`,
    description: formatMessage({
        id: 'AIbot_lcd.description',
        default: ' AI chat robot with lcd',
        description: 'Description of AI chat robot with lcd'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AIbot_lcd;
