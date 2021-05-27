import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Kreative Welt
          </Link>{" "}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu activ" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-Links" onClick={closeMobileMenu}>
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link
                to="/Paintings"
                className="nav-Links"
                onClick={closeMobileMenu}
              >
                Galerie
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link
                to="/Exhibition"
                className="nav-Links"
                onClick={closeMobileMenu}
              >
                Ausstellungen
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
