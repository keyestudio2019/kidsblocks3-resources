/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const AI_DHT11 = formatMessage => ({
    name: formatMessage({
        id: 'AI_DHT11.name',
        default: 'AI chat robot with DHT11'
    }),
    extensionId: 'AI_DHT11',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32S3'],
    author: 'keyestudio',
    iconURL: `asset/AI_DHT11.png`,
    description: formatMessage({
        id: 'AI_DHT11.description',
        default: 'AI chat robot with DHT11 temperature & humidity sensor',
        description: 'Description of AI_DHT11'
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

module.exports = AI_DHT11;
