import React, { useState, useRef } from 'react'
import "./PostShare.css"
import ProfileImage from "../../img/profileImg.jpg"
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What's Happening" />
                <div className="PostOption">
                    <div className="option"
                    onClick={()=>imageRef.current.click()}
                        style={{ color: "var(--photo)" }}
                    >
                        <UilScenery />
                        Photo
                    </div >
                    <div style={{ color: "var(--vide0)" }}
                        className="option">
                        <UilPlayCircle />
                        Video
                    </div>
                    <div style={{ color: "var(--location)" }}
                        className="option">
                        <UilLocationPoint />
                        Location
                    </div>
                    <div style={{ color: "var(--shedule)" }}
                        className="option">
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className='button post-button'>
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="MyImage"
                            ref={imageRef}
                            onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes  onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare
