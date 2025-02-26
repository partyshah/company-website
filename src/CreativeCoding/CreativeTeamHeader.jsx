import React from 'react';
import creativeCoding from '../images/creativecoding.png';
import './CreativeTeamHeader.css';

const CreativeTeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Intermediate</div>
        <h1>Creative Coding</h1>
        <p>Join a 15 person team of experienced high school computer science students, get coached by an engineer from Atlassian, and build creative and artistic software to win the end of season competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will build and publish your own web art that takes in real user input. You will be able to build complex sound visualizers, games, and shapeshifting patterns all using p5.js.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={creativeCoding} alt="Creative Games" />
      </div>
    </div>
  );
};

export default CreativeTeamHeader; 