import React, { useState } from 'react'
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import "./Post.css"
import { useSelector } from 'react-redux'
const Post = ({ data, id }) => {
    const user = useSelector((state)=>state.authReducer.authData)

const [liked,setLiked] = useState(data.like.includes(user._id))
const [likes,setLikes] = useState(data.like.length)
    return (
        <div className='Post'>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image  : ""} alt="" />

            <div className="PostReaction">
                <img src={data.liked ? Heart : NotLike} alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{color:'var(--gray)',fontSize:'12px'}}>{likes}Likes</span>

            <div className="detail">
                {/* <span ><b>{data.f}</b></span> */}
                <span>{data.desc}</span>
            </div>
        </div>
    )
}

export default Post
