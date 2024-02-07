import React, { useState } from 'react'
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import "./Post.css"
import { useSelector } from 'react-redux'
import { likePost } from '../../api/postRequest'
import { IoMdSend } from "react-icons/io";
import Profile from "../../img/profileImg.jpg"

const Post = ({ data, id }) => {

    const { user } = useSelector((state) => state.authReducer.authData)

    const [liked, setLiked] = useState(data.like.includes(user._id))
    const [likes, setLikes] = useState(data.like.length)
    const [commentSectionOpen, setCommentSectionOpen] = useState(false)
    const [comments, setComments] = useState("")
    const [commentsArray, setCommentsArray] = useState([])
    console.log(data);
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

        setCommentsArray([...commentsArray, { comments }])
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
                    <input type="text" placeholder='Write a Comment' value={comments} onChange={(e) => setComments(e.target.value)} />
                    <button type='submit' className="s-icon">

                        <IoMdSend size={25} />

                    </button>
                </form>

            </div>
            {commentSectionOpen ?
                <div className="comment">

                    {commentsArray.length !== 0 ?
                        commentsArray.map((commments) => {

                            return (
                                <div className='commenter'>
                                    <div className='firstchild'>
                                        <img src={Profile} alt="" className='commentImage' />
                                        <div className="name">
                                        </div>
                                    </div>
                                    <div className='secondchild'>
                                        <span>Mohammed Nihal</span>
                                        <p>{commments.comments}</p>
                                    </div>


                                </div>

                            )
                        })
                        :
                        <div>
                            No comments
                            {console.log("empty")}
                        </div>
                    }


                </div>
                : ""}
        </div>
    )
}

export default Post
