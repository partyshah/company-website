import React from 'react';
import './PythonCoach.css';
import vinayProfile from '../images/vinayprofile.jpg';

const PythonCoach = () => {
  return (
    <div className="coach">
      <div className="coach-content">
        <h2>Meet the coach</h2>
        <div className="coach-card">
          <img src={vinayProfile} alt="Coach Parth" className="coach-image" />
          <div className="coach-info">
            <h3>Coach Parth</h3>
            <p>
              Hey, I'm Parth! My parents immigrated from India in the '90s where we first 
              settled in Kentucky. Afterwards, I grew up in the Bay Area and attended UC 
              Berkeley on a full-ride scholarship as a Regent's and Chancellor's Scholar. I 
              studied Electrical Engineering & Computer Sciences along with Education.
            </p>
            <p>
              I've worked at cool tech companies and startups like GitHub, Codecademy, and 
              Teamshares. In addition, I was a high school calculus & computer science 
              teacher (2018 National Student Teacher of the Year), head TA at UC Berkeley, 
              and ran a coding school in Southern California. My goal in life to get more 
              people passionate about STEM, and I can't wait to do that for your family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonCoach; 