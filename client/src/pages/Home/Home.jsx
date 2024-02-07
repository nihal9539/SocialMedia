import React, { useEffect } from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'
import PostSide from '../../components/PostSide/PostSide'
import {useSelector, useDispatch} from 'react-redux'

import RightSide from '../../components/RightSide/RightSide'
import NavIcons from '../../components/NavIcons/NavIcons'

const Home = () => {


  return (
    <div className='Home'>
      <div className="navIcon">
      <NavIcons/>
      </div>
      <Profile/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default Home
