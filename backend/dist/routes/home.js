"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const homeController_1 = __importDefault(require("../controllers/homeController/homeController"));
const router = express_1.default.Router();
exports.homeRouter = router;
const homeController = new homeController_1.default();
router.get("/Top500Ids", homeController.getTop500Ids);
router.get("/item/:id", homeController.getById);
//# sourceMappingURL=home.js.map