"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedService_1 = require("../services/feedService");
const commonService_1 = require("../services/commonService");
class FeedController {
    constructor() {
        this.getTop500Ids = (req, res) => {
            (0, feedService_1.fetchTopStories)()
                .then((data) => {
                console.log("FeedController - Get Top 500 Ids");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        // TODO: Implement these
        this.getNew500Ids = (req, res) => { };
        this.getBest500Ids = (req, res) => { };
        this.getAsk200Ids = (req, res) => { };
        this.getShow200Ids = (req, res) => { };
        this.getJob200Ids = (req, res) => { };
        this.getById = (req, res) => {
            const itemId = req.params.id;
            (0, commonService_1.fetchItemById)(itemId)
                .then((data) => {
                console.log("FeedController - Get Item by Id");
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