
const imagina_tdr_steam = formatMessage => ({
    name: formatMessage({
        id: 'imagina_tdr_steam',
        default: 'IMAGINA TdR STEAM V2.0',
        description: 'INNOVA DIDACTIC IMAGINA TdR STEAM V2.0 Shield'
    }),
    extensionId: 'imagina_tdr_steam',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: [
        'arduinoUno',
        'arduinoLeonardo',
        'arduinoMega2560'
    ],
    author: 'INNOVA DIDACTIC',
    iconURL: 'asset/imagina_tdr_steam.png',
    description: formatMessage({
        id: 'imagina_tdr_steam.description',
        default: 'STEAM education shield',
        description: 'Description of IMAGINA TdR STEAM V2.0 plugin'
    }),
    featured: true,
    blocks:    'blocks.js',
    generator: 'generator.js',
    toolbox:   'toolbox.js',
    msg:       'msg.js',
    library:   'lib',
    tags: ['shield'],
    helpLink: 'https://shop.innovadidactic.com/es/'
});

module.exports = imagina_tdr_steam;
