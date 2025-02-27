import React from 'react';
import './NLPSchedule.css';

const NLPSchedule = () => {
  const scheduleItems = [
    {
      duration: '30 mins',
      description: 'Lesson of the day (Python, NLP Libraries)'
    },
    {
      duration: '80 mins',
      description: 'Project time in teams'
    },
    {
      duration: '10 mins',
      description: 'Reflection circle'
    }
  ];

  return (
    <div className="daily-schedule">
      <div className="schedule-content">
        <h2>Daily schedule</h2>
        <div className="schedule-card">
          {scheduleItems.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="duration">{item.duration}</div>
              <div className="description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NLPSchedule; 