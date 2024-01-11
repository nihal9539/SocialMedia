import React, { useState } from 'react'
import Profile from "../../img/profileImg.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../Action/userAction'

const User = ({ person, id }) => {
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow = () => {
        following ?
            dispatch(unfollowUser(person._id, user))
            :
            dispatch(followUser(person._id, user))

            setFollowing((prev)=>!prev)
    }
    return (
        <div className='followers'>
            <div>
                <img src={person.coverPicture ? serverPublic + person.coverPicture : Profile} alt="" className='followerImage' />
                <div className="name">
                    <span>{person?.firstname} {person.lastname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following ?`button fc-button unfollow` :`button fc-button`} onClick={handleFollow}>{following ? "Unfollow" : "follow"}</button>
        </div>
    )
}

export default User
