import React from 'react';
import Navbar from '../Navbar';
import AITeamHeader from './AITeamHeader';
import AITeamNextSession from './AITeamNextSession';
import AIStudentJourney from './AIStudentJourney';
import AISchedule from './AISchedule';
import AIEligibility from './AIEligibility';
import AIApplication from './AIApplication';
import AICoach from './AICoach';
import AITuition from './AITuition';
import Footer from '../Footer';
import './AITeam.css';

const AITeam = () => {
  return (
    <div className="ai-team">
      <Navbar />
      <div className="team-page">
        <AITeamHeader />
        <AITeamNextSession />
        <AIStudentJourney />
        <AISchedule />
        <AIEligibility />
        <AIApplication />
        <AICoach />
        <AITuition />
      </div>
      <Footer />
    </div>
  );
};

export default AITeam; 