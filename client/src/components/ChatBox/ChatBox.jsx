import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/userRequest';
import Profile from "../../img/profileImg.jpg"
import "./ChatBox.css"
import { getMessage } from '../../../../server/Controller/MessageController.js';



const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) getUserData();
    }, [chat, currentUser])


    // fetching data
    useEffect(() => {
        const fetchingMessage = async () => {
            try {
                const { data } = await getMessage(chat._id)

            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) fetchingMessage();
    }, [chat])
    return (
        <>
            <div className="ChatBox-container">
                {chat ? (
                    <>
                        {/* chat-header */}
                        <div className="chat-header">
                            <div className="follower">
                                <div>
                                    <img
                                        src={
                                            userData?.profilePicture
                                                ? process.env.REACT_APP_PUBLIC_FOLDER +
                                                userData.profilePicture
                                                :
                                                Profile
                                        }
                                        alt="Profile"
                                        className="followerImage"
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                    <div className="name" style={{ fontSize: "0.9rem" }}>
                                        <span>
                                            {userData?.firstname} {userData?.lastname}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{
                                    width: "95%",
                                    border: "0.1px solid #ececec",
                                    marginTop: "20px",
                                }}
                            />
                        </div>
                        {/* chat-body */}
                        <div className="chat-body" >
                            {/* {messages.map((message) => (
                <>
                  <div ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))} */}
                        </div>
                        {/* chat-sender */}
                        {/* <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick = {handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "} */}
                    </>
                ) : (
                    <span className="chatbox-empty-message">
                        Tap on a chat to start conversation...
                    </span>
                )}
            </div></>
    )
}

export default ChatBox
