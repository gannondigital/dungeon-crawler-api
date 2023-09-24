// @todo this would live in a real datastore rather than be static
import levelOneGameData from "../game-data/levels/level-one/tiles.json" assert { type: "json" };

const levelData = {
  level_one: levelOneGameData,
};
export const getTilesForLevel = async (levelName) => {
  return levelData[`level_${levelName}`];
};
