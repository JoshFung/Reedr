import express from "express";
import FeedController from "../controllers/feedController";

const router = express.Router();
const feedController = new FeedController();

router.get("/Top500Ids", feedController.getTop500Ids);

export { router as feedRouter };
