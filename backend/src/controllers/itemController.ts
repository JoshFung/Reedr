import { Request, Response } from "express";
import { fetchItemById } from "../services/itemService";

export default class ItemController {
  getPostById = (req: Request, res: Response) => {
    const postId = req.params.id;
    fetchItemById(postId)
      .then((data) => {
        // console.log("ItemController - Get Post by ID");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getCommentById = (req: Request, res: Response) => {
    const commentId = req.params.id;
    fetchItemById(commentId)
      .then((data) => {
        // console.log("ItemController - Get Comment by Id");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };
}
