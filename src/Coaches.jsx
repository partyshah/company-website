import React, { useState } from 'react';
import './Coaches.css';
import vinayProfile from './images/vinayprofile.jpg';

const CoachCard = ({ name, bio, image }) => {
  return (
    <div className="coach-card">
      <div className="coach-image">
        <img src={image} alt={name} />
      </div>
      <div className="coach-info">
        <h3 className="coach-name">{name}</h3>
        <p className="coach-bio">{bio}</p>
      </div>
    </div>
  );
};

const Coaches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coachesData = [
    {
      name: "Coach 1",
      bio: "Expert in web development and AI",
      image: vinayProfile
    },
    {
      name: "Coach 2",
      bio: "Specializes in mobile app development",
      image: vinayProfile
    },
    {
      name: "Coach 3",
      bio: "Game development expert",
      image: vinayProfile
    }
  ];

  const nextCoach = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === coachesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCoach = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? coachesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="coaches-container">
      <div className="coaches-content">
        <h1 className="coaches-header">Meet the coaches</h1>
        <p className="coaches-subheader">Each coach comes from a unique background.</p>
      </div>
      <div className="coaches-grid">
        {coachesData.map((coach, index) => (
          <CoachCard
            key={index}
            name={coach.name}
            bio={coach.bio}
            image={coach.image}
          />
        ))}
      </div>
      <div className="coaches-carousel">
        <button className="carousel-button prev" onClick={prevCoach}>&lt;</button>
        <CoachCard
          name={coachesData[currentIndex].name}
          bio={coachesData[currentIndex].bio}
          image={coachesData[currentIndex].image}
        />
        <button className="carousel-button next" onClick={nextCoach}>&gt;</button>
      </div>
    </div>
  );
};

export default Coaches; 