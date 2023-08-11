"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTopStories = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchTopStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then((response) => {
        console.log("feedService - Fetch Top Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Top Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch top stories");
    });
};
exports.fetchTopStories = fetchTopStories;
//# sourceMappingURL=feedService.js.map