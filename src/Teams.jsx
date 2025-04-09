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
import chris from './images/chris.png';
import leo from './images/leo.jpeg';
import { Link } from 'react-router-dom';
// Import session data
import { sessionData as creativeSessionData } from './CreativeCoding/creativeSessionData';
import { sessionData as gameDevSessionData } from './GameDevTeam/gameDevSessionData';
import { sessionData as aiSessionData } from './AITeam/aiSessionData';
import { sessionData as nlpSessionData } from './NLPTeam/nlpSessionData';
import { sessionData as sportsAnalyticsSessionData } from './SportsAnalytics/sportsSessionData';
import { sessionData as mlSessionData } from './MLTeam/mlSessionData';

const TeamCard = ({ level, title, backgroundPath, route, bio, coach, sessionData }) => {
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
          <p><strong>Dates:</strong> {sessionData.map((session, index) => (
            <span key={session.id}>
              {index > 0 ? ' or ' : ''}{session.dates}
            </span>
          ))}</p>
          <p><strong>Meeting Times:</strong> {sessionData[0].time}</p>
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
      title: "Creative Coding Team",
      backgroundPath: rick,
      coach: "Rick Zhang",
      route: "/creativecodingteam",
      sessionData: creativeSessionData,
      bio: "Coach Rick studied computer science and art at Carnegie Mellon University and currently a Machine Learning Engineer at Atlassian.",
    },
    {
      level: "Intermediate",
      title: "Sports Analytics Team",
      backgroundPath: chris,
      coach: "Chris Bravo",
      route: "/sportsanalyticsteam",
      sessionData: sportsAnalyticsSessionData,
      bio: "Coach Chris studied applied math at Brown University and finished his Master of Science in Computer Science at Georgia Tech. He now works in business analytics at DraftKings.",
    },
    {
      level: "Advanced",
      title: "Game Development Team",
      backgroundPath: golpari,
      coach: "Golpari Abari",
      route: "/gamedevteam",
      sessionData: gameDevSessionData,
      bio: "Coach Golpari studied computer science and art at University of Michigan and is a current software engineer at Blizzard Entertainment.",
    },
    {
      level: "Advanced",
      title: "AI Practical Applications Team",
      backgroundPath: matan,
      coach: "Matan Gans",
      route: "/aiteam",
      sessionData: aiSessionData,
      bio: "Coach Matan is a former Amazon engineer and studied computer science at Brown University. He has been teaching and mentoring students in programming for over 3 years.",
    },
    {
      level: "Advanced",
      title: "AI Natural Language Processing Team",
      backgroundPath: kuai,
      coach: "Kuai Yu",
      route: "/nlpteam",
      sessionData: nlpSessionData,
      bio: "Coach Kuai is a director of engineering at a startup in the Bay Area and was previously a software engineer at Google.",
    },
    {
      level: "Advanced",
      title: "Machine Learning Team",
      backgroundPath: leo,
      coach: "Leo Chen",
      route: "/mlteam",
      sessionData: mlSessionData,
      bio: "Coach Leo is a data scientist and software engineer who studied statistics and data science at Yale University.",
    },
  ];

  return (
    <section className="teams">
      <div className="teams-header">
        <h2>Have what it takes? Look at our teams.</h2>
        <p>We are selecting only 150 of the best high school students nationwide. Click on a team to learn more:</p>
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
