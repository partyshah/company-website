import React from 'react';
import ai from '../images/ai.png';
import './AITeamHeader.css';

const AITeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Advanced</div>
        <h1>AI Practical Applications Team</h1>
        <p>Join a 15 person team of experienced high school computer science students, get coached by an expert AI developer, and build AI applications with a team to win the end of season competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will work with a team of experienced coders to build and deploy AI applications using modern machine learning frameworks and Python.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="AI Development" />
      </div>
    </div>
  );
};

export default AITeamHeader; 