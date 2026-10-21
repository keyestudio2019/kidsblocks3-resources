const tinyVisionMonitor = formatMessage => ({
    name: formatMessage({
        id: 'tinyvision_monitor',
        default: 'TinyVision Video Monitor',
        description: 'TinyVision ESP32-S3 video monitoring module'
    }),
    extensionId: 'tinyvision_monitor',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32S3'],
    author: 'kidsbits',
    iconURL: 'asset/tinyvision_monitor.png',
    description: formatMessage({
        id: 'tinyvision_monitor.description',
        default: 'GC2145 camera, MJPEG video monitoring and web control for TinyVision',
        description: 'TinyVision monitor extension description'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication', 'robotics'],
    helpLink: 'https://www.keyestudio.com/'
});
module.exports = tinyVisionMonitor;
