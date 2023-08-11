import { Request, Response } from "express";
import { fetchItemById } from "../services/commonService";

export default class PostController {
  getById = (req: Request, res: Response) => {
    const itemId = req.params.id;
    fetchItemById(itemId)
      .then((data) => {
        console.log("PostController - Get Item by Id");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };
}
