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
import rick from './images/rick.jpeg';
import golpari from './images/golpari.png'; 
import matan from './images/matan.jpeg';
import kuai from './images/kuai.png';
import { Link } from 'react-router-dom';

const TeamCard = ({ level, title, sessions, backgroundPath, route, bio, coach }) => {
  const isAdvanced = level.toLowerCase() === "advanced";
  const levelClass = isAdvanced ? "advanced" : "intro";

  return (
    <Link to={route} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="team-card" style={{ cursor: 'pointer' }}>
        <img 
          src={backgroundPath} 
          alt={title} 
          className={`card-image ${levelClass}`}
        />
        <div className="card-content">
          <div className={`level-badge ${levelClass}`}>{level}</div>
          <h3>{title}</h3>
          {coach && <p className="coach-name"><strong>Coach</strong> <strong>{coach}</strong></p>}
          {sessions.map((session, index) => (
            <p key={index}>{session}</p>
          ))}
          {bio && <p className="team-bio">{bio}</p>}
        </div>
      </div>
    </Link>
  );
};

const Teams = () => {
  const teamData = [
    {
      level: "Intermediate",
      title: "Creative Coding",
      backgroundPath: rick,
      coach: "Rick Zhang",
      route: "/creativecodingteam",
      sessions: [
        "June 9 - July 18th. Mondays and Wednesdays, 6-8pm EST"
      ],
      bio: "Coach Rick studied computer science and art at Carnegie Mellon University and currently a Machine Learning Engineer at Atlassian.",
    },
    {
      level: "Advanced",
      title: "Game Development Team",
      backgroundPath: golpari,
      coach: "Golpari Abari",
      route: "/gamedevteam",
      sessions: [
        "June 9 - July 18th. Tuesdays and Thursdays, 6-8pm PST",
      ],
      bio: "Coach Golpari studied computer science and art at University of Michigan and is a current software engineer at Blizzard Entertainment.",
    },
    {
      level: "Advanced",
      title: "AI Practical Applications Team",
      backgroundPath: matan,
      coach: "Matan Gans",
      route: "/aiteam",
      sessions: ["June 9 - July 18th. Tuesdays and Thursdays, 6-8pm EST"],
      bio: "Coach Matan is a former Amazon engineer and studied computer science at Brown University. He has been teaching and mentoring students in programming for over 3 years.",
    },
    {
      level: "Advanced",
      title: "AI Natural Language Processing Team",
      backgroundPath: kuai,
      coach: "Kuai Yu",
      route: "/nlpteam",
      sessions: ["June 9 - July 18th. Tuesdays and Thursdays, 5-7pm PST"],
      bio: "Coach Kuai is a director of engineering at a startup in the Bay Area and was previously a software engineer at Google.",
    },
  ];


  return (
    <section className="teams">
      <div className="teams-header">
        <h2>Apply for a team</h2>
        <p>Join a team based on your interests, level, and availability.</p>
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
