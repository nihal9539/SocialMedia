import React, { useState } from 'react'
import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard'
import ShareModel from '../ShareModel/ShareModel'
const RightSide = () => {
  const [modelOpen,setModelOpen]=useState(false)

  return (
    <div className='RightSide'>
      <div className="NavIcons">
        <img src={Home} alt="" />
        <UilSetting/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard/>
      <button onClick={()=>setModelOpen(true)} className='button r-button'>Share</button>
      <ShareModel ModelOpene={modelOpen} setModelOpen={setModelOpen}/>

    </div>
  )
}

export default RightSide
