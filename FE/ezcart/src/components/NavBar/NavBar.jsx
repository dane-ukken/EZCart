import "./NavBar.css";
import React from "react";
import {
  Bars,
  NavBtn,
  NavBtnLink,
  NavMenu,
  NavLink,
  Nav,
} from "./NavBarElements";

function NavBar() {
  return (
    <>
      <Nav>
        <div className="nav-container-left">
          <Bars />

          <NavMenu>
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/cart" activeStyle>
              Cart
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </div>
        <div className="nav-container-right">
          <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        </div>
      </Nav>
    </>
  );
}

export default NavBar;
