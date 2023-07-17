"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class HomeController {
    constructor() {
        this.getTop500Ids = (req, res) => {
            axios_1.default
                .get("https://hacker-news.firebaseio.com/v0/topstories.json")
                .then((response) => {
                console.log("GET Top 500");
                res.status(200).send(response.data);
            });
        };
        this.getById = (req, res) => {
            axios_1.default
                .get("https://hacker-news.firebaseio.com/v0/item/" + req.params.id + ".json")
                .then((response) => {
                console.log("GET Item by Id");
                res.status(200).send(response.data);
            });
        };
    }
}
exports.default = HomeController;
//# sourceMappingURL=homeController.js.map