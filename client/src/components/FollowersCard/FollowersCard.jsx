import React, { useEffect, useState } from 'react'
import "./FollowersCard.css"
import { Followes } from '../../data/followersData.js'
import User from '../User/User.jsx'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/userRequest.js'

const FollowersCard = () => {
  const [persons,setPersons] = useState([])
  const {user} = useSelector((state)=>state.authReducer.authData)
  
  useEffect(()=>{
    const fetchPerson = async()=>{
      console.log("data");
      const {data} = await getAllUser();
      setPersons(data)
    }
    fetchPerson()
  },[])
  // console.log(user);
  return (
    <div className='FollowersCard'>
      <h3>Who is Following you</h3>

      {persons.map((person,id)=>{
        if (person._id !== user._id) {
          
          return(
              <User person={person} id={id}/>
          )
        }
      })}
    </div>
  )
}

export default FollowersCard
