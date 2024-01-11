import React, { useEffect } from 'react'
import "./Posts.css"
import { PostsData } from '../../data/Posts'
import Post from '../Post/Post'
import { useDispatch,useSelector } from 'react-redux'
import { getTimeLinePosts } from '../../Action/postAction'


const Posts = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.authReducer.authData)
    const {posts,loading} = useSelector((state)=>state.postReducer)

    useEffect(()=>{
        dispatch(getTimeLinePosts(user._id))
    },[])
    return (
        <div className='Posts'>
            {
            loading ? "Fetching post":
            posts.map((post, id) => {
                return (
                    <Post data={post} id={id}/>
                    // <div>hi</div>
                )
            })}
        </div>
    )
}

export default Posts
