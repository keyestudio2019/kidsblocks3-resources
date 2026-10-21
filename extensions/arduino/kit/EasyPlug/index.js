const EasyPlug = formatMessage => ({
    name: 'EasyPlug Control Board V2.0',
    extensionId: 'EasyPlug',
    version: '2.0.0',
    supportDevice: ['easyplug_arduinoUno'],
    author: 'keyestduio',
    description: formatMessage({
        id: 'EasyPlug.description',
        default: 'EasyPlug Control Board V2.0',
        description: 'Description of EasyPlug Control Board V2.0'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://docs.keyestudio.com/en/latest/docs/easyplug/easyplug.html'
});

module.exports = EasyPlug;
