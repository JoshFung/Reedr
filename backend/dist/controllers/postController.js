"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonService_1 = require("../services/commonService");
class PostController {
    constructor() {
        this.getById = (req, res) => {
            const itemId = req.params.id;
            (0, commonService_1.fetchItemById)(itemId)
                .then((data) => {
                console.log("PostController - Get Item by Id");
                res.status(200).send(data);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        };
    }
}
exports.default = PostController;
//# sourceMappingURL=postController.js.map