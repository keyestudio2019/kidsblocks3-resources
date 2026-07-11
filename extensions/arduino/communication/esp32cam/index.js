const esp32cam = formatMessage => ({
    name: formatMessage({
        id: 'esp32cam',
        default: 'ESP32-CAM',
        description: 'ESP32-CAM Camera Web Server'
    }),
    extensionId: 'esp32cam',
    version: '2.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32'],
    author: 'kidsbits',
    iconURL: `asset/ESP32CAM.jpg`,
    description: formatMessage({
        id: 'esp32cam.description',
        default: 'ESP32-CAM Camera Web Server with serial control',
        description: 'Description esp32cam'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});
module.exports = esp32cam;
