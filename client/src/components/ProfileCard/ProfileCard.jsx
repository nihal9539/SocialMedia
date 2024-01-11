import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"
import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom"
const ProfileCard = ({location}) => {

    const { user } = useSelector((state) => state.authReducer.authData)
    console.log(user);
    const post = useSelector((state) => state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  
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
                    {location === "profilePage" && (
                        <>
                            <div className="verticalLine"></div>
                            <div className="follow">
                                <span>{post.filter((post)=>post.userId === user._id).length}</span>

                                <span>Posts</span>
                            </div>

                        </>
                    )}
                </div>
                <hr />
            </div>
            {
                location === "profilePage" ? "" :
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
