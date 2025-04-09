import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <div className="apply-section">
      <div className="apply-container">
        <h2 className="apply-title">Join our waitlist</h2>
        <p className="apply-description">
          We are not immediately accepting applications because we are still trying to get through all applications from the previous window.
        </p>
        <p className="apply-description">
          Join our waitlist and we will respond within 1 week about whether you're invited to apply.
        </p>
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