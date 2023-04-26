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
import { Select } from '@mui/material';
import {FormControl} from "@mui/material";
import {InputLabel} from "@mui/material";
import {MenuItem, TextField} from "@mui/material";

function AddProduct() {
    let subCats = null;
    let products = null;
    
    const [selectedValue, setSelectedValue] = useState('');
    const [productValue, setProductValue] = useState('');
    function handleChange(event) {
        setSelectedValue(event.target.value);
    }
    function handleTextChange(event) {
        setProductValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();


        /*
        axios.post(url, data, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });
        */
       alert('Product Added');
    }

    useEffect(() => {
    let ignore = false;
    axios.get('http://localhost:8080/ezcart/product/getProductList')
        .then(response => {
            console.log(response.data);
            products = (response.data);
            subCats = Array.from(new Set(products
                .map(product => 
                    {return {subCategoryName: product.subCategoryName, subCategoryId: product.subCategoryId}
                    }
                )));
        })
        .catch(error => {
        console.error(error);
        });
    return () => {
      ignore = true;
    };
  }, []); 

  return (
    <>
        <Container sx={{ py: 2 }} maxWidth="lg">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Add Product
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <InputLabel id="select-label">Select an option</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                { subCats && subCats.map(item => <MenuItem value={item.subCategoryId}>{item.subCategoryName}</MenuItem>)}
                            </Select>
                            <TextField
                                id="text-input"
                                label="Text Input"
                                value={productValue}
                                onChange={handleTextChange}
                                required
                            />
                        </FormControl>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>        
    </>
  );
}

export default AddProduct;
