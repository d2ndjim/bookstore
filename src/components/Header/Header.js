import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/" className="nav-links">
        BOOKS
      </Link>
      <Link to="/category" className="nav-links">
        CATEGORIES
      </Link>
    </nav>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">person</span>
    </button>
  </header>
);
// <div className="navigation">
//   <h1>Bookstore CMS</h1>
//   <nav>
//     <Link to="/" className="links">
//       Books
//     </Link>
//     <Link to="/category" className="links">
//       Category
//     </Link>
//   </nav>
// </div>

export default Header;
