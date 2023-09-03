"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedService_1 = require("../services/feedService");
class FeedController {
    constructor() {
        this.getTop500Ids = (req, res) => {
            console.log("CONTROLLER: GET TOP 500 IDS");
            (0, feedService_1.fetchTopStories)()
                .then((data) => {
                // console.log("FeedController - Get 500 Top Ids");
                console.log("CONTROLLER: RETRIEVED TOP STORIES FROM SERVICE AND RETURNING TO ROUTER");
                res.status(200).send(data);
                console.log("CONTROLLER: RESPONSE STATUS SHOULD BE 200 AND GOOD");
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getNew500Ids = (req, res) => {
            (0, feedService_1.fetchNewStories)()
                .then((data) => {
                // console.log("FeedController - Get 500 New Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getBest500Ids = (req, res) => {
            (0, feedService_1.fetchBestStories)()
                .then((data) => {
                // console.log("FeedController - Get 500 Best Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getAsk200Ids = (req, res) => {
            (0, feedService_1.fetchAskStories)()
                .then((data) => {
                // console.log("FeedController - Get 200 Ask Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getShow200Ids = (req, res) => {
            (0, feedService_1.fetchShowStories)()
                .then((data) => {
                // console.log("FeedController - Get 500 Show Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getJob200Ids = (req, res) => {
            (0, feedService_1.fetchJobStories)()
                .then((data) => {
                // console.log("FeedController - Get 200 Job Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
    }
}
exports.default = FeedController;
//# sourceMappingURL=feedController.js.map