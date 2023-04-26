import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function AdminHome() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  //let products = null;
  //let subCategories = null;

  useEffect(() => {
    let ignore = false;
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    return () => {
      ignore = true;
    };
  }, []);

  if(currentUser == undefined && currentUser == null){
    navigate('/adminlogin');
    return (<></>);
  }

    function handleAddClick() {
        navigate('/addproduct')
    }

    function handleRemoveClick() {
        navigate('/removeproduct')
    }


/*   useEffect(() => {
    let ignore = false;
    axios.get('https://644932ade7eb3378ca42753e.mockapi.io/login')
        .then(response => {
            console.log(response.data);
            products = (response.data);
        })
        .catch(error => {
        console.error(error);
        });
    return () => {
      ignore = true;
    };
  }, []); */

  return (
    <>
        <Container sx={{ py: 2 }} maxWidth="lg">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        <Button size="small" onClick={handleAddClick}>
                            Add Product
                        </Button>
                    </Typography>
                </CardContent>

            </Card>
        </Container> 
        <Container sx={{ py: 2 }} maxWidth="lg">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    <Button size="small" onClick={handleRemoveClick}>
                        Remove Product
                    </Button>
                    </Typography>
                </CardContent>
            </Card>
        </Container>            
    </>
  );
}

export default AdminHome;
