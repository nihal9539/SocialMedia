import "./App.css"
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
        <div style={{top:'-18%' ,right:'0'}} className="blur"></div>
        <div style={{top:'36%',left:'-8rem'}} className="blur"></div>
        {/* <Home/> */}
        <Profile/>
    </div>
  );
}

export default App;
