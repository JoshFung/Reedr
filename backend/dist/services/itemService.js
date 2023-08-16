"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchItemById = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchItemById = (id) => {
    return axios_1.default
        .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => {
        // console.log("itemService - Fetch Item by Id");
        return response.data;
    })
        .catch((error) => {
        console.error("itemService - Fetch Item by Id FAILED");
        console.error(error);
        throw new Error("Failed to fetch item by id");
    });
};
exports.fetchItemById = fetchItemById;
//# sourceMappingURL=itemService.js.map