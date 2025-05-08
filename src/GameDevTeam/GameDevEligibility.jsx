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
            <li>Completed many coding projects independently; and</li>
            <li>Strong interest in studying computer science in college</li>
          </ul>
        </div>
        <div className="restrictions">
          <h3>Students should not:</h3>
          <ul>
            <li>Have no prior coding experience</li>
            <li>Be in middle school or college (this program is for rising 9th–12th graders)</li>
          </ul>
        </div>
       <p>We’ve specifically designed this game development program to serve high schoolers who are ready to grow in a focused, team-based environment.</p> 		
      </div>
    </div>
  );
};

export default GameDevEligibility; 