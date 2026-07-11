const camController = formatMessage => ({
    name: formatMessage({
        id: 'camController.name',
        default: 'CAM Controller',
        description: 'CAM Controller plugin name'
    }),
    extensionId: 'camController',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMega2560', 'arduinoEsp32', 'arduinoRaspberryPiPico', 'arduinoEsp32S3'],
    author: 'kidsbits',
    iconURL: 'asset/cam_controller.jpg',
    description: formatMessage({
        id: 'camController.description',
        default: 'Main controller plugin: send serial commands to ESP32-CAM, read button with debounce, control IO pins',
        description: 'CAM Controller plugin description'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});
module.exports = camController;
