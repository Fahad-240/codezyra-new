import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router"; // ✅ yahan router-dom use karna hai

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar-item">
      <div className="inner-navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>

        <div className="navbar-items">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <p>Home</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            <p>About</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/contact">
            <p>Contact</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/portfolio">
            <p>Portfolio</p>
          </Link>
           <Link style={{ textDecoration: "none", color: "black" }} to="/portfolio">
            <p>Payment Plains</p>
          </Link>

          {/* Services with dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/service">
              <p>Services <span className="dropdown-arrow"> ▾</span></p>
            </Link>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/service/web">Web Development</Link>
                <Link to="/service/app">App Development</Link>
                <Link to="/service/uiux">UI/UX Design</Link>
                <Link to="/service/seo">SEO</Link>
                <Link to="/service/graphic">Graphic Designing</Link>
                <Link to="/service/digital">Digital Marketing</Link>
                <Link to="/service/social">Social Media Marketing</Link>


              </div>
            )}
          </div>

          <button className="hire">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
