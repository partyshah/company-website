import React from 'react';
import './SportsTeamNextSession.css';
import { sessionData } from './sportsSessionData';

const SportsTeamNextSession = () => {
  return (
    <div className="next-session">
      <h2>When's the next session?</h2>
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
  );
};

export default SportsTeamNextSession; 