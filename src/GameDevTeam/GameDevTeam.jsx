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
import './GameDevTeam.css';

const GameDevTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gamedev-team">
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