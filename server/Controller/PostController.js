import PostModel from "../Model/postModel.js";


export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getPost = async (req, res) => {
    // const newPost = new PostModel(req.body);
    const { id } = req.params


    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const updatePost = async (req, res) => {
    const { userId } = req.body;
    const postId = req.params.id


    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("post updated")
        } else {

            res.status(403).json("Action for hidden")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const deletePost = async (req, res) => {
    const postId = req.params.id


    try {
        const { userId } = req.body;
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.deleteOne()
            res.status(200).json("post delete")
        } else {

            res.status(403).json("Action for hidden")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const likePost = async (req, res) => {
    const id = req.params.id

    const { userId } = req.body;
  
    try {
        const post = await PostModel.findById(id)
        if (post !== null && post.userId == userId) {
            if (!post.like.includes(userId)) {
                await PostModel.findByIdAndUpdate(id ,{ $push: {like:userId}})
                res.status(200).json("post liked")
            } else {
                await PostModel.findByIdAndUpdate(id ,{ $pull: {like:userId}})
                res.status(200).json("post unlike")


            }
        } else {
            res.status(403).json("post not found")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}