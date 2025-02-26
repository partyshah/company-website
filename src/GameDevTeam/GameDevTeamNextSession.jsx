import React from 'react';
import './GameDevTeamNextSession.css';

const GameDevTeamNextSession = () => {
  return (
    <div className="next-session">
      <h2>When's the next session?</h2>
      <div className="session-cards">
        <div className="session-card">
          {/* <p className="session-date">June 9–July 18</p> */}
          <h3>July 9 - July 18</h3>
          <p className="session-time">Tuesdays and Thursdays, 6–8 PM PST</p>
        </div>
      </div>
    </div>
  );
};

export default GameDevTeamNextSession; 