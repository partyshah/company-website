import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <div className="apply-section">
      <div className="apply-container">
        <h2 className="apply-title">Apply to join today!</h2>
        <p className="apply-description">We're currently accepting applications for our summer teams. Applications are due April 7th!</p>
        <a 
          href="https://airtable.com/appjy9bfsSpDxkkdH/pag2lPoEXUuNpLbmp/form" 
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