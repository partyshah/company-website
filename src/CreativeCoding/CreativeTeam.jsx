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
import InfoSession from '../InfoSession';
import MetaTags from '../components/MetaTags';
import './CreativeTeam.css';

const CreativeTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="creative-team">
      <MetaTags
        title="Join Creative Coding Course | Pike Teams"
        description="Explore your imagination with our creative coding course! Learn to code sound visualizers, games, and shapeshifting patterns using p5.js. Join our course today!" 
        image="https://www.piketeams.com/og-images/creativecoding-og.png"
      />
      <Navbar />
      <div className="team-page">
        <CreativeTeamHeader />
        <InfoSession />
        <CreativeTeamNextSession />
        <CreativeCoach />
        <CreativeStudentJourney />
        <CreativeSchedule />
        <CreativeEligibility />
        <CreativeApplication />
        <CreativeTuition />
      </div>
      <Footer />
    </div>
  );
};

export default CreativeTeam; 