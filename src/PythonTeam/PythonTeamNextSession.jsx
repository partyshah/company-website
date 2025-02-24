import React from 'react';
import './PythonTeamNextSession.css';

const PythonTeamNextSession = () => {
  return (
    <div className="next-session">
      <h2>When's the next session?</h2>
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
  );
};

export default PythonTeamNextSession; 