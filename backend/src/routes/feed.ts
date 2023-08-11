import express from "express";
import FeedController from "../controllers/feedController";

const router = express.Router();
const feedController = new FeedController();

router.get("/Top500Ids", feedController.getTop500Ids);
router.get("/posts/:id", feedController.getById);

export { router as feedRouter };
