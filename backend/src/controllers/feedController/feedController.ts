import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

export default class FeedController {
  getTop500Ids = (req: Request, res: Response) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response: AxiosResponse) => {
        console.log("GET Top 500 from HN API");
        res.status(200).send(response.data);
      });
  };

  // TODO: function to get more than 50 items for infinite scrolling

  getById = (req: Request, res: Response) => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${req.params.id}.json`)
      .then((response: AxiosResponse) => {
        console.log("GET Item by Id");
        res.status(200).send(response.data);
      });
  };
}
