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
            <p className="session-date">June 2–August 15</p>
            <h3>Session 1</h3>
            <p className="session-time">Tuesdays and Thursdays, 6:30–8 PM EST</p>
          </div>
          <div className="session-card">
            <p className="session-date">June 2–August 15</p>
            <h3>Session 2</h3>
            <p className="session-time">Tuesdays and Thursdays, 9:00–10:30 PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITuition; 