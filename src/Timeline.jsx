import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="timeline-container">
        <h2>Competition Timeline</h2>
        <p className="timeline-subheader">Pike is an intense environment that will challenge you, but we promise the results and friendships you make are worth it</p>
        <div className="timeline-content">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-marker">🚀</div>
              <div className="timeline-text">
                <h3>Week 1</h3>
                <p>You'll meet your team, start talking to users, determine your project, and ship your first feature.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">💻</div>
              <div className="timeline-text">
                <h3>Weeks 2-5</h3>
                <p>You'll build your project alongside your team with feedback and instruction from your coach.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">🏆</div>
              <div className="timeline-text">
                <h3>Week 6</h3>
                <p>You'll get users to test your product, finalize your project, and showcase it in the competition. Judges come from Google, Open AI, and Facebook.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 