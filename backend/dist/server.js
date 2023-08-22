"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const feed_1 = require("./routes/feed");
const item_1 = require("./routes/item");
const app = (0, express_1.default)();
(0, dotenv_1.config)({ path: path_1.default.join(__dirname, "..", ".env") });
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ping
app.get("/ping", (req, res) => {
    res.send("Server is running");
});
app.use("/", feed_1.feedRouter);
app.use("/item", item_1.itemRouter);
// 404
app.use("*", (req, res) => {
    res.status(404).json({ error: "404: Not Found" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map