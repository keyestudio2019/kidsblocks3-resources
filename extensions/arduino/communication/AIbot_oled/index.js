/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot_oled = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_oled.name',
        default: ' AI chat robot with oled'
    }),
    extensionId: 'AIbot_oled',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AIbot.png`,
    description: formatMessage({
        id: 'AIbot_oled.description',
        default: ' AI chat robot with oled',
        description: 'Description of AI chat robot with oled'
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

module.exports = AIbot_oled;
