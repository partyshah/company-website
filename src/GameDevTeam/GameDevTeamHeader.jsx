import React from 'react';
import gameDev from '../images/gamedev.png';
import './GameDevTeamHeader.css';

const GameDevTeamHeader = () => {
  return (
    <div className="team-header">  
      <div className="header-content">
        <div className="level-badge intro">Advanced</div>
        <h1>Game Development Program</h1>
		<h2 className="level-badge-sub-content">Build Games. Build Skills. Build Your Future</h2>
        <p>Join a 15 person team of experienced high school computer science students, get coached by an expert game developer, and build a multiplayer game to compete in our end-of-season showcase. Our game development program gives you the skills, experience, and community to help you grow as a developer and creator.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will work with a team of experienced coders to build and publish a multiplayer game (racing, strategy, party, etc.) using Unity and C#.This game development program focuses on both the creative and technical aspects of building a complete, playable game.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={gameDev} alt="GameDev Games" />
      </div>
    </div>
  );
};

export default GameDevTeamHeader; 