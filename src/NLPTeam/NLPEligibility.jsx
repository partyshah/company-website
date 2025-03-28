import React from 'react';
import './NLPEligibility.css';

const NLPEligibility = () => {
  return (
    <div className="eligibility">
      <div className="eligibility-content">
        <div className="eligibility-header">
          <h2>Eligibility</h2>
          <div className="date-time-boxes">
            <div className="date-time-box">
              <h3>AP CS A</h3>
              <p>Completed at least AP CS A or equivalent class</p>
            </div>
            <div className="date-time-box">
              <h3>Side projects</h3>
              <p>Completed multiple coding projects on the side beyond AP CS A</p>
            </div>
            <div className="date-time-box">
              <h3>Concepts</h3>
              <p>Knows variables, functions, loops, conditionals, lists/2d arrays, object oriented programming, recursion, and can combine multiple files into one project</p>
            </div>
            <div className="date-time-box">
              <h3>US high school students</h3>
              <p>We only accept rising 9th graders-rising 12th graders in the US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLPEligibility; 