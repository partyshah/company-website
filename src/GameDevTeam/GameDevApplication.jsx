import React from 'react';
import './GameDevApplication.css';

const GameDevApplication = () => {
  const applicationSteps = [
    {
      step: '1',
      title: 'Written application',
      description: 'Submit your application showcasing your background and interest in game development.'
    },
    {
      step: '2',
      title: 'Zoom interview',
      description: ' A 30-minute student coding interview followed by a 15-minute family Q&A to discuss enrollment and expectations.'
    },
    {
      step: '3',
      title: 'Enrollment',
      description: 'If accepted, complete your enrollment paperwork and get ready to join the team!'
    }
  ];

  return (
    <div className="application">
      <div className="application-content">
        <h2>Application process</h2>  
        <div className="application-steps">
          {applicationSteps.map((step, index) => (
            <div key={index} className="application-step">
              <h3>{step.step}</h3>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDevApplication; 