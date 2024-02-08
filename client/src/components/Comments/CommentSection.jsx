import React, { useEffect } from 'react'
import "./CommentSection.css"
import Profile from "../../img/profileImg.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { getComment } from '../../Action/CommentAction'



const CommentSection = ({ postId }) => {
    const dispatch = useDispatch()

    let { comments, loading, error } = useSelector((state) => state.commentReducer)
    useEffect(() => {
        dispatch(getComment(postId))
    }, [dispatch, postId])





    return (
        <>
            {comments.length == 0 || comments.constructor !== Array ? "No comment" : comments?.map((comment) => {
                return (
                    <div className='commenter'>
                        <div className='firstchild'>
                            <img src={Profile} alt="" className='commentImage' />
                            <div className="name">
                            </div>
                        </div>
                        <div className='secondchild'>
                            <span>Mohammed Nihal</span>
                            <p>{comment?.comment}</p>
                        </div>


                    </div>
                )

            })}



        </>

    )
}

export default CommentSection
