import React from 'react'
import Profile from "../../img/profileImg.jpg"

const User = ({person,id}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const handleFollow = ()=>{
        
    }
  return (
    <div className='followers'>
                <div>
                    <img src={person.coverPicture ? serverPublic + person.coverPicture : Profile} alt="" className='followerImage' />
                    <div className="name">
                        <span>{person?.firstname} {person.lastname}</span>
                        <span>@{person.username}</span>
                    </div>
                </div>
                <button className='button fc-button' onClick={handleFollow}>follow</button>
            </div>
  )
}

export default User
