import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUser } from "react-icons/fa";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "#121212",
  };
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul className="nav-menu">
          <li>
            <Link style={linkStyle} to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/Categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
      <span>
        <FaUser />
      </span>
    </header>
  );
}

export default Header;
