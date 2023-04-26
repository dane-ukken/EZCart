import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar/NavBar"; 
import Home from "./components/Home";
import CartPage from "./pages/CartPage/CartPage";
import SubCategoriesPage from "./pages/SubCategory/SubCategoriesPage";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/subcategory" element={<SubCategoriesPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
