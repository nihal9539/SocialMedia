import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../Action/uploadAction';
import { updateUser } from '../../Action/userAction';
import "./ProfileModel.css"

export function ProfileModel({ ModelOpene, setModelOpen, data }) {
    //   const [opened, { open, close }] = useState(false);
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other)
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleChange = (e) => {
        console.log(e.target.name + e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            var img = e.target.files[0]
            e.target.name == "profileImage" ? setProfileImage(img) : setCoverImage(img)
        }
    }
    const width = window.innerWidth
    const handleSubmit = (e) => {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                console.log(data);
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                console.log(data);
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateUser(params.id, UserData));
        setModelOpen(false);
    };


    return (
        <>
            <Modal opened={ModelOpene} onClose={() => setModelOpen(false)} style={{
                height:"100%"
            }} size={`${width >= 650 ? "55%" : "100%"}`}  >
                {/* Modal content */}

                <form action="" className='InfoForms'>
                    <h3>Your Info</h3>
                    <div>
                        <input
                            type="text"
                            name="firstname"
                            className='InfoInput'
                            placeholder='First Name'
                            onChange={handleChange}
                            value={formData.firstname}
                        />
                        <input
                            type="text"
                            name="lastname"
                            className='InfoInput'
                            onChange={handleChange}
                            value={formData.lastname}

                            placeholder='Last Name'
                        />
                        <input
                            type="text"
                            name="worksAt"
                            className='InfoInput'
                            onChange={handleChange}
                            value={formData.worksAt}

                            placeholder='First Name'
                        />

                    </div>
                    <div>
                        <input
                            type="text"
                            name="livesIn"
                            className='InfoInput'
                            onChange={handleChange}
                            value={formData.livesIn}

                            placeholder='Lives In'
                        />
                        <input
                            type="text"
                            name="country"
                            className='InfoInput'
                            onChange={handleChange}
                            value={formData.country}

                            placeholder='Country'
                        />

                    </div>
                    <div>
                        <input
                            type="text"
                            name="relationship"
                            className='InfoInput'
                            onChange={handleChange}
                            value={formData.relationship}

                            placeholder='Relationship Status'
                        />


                    </div>

                    <div>
                        Profile Image
                        <input type="file" name="profileImage" onChange={onImageChange} />

                        Cover Image
                        <input type="file" name="coverImage" onChange={onImageChange} />
                    </div>

                    <div>
                        <button className='button fc-button' onClick={handleSubmit}>Update</button>
                    </div>
                </form>
            </Modal>
            {/* <Button onClick={open}>Open modal</Button> */}
        </>
    );
}