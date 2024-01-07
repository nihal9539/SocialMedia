import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"
const ProfileCard = () => {

    const ProfilePage = true
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Nihal</span>
                <span>Status</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>200</span>

                        <span>Followings</span>
                    </div>
                    <div className='verticalLine'></div>
                    <div className="follow">
                        <span>10</span>

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
                        My Profile
                    </span>
            }
        </div>
    )
}

export default ProfileCard
