import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="info-banner">
        <span>Want more info before applying?</span>
        <button className="info-session-btn">Join an info session</button>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <span>The Coding Games</span>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 