import React from "react";
import {Bars, NavBtn, NavBtnLink, NavMenu, NavLink, Nav} from "./NavBarElements";

function NavBar() {
    return (
        <>
          <Nav>
            <Bars />
      
            <NavMenu>
              <NavLink to='/' activeStyle>
                Home
              </NavLink>
              <NavLink to='/cart' activeStyle>
                Cart
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/login'>Log In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
};

export default NavBar;
