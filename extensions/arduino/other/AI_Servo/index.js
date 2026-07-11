/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot_servo = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_servo.name',
        default: 'AI chat robot with servo'
    }),
    extensionId: 'AIbot_servo',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_Servo.png`,
    description: formatMessage({
        id: 'AIbot_servo.description',
        default: ' AI chat robot with servot',
        description: 'Description of AI chat robot with servo'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AIbot_servo;
