const ESP32S3mini = formatMessage => ({
    name: 'ESP32S3mini',
    extensionId: 'ESP32S3mini',
    version: '1.0.0',
    supportDevice: ['ESP32S3mini_arduinoEsp32S3'],
    author: 'keyes',
    description: formatMessage({
        id: 'ESP32S3mini.description',
        default: 'ESP32S3mini',
        description: 'Description of ESP32S3mini'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com)'
});

module.exports = ESP32S3mini;
