import Phaser from 'phaser';

const COVER_KEY = 'cover';

export default class DefaultScene extends Phaser.Scene {
    constructor() {
        super('DefaultScene');

        this.gameW = undefined;
        this.gameH = undefined;
    }

    preload() {
        this.gameW = this.game.config.width;
        this.gameH = this.game.config.height;

        this.load.image(COVER_KEY, 'assets/cover.png');
    }

    create() {
        this.add.image(this.gameW / 2, this.gameH / 2, COVER_KEY);
    }

    update() {

    }

}