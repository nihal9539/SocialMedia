import React, { useEffect } from 'react'
import "./Posts.css"
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeLinePosts } from '../../Action/postAction'
import { useParams } from 'react-router-dom'


const Posts = () => {
    const dispatch = useDispatch();
    const params = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)
    useEffect(() => {
        dispatch(getTimeLinePosts(user._id))
    }, [])
    if (!posts) return 'No Posts';
    if (params.id) posts = posts.filter((post) => post.userId === params.id)

    return (
        <div className='Posts'>
            {
                loading ? "Fetching post" :
                    posts.map((post, id) => {
                        return (
                            <Post data={post} id={id} />
                            // <div>hi</div>
                        )
                    })}
        </div>
    )
}

export default Posts
