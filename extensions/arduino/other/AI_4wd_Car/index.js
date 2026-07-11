/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_4wd_Car = formatMessage => ({
    name: formatMessage({
        id: 'AI_4wd_Car.name',
        default: '4WD Car For chat robot'
    }),
    extensionId: 'AI_4wd_Car',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/4wd.png`,
    description: formatMessage({
        id: 'AI_4wd_Car.description',
        default: '4WD Car For chat robot (4 motors, 8 IO pins)',
        description: 'Description of AI_4wd_Car'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_4wd_Car;
