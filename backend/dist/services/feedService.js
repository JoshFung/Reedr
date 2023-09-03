"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJobStories = exports.fetchShowStories = exports.fetchAskStories = exports.fetchBestStories = exports.fetchNewStories = exports.fetchTopStories = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchTopStories = () => {
    console.log("SERVICE: FETCHING TOP STORIES");
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then((response) => {
        // console.log("feedService - Fetch Top Stories");
        console.log("SERVICE: RETRIEVED TOP STORIES AND RETURNING TO CONTROLLER");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Top Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch top stories");
    });
};
exports.fetchTopStories = fetchTopStories;
const fetchNewStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/newstories.json")
        .then((response) => {
        // console.log("feedService - Fetch New Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch New Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch new stories");
    });
};
exports.fetchNewStories = fetchNewStories;
const fetchBestStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/beststories.json")
        .then((response) => {
        // console.log("feedService - Fetch Best Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Best Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch best stories");
    });
};
exports.fetchBestStories = fetchBestStories;
const fetchAskStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/askstories.json")
        .then((response) => {
        // console.log("feedService - Fetch Ask Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Ask Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch ask stories");
    });
};
exports.fetchAskStories = fetchAskStories;
const fetchShowStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/showstories.json")
        .then((response) => {
        // console.log("feedService - Fetch Show Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Show Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch show stories");
    });
};
exports.fetchShowStories = fetchShowStories;
const fetchJobStories = () => {
    return axios_1.default
        .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
        .then((response) => {
        // console.log("feedService - Fetch Job Stories");
        return response.data;
    })
        .catch((error) => {
        console.error("feedService - Fetch Job Stories FAILED");
        console.error(error);
        throw new Error("Failed to fetch job stories");
    });
};
exports.fetchJobStories = fetchJobStories;
//# sourceMappingURL=feedService.js.map