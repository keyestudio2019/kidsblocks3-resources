/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_LED = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_LED.name',
        default: 'LED For chat robot '
    }),
    extensionId: 'AI_LED',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_LED.png`,
    description: formatMessage({
        id: 'AIbot_LED.description',
        default: ' AI_LED For chat robot ',
        description: 'Description of AI_LED '
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_LED;
