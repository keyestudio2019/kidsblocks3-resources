/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_2wd_Car = formatMessage => ({
    name: formatMessage({
        id: 'AI_2wd_Car.name',
        default: 'Car For chat robot '
    }),
    extensionId: 'AI_2wd_Car',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/2wd.png`,
    description: formatMessage({
        id: 'AI_2wd_Car.description',
        default: ' wd_Car For chat robot ',
        description: 'Description of AI_2wd_Car '
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_2wd_Car;
