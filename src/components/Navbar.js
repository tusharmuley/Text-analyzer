import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ brand, links, toggleMode, mode }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mode}>
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">{brand}</Link>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
          <input onClick={toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
