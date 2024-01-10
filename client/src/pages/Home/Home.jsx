import React, { useEffect } from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'
import PostSide from '../../components/PostSide/PostSide'
import {useSelector, useDispatch} from 'react-redux'

import RightSide from '../../components/RightSide/RightSide'

const Home = () => {


  return (
    <div className='Home'>
      <Profile/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default Home
