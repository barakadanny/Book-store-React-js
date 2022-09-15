import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul className="nav-menu">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/Categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
      <span>
        {' '}
        <FaUser />
        {' '}
      </span>
    </header>
  );
}

export default Header;
