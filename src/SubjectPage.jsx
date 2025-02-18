import React from 'react';
import { useParams } from 'react-router-dom';

const SubjectPage = () => {
  const { subject } = useParams();
  
  const subjectData = {
    'intro-python-games': {
      title: 'Intro Python Games',
      description: 'Learn Python fundamentals through creating interactive games.',
      level: 'Intro',
      // Add more specific data as needed
    },
    'intro-python-visualization': {
      title: 'Intro Python Visualization',
      description: 'Learn data visualization using Python.',
      level: 'Intro',
    },
    // Add other subjects...
  };

  const currentSubject = subjectData[subject];

  if (!currentSubject) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="subject-page">
      <h1>{currentSubject.title}</h1>
      <p>{currentSubject.description}</p>
      <div className="level-badge">{currentSubject.level}</div>
      {/* Add more content as needed */}
    </div>
  );
};

export default SubjectPage; 