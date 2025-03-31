import React from 'react';
import './GameDevTuition.css';
import { sessionData } from './gameDevSessionData';

const GameDevTuition = () => {
  return (
    <div className="tuition">
      <h2>Tuition & application</h2>
      <div className="tuition-content">
        <p className="tuition-cost">The cost is $1000 for the 6 week program (24 meeting hours)</p>
        <p className="tuition-note">With that said, accessibility is very important to us.</p>
        <p className="tuition-aid">We offer financial aid for all families below $200k in household income.</p>
        <a 
          href="https://airtable.com/appjy9bfsSpDxkkdH/pag2lPoEXUuNpLbmp/form"
          target="_blank"
          rel="noopener noreferrer"
          className="tuition-apply-button"
        >
          Apply now
        </a>
        <div className="session-cards">
          {sessionData.map(session => (
            <div key={session.id} className="session-card">
              <p className="session-date">{session.title}</p>
              <h3>{session.dates}</h3>
              <p className="session-time">{session.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDevTuition; 