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
import InfoSession from '../InfoSession';
import './GameDevTeam.css';

const GameDevTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gamedev-team">
      <MetaTags
        title="Game Development Team | Pike Teams"
        description="Join a 15 person team of experienced high school computer science students, get coached by an engineer from Blizzard, and build your own video game to win the end of season competition."
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
        <InfoSession />
        <GameDevTuition />
      </div>
      <Footer />
    </div>
  );
};

export default GameDevTeam; 