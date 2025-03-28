import "./App.css";
import Home from './Home';
import GameDevTeam from './GameDevTeam/GameDevTeam';
import NLPTeam from './NLPTeam/NLPTeam';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreativeCoding from './CreativeCoding/CreativeTeam';
import AITeam from './AITeam/AITeam';
import MLTeam from './MLTeam/MLTeam';
import SportsAnalytics from './SportsAnalytics/SportsTeam';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creativecodingteam" element={<CreativeCoding />} />
        <Route path="/sportsanalyticsteam" element={<SportsAnalytics />} />
        <Route path="/gamedevteam" element={<GameDevTeam />} />
        <Route path="/nlpteam" element={<NLPTeam />} />
        <Route path="/aiteam" element={<AITeam />} />
        <Route path="/mlteam" element={<MLTeam />} />
      </Routes>
    </>
  );
};

export default App;
