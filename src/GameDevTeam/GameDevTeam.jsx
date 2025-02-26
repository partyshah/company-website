import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import GameDevTeamHeader from './GameDevTeamHeader';
import GameDevTeamNextSession from './GameDevTeamNextSession';
import GameDevStudentJourney from './GameDevStudentJourney';
import GameDevSchedule from './GameDevSchedule';
import GameDevEligibility from './GameDevEligibility';
import GameDevApplication from './GameDevApplication';
import GameDevCoach from './GameDevCoach';
import GameDevTuition from './GameDevTuition';
import Footer from '../Footer';
import MetaTags from '../components/MetaTags';
import './GameDevTeam.css';

const GameDevTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gamedev-team">
      <MetaTags
        title="Game Development Team | Pike Teams"
        description="Join our Game Development team and learn to create your own video games. Perfect for students interested in game design, programming, and interactive entertainment."
        image="https://www.piketeams.com/og-images/gamedev-og.png"
      />
      <Navbar />
      <div className="team-page">
        <GameDevTeamHeader />
        <GameDevTeamNextSession />
        <GameDevCoach />
        <GameDevStudentJourney />
        <GameDevSchedule />
        <GameDevEligibility />
        <GameDevApplication />
        <GameDevTuition />
      </div>
      <Footer />
    </div>
  );
};

export default GameDevTeam; 