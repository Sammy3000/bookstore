import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
  return (
    <nav>
      <div className="nav-info">
        <h1 className="nav-header">Bookstore CMS</h1>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </div>
      <div className="logo">avatar</div>
    </nav>
  );
}

export default Nav;
