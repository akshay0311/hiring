import React, { useState, useRef } from "react";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css";
import { Link } from "react-router-dom";
import { HOME } from "../../utils/constants/RouterConstants";


const CustomAppBar = () => {

  const menuItems = [{
    name: "Home"
  },
  {
    name: "Jobs"
  },
  {
    name: "About us"
  },
  {
    name: "More"
  },
  {
    name: "Contact us"
  },
  {
    name: "Login"
  }]
  return (
      <nav className="navbar">
        <input type = "checkbox" id="nav-check"/>
        <label htmlFor="nav-check" className="nav-check-btn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="navbar-logo">Job Agency <em>Website</em></label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
  )
}

export default CustomAppBar;