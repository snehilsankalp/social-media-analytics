"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPosts = void 0;
const postService_1 = require("../services/postService");
function addPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { post } = req.body;
            if (!post) {
                res.status(400).json({ error: 'Invalid Params, Post is required' });
                return;
            }
            // res.status(400)
            const newPost = yield (0, postService_1.createPosts)(post);
            res.json(newPost);
        }
        catch (error) {
            console.error('Error adding posts', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.addPosts = addPosts;
//# sourceMappingURL=posts.js.map