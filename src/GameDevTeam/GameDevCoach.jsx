import React from 'react';
import './GameDevCoach.css';
import golProfile from '../images/golpari.png';

const GameDevCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={golProfile} alt="Coach Gol" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Golpari</h3>
            <p>
              Bio goes here
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDevCoach; 