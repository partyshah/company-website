import React from 'react';
import './MLCoach.css';
import leoProfile from '../images/leo.jpeg';

const MLCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={leoProfile} alt="Coach Leo" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Leo</h3>
            <p>
            Hi, I’m Leo! I’m from New York and majored in Statistics & Data Science at Yale University. During undergrad, I interned as a data scientist and helped out with a bioinformatics research project where we used machine learning to classified tumor sites from DNA sequence variations using something new called homomorphic encryption. Since graduation, I’ve worked at a couple early-stage tech startups wearing many hats; building data pipelines, conducting analytics and data science, scaling software infrastructure, and experimenting with machine learning methods. Outside of engineering, I spend my time playing soccer, volleyball, video games, making art, reading sci-fi / fantasy novels, and mentoring/teaching high school and middle school students! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLCoach; 