import React from 'react';
import './AITuition.css';

const AITuition = () => {
  return (
    <div className="tuition">
      <h2>Tuition & application</h2>
      <div className="tuition-content">
        <p className="tuition-cost">The cost is $1000 for the 6 week program (24 meeting hours)</p>
        <p className="tuition-note">With that said, accessibility is very important to us.</p>
        <p className="tuition-aid">We offer financial aid for all families below $200k in household income.</p>
        <button className="tuition-apply-button">Apply now</button>
        <div className="session-cards">
          <div className="session-card">
            <h3>July 9 - July 18</h3>
            <p className="session-time">Tuesdays and Thursdays, 6–8 PM PST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITuition; 