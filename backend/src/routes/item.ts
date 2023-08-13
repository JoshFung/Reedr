import express from "express";
import ItemController from "../controllers/itemController";

const router = express.Router();
const itemController = new ItemController();

router.get("/post/:id", itemController.getPostById);
router.get("/comment/:id", itemController.getCommentById);

export { router as itemRouter };
