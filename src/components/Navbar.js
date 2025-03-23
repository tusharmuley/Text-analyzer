import React from 'react';

const Navbar = ({ brand, links }) => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid container">
          <a className="navbar-brand" href="/">{brand}</a>
          <button 
            className="navbar-toggler" 
            type="button" 
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
                  <a className="nav-link" href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>  
    
  );
};

export default Navbar;
