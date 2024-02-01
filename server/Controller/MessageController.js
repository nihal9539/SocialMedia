import MessageModel from "../Model/MessageModel.js"


export const addMessage =async (req,res)=>{
  const {chatId,senderId,text} = req.body
  console.log(req.body);

  const message = new MessageModel({
    chatId,
    senderId,
    text
  })
    try {

        const response = await message.save()
        res.status(200).json(response)
        
    } catch (error) {
        
        res.status(500).json(error)
    }
    
}
export const getMessage =async (req,res)=>{
  const {chatId} = req.params
  console.log(chatId);


    try {

        const result = await MessageModel.find({chatId})
        res.status(200).json(result)
        
    } catch (error) {
        
        res.status(500).json(error)
    }
    
}