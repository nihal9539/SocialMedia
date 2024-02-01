import React, { useState } from 'react'
import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard'
import ShareModel from '../ShareModel/ShareModel'
import { Link } from 'react-router-dom'
import NavIcons from '../NavIcons/NavIcons'
const RightSide = () => {
  const [modelOpen, setModelOpen] = useState(false)

  return (
    <div className='RightSide'>
      <NavIcons/>
      <TrendCard />
      <button onClick={() => setModelOpen(true)} className='button r-button'>Share</button>
      <ShareModel ModelOpene={modelOpen} setModelOpen={setModelOpen} />

    </div>
  )
}

export default RightSide
