import React from 'react';
import './AIStudentJourney.css';

const AIStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'This week is focused on learning the tech-stack through a mini project.'
    },
    {
      week: 'Week 2',
      description: 'They will work on their first set of features with a partner assigned by their project lead.'
    },
    {
      week: 'Week 3',
      description: 'They will wrap up their first features and present to the other subteam. They will have a feedback meeting with their project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'They will work on their second set of features with a partner assigned by their project lead.'
    },
    {
      week: 'Week 6',
      description: 'They will present their final project in the competition and complete reviews of their team members.'
    }
  ];

  return (
    <div className="student-journey">
      <div className="journey-content">
        <h2>The student journey</h2>
        <p>
          On this team, you will work with 7 other engineers to build an X. Your coach and
          project lead will teach you the tech stack, work with you to decide features, and help
          you debug. Becoming a project lead is invite only and will be based on the quality of
          your application.
        </p>
        <div className="journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="journey-step">
              <h3>{step.week}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIStudentJourney; 