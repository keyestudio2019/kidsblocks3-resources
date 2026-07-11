/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AIbot_Analog = formatMessage => ({
    name: formatMessage({
        id: 'AIbot_Analog.name',
        default: ' Analog sensor for AI chat robot '
    }),
    extensionId: 'AIbot_Analog',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_Analog.png`,
    description: formatMessage({
        id: 'AIbot_Analog.description',
        default: ' Analog sensor for AI chat robot ',
        description: 'Description of AI chat robot analog sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AIbot_Analog;
