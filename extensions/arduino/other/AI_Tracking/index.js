/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_Tracking = formatMessage => ({
    name: formatMessage({
        id: 'AI_Tracking.name',
        default: 'AI I2C 5-Way Line Tracking Module'
    }),
    extensionId: 'AI_Tracking',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: 'asset/AI_Tracking.png',
    description: formatMessage({
        id: 'AI_Tracking.description',
        default: 'PCF8574-based I2C 5-way line tracking module for the AIBot chatbot'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});
module.exports = AI_Tracking;
