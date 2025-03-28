import React from 'react';
import './InfoSession.css';

const InfoSession = () => {
  return (
    <div className="info-session-container">
      <div className="info-session-content">
        <h2>Want more info before applying?</h2>
        <a 
          href="https://lu.ma/piketeams"
          target="_blank"
          rel="noopener noreferrer"
          className="info-session-button"
        >
          Join an info session
        </a>
      </div>
    </div>
  );
};

export default InfoSession; 