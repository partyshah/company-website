import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import SportsTeamHeader from './SportsTeamHeader';
import SportsTeamNextSession from './SportsTeamNextSession';
import SportsStudentJourney from './SportsStudentJourney';
import SportsSchedule from './SportsSchedule';
import SportsEligibility from './SportsEligibility';
import SportsApplication from './SportsApplication';
import SportsCoach from './SportsCoach';
import SportsTuition from './SportsTuition';
import Footer from '../Footer';
import InfoSession from '../InfoSession';
import MetaTags from '../components/MetaTags';
import './SportsTeam.css';

const SportsTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sports-team-header">
      <MetaTags
        title="Sports Analytics Team | Pike Teams"
        description="Join a 15 person team of experienced high school students, get coached by a sports analytics expert, and build innovative sports analytics solutions to win the end of season competition."
        image="https://www.piketeams.com/og-images/sportsanalytics-og.png"
      />
      <Navbar />
      <div className="team-page">
        <SportsTeamHeader />
        <InfoSession />
        <SportsTeamNextSession />
        <SportsCoach />
        <SportsStudentJourney />
        <SportsSchedule />
        <SportsEligibility />
        <SportsApplication />
        <SportsTuition />
      </div>
      <Footer />
    </div>
  );
};

export default SportsTeam; 