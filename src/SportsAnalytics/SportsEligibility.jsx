import React from 'react';
import './SportsEligibility.css';

const SportsEligibility = () => {
  return (
    <div className="eligibility">
      <div className="eligibility-content">
        <h2>Eligibility</h2>
        <div className="requirements">
          <h3>To be eligible to apply, applicants should have:</h3>
          <ul>
            <li>Taken an intro coding class or have some experience with Python</li>
            <li>An interest in sports and computer science</li>
            <li>A student in high school</li>
          </ul>
        </div>
        <div className="restrictions">
          <h3>Students should not:</h3>
          <ul>
            <li>Be too advanced. If you have significant experience with computer science, you should apply to an advanced team.</li>
            <li>Be non-high school students (i.e. middle school or college students). This program is for rising 9th-rising 12th graders. We believe deeply that high school is underserved. We've intentionally designed the program for that audience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SportsEligibility; 