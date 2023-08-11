import express from "express";
import PostController from "../controllers/postController";

const router = express.Router();
const postController = new PostController();

router.get("/comments/:id", postController.getById);

export { router as postRouter };
