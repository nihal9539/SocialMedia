import React, { useState, useRef, useEffect } from 'react'
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
    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const dispatch = useDispatch()
    const desc = useRef()
    const user = useSelector((state) => state.authReducer.authData.user)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage(img)
        }
    }

    const reset = () => {
        setImage(null)
        desc.current.value = null
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name", fileName)
            data.append("file", image)
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
            <div className='PostInput'>
                <img src={user.profilePicture ? serverPublic + user.profilePicture : ProfileImage} alt="" />
                <input
                    ref={desc}
                    required
                    type="text"
                    placeholder="What's Happening" />
            </div>
            <div className='optionInput'>

                <div className="PostOption">
                    <div className="option"
                        onClick={() => imageRef.current.click()}
                        style={{ color: "var(--photo)" }}
                    >
                        <UilScenery />
                        <span>

                            Photo
                        </span>
                    </div >
                    <div style={{ color: "var(--vide0)" }}
                        className="option">
                        <UilPlayCircle />
                        <span>

                            Video
                        </span>
                    </div>
                    <div style={{ color: "var(--location)" }}
                        className="option">
                        <UilLocationPoint />
                        <span>

                            Location
                        </span>
                    </div>
                    <div style={{ color: "var(--shedule)" }}
                        className="option">
                        <UilSchedule />
                        <span>

                            Shedule
                        </span>
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
