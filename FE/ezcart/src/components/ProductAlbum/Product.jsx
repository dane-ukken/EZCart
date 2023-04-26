import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import placeholderImage from "./loading.gif";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EZcart
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  const categoryName = searchParams.get("categoryName");
  const subCategoryName = searchParams.get("subCategoryName");
  const categoryId = searchParams.get("categoryId");
  const subCategoryId = searchParams.get("subCategoryId");

  let emptyProductList = [];
  const emptyProduct = {
    categoryId: categoryId,
    categoryName: categoryName,
    subCategoryId: subCategoryId,
    subCategoryName: subCategoryName,
    productId: productId,
    productName: "",
    productDesc: "",
    itempPrice: "",
    imageUrl: placeholderImage,
  };
  emptyProductList.push(emptyProduct);

  const [product, setProduct] = useState(emptyProductList[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [wishList, setIsInWishlist] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [displayQty, setDisplayQty] = useState(getQty(product.productId));

  function handleQuantityChange(val) {
    console.log(val);
    setDisplayQty(val);
  }

  function getQty(productId) {
    const currentCart = localStorage.getItem("cart");
    console.log(`current product: ${productId}`);
    let cartList = [];
    if (currentCart) {
      cartList = JSON.parse(currentCart);
    }
    const existingProductIndex = cartList.findIndex(
      (p) => parseInt(JSON.parse(p).productId) === parseInt(productId)
    );
    if (existingProductIndex >= 0) {
      const existingProduct = JSON.parse(cartList[existingProductIndex]);
      console.log(`existingProduct Qty: ${existingProduct.quantity}`);
      return existingProduct.quantity;
    } else {
      console.log(`not found`);
      return 1;
    }
  }

  function isInWishList(productId) {
    const currentWishlist = localStorage.getItem("wishlist");
    let wishlist = [];
    if (currentWishlist) {
      wishlist = JSON.parse(currentWishlist);
    }
    const existingProductIndex = wishlist.findIndex(
      (p) => parseInt(JSON.parse(p).productId) === parseInt(productId)
    );
    return existingProductIndex !== -1;
  }

  function addToCart(product) {
    const productCart = {
      // imageUrl: placeholderImage,
      productId: product.productId,
      productName: product.productName,
      productDesc: product.productDesc,
      itempPrice: product.itempPrice,
      quantity: parseInt(displayQty),
    };
    const serializedProduct = JSON.stringify(productCart);
    const currentCart = localStorage.getItem("cart");
    let cartList = [];
    if (currentCart) {
      cartList = JSON.parse(currentCart);
    }
    const existingProductIndex = cartList.findIndex(
      (p) => JSON.parse(p).productId === product.productId
    );
    if (existingProductIndex >= 0) {
      const existingProduct = JSON.parse(cartList[existingProductIndex]);
      console.log(parseInt(displayQty));
      existingProduct.quantity = parseInt(displayQty);
      cartList[existingProductIndex] = JSON.stringify(existingProduct);
    } else {
      cartList.push(serializedProduct);
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
    console.log(
      `Added product ${
        product.productId
      } to cart. Cart contents: ${localStorage.getItem("cart")}`
    );
    setSnackbarOpen(true);
  }

  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }

  function addToWishList(product) {
    const productWishlist = {
      // imageUrl: placeholderImage,
      productId: product.productId,
      productName: product.productName,
      productDesc: product.productDesc,
      itempPrice: product.itempPrice,
    };
    const serializedProduct = JSON.stringify(productWishlist);
    const currentWishlist = localStorage.getItem("wishlist");
    let wishlist = [];
    if (currentWishlist) {
      wishlist = JSON.parse(currentWishlist);
    }
    const existingProductIndex = wishlist.findIndex(
      (p) => JSON.parse(p).productId === product.productId
    );
    if (existingProductIndex === -1) {
      wishlist.push(serializedProduct);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      wishlist.splice(existingProductIndex, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    setIsInWishlist(!wishList);
  }

  useEffect(() => {
    setIsInWishlist(false);
  }, [wishList]);

  useEffect(() => {
    // localhost:8080/ezcart/product/getProductListById/{productId}
    fetch(`http://localhost:8080/ezcart/product/getProductById/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // Sort filtered products by price (ascending order)
        const sortedProducts = data.sort((a, b) => {
          return (
            parseFloat(a.productDetails.productPrice) -
            parseFloat(b.productDetails.productPrice)
          );
        });
        // Update state with filtered subcategories
        if (sortedProducts.length != 0) {
          setProduct(sortedProducts[0].productDetails);
        } else {
          setIsEmptyList(true);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {isEmptyList ? (
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Empty List
            </Typography>
          </Box>
        ) : (
          <div>
            <Container
              sx={{ py: 3 }}
              maxWidth="lg"
              onClick={() => navigate(-1)}
            >
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{ color: "success.main", borderColor: "success.main" }}
              >
                {`${subCategoryName}`}
              </Button>
            </Container>

            <Container sx={{ py: 2 }} maxWidth="lg">
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "50%" }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: 0,
                      paddingBottom: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      image={
                        "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
                      }
                      alt="random"
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "50%", paddingLeft: "16px" }}>
                  <Typography
                    gutterBottom
                    variant="h3"
                    sx={{ color: "#383838" }}
                  >
                    {product.productName}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#383838" }}>
                    ${product.itempPrice}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "50px",
                      marginBottom: "50px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ marginRight: "16px" }}
                    >
                      Quantity:
                    </Typography>
                    <TextField
                      type="number"
                      inputProps={{ min: 1 }}
                      defaultValue={getQty(product.productId)}
                      variant="standard"
                      size="small"
                      sx={{ width: "50px", marginRight: "16px" }}
                      onChange={(e) => handleQuantityChange(e.target.value)}
                    />
                  </Box>
                  <Typography variant="subtitle1">
                    {product.productDesc}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "50px",
                    }}
                  >
                    {getQty(product.productId) > 1 ? (
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ marginRight: "16px" }}
                        onClick={() => addToCart(product)}
                      >
                        Update Cart
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ marginRight: "16px" }}
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    )}

                    <div
                      className="product-wishlist-container"
                      onClick={() => addToWishList(product)}
                    >
                      {isInWishList(product.productId) ? (
                        <>
                          <FavoriteIcon sx={{ marginRight: "8px" }} />
                          <Typography variant="body2" color="text.secondary">
                            Remove from Wishlist
                          </Typography>
                        </>
                      ) : (
                        <>
                          <FavoriteBorderIcon sx={{ marginRight: "8px" }} />
                          <Typography variant="body2" color="text.secondary">
                            Add to Wishlist
                          </Typography>
                        </>
                      )}
                    </div>
                    <Snackbar
                      open={snackbarOpen}
                      autoHideDuration={2000}
                      onClose={handleSnackbarClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Cart updated successfully!
                      </Alert>
                    </Snackbar>
                  </Box>
                </Box>
              </Box>
            </Container>
          </div>
        )}
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Best prices, Happy faces
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Contact us at ezcart@gmail.com !
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
