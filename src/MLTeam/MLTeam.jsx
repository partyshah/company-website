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
import InfoSession from '../InfoSession';
import Footer from '../Footer';
import MetaTags from '../components/MetaTags';
import './MLTeam.css';

const MLTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ml-team">
      <MetaTags
        title="Machine Learning Team | Pike Teams"
        description="Join a 15 person team of experienced high school computer science students, get coached by a former Amazon engineer, and build advanced Machine Learning systems to win the end of season competition."
        image="https://www.piketeams.com/og-images/ml-og.png"
      />
      <Navbar />
      <div className="team-page">
        <MLTeamHeader />
        <MLTeamNextSession />
        <MLCoach />
        <MLStudentJourney />
        <MLSchedule />
        <MLEligibility />
        <MLApplication />
        <InfoSession />
        <MLTuition />
      </div>
      <Footer />
    </div>
  );
};

export default MLTeam; 