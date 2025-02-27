import React from 'react';
import './SportsStudentJourney.css';

const SportsStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'This week is focused on learning Python and the fundamentals of sports data analysis through a mini project.'
    },
    {
      week: 'Week 2',
      description: 'They will work on their first set of features with a partner assigned by their project lead. They will also learn about data visualization and statistical methods.'
    },
    {
      week: 'Week 3',
      description: 'They will wrap up their first feature set and present to the other subteam. They will have a feedback meeting with their project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'They will work on their second feature set with a partner assigned by their project lead. They will be working on more complex statistical models and advanced visualizations.'
    },
    {
      week: 'Week 6',
      description: 'They will present their final feature set in the competition and complete reviews of their team members.'
    }
  ];

  return (
    <div className="sports-student-journey">
      <div className="sports-journey-content">
        <h2>The student journey</h2>
        <p>On this team, you will work with a team to learn the fundamentals of Python and sports analytics through building prediction applications. Your coach and project lead will teach you Python and statistical methods, work with you to analyze sports data, and help you develop insights. Becoming a project lead is invite only and will be based on the quality of your application.</p>
        <div className="sports-journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="sports-journey-step">
              <h3>{step.week}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsStudentJourney; 