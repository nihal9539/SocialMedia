import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import LogoSearch from "../../components/LogoSearch/LogoSearch"
import { useDispatch, useSelector } from "react-redux";
import { userChats } from '../../api/ChatRequesst';
import Conversation from '../../components/Conversation/Conversation';
import NavIcons from '../../components/NavIcons/NavIcons';
import ChatBox from '../../components/ChatBox/ChatBox';
const Chat = () => {

    const dispatch = useDispatch();
    const socket = useRef();
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const getChats = async () => {
          try {
            const { data } = await userChats(user._id);
            setChats(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        getChats();
      }, [user._id]);

    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div
                                onClick={() => {
                                    setCurrentChat(chat);
                                }}
                            >
                                
                                <Conversation
                                    data={chat}
                                    currentUser={user._id}
                                    // online={checkOnlineStatus(chat)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}

            <div className="Right-side-chat">
                <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                    <NavIcons />
                </div>
                {/* chat body */}
                <ChatBox
                    chat={currentChat}
                    currentUser={user._id}
                    setSendMessage={setSendMessage}
                    receivedMessage={receivedMessage}
                />
            </div>
        </div>
    )
}

export default Chat
