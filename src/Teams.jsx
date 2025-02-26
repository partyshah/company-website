import React from "react";
import "./Teams.css";
// Import images
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import creativeCoding from './images/creativecoding.png';
import gameDev from './images/gamedev.png';
import ai from './images/ai.png';
import nlp from './images/nlp.png';
import { useNavigate } from 'react-router-dom';
const TeamCard = ({ level, title, sessions, backgroundPath, route }) => {
  const isAdvanced = level.toLowerCase() === "advanced";
  const levelClass = isAdvanced ? "advanced" : "intro";

  const handleClick = () => {
    window.open(route, '_blank');
  };

  return (
    <div className="team-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img 
        src={backgroundPath} 
        alt={title} 
        className={`card-image ${levelClass}`}
      />
      <div className="card-content">
        <div className={`level-badge ${levelClass}`}>{level}</div>
        <h3>{title}</h3>
        {sessions.map((session, index) => (
          <p key={index}>Session {index + 1}: {session}</p>
        ))}
      </div>
    </div>
  );
};

const Teams = () => {
  const teamData = [
    {
      level: "Intro",
      title: "Creative Coding",
      backgroundPath: creativeCoding,
      route: "/creativecodingteam",
      sessions: [
        "June 9 - July 18th ; 6:30-8pm EST"
      ],
    },
    {
      level: "Advanced",
      title: "Game Development Team",
      backgroundPath: gameDev,
      route: "/gamedevteam",
      sessions: [
        "June 9 - July 18th ; 6:30-8pm EST",
        "July 7th - August 15th ; 6:30-8pm EST",
      ],
    },
    {
      level: "Advanced",
      title: "AI Team",
      backgroundPath: ai,
      route: "/aiteam",
      sessions: ["June 9 - July 18th ; 6:30-8pm EST"],
    },
    {
      level: "Advanced",
      title: "Natural Language Processing Team",
      backgroundPath: nlp,
      route: "/nlpteam",
      sessions: ["July 7th - August 15th ; 6:30-8pm EST"],
    },
  ];


  return (
    <section className="teams">
      <div className="teams-header">
        <h2>Apply for a team</h2>
        <p>Join a team based on your child's interests, level, and availability.</p>
      </div>
      <div className="teams-grid">
        {teamData.map((team, index) => (
          <TeamCard key={index} {...team} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
