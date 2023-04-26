import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/NavBar/NavBar"; 
import Home from "./components/Home";
import CartPage from "./pages/CartPage/CartPage";
import SubCategoriesPage from "./pages/SubCategory/SubCategoriesPage";
import ProductAlbum from "./components/ProductAlbum/ProductAlbum";
import Product from "./components/ProductAlbum/Product";
import Checkout from "./components/Cart/Checkout";

function App() {

  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/subcategory" element={<SubCategoriesPage/>} />
        <Route path="/product" element={<ProductAlbum/>} />
        <Route path="/productdetails" element={<Product/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
