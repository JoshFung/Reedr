import express from "express";
import HomeController from "../controllers/homeController/homeController";

const router = express.Router();
const homeController = new HomeController();

router.get("/", homeController.getTop500);

export { router as homeRouter };
