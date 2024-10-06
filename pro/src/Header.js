import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">MyWebsite</div>
        <ul className="nav-links">
          <li className="list"><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
