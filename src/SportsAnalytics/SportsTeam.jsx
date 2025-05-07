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
        title="Join Sports Analytics Program | Pike Teams"
        description="Looking for a sports analytics program? Our course helps you build and present your own project with valuable insights from real sports data. Join us today!"
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