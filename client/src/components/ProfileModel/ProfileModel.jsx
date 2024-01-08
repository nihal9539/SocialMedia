import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';

export function ProfileModel({ ModelOpene, setModelOpen }) {
    //   const [opened, { open, close }] = useState(false);

    return (
        <>
            <Modal opened={ModelOpene} onClose={() => setModelOpen(false)} size={'55%'} >
                {/* Modal content */}

                <form action="" className='InfoForm'>
                    <h3>Your Info</h3>
                    <div>
                        <input
                            type="text"
                            name="FirstName"
                            className='InfoInput'
                            placeholder='First Name'
                        />
                        <input
                            type="text"
                            name="LastName"
                            className='InfoInput'
                            placeholder='Last Name'
                        />
                        <input
                            type="text"
                            name="FirstName"
                            className='InfoInput'
                            placeholder='First Name'
                        />
                       
                    </div>
                    <div>
                        <input
                            type="text"
                            name="livesIn"
                            className='InfoInput'
                            placeholder='Lives In'
                        />
                        <input
                            type="text"
                            name="Country"
                            className='InfoInput'
                            placeholder='Country'
                        />
                       
                    </div>
                    <div>
                        <input
                            type="text"
                            name="relationshipStatus"
                            className='InfoInput'
                            placeholder='Relationship Status'
                        />
                     
                       
                    </div>

                    <div>
                        Profile Image
                        <input type="file" name="profileImage" id="" />
                   
                        Cover Image
                        <input type="file" name="coverImage" id="" />
                    </div>

                    <button className='button fc-button'>Update</button>
                </form>
            </Modal>
            {/* <Button onClick={open}>Open modal</Button> */}
        </>
    );
}