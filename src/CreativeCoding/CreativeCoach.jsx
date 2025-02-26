import React from 'react';
import './CreativeCoach.css';
import rickProfile from '../images/rick.jpeg';

const CreativeCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={rickProfile} alt="Coach Rick" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Rick</h3>
            <p>
            Hi, I'm Rick! I grew up in Sacramento and Cupertino, CA and studied Statistics & Machine Learning with a Minor in CS and Fine Arts at Carnegie Mellon University in Pittsburgh. At CMU, I began my journey as an artist thinking that my interested lied in painting and installation practice - but after enrolling in a creative coding class that integrates creativity, artistic practice, and coding in Javascript, I became interested in exploring the boundaries of what art and code can be. I've been working in the industry for a little over a year now as a Machine Learning Engineer at Atlassian!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeCoach; 