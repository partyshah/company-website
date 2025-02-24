import React from 'react';
import img1 from '../images/img1.png';
import './AITeamHeader.css';

const AITeamHeader = () => {
  return (
    <div className="team-header">
      <div className="header-content">
        <div className="level-badge intro">Intro</div>
        <h1>Intro to AI Games</h1>
        <p>Develop the computer science skills expected at the college level by joining a team of 10-15 ambitious high schoolers who build real software products to submit as part of an app challenge competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>On this team, you will build a fully functioning game like Tetris with a complete UI. To build that, you will be getting comfortable with AI, libraries like Streamlit, and deployment.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={img1} alt="AI Games" />
      </div>
    </div>
  );
};

export default AITeamHeader; 