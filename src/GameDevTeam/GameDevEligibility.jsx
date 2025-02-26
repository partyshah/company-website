import React from 'react';
import './GameDevEligibility.css';

const GameDevEligibility = () => {
  return (
    <div className="eligibility">
      <div className="eligibility-content">
        <h2>Eligibility</h2>
        <div className="requirements">
          <h3>To be eligible to apply, applicants should have:</h3>
          <ul>
            <li>Completed AP Computer science A; or</li>
            <li>Completed many coding projects on the side; and</li>
            <li>Strongly considered studying computer science in college.</li>
          </ul>
        </div>
        <div className="restrictions">
          <h3>Students should not:</h3>
          <ul>
            <li>Have no coding experience. Right now students need some experience for our intermediate team and a lot of experience for advanced.</li>
            <li>Be non-high school students (i.e. middle school or college students). This program is for rising 9th-rising 12th graders. We believe deeply that high school is underserved. We've intentionally designed the program for that audience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDevEligibility; 