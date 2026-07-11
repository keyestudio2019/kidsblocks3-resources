const veml6040 = formatMessage => ({
    name: formatMessage({
        id: 'veml6040',
        default: 'Color Recognition',
        description: 'VEML6040 Color Recognition Sensor'
    }),
    extensionId: 'veml6040',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266', 'arduinoEsp32S3'],
    author: 'kidsbits',
    iconURL: `asset/KD2115.jpg`,
    description: formatMessage({
        id: 'veml6040.description',
        default: 'VEML6040 RGBW Color Recognition Sensor - reads R/G/B/W raw values, RGB888, color temperature (CCT) and ambient light (Lux)',
        description: 'Description of VEML6040 Color Recognition Sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.kidsbits.cc/'
});
module.exports = veml6040;
