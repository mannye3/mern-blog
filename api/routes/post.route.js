import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, getAllPosts} from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken, createPost);
router.get('/', getAllPosts);
// router.get('/post/:postId', Post);
// router.put('/post-update/:postId', verifyToken, updatePost);
// router.delete('/post-delete/:postId', verifyToken, deletePost);

export default router;