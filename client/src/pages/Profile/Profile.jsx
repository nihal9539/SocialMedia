import React from 'react'
import "./Profile.css"
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import NavIcons from '../../components/NavIcons/NavIcons'

const Profile = () => {
  return (
    <div className="Profile">
      <div className="navIcon">
        <NavIcons/>
      </div>
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location={"profilePage"} />
        <PostSide />
      </div>
      <div className="right-Side">
        <RightSide />
      </div>
    </div>
  )
}

export default Profile
