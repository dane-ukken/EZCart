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

import placeholderImage from "./loading.gif";

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

export default function CategoryAlbum() {
  let emptyCategoryList = [];
  for (let i = 0; i < 3; i++) {
    const emptyCategory = {
      categoryId: i + 1,
      categoryName: "",
      imageUrl: placeholderImage,
    };
    emptyCategoryList.push(emptyCategory);
  }

  const [categories, setCategories] = useState(emptyCategoryList);

  useEffect(() => {
    fetch("http://localhost:8080/ezcart/product/getProductCategoryList")
      .then((response) => response.json())
      .then((data) => setCategories(data))
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
              Shop in Categories
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
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid item key={category.categoryId} xs={12} sm={6} md={4}>
                <LinkRouter
                  to={`/subcategory?categoryId=${category.categoryId}&categoryName=${category.categoryName}`}
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
                        category.imageUrl
                          ? category.imageUrl
                          : "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
                      }
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {category.categoryName}
                      </Typography>
                    </CardContent>
                  </Card>
                </LinkRouter>
              </Grid>
            ))}
          </Grid>
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
