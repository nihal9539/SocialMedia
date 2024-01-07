import React from 'react'
import "./FollowersCard.css"
import { Followes } from '../../data/followersData.js'

const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
      <h3>Who is Following you</h3>

      {Followes.map((follower,index)=>{
        return(
            <div className='followers'>
                <div>
                    <img src={follower.img} alt="" className='followerImage' />
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>follow</button>
            </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
