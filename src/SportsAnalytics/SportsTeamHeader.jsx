import React from 'react';
import sportsAnalytics from '../images/sportsanalytics.png';
import './SportsTeamHeader.css';

const SportsTeamHeader = () => {
  return (
    <div className="team-header sports-team-header">
      <div className="header-content">
        <div className="level-badge intermediate">Intermediate</div>
        <h1>Sports Analytics Program</h1>
        <p>Join a 15-person team of high school students passionate about sports and computer science, get coached by an experienced sports analytics professional, and develop prediction applications to win the end-of-season competition.</p>
		<p>This hands-on sports analytics program is designed to provide a real-world experience in analyzing and predicting sports outcomes.</p>
        <div className="outcome-section">
          <h2>Outcome</h2>
          <p>By the end of the 6 weeks, you will build and present your own sports analytics project that provides valuable insights from real sports data. You will be able to analyze player performance, predict game outcomes, and identify strategic patterns using Python and statistical methods.</p>
          <p>The sports analytics program prepares you to apply professional techniques used by analysts in real-world sports environments.</p>
		</div>
      </div>
      <div className="header-image">
        <img src={sportsAnalytics} alt="Sports Analytics" />
      </div>
    </div>
  );
};

export default SportsTeamHeader; 