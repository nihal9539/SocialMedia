import { useSelector } from "react-redux";
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {Routes,Route,Navigate} from "react-router-dom"
function App() {
  const user = useSelector((state)=>state.authReducer.authData)
  console.log(user);
  return (
    <div className="App">
        <div style={{top:'-18%' ,right:'0'}} className="blur"></div>
        <div style={{top:'36%',left:'-8rem'}} className="blur"></div>
       <Routes>
        <Route path="/" element={user ?<Navigate to="home"/>:<Navigate to="auth"/>}/>
        <Route path="/home" element={user?<Home />:<Navigate to="../auth"/>}></Route>
        <Route path="/auth" element={user?<Navigate to="../home"/>:<Auth/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
