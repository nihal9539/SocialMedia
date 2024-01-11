import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./Profile.css"
import FollowersCard from '../FollowersCard/FollowersCard'

const Profile = () => {
    return (

        <div className="ProfileSlide">
            <LogoSearch />
            <ProfileCard location="homePage" />
            <FollowersCard />
        </div>

    )
}

export default Profile
