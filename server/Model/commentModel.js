import mongoose from "mongoose"


// Define the Comment schema
const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        ref:'user',
        required: true
    },
    postId: {
        type: String,
        // ref: 'Post',
        required: true
    },

},
    {
        timestamps: true
    }

);

// Create Comment model
const CommentModel = mongoose.model('Comment', commentSchema);
export default CommentModel;
