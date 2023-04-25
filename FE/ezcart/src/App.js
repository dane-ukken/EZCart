import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar/NavBar"; 
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
