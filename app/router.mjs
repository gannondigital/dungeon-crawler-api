import express from "express";
import { getTilesForLevel } from "./services/level-tiles.mjs";
import { getAllMonsters } from "./services/monsters.mjs";
import { getAllItems } from "./services/items.mjs";
import { logger } from "./util/logger.mjs";
export const dungeonRouter = express.Router();

// for now this api simply returns the entire data set, since that's
// what the front end is still expecting
dungeonRouter.get("/tiles/:levelName?", async (req, res) => {
  try {
    const {
      params: { levelName },
    } = req;
    logger.log(`tiles request received for level ${levelName}`);
    if (typeof levelName !== "string" || !levelName) {
      const errMsg = `Invalid levelName received: ${levelName}`;
      logger.error(new TypeError(errMsg));
      res.status(400).json({
        error: errMsg,
      });
      return;
    }
    const tileData = await getTilesForLevel(levelName);
    res.json({
      data: tileData,
    });
  } catch (error) {
    logger.error("error handling tiles request:");
    logger.error(error);
    res.status(500).json({
      error,
    });
  }
});
dungeonRouter.get("/monsters/", async (req, res) => {
  try {
    logger.log("monsters request received");
    const monsterData = await getAllMonsters();
    res.json({
      data: monsterData,
    });
  } catch (error) {
    logger.error("error handling monsters request:");
    logger.error(error);
    res.status(500).json(error);
  }
});
dungeonRouter.get("/items/", async (req, res) => {
  try {
    logger.log("items request received");
    const itemsData = await getAllItems();
    res.json({
      data: itemsData,
    });
  } catch (error) {
    logger.error("error handling items request");
    logger.error(error);
    res.status(500).json({
      error,
    });
  }
});
export default dungeonRouter;
