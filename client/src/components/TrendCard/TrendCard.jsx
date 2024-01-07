import React from 'react'
import "./TrendCard.css"
import { TrendCardData } from '../../data/TrendCardData'

const TrendCard = () => {
    return (
        <div className='TrendCard'>
            <h3>Treads for you</h3>
            {TrendCardData.map((treand,id)=>{
                return(
                    <div className='Treand'>
                        <span>{treand.name}</span>
                        <span>{treand.Shared}kShared</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard
