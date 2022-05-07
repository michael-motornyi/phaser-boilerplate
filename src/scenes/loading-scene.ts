import { Scene, Types } from "phaser";

const sceneConfig: Types.Scenes.SettingsConfig = {};

class LoadingScene extends Scene {
  constructor() {
    super(sceneConfig);
  }

  preload(): void {
    this.load.image("logo", "slavianica_logo.png");
  }

  create(): void {
    const center = {
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
    };
    const logo = this.add.sprite(center.x, center.y, "logo");
    logo.setOrigin(0.5, 0.5);
  }
}

export default LoadingScene;
