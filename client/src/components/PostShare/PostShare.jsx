import React, { useState, useRef } from 'react'
import "./PostShare.css"
import ProfileImage from "../../img/profileImg.jpg"
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { uploadImage, uploadPost } from '../../Action/uploadAction'
const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const dispatch = useDispatch()
    const desc = useRef()
    const user = useSelector((state)=>state.authReducer.authData.user)
    console.log(user);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage(img)
        }
    }

    const reset = ()=>{
        setImage(null)
        desc.current.value = null
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
      
        const newPost={
            userId: user._id,
            desc:desc.current.value
        }
        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name",fileName)
            data.append("file",image)
            newPost.image = fileName
            console.log(newPost);
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }
    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt="" />
            <div>
                <input
                ref={desc}
                required
                type="text"
                 placeholder="What's Happening" />
                <div className="PostOption">
                    <div className="option"
                        onClick={() => imageRef.current.click()}
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
                    <button
                    disabled={loading}
                    className='button post-button' onClick={handleSubmit}>
                        {loading ? "Uploading" : "Share"}
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
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare
