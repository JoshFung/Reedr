import express from "express";
import HomeController from "../controllers/homeController/homeController";

const router = express.Router();
const homeController = new HomeController();

router.get("/Top500Ids", homeController.getTop500Ids);
router.get("/item/:id", homeController.getById);

export { router as homeRouter };
