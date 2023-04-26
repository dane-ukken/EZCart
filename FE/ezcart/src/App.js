import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar/NavBar"; 
import Home from "./components/Home";
import CartPage from "./pages/CartPage/CartPage";
import SubCategoriesPage from "./pages/SubCategory/SubCategoriesPage";
import ProductAlbum from "./components/ProductAlbum/ProductAlbum";
import Product from "./components/ProductAlbum/Product";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/Admin/AdminHome";
import AddProduct from "./components/Admin/AddProduct";

function App() {

  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/removeproduct" element={<AdminLogin/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/adminhome" element={<AdminHome/>} />
        <Route path="/subcategory" element={<SubCategoriesPage/>} />
        <Route path="/product" element={<ProductAlbum/>} />
        <Route path="/productdetails" element={<Product/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
