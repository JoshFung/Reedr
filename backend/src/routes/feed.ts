import express from "express";
import FeedController from "../controllers/feedController";

const router = express.Router();
const feedController = new FeedController();

router.get("/TopIds", feedController.getTop500Ids);
router.get("/NewIds", feedController.getNew500Ids);
router.get("/BestIds", feedController.getBest500Ids);
router.get("/AskIds", feedController.getAsk200Ids);
router.get("/ShowIds", feedController.getShow200Ids);
router.get("/JobIds", feedController.getJob200Ids);

export { router as feedRouter };
