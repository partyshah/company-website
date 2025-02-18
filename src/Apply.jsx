import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <div className="apply-section">
      <div className="apply-container">
        <h2 className="apply-title">Apply to join today!</h2>
        <p className="apply-description">Final call to action here! This button below will scroll up to the offerings section.</p>
        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="apply-button"
        >
          Apply now
        </a>
      </div>
    </div>
  );
};

export default Apply; 