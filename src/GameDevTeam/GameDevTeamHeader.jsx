import React from 'react';
import gameDev from '../images/gamedev.png';
import './GameDevTeamHeader.css';

const GameDevTeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Advanced</div>
        <h1>Game Development Team</h1>
        <p>Join a 15 person team of experienced high school computer science students, get coached by an expert game developer, and build a game with a team to win the end of season competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will work with a team of experienced coders to build and publish a multiplayer game (racing, strategy, party, etc.) using Unity and C#.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={gameDev} alt="GameDev Games" />
      </div>
    </div>
  );
};

export default GameDevTeamHeader; 