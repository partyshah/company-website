import React from 'react';
import './Coaches.css';
import golpariProfile from './images/golpari.png';
import kuaiProfile from './images/kuai.png';
import matanProfile from './images/matan.jpeg';
import rickProfile from './images/rick.jpeg';

const CoachCard = ({ name, bio, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const Coaches = () => {
  const coachesData = [
    {
      name: "Coach Kuai",
      bio: "Director of Engineering and previous software engineer at Google. Coaches students on natural language processing.",
      image: kuaiProfile
    },
    {
      name: "Coach Golpari",
      bio: "Studied computer sceince and art at University of Michigan and current engineer at Blizzard. Coaches students on game development.",
      image: golpariProfile
    },
    {
      name: "Coach Matan",
      bio: "Former Amazon engineer and studied computer science at Brown University. Coaches students on artifical intelligence.",
      image: matanProfile // Placeholder image
    },
    {
      name: "Coach Rick",
      bio: "Studied computer science and art at Carnegie Mellon University and currently a Machine Learning Engineer at Atlassian. Coaches intro students on creative coding",
      image: rickProfile // Placeholder image
    }
  ];

  return (
    <div className="coaches-container">
      <div className="coaches-content">
        <h1 className="coaches-header">Meet the coaches</h1>
        <p className="coaches-subheader">Our coaches are all professional software engineers from top organizations who are experts in their topic areas:</p>
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
      <div className="coaches-cta">
        <h2>Want to coach a team? Reach out!</h2>
        <a href="#" className="cta-button">Learn more</a>
      </div>
    </div>
  );
};

export default Coaches; 