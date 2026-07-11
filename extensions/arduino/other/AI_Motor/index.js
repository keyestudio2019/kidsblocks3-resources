/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot_motor = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_motor.name',
        default: 'AI chat robot with motor'
    }),
    extensionId: 'AIbot_motor',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_motor.png`,
    description: formatMessage({
        id: 'AIbot_motor.description',
        default: ' AI chat robot with motor',
        description: 'Description of AI chat robot with motor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AIbot_motor;
