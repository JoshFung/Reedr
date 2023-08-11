"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedRouter = void 0;
const express_1 = __importDefault(require("express"));
const feedController_1 = __importDefault(require("../controllers/feedController"));
const router = express_1.default.Router();
exports.feedRouter = router;
const feedController = new feedController_1.default();
router.get("/Top500Ids", feedController.getTop500Ids);
router.get("/posts/:id", feedController.getById);
//# sourceMappingURL=feed.js.map