import React from 'react';
import sportsAnalytics from '../images/sportsanalytics.png';
import './SportsTeamHeader.css';

const SportsTeamHeader = () => {
  return (
    <div className="team-header sports-team-header">
      <div className="header-content">
        <div className="level-badge intermediate">Intermediate</div>
        <h1>Sports Analytics Team</h1>
        <p>Join a 15 person team of high school students passionate about sports and computer science, get coached by an experienced sports analytics professional, and develop prediction applicatoins to win the end of season competition.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will build and present your own sports analytics project that provides valuable insights from real sports data. You will be able to analyze player performance, predict game outcomes, and identify strategic patterns using Python and statistical methods.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={sportsAnalytics} alt="Sports Analytics" />
      </div>
    </div>
  );
};

export default SportsTeamHeader; 