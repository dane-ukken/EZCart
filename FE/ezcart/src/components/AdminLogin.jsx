import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Password } from '@mui/icons-material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EZcart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function AdminLogin() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
      let ignore = false;
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
      return () => {
        ignore = true;
      };
    }, []);

    if(currentUser !== undefined && currentUser !== null){
      navigate('/adminhome');
    }

    function handleUserLoginClick() {
        navigate('/login')
        }

    function handleEmailChange(event)
    {
        setEmail(event.currentTarget.value)
    }

    function handlePasswordChange(event)
    {
        setPassword(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {email: email, password: password}

/*         fetch('http://localhost:8080/ezcart/user/getProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => 
            {
                localStorage.setItem('currentUser', JSON.stringify(formData));
                console.log(data);
                setCurrentUser(data);
                console.log(data);
            })
        .catch(error => console.error(error)); */

        /* axios.post('http://localhost:8080/ezcart/user/getProfile', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        console.log(response.data);
        setCurrentUser(response.data);
        })
        .catch(error => {
        console.error(error);
        }); */

        axios.get('https://644932ade7eb3378ca42753e.mockapi.io/login')
        .then(response => {
            localStorage.setItem('currentUser', JSON.stringify({...response.data, isAdmin: true}));
            console.log(response.data);
            setCurrentUser(response.data);
        })
        .catch(error => {
        console.error(error);
        });
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleUserLoginClick}>
                  {"Not an admin? SignIn"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}