import React from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'
import PostSide from '../../components/PostSide/PostSide'

const Home = () => {
  return (
    <div className='Home'>
      <Profile/>
      <PostSide/>
      <div className="RightSlide">Right</div>
    </div>
  )
}

export default Home
