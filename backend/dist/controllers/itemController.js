"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemService_1 = require("../services/itemService");
class ItemController {
    constructor() {
        this.getPostById = (req, res) => {
            const postId = req.params.id;
            (0, itemService_1.fetchItemById)(postId)
                .then((data) => {
                // console.log("ItemController - Get Post by ID");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
        this.getCommentById = (req, res) => {
            const commentId = req.params.id;
            (0, itemService_1.fetchItemById)(commentId)
                .then((data) => {
                // console.log("ItemController - Get Comment by Id");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
    }
}
exports.default = ItemController;
//# sourceMappingURL=itemController.js.map