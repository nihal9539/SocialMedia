import express from "express";
import { createChat, findChat, userChats } from "../Controller/ChatController";


const router = express.Router()

router.post('/',createChat)
router.post('/:userId',userChats)
router.post('/find/:firstId/:secondId',findChat)

export default router