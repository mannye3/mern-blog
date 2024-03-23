import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const createPost = async (req, res, next) => {

    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }


    if(!req.body.title || !req.body.content){
        return next(errorHandler(400, 'All fields are required'));
    }

    const slug = req.body.title.split('').join('-').toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');


    const NewPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id,
    })

    try {
        const savedpost = await NewPost.save();
        res.status(201).json(savedpost);
    } catch (error) {
        next(error);
    }
    
}



export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
}
