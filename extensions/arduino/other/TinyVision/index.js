const tinyvision = formatMessage => ({
    name: formatMessage({
        id: 'tinyvision.name',
        default: 'TinyVision'
    }),
    extensionId: 'tinyvision',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266',],
    author: 'keyestudio',
    iconURL: `asset/tinyvision.png`,
    description: formatMessage({
        id: 'tinyvision.description',
        default: 'TinyVision AI Camera module for face, color, QR code, and card recognition.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['ai'],
    helpLink: 'https://www.keyestudio.com'
});

module.exports = tinyvision;
