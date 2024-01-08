import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../Controller/UserController.js";

const router = express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)


export default router