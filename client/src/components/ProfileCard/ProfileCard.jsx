import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"
import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom"
const ProfileCard = () => {

    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const ProfilePage = false
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={user.coverPicture ? serverPublic + user.coverPicture : Cover} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt ? user.worksAt : "Write about your self"}</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.following.length}</span>

                        <span>Followings</span>
                    </div>
                    <div className='verticalLine'></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>

                        <span>Followings</span>
                    </div>
                    {ProfilePage && (
                        <>
                            <div className="verticalLine"></div>
                            <div className="follow">
                                <span>5</span>

                                <span>Posts</span>
                            </div>

                        </>
                    )}
                </div>
                <hr />
            </div>
            {
                ProfilePage ? "" :
                    <span>
                        <Link to={`/profile/${user._id}`} style={{textDecoration:"none", color:"inherit"}}>

                            My Profile
                        </Link>
                    </span>
            }
        </div>
    )
}

export default ProfileCard
