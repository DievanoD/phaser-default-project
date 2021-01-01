import Phaser from 'phaser';

import DefaultScene from './scenes/DefaultScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    audio: {
        disableWebAudio: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            //debug: true
        }
    },
    scene: [DefaultScene]
};

export default new Phaser.Game(config);