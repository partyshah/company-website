import React from 'react';
import './SportsEligibility.css';

const SportsEligibility = () => {
  return (
    <section className="eligibility">
      <div className="eligibility-content">
        <div className="eligibility-header">
          <h2>Eligibility</h2>
          <div className="date-time-boxes">
            <div className="date-time-box">
              <h3>AP CS Principles</h3>
              <p>Completed AP CS P or equivalent class. Some students have completed AP CS A</p>
            </div>
            <div className="date-time-box">
              <h3>Side projects</h3>
              <p>Completed some coding projects on the side</p>
            </div>
            <div className="date-time-box">
              <h3>Concepts</h3>
              <p>Knows variables, functions, loops, conditionals, lists/2d arrays</p>
            </div>
            <div className="date-time-box">
              <h3>US high school students</h3>
              <p>We only accept rising 9th graders-rising 12th graders in the US</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsEligibility; 