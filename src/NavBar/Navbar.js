import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (

        <nav className="topnav">
            <NavLink to="/figura1">Figura 1</NavLink>
            <NavLink to="/figura2">Figura 2</NavLink>
        </nav>
  
  );
};

export default Navbar;
