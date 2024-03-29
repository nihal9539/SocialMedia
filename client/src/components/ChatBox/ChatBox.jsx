import React, { useEffect, useRef, useState } from 'react'
import { getUser } from '../../api/userRequest';
import Profile from "../../img/profileImg.jpg"
import "./ChatBox.css"
import { addMessage, getMessages } from '../../api/MessageRequest';
import { format } from "timeago.js"
import InputEmoji from "react-input-emoji"



const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const imageRef = useRef()
    const scroll = useRef()

    const handleChange = (newMsg) => {
        setNewMessage(newMsg)
    }
    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser);
        // send message to socket server
        setSendMessage({ ...message, receiverId })
        // send message to database
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        }
        catch
        {
            console.log("error")
        }
    }




    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
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
                console.log(chat._id);
                const { data } = await getMessages(chat._id)
                console.log(data);
                setMessages(data)

            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) fetchingMessage();
    }, [chat])
    useEffect(() => {
        console.log("Message Arrived: ", receivedMessage)
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }

    }, [receivedMessage])

    // always scroll to last 
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavioe:"smooth"})
    },[messages])

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
                            {messages.map((message) => (
                                <>
                                    <div
                                        ref={scroll}
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
                            ))}
                        </div>
                        {/* chat-sender */}
                        <div className="chat-sender">
                            <div onClick={() => imageRef.current.click()}>+</div>
                            <InputEmoji

                                value={newMessage}
                                onChange={handleChange}
                            />
                            <div className="send-button button" onClick={handleSend}>Send</div>
                        </div>{" "}
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
