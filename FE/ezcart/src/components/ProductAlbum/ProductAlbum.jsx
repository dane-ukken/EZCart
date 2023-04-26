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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./ProductAlbum.css";

import placeholderImage from "./loading.gif";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

export default function ProductAlbum() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const categoryName = searchParams.get("categoryName");
  const subCategoryId = searchParams.get("subCategoryId");
  const subCategoryName = searchParams.get("subCategoryName");

  let emptyProductList = [];
  for (let i = 0; i < 3; i++) {
    const emptyProduct = {
      categoryId: categoryId,
      categoryName: categoryName,
      subCategoryId: subCategoryId,
      subCategoryName: subCategoryName,
      imageUrl: placeholderImage,
      productId: i + 1,
      productName: "",
      productDesc: "",
      productPrice: "",
    };
    emptyProductList.push(emptyProduct);
  }

  const [products, setProducts] = useState(emptyProductList);
  const [isEmptyList, setIsEmptyList] = useState(false);

  useEffect(() => {
    // localhost:8080/ezcart/product/getProductList
    fetch("https://run.mocky.io/v3/eb527102-afc7-4d93-acc2-b147e060938b")
      .then((response) => response.json())
      .then((data) => {
        // Filter subcategories by categoryId
        const filteredProducts = data.filter((product) => {
          return (
            parseInt(product.categoryId) === parseInt(categoryId) &&
            parseInt(product.subCategoryId) === parseInt(subCategoryId)
          );
        });
        // Update state with filtered subcategories
        if (filteredProducts.length != 0) setProducts(filteredProducts);
        else {
          setIsEmptyList(true);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {subCategoryName}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Least time, Best value
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {isEmptyList ? (
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
              <Typography variant="h6" align="center" gutterBottom>
                Empty List
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item key={product.productId} xs={12} sm={6} md={4}>
                  <LinkRouter
                    to={`/productdetails?productId=${product.productId}&categoryName=${product.categoryName}&subCategoryName=${product.subCategoryName}&categoryId=${product.categoryId}&subCategoryId=${product.subCategoryId}`}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          // pt: '56.25%',
                          aspectRatio: "1/1",
                        }}
                        image={
                          product.imageUrl
                            ? product.imageUrl
                            : "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
                        }
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <div className="product-album-main-row-container">
                          <Typography gutterBottom variant="h6">
                            {product.productName}
                          </Typography>
                          <Typography gutterBottom variant="subtitle1">
                            {product.productPrice}
                          </Typography>
                        </div>

                        {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                      </CardContent>
                      <CardActions>
                        <div className="product-album-actions-container">
                          <div className="product-album-actions-left">
                            <AddShoppingCartIcon />
                          </div>
                          <div className="product-album-actions-right">
                            <FavoriteBorderIcon />
                          </div>
                        </div>
                      </CardActions>
                    </Card>
                  </LinkRouter>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
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
