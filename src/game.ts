/// <reference path="../node_modules/phaser/types/SpineGameObject.d.ts" />
/// <reference path="../node_modules/phaser/types/SpinePlugin.d.ts" />

import "./style.css";
import "phaser/plugins/spine/dist/SpinePlugin";

import { AUTO, Game, Types } from "phaser";

import LoadingScene from "./scenes/loading-scene";

const gameConfig: Types.Core.GameConfig = {
  title: "Slavianica",
  type: AUTO,
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
