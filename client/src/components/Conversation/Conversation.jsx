import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/userRequest'
import Profile from "../../img/profileImg.jpg"
import "./Conversation.css"
const Conversation = ({ data, currentUser }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {


                const { data } = await getUser(userId)
                setUserData(data)
            } catch (error) {
                console.log(error);
            }
        }
        getUserData()
    }, [])
    return (
        <>
        <div className='follower conversation'>
            <div className='chatlist'>
                <div>
                    <div className='online-dot' >
                    </div>
                    <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : Profile} className='image' alt="" />
                </div>
                <div className='name' style={{ fontSize: "0.8rem" }}>
                    <span>{userData?.firstName}  {userData?.lastname}</span>
                    <span className='online'>Online</span>
                </div>
            </div>

        </div>
        <hr style={{width:'85%', border:"0.1px solid #ececec"}}/>
        </>
    )
}

export default Conversation
