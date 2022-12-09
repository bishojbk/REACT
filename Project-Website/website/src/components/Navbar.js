import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Services">
          <li>Services</li>
        </Link>
        <Link to="/Copyright">
          <li>Copyright</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
