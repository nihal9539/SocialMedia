import React, { useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import { ProfileModel } from '../ProfileModel/ProfileModel'
const InfoCard = () => {
    const [modelOpen,setModelOpen]=useState(false)
    return (
        <div className='InfoCard'>
            <div className="InfoHead">
                <h4>your Info</h4>
                <div onClick={()=>setModelOpen(true)}>

                <UilPen width='2rem' height='1.5rem' />

                </div>
                <ProfileModel ModelOpene={modelOpen} setModelOpen={setModelOpen}/>
                {/* {open && <ProfileModel/>} */}
            </div>
            <div className="info">
                <span><b>Status</b></span>
                <span>in RelationsShip</span>
            </div>
            <div className="info">
                <span><b>Lives In</b></span>
                <span>Kerala</span>
            </div>
            <div className="info">
                <span><b>Works At</b></span>
                <span>Work from home</span>
            </div>
            <button className='button lgout-button'>Logout</button>
        </div>
    )
}

export default InfoCard
