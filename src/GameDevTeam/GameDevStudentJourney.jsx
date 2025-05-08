import React from 'react';
import './GameDevStudentJourney.css';

const GameDevStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'Learn the fundamentals of game development with Unity and C#. You’ll also explore the game design process and how to create a game design document.'
    },
    {
      week: 'Week 2',
      description: 'Start building your first set of features with a partner assigned by your project lead.'
    },
    {
      week: 'Week 3',
      description: 'Complete and present your first features to another subteam. You'll receive feedback from your project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'Develop your second set of features, including more advanced concepts like physics and audio integration.'
    },
    {
      week: 'Week 6',
      description: 'Present your final project during the end-of-season competition and complete peer reviews.' 
    }
  ];

  return (
    <div className="gamedev-student-journey">
      <div className="gamedev-journey-content">
        <h2>The student journey</h2>
        <p> 
        On this team, you will work with peers to learn the fundamentals of game development and build a multiplayer game. Your coach and project lead will teach you Unity and C#, work with you to decide features, and help you debug. Becoming a project lead is invite-only and will be based on the quality of your application.
        </p> 
		<p>This game development program will guide you from basic setup to final showcase, all while teaching core software and design principles.</p>
        <div className="gamedev-journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="gamedev-journey-step">
              <h3>{step.week}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDevStudentJourney; 