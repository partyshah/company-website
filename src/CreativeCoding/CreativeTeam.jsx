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
import MetaTags from '../components/MetaTags';
import './CreativeTeam.css';

const CreativeTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="creative-team">
      <MetaTags
        title="Creative Coding Team | Learn Creative Coding"
        description="Join our Creative Coding team and learn to create interactive art, animations, and creative projects using code. Perfect for students interested in combining art and technology."
        image="https://piketeams.com/og-images/creativecoding-og.png"
      />
      <Navbar />
      <div className="team-page">
        <CreativeTeamHeader />
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