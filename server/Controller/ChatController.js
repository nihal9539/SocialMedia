import ChatModel from "../Model/ChatModel.js";


// Register New User
export const createChat = async (req, res) => {
    console.log("hii");
    console.log(req.body.senderId, req.body.receiverId);
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        let chat = await newChat.save();
        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)

    }


}
export const userChats = async (req, res) => {

    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)

    }


}
export const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
            members: { $all: [req.params.firstId, req.params.secondId] }
        })
        console.log(chat);
        res.status(200).json(chat)


    } catch (error) {
        res.status(500).json(error)


    }

}

