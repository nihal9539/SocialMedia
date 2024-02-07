import CommentModel from "../Model/commentModel.js";



// Controller function to create a new comment
 export const createComment = async (req, res) => {
    try {
        const { content, postId } = req.body;

        // Create a new comment
        const comment = new CommentModel({
            content,
            user: userId,
            post: postId
        });

        // Save the comment to the database
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Could not create comment' });
    }
};

// Controller function to get comments for a specific post
export const  getCommentsForPost = async (req, res) => {
    try {
        const postId = req.params.postId;

        // Find comments for the specified post
        const comments = await CommentModel.find({ post: postId }).populate('user');

        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Could not fetch comments' });
    }
};

// Controller function to delete a comment
// exports.deleteComment = async (req, res) => {
//     try {
//         const commentId = req.params.commentId;

//         // Find the comment by ID and delete it
//         await Comment.findByIdAndDelete(commentId);

//         res.json({ message: 'Comment deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting comment:', error);
//         res.status(500).json({ error: 'Could not delete comment' });
//     }
// };
