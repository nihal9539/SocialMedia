import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from 'react';
import PostShare from '../PostShare/PostShare';

 function ShareModel({ ModelOpene, setModelOpen }) {
   

    return (
        <>
            <Modal opened={ModelOpene} onClose={() => setModelOpen(false)} size={'55%'} >
                {/* Modal content */}

               <PostShare/>
            </Modal>
            {/* <Button onClick={open}>Open modal</Button> */}
        </>
    );
}

export default ShareModel