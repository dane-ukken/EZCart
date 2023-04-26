import "./NavBar.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bars,
  NavBtn,
  NavBtnLink,
  NavMenu,
  NavLink,
  Nav,
} from "./NavBarElements";
import { Button } from "@mui/material";

function getNavBar(currentUser, setCurrentUser, navigate)
{
  let name = null;
  let isAdmin = false;
  if(currentUser[0] !== null && currentUser[0] !== undefined)
  {
    name = currentUser[0].name;
    isAdmin = currentUser.isAdmin;
  }

  return (
    <>
      <Nav>
        <div className="nav-container-left">
          <Bars />

          <NavMenu>
            Hi {name}
            {
              !isAdmin &&
              <>
              <NavLink to="/home" activeStyle>
              Home
              </NavLink>
              <NavLink to="/cart" activeStyle>
                Cart
              </NavLink>
              </>
            }
            
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </div>
        <div className="nav-container-right">
          <Button color="secondary" 
            onClick={() => {
              localStorage.setItem('currentUser', JSON.stringify(null));
              setCurrentUser(null);
              navigate('/login');
            }}>
            Logout
          </Button>
        </div>
      </Nav>
    </>
  );
}

function NavBar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    let ignore = false;
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    return () => {
      ignore = true;
    };
  }, []);
  if(currentUser == undefined && currentUser == null){
    return (<></>);
  }

  return (getNavBar(currentUser, setCurrentUser, navigate));
}

export default NavBar;
