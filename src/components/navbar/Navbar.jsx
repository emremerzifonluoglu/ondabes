import { Container } from "@mui/material";
import React from "react";
import logo from "../../img/kesif.png";
import Category from "../category/Category";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <Container maxWidth="lg">
        <div className="navbar-container">
          <div className="logo">
            <a href="./">
              <img src={logo} alt="OndaBeş" className="logo-img" />
            </a>
          </div>
          <div className="search">
            <input type="search" name="" id="" />
            <button className="search-enter">Ara</button>
          </div>
          <div className="login-basket">
            <button className="login">Giriş yapın</button>
            <button className="basket">Sepetim</button>
          </div>
        </div>
      </Container>
      <Category />
    </div>
  );
}

export default Navbar;
