/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_Ultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'AI_Ultrasonic.name',
        default: ' AI chat robot with Ultrasonic'
    }),
    extensionId: 'AI_Ultrasonic',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_Ultrasonic.png`,
    description: formatMessage({
        id: 'AI_Ultrasonic.description',
        default: ' AI chat robot with Ultrasonic',
        description: 'Description of AI_Ultrasonic'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = AI_Ultrasonic;
