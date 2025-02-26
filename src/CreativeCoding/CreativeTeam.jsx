import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import CreativeTeamHeader from './CreativeTeamHeader';
import CreativeTeamNextSession from './CreativeTeamNextSession';
import CreativeStudentJourney from './CreativeStudentJourney';
import CreativeSchedule from './CreativeSchedule';
import CreativeEligibility from './CreativeEligibility';
import CreativeApplication from './CreativeApplication';
import CreativeCoach from './CreativeCoach';
import CreativeTuition from './CreativeTuition';
import Footer from '../Footer';
import './CreativeTeam.css';

const CreativeTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="creative-team">
      <Navbar />
      <div className="team-page">
        <CreativeTeamHeader />
        <CreativeTeamNextSession />
        <CreativeStudentJourney />
        <CreativeSchedule />
        <CreativeEligibility />
        <CreativeApplication />
        <CreativeCoach />
        <CreativeTuition />
      </div>
      <Footer />
    </div>
  );
};

export default CreativeTeam; 