import React from 'react';
import './AICoach.css';
import matanProfile from '../images/matan.jpeg';

const AICoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={matanProfile} alt="Coach Matan" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Matan</h3>
            <p>
            Hey I'm Matan! I grew up around Boston and studied Computer Science at Brown University, where I completed my bachelor’s and master’s degrees in four years. At Brown, I played in the jazz band and was a teaching assistant for a data science course. After graduating, I worked as a software engineer at Amazon Web Services and then as a founding engineer for several early-stage startups. At the same time, I’ve been teaching and mentoring students in programming, machine learning, and artificial intelligence over the past three years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach; 