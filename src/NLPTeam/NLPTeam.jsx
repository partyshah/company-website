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
import MetaTags from '../components/MetaTags';
import InfoSession from '../InfoSession';
import './NLPTeam.css';

const NLPTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nlp-team">
      <MetaTags
        title="Natural Language Processing Team | Pike Teams"
        description="Join a 15 person team of experienced high school computer science students, get coached by a Google engineer, and build advanced language AI systems to win the end of season competition."
        image="https://www.piketeams.com/og-images/nlp-og.png"
      />
      <Navbar />
      <div className="team-page">
        <NLPTeamHeader />
        <NLPTeamNextSession />
        <NLPCoach />
        <NLPStudentJourney />
        <NLPSchedule />
        <NLPEligibility />
        <NLPApplication />
        <InfoSession />
        <NLPTuition />
      </div>
      <Footer />
    </div>
  );
};

export default NLPTeam; 