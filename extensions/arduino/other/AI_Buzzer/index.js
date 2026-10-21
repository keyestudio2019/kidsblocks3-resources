/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_Buzzer = formatMessage => ({
    name: formatMessage({
        id: 'AI_Buzzer.name',
        default: 'AI Passive Buzzer'
    }),
    extensionId: 'AI_Buzzer',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: 'asset/AI_Buzzer.png',
    description: formatMessage({
        id: 'AI_Buzzer.description',
        default: 'Passive buzzer control and built-in music playback for the AIBot chatbot',
        description: 'Description of AI passive buzzer extension'
    }),
    featured: true,
    library: 'lib',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_Buzzer;
