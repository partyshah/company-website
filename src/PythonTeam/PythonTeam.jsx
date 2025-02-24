import React from 'react';
import Navbar from '../Navbar';
import PythonTeamHeader from './PythonTeamHeader';
import PythonTeamNextSession from './PythonTeamNextSession';
import PythonStudentJourney from './PythonStudentJourney';
import PythonSchedule from './PythonSchedule';
import PythonEligibility from './PythonEligibility';
import PythonApplication from './PythonApplication';
import PythonCoach from './PythonCoach';
import PythonTuition from './PythonTuition';
import Footer from '../Footer';
import './PythonTeam.css';

const PythonTeam = () => {
  return (
    <div className="python-team">
      <Navbar />
      <div className="team-page">
        <PythonTeamHeader />
        <PythonTeamNextSession />
        <PythonStudentJourney />
        <PythonSchedule />
        <PythonEligibility />
        <PythonApplication />
        <PythonCoach />
        <PythonTuition />
      </div>
      <Footer />
    </div>
  );
};

export default PythonTeam; 