import React from 'react';
import Navbar from '../Navbar';
import NLPTeamHeader from './NLPTeamHeader';
import NLPTeamNextSession from './NLPTeamNextSession';
import NLPStudentJourney from './NLPStudentJourney';
import NLPSchedule from './NLPSchedule';
import NLPEligibility from './NLPEligibility';
import NLPApplication from './NLPApplication';
import NLPCoach from './NLPCoach';
import NLPTuition from './NLPTuition';
import Footer from '../Footer';
import './NLPTeam.css';

const NLPTeam = () => {
  return (
    <div className="python-team">
      <Navbar />
      <div className="team-page">
        <NLPTeamHeader />
        <NLPTeamNextSession />
        <NLPStudentJourney />
        <NLPSchedule />
        <NLPEligibility />
        <NLPApplication />
        <NLPCoach />
        <NLPTuition />
      </div>
      <Footer />
    </div>
  );
};

export default NLPTeam; 