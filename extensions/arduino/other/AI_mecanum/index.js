/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_mecanum = formatMessage => ({
    name: formatMessage({
        id: 'AI_mecanum.name',
        default: 'AI Mecanum Wheel Car For chat robot'
    }),
    extensionId: 'AI_mecanum',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/ai_mecanum.png`,
    description: formatMessage({
        id: 'AI_mecanum.description',
        default: 'AI Mecanum Wheel Car For chat robot (4 motors, 8 IO pins, omnidirectional motion, omnidirectional motion, omnidirectional motion, omnidirectional motion, omnidirectional motion)',
        description: 'Description of AI_mecanum'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_mecanum;
