import React from 'react';
import './NLPCoach.css';
import kuaiProfile from '../images/kuai.png';

const NLPCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={kuaiProfile} alt="Coach Kuai" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Kuai</h3>
            <p>
            Hey I'm Kuai! I studied Computer Science at the University of Washington, earned a Math degree from Reed College, and pursued Financial Mathematics at NYU. I began my career as a software engineer at Google and later worked at leading hedge funds like Two Sigma and Citadel. Now, I’m the Director of Engineering at a startup in the Bay Area. I’ve always loved mentoring others in STEM — helping students land their first programming roles, guiding career transitions into software engineering, and mentoring engineers into leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLPCoach; 