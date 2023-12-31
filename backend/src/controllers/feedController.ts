import { Request, Response } from "express";
import {
  fetchTopStories,
  fetchNewStories,
  fetchBestStories,
  fetchAskStories,
  fetchShowStories,
  fetchJobStories,
} from "../services/feedService";

export default class FeedController {
  getTop500Ids = (req: Request, res: Response) => {
    console.log("CONTROLLER: GET TOP 500 IDS");
    fetchTopStories()
      .then((data) => {
        // console.log("FeedController - Get 500 Top Ids");
        console.log(
          "CONTROLLER: RETRIEVED TOP STORIES FROM SERVICE AND RETURNING TO ROUTER"
        );
        res.status(200).send(data);
        console.log("CONTROLLER: RESPONSE STATUS SHOULD BE 200 AND GOOD");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getNew500Ids = (req: Request, res: Response) => {
    fetchNewStories()
      .then((data) => {
        // console.log("FeedController - Get 500 New Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getBest500Ids = (req: Request, res: Response) => {
    fetchBestStories()
      .then((data) => {
        // console.log("FeedController - Get 500 Best Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getAsk200Ids = (req: Request, res: Response) => {
    fetchAskStories()
      .then((data) => {
        // console.log("FeedController - Get 200 Ask Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getShow200Ids = (req: Request, res: Response) => {
    fetchShowStories()
      .then((data) => {
        // console.log("FeedController - Get 500 Show Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  getJob200Ids = (req: Request, res: Response) => {
    fetchJobStories()
      .then((data) => {
        // console.log("FeedController - Get 200 Job Ids");
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };
}
