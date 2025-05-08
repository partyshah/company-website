import React from 'react';
import './NLPStudentJourney.css';

const NLPStudentJourney = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      description: 'This week is focused on learning the fundamentals of natural language processing with Python. They will learn about the different types of NLP tasks, the different types of NLP models, and the different types of NLP data.'
    },
    {
      week: 'Week 2',
      description: 'They will work on their first set of features for the game with a partner assigned by their project lead.'
    },
    {
      week: 'Week 3',
      description: 'They will wrap up their first features and present to the other subteam. They will have a feedback meeting with their project lead and coach.'
    },
    {
      week: 'Week 4-5',
      description: 'They will work on their second set of features with a partner assigned by their project lead. They will add a user interface to their application.'
    },
    {
      week: 'Week 6',
      description: 'They will present their final project in the competition and complete reviews of their team members.'
    }
  ];

  return (
    <div className="gamedev-student-journey">
      <div className="gamedev-journey-content">
        <h2>The student journey</h2>
        <p>
        On this team, you will work with a team to learn the fundamentals of natural language processing and build an AI bot using Python. Your coach and project lead will teach you the NLP libraries using Python, work with you to decide features, and help you debug. Becoming a project lead is invite only and will be based on the quality of your application.
        </p>
		<p>The program functions like an applied natural language processing course where students get to build features, test them, and collaborate in an agile workflow.</p>
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

export default NLPStudentJourney; 