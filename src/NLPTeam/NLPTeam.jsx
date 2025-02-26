import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nlp-team">
      <Navbar />
      <div className="team-page">
        <NLPTeamHeader />
        <NLPTeamNextSession />
        <NLPCoach />
        <NLPStudentJourney />
        <NLPSchedule />
        <NLPEligibility />
        <NLPApplication />
        <NLPTuition />
      </div>
      <Footer />
    </div>
  );
};

export default NLPTeam; 