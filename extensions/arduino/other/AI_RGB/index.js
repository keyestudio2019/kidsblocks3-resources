/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_RGB = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_RGB.name',
        default: 'RGB LED For chat robot '
    }),
    extensionId: 'AI_RGB',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_RGB.jpg`,
    description: formatMessage({
        id: 'AIbot_RGB.description',
        default: ' AI_RGB For chat robot ',
        description: 'Description of AI_RGB '
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    library: 'lib',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_RGB;
