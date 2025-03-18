import React from 'react';
import ml from '../images/ml.png';
import './MLTeamHeader.css';

const MLTeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Advanced</div>
        <h1>Machine Learning Team</h1>
        <p>Join a 15 person team of experienced high school computer science students, get coached by an expert Machine Learning developer, and build ML applications with a team to win the end of season competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will work with a team of experienced coders to build and deploy Machine Learning applications using modern ML frameworks and Python.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ml} alt="Machine Learning Development" />
      </div>
    </div>
  );
};

export default MLTeamHeader; 