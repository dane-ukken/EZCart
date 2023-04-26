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

export default function SubCategoryAlbum() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const categoryName = searchParams.get("categoryName");

  let emptySubCategoryList = [];
  for (let i = 0; i < 3; i++) {
    const emptySubCategory = {
      categoryId: categoryId,
      categoryName: categoryName,
      subCategoryId: i + 1,
      subCategoryName: "",
      imageUrl: placeholderImage,
    };
    emptySubCategoryList.push(emptySubCategory);
  }

  const [subCategories, setSubCategories] = useState(emptySubCategoryList);
  const [isEmptyList, setIsEmptyList] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/ezcart/product/getProductSubCategoryList")
      .then((response) => response.json())
      .then((data) => {
        // Filter subcategories by categoryId
        const filteredSubCategories = data.filter(
          (subCategory) => subCategory.categoryId === Number(categoryId)
        );
        // Update state with filtered subcategories
        if (filteredSubCategories.length != 0)
          setSubCategories(filteredSubCategories);
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
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {/* {`Category > ${categoryName}`} */}
              {`Category > ${categoryName}`}
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
              {subCategories.map((subCategory) => (
                <Grid
                  item
                  key={subCategory.subCategoryId}
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <LinkRouter
                    to={`/product?subCategoryId=${subCategory.subCategoryId}&subCategoryName=${subCategory.subCategoryName}&categoryId=${subCategory.categoryId}&categoryName=${subCategory.categoryName}`}
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
                          subCategory.imageUrl
                            ? subCategory.imageUrl
                            : "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
                        }
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {subCategory.subCategoryName}
                        </Typography>
                      </CardContent>
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
