import { Scene, Types } from "phaser";

const sceneConfig: Types.Scenes.SettingsConfig = {};

class LoadingScene extends Scene {
  constructor() {
    super(sceneConfig);
  }

  preload(): void {
    this.load.image("logo", "slavianica_logo.png");
    this.load.spine("spineboy", "spine/spineboy.json", ["spine/spineboy.atlas"], true);
    this.load.spine("fire", "spine-fire/Fire.json", ["spine-fire/Fire.atlas"], true);
  }

  moveSpine(spine: SpineGameObject): void {
    spine.x += 1;
  }

  create(): void {
    const center = {
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
    };
    const logo = this.add.sprite(center.x, center.y, "logo");
    logo.setOrigin(0.5, 0.5);

    const spineBoy = this.add.spine(400, 600, "spineboy", "idle", true);
    spineBoy.scaleX = 0.7;
    spineBoy.scaleY = 0.7;

    const fire = this.add.spine(500, 100, "fire", "fly", true);
    fire.scaleX = 0.6;
    fire.scaleY = 0.5;

    setInterval(() => {
      this.moveSpine(fire);
    }, 100);
  }
}

export default LoadingScene;
