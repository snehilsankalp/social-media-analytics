import express from 'express';
import { addPosts, getPosts } from '../controllers/posts';


const router = express.Router();

router.post('/v1/posts', addPosts);
router.get('/v1/posts/:id/analysis/', getPosts);

export default router;