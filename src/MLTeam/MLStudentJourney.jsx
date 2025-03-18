import React from 'react';
import './MLStudentJourney.css';

const MLStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'This week is focused on learning the fundamentals of Machine Learning development with Python and modern ML frameworks. They will also learn about the ML development process and essential data science libraries.'
    },
    {
      week: 'Week 2',
      description: 'They will work on their first set of ML features with a partner assigned by their project lead.'
    },
    {
      week: 'Week 3',
      description: 'They will wrap up their first features and present to the other subteam. They will have a feedback meeting with their project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'They will work on their second set of features with a partner assigned by their project lead. They will be building more complex ML features like model training, validation, and optimization.'
    },
    {
      week: 'Week 6',
      description: 'They will present their final project in the competition and complete reviews of their team members.'
    }
  ];

  return (
    <div className="ml-student-journey">
      <div className="ml-journey-content">
        <h2>The student journey</h2>
        <p>
        On this team, you will work with a team to learn the fundamentals of Machine Learning development and build advanced ML applications. Your coach and project lead will teach you Python and modern ML frameworks, work with you to design ML solutions, and help you debug. Becoming a project lead is invite only and will be based on the quality of your application.
        </p>
        <div className="ml-journey-steps">
          {journeySteps.map((step, index) => (
            <div key={index} className="ml-journey-step">
              <h3>{step.week}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MLStudentJourney; 