import React from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className="InfoHead">
                <h4>your Info</h4>
                <div>

                <UilPen width='2rem' height='1.5rem'/>
                </div>
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
