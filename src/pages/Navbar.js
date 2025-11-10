import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top"
      style={{
        backgroundColor: "#f8f9fa",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container">
        {/* Logo / Brand */}
        <Link to="/" className="fw-bold m-0" style={{color:"black", textDecoration:"none", fontSize:"30px"}}>Portfolio</Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Internship", "/experience"],
              ["Projects", "/projects"],
              ["Skills", "/skills"],
              ["Extracurricular", "/workshops"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li className="nav-item" key={label}>
                <Link
                  className="nav-link px-3 text-dark fw-semibold"
                  style={{
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                  to={path}
                  onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                  onMouseLeave={(e) => (e.target.style.color = "black")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
