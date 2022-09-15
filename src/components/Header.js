import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/Categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
      <span>icon</span>
    </header>
  );
}

export default Header;
