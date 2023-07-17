import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

export default class HomeController {
  getTop500 = (req: Request, res: Response) => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response: AxiosResponse) => {
        console.log("GET Top 500");
        res.status(200).send(response.data);
      });
  };
}
