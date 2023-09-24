import express from "express";
import { getTilesForLevel } from "./services/level-tiles.mjs";
import { getAllMonsters } from "./services/monsters.mjs";
import { getAllItems } from "./services/items.mjs";
export const dungeonRouter = express.Router();

// for now this api simply returns the entire data set, since that's
// what the front end is still expecting
dungeonRouter.get("/tiles/:levelName", async (req, res) => {
  try {
    const {
      params: { levelName },
    } = req;
    console.log(`tiles request received for level ${levelName}`);
    const tileData = await getTilesForLevel(levelName);
    res.json({
      data: tileData,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});
dungeonRouter.get("/monsters/", async (req, res) => {
  try {
    const monsterData = await getAllMonsters();
    res.json({
      data: monsterData,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
dungeonRouter.get("/items/", async (req, res) => {
  try {
    const itemsData = await getAllItems();
    res.json({
      data: itemsData,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});
export default dungeonRouter;
