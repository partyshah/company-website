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
            Hi, I’m Golpari! I love both playing games and developing them! Although I now live in California, I’m originally from Washington DC. In college at the University of Michigan — Ann Arbor, I majored in Computer Science and minored in Art & Design. During my studies, I took an interest in game dev and general design, and it’s where a lot of my love for games began. Some of my favorites include Gris, Ori and the Blind Forest, and Fortnite. 

I now work as an Associate Software Engineer on the server team of World of Warcraft. Before that, I interned on an unnanounced game, and worked on several independent projects of my own. Games are an incredible combination of education, art, programming, and more. I look forward to sharing my love for them with you!
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDevCoach; 