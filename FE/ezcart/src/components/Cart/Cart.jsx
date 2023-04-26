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
import "./Cart.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

function Cart() {
  const theme = createTheme();

  function getCart() {
    const currentCart = localStorage.getItem("cart");
    let cartList = [];
    if (currentCart) {
      cartList = JSON.parse(currentCart);
    }
    let prodList = [];
    for (let i = 0; i < cartList.length; i++) {
      prodList.push(JSON.parse(cartList[i]));
    }
    console.log(prodList);
    return prodList;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {getCart().length === 0 ? (
          <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Empty Cart
            </Typography>
          </Box>
        ) : (
          <div>
            <Container sx={{ py: 15 }} maxWidth="lg">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Grid container spacing={2}>
                  {getCart().map((product) => (
                    <>
                      <Grid item xs={6} sx={{border: "2px", borderColor: "ButtonFace", padding: "20px"}}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                          <CardMedia
                            component="img"
                            sx={{
                              width: "20%",
                              height: "20%",
                              objectFit: "cover",
                            }}
                            image={
                              "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
                            }
                            alt="random"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            height: "100%",
                          }}
                        >
                          <Typography variant="h6">
                            {product.productName}
                          </Typography>
                          <Typography variant="h6">
                            ${product.itempPrice}
                          </Typography>
                          <Typography variant="h6">
                            Quantity: {product.quantity}
                          </Typography>
                        </Box>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Box>
              <Container
                sx={{ py: 10, display: "flex", justifyContent: "center" }}
                maxWidth="lg"
              >
                <LinkRouter
                  to={`/checkout`}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "InfoText",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "16px" }}
                  >
                    Checkout
                  </Button>
                </LinkRouter>
              </Container>
            </Container>
          </div>
        )}
      </main>
    </ThemeProvider>
  );
}

export default Cart;
