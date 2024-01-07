import React from 'react'
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import "./Post.css"
const Post = ({ data, id }) => {
    return (
        <div className='Post'>
            <img src={data.img} alt="" />

            <div className="PostReaction">
                <img src={data.liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span>{data.likes}Likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.description}</span>
            </div>
        </div>
    )
}

export default Post
