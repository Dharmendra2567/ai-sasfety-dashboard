import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Brand/Logo with responsive margin */}
        <a className="navbar-brand fw-bold brand-title" href="#">
          <span className="brand-highlight">AI</span> Sentinel
        </a>
      </div>
    </nav>
  );
};

export default Navbar;