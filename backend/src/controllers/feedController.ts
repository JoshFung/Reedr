import { Request, Response } from "express";
import { fetchTopStories } from "../services/feedService";
import { fetchItemById } from "../services/itemService";

export default class FeedController {
  getTop500Ids = (req: Request, res: Response) => {
    fetchTopStories()
      .then((data) => {
        // console.log("FeedController - Get Top 500 Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  // TODO: Implement these
  getNew500Ids = (req: Request, res: Response) => {};

  getBest500Ids = (req: Request, res: Response) => {};

  getAsk200Ids = (req: Request, res: Response) => {};

  getShow200Ids = (req: Request, res: Response) => {};

  getJob200Ids = (req: Request, res: Response) => {};
}
