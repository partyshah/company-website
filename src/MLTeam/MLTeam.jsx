import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import MLTeamHeader from './MLTeamHeader';
import MLTeamNextSession from './MLTeamNextSession';
import MLStudentJourney from './MLStudentJourney';
import MLSchedule from './MLSchedule';
import MLEligibility from './MLEligibility';
import MLApplication from './MLApplication';
import MLCoach from './MLCoach';
import MLTuition from './MLTuition';
import Footer from '../Footer';
import InfoSession from '../InfoSession';
import MetaTags from '../components/MetaTags';
import './MLTeam.css';

const MLTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ml-team">
      <MetaTags
        title="Machine Learning Program | Pike Teams"
        description="Want to build and deploy machine learning apps using Python and modern ML frameworks? Join our machine learning program—contact us today!" 
        image="https://www.piketeams.com/og-images/ml-og.png"
      />
      <Navbar />
      <div className="team-page">
        <MLTeamHeader />
        <InfoSession />
        <MLTeamNextSession />
        <MLCoach />
        <MLStudentJourney />
        <MLSchedule />
        <MLEligibility />
        <MLApplication />
        <MLTuition />
      </div>
      <Footer />
    </div>
  );
};

export default MLTeam; 