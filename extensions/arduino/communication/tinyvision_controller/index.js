const tinyVisionController = formatMessage => ({
    name: formatMessage({
        id: 'tinyvision_controller',
        default: 'TinyVision Controller',
        description: 'TinyVision vehicle main-board controller'
    }),
    extensionId: 'tinyvision_controller',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoNano','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp32s3','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: 'asset/tinyvision_controller.png',
    description: formatMessage({
        id: 'tinyvision_controller.description',
        default: 'Receive TinyVision video-module commands on a Arduino、ESP32 board',
        description: 'TinyVision controller extension description'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});
module.exports = tinyVisionController;
