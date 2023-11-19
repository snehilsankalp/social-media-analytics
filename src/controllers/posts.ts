import { Request, Response } from 'express';
import { createPosts, getPostsById, analysePost } from '../services/postService';
import NodeCache from 'node-cache'

class postsObject {
    id: Number;
    post: String;
    "Number of Words": Number;
    "Average Word Length": Number;
}
export async function addPosts(req: Request, res: Response): Promise<void> {
    try {
        const { post } = req.body;
        if (!post){
            console.log("reached")
            res.status(400).json({ error: 'Invalid Params, Post is required' });
            return;
        }
        const newPost = await createPosts(post);
        res.json(newPost);
    }
    catch (error) {
        console.error('Error adding posts', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function getPosts(req: Request, res: Response): Promise<void> {
    try {
        const  id  = parseInt(req.params.id,10);
        if (!id){
            res.status(400).json({ error: 'Invalid Params, post id is required' });
            return;
        }
        let analysisResults;
        const postCache = new NodeCache();

        // Check if post data is cached
        const cachedPost = postCache.get<postsObject>(id.toString());
        if(cachedPost){
            res.json(cachedPost);
        }
        const newPost = await getPostsById(id);
        if(newPost){
            analysisResults  = await analysePost(newPost.post,  newPost.id);
            postCache.set(id.toString(), analysisResults)
        }
        res.json(analysisResults);
    }
    catch (error) {
        console.error('Error adding posts', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}