import React, { useEffect } from 'react';
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
import MetaTags from '../components/MetaTags';
import './AITeam.css';
import InfoSession from '../InfoSession';

const AITeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ai-team">
      <MetaTags
        title="Artificial Intelligence Team | Pike Teams"
        description="Join a 15 person team of experienced high school computer science students, get coached by a former Amazon engineer, and build advanced AI systems to win the end of season competition."
        image="https://www.piketeams.com/og-images/ai-og.png"
      />
      <Navbar />
      <div className="team-page">
        <AITeamHeader />
        <AITeamNextSession />
        <AICoach />
        <AIStudentJourney />
        <AISchedule />
        <AIEligibility />
        <AIApplication />
        <InfoSession />
        <AITuition />
      </div>
      <Footer />
    </div>
  );
};

export default AITeam; 