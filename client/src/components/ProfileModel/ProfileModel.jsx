import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            var img = e.target.files[0]
            e.target.name == "profileImage" ? setProfileImage(img) : setCoverImage(img)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = formData;
        if (profileImage) {
            const data = new formData()
            const fileName = Date.now() + profileImage.name;
            data.append("name",fileName);
            data.append("file",profileImage)
            userData.profilePicture = fileName
            try {
                // dispatch
            } catch (error) {
                
            }
        }
    }

    return (
        <>
            <Modal opened={ModelOpene} onClose={() => setModelOpen(false)} size={'55%'} >
                {/* Modal content */}

                <form action="" className='InfoForm'>
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

                    <button className='button fc-button' onClick={handleSubmit}>Update</button>
                </form>
            </Modal>
            {/* <Button onClick={open}>Open modal</Button> */}
        </>
    );
}