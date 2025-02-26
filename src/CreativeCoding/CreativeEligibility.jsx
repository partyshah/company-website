import React from 'react';
import './CreativeEligibility.css';

const CreativeEligibility = () => {
  return (
    <div className="eligibility">
      <div className="eligibility-content">
        <h2>Eligibility</h2>
        <div className="requirements">
          <h3>To be eligible to apply, applicants should have:</h3>
          <ul>
            <li>A little bit of computer science experience through an intro course or self-taught</li>
            <li>An interest in creative coding and art</li>
            <li>A student in high school</li>
          </ul>
        </div>
        <div className="restrictions">
          <h3>Students should not:</h3>
          <ul>
            <li>Be too advanced. If you have taken AP Computer Science A, you should apply to an advanced team.</li>
            <li>Be non-high school students (i.e. middle school or college students). This program is for rising 9th-rising 12th graders. We believe deeply that high school is underserved. We've intentionally designed the program for that audience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreativeEligibility; 