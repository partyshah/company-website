import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        Pike Teams
      </div>
      <div className="navbar-buttons">
        <a 
          href="https://lu.ma/piketeams"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Join an infosession
        </a>
        <a 
          href="https://airtable.com/appjy9bfsSpDxkkdH/pag2lPoEXUuNpLbmp/form"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Apply now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
