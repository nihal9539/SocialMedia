import React, { useEffect, useState } from 'react'
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import "./Post.css"
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../api/postRequest'
import { IoMdSend } from "react-icons/io";
import Profile from "../../img/profileImg.jpg"
import { createComment, getComment } from '../../Action/CommentAction'

const Post = ({ data, id }) => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)

    const [liked, setLiked] = useState(data.like.includes(user._id))
    const [likes, setLikes] = useState(data.like.length)
    const [commentSectionOpen, setCommentSectionOpen] = useState(false)
    const [comment, setComments] = useState("")
    let { comments, loading ,uploading } = useSelector((state) => state.commentReducer)
    useEffect(() => {
        dispatch(getComment(data._id))
    }, [comment])
    const handleLike = () => {
        setLiked((prev) => !prev)
        likePost(data._id, user._id)
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }
    const commentOpen = () => {
        setCommentSectionOpen(!commentSectionOpen)
        
    }
    const handlecomment = (e) => {
        e.preventDefault()
        const  commentss ={
            userId : user._id,
            postId:data._id,
            comment:comment
        }
        try {
            dispatch(createComment(commentss))
        } catch (error) {
            console.log(error);
        }
        setComments("")
        
    }
  
    return (
        <div className='Post'>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

            <div className="PostReaction">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
                <img src={Comment} alt="" onClick={commentOpen} />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: 'var(--gray)', fontSize: '12px' }}>{likes}Likes</span>

            <div className="detail">
                <span>{data.desc}</span>
            </div>
            <div className='LogoSearch'>
                {/* <img src={Logo} alt="" /> */}
                <form onSubmit={handlecomment} className="search">
                    <input type="text" placeholder='Write a Comment' value={comment} onChange={(e) => setComments(e.target.value)} />
                    <button type='submit' className="s-icon">

                        <IoMdSend size={25} />

                    </button>
                </form>

            </div>
            {commentSectionOpen ?
                <div className="comment">

                    { loading || uploading ? "loading..":
                        comments.map((commments) => {

                            return (
                                <div className='commenter'>
                                    <div className='firstchild'>
                                        <img src={Profile} alt="" className='commentImage' />
                                        <div className="name">
                                        </div>
                                    </div>
                                    <div className='secondchild'>
                                        <span>Mohammed Nihal</span>
                                        <p>{commments.comment}</p>
                                    </div>


                                </div>

                            )
                        })
                       
                    }


                </div>
                : ""}
        </div>
    )
}

export default Post
