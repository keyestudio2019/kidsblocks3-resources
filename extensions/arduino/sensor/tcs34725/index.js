const tcs34725 = formatMessage => ({
    name: formatMessage({
        id: 'TCS34725.name',
        default: 'tcs34725 color sensor',
        description: 'tcs34725 color sensor'
    }),
    extensionId: 'tcs34725',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp32S3'],
    author: 'keyes',
    iconURL: `asset/tcs34725.jpg`,
    description: formatMessage({
        id: 'TCS34725.description',
        default: 'tcs34725 color sensor',
        description: 'Description of tcs34725 color sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = tcs34725;
