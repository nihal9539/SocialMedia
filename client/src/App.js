import { useSelector } from "react-redux";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {Routes,Route,Navigate} from "react-router-dom"
import Chat from "./pages/chat/chat";
function App() {
  const user = useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
        <div style={{top:'-18%' ,right:'0'}} className="blur"></div>
        <div style={{top:'36%',left:'-8rem'}} className="blur"></div>
       <Routes>
        <Route path="/" element={user ?<Navigate to="home"/>:<Navigate to="auth"/>}/>
        <Route path="/home" element={user?<Home />:<Navigate to="../auth"/>}></Route>
        <Route path="/auth" element={user?<Navigate to="../home"/>:<Auth/>}></Route>
        <Route path="/chat" element={user?<Chat/>:<Auth/>}></Route>
        <Route path="/profile/:id" element={user?<Profile />:<Navigate to="../auth"/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
