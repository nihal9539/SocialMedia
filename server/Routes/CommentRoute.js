import express from "express";
import { createComment, getCommentsForPost } from "../Controller/CommentController.js";

const router = express.Router()

router.post('/',createComment)
router.get('/:postId',getCommentsForPost)




export default router