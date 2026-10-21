/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_Stepper = formatMessage => ({
    name: formatMessage({
        id: 'AI_Stepper.name',
        default: 'AI Stepper Motor'
    }),
    extensionId: 'AI_Stepper',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: 'asset/AI_Stepper.png',
    description: formatMessage({
        id: 'AI_Stepper.description',
        default: '28BYJ-48 stepper motor with ULN2003 driver for the AIBot chatbot'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});
module.exports = AI_Stepper;
