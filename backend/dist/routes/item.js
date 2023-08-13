"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = __importDefault(require("express"));
const itemController_1 = __importDefault(require("../controllers/itemController"));
const router = express_1.default.Router();
exports.itemRouter = router;
const itemController = new itemController_1.default();
router.get("/post/:id", itemController.getPostById);
router.get("/comment/:id", itemController.getCommentById);
//# sourceMappingURL=item.js.map