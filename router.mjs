import express from "express";
export const dungeonRouter = express.Router();

dungeonRouter.use("*", (req, res, next) => {});
export default dungeonRouter;
