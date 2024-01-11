import React, { useEffect, useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import { ProfileModel } from '../ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from "../../api/userRequest"
import { logout } from '../../Action/AuthAction'
const InfoCard = () => {
    const [modelOpen, setModelOpen] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)


    useEffect(() => {
        const fetchProfileUsr = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
                console.log(user);
            } else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                console.log(profileUser);
            }
        }
        fetchProfileUsr();

    }, [user])

    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <div className='InfoCard'>
            <div className="InfoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId
                    ? <div onClick={() => setModelOpen(true)}>

                        <UilPen width='2rem' height='1.5rem' />

                    </div>
                    : ""
                }

                <ProfileModel
                 ModelOpene={modelOpen}
                 data={user}
                 setModelOpen={setModelOpen} />
            </div>
            <div className="info">
                <span><b>Status</b></span>
                <span>{profileUser.relationship}</span>
            </div>
            <div className="info">
                <span><b>Lives In</b></span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className="info">
                <span><b>Works At</b></span>
                <span>{profileUser.worksAt}</span>
            </div>
            <button className='button lgout-button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard
