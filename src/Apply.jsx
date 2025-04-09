import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <div className="apply-section">
      <div className="apply-container">
        <h2 className="apply-title">Apply to join today</h2>
        <p className="apply-description">Applications for teams are highly competitive and we accept on first come first serve basis. Apply early.</p>
        <a 
          href="https://airtable.com/appjy9bfsSpDxkkdH/shr5y5oD3jxQyAWye" 
          target="_blank" 
          rel="noopener noreferrer"
          className="apply-button"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
};

export default Apply; 