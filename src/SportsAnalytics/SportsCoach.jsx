import React from 'react';
import './SportsCoach.css';
import chrisProfile from '../images/chris.png';

const SportsCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={chrisProfile} alt="Coach Chris" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Chris</h3>
            <p>
            Hey I'm Chris! I grew up in Connecticut and earned my Bachelor of Arts in Applied Math and Cognitive Neuroscience from Brown University in 2022. I recently completed my Master of Science in Computer Science at Georgia Tech. At Brown, I conducted research on attentional control networks, exploring how attention is affected by rewards. Since graduating from Brown I have worked in business analytics at DraftKings while also deepening my knowledge of AI through my master’s coursework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCoach; 