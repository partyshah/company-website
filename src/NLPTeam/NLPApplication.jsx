import React from 'react';
import './NLPApplication.css';

const NLPApplication = () => {
  const applicationSteps = [
    {
      step: '1',
      title: 'Written application',
      description: 'Students submit a written application showcasing their background and interest. Only top applicants are selected for an interview.'
    },
    {
      step: '2',
      title: 'Zoom interview', 
      description: 'Both parent and student join. The student completes a 30-minute coding interview to assess their skills. At the end of the student interview, parents join the same Zoom session for 15 minutes to discuss team commitment and enrollment details.'
    },
    {
      step: '3',
      title: 'Enrollment',
      description: 'Admitted students receive paperwork to officially join the team.'
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

export default NLPApplication; 