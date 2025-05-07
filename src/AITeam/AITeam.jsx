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
import InfoSession from '../InfoSession';
import MetaTags from '../components/MetaTags';
import './AITeam.css';

const AITeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ai-team">
      <MetaTags
        title="Ai Programming Courses | Pike Teams"
        description="Join our AI programming course for high school students! Learn AI concepts, coding, and real-world applications through hands-on projects and expert guidance." 
        image="https://www.piketeams.com/og-images/ai-og.png"
      />
      <Navbar />
      <div className="team-page">
        <AITeamHeader />
        <InfoSession />
        <AITeamNextSession />
        <AICoach />
        <AIStudentJourney />
        <AISchedule />
        <AIEligibility />
        <AIApplication />
        <AITuition />
      </div>
      <Footer />
    </div>
  );
};

export default AITeam; 