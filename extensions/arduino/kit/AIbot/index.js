/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot = formatMessage => ({
    name: 'AI Chat Bot',
    extensionId: 'AIbot',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AIbot.jpeg`,
    description: formatMessage({
        id: 'AIbot.description',
        default: ' AI chat robot ',
        description: 'Description of AI chat robot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'www.keyestudio.com'
});

module.exports = AIbot;
