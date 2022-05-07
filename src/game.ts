import "./style.css";
import "phaser/plugins/spine/dist/SpinePlugin";

import Phaser, { Game, Types } from "phaser";

import LoadingScene from "./scenes/loading-scene";

const gameConfig: Types.Core.GameConfig = {
  title: "Slavianica",
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  backgroundColor: "#000000",
  plugins: {
    scene: [{ key: "SpinePlugin", plugin: (window as any).SpinePlugin, mapping: "spine" }],
  },
  scene: [LoadingScene],
};

export const game = new Game(gameConfig);
