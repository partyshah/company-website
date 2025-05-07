import React from 'react';
import './SportsTuition.css';
import { sessionData } from './sportsSessionData';

const SportsTuition = () => {
  return (
    <div className="tuition">
      <h2>Tuition & application</h2>
      <div className="tuition-content">
        <ul className="tuition-list">
          <li><strong>Cost:</strong> $1250 for the 6-week program (24 meeting hours).</li>
          <li><strong>Financial Aid:</strong> Available to all families with household income below $200,000.</li>
        </ul>
        <p className="tuition-access-note">
          We’re committed to making this sports analytics program accessible to all students, regardless of financial background.
        </p>
        <a 
          href="https://airtable.com/appjy9bfsSpDxkkdH/shr5y5oD3jxQyAWye"
          target="_blank"
          rel="noopener noreferrer"
          className="tuition-apply-button"
        >
          Join the waitlist
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

export default SportsTuition; 
