import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        Pike Teams
      </div>
      <a 
        href="https://airtable.com/appjy9bfsSpDxkkdH/pag2lPoEXUuNpLbmp/form"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-apply-button"
      >
        Apply now
      </a>
    </nav>
  );
};

export default Navbar;
