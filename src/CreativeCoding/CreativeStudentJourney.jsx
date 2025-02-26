import React from 'react';
import './CreativeStudentJourney.css';

const CreativeStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'This week is focused on learning p5.js and the fundamentals of coding through a mini project.'
    },
    {
      week: 'Week 2',
      description: 'They will work on their first set of features with a partner assigned by their project lead. They will also learn about the importance of user experience and design.'
    },
    {
      week: 'Week 3',
      description: 'They will wrap up their first features and present to the other subteam. They will have a feedback meeting with their project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'They will work on their second set of features with a partner assigned by their project lead. They will be working on more complex features and using various p5.js functions.'
    },
    {
      week: 'Week 6',
      description: 'They will present their final project in the competition and complete reviews of their team members.'
    }
  ];

  return (
    <div className="creative-student-journey">
      <div className="creative-journey-content">
        <h2>The student journey</h2>
        <p>On this team, you will work with a team to learn the fundamentals of coding and build a creative and artistic web animation. Your coach and project lead will teach you the javascript through the p5.js library, work with you to decide features, and help you debug. Becoming a project lead is invite only and will be based on the quality of your application.</p>
        <div className="creative-journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="creative-journey-step">
              <h3>{step.week}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeStudentJourney; 