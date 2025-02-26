import "./App.css";
import Navbar from "./Navbar";
import LandingHeader from "./LandingHeader";
import HowItWorks from "./HowItWorks";
import Teams from "./Teams";
import Coaches from './Coaches';
import Testimonials from './Testimonials';
import Apply from './Apply';
import Footer from "./Footer";
import Home from './Home';
// import PythonTeam from './PythonTeam/PythonTeam';
import GameDevTeam from './GameDevTeam/GameDevTeam';
import NLPTeam from './NLPTeam/NLPTeam';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreativeCoding from './CreativeCoding/CreativeTeam';
import AITeam from './AITeam/AITeam';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// function App() {
//   return (
//       <Home />
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/about" component={Home} />
//     </BrowserRouter>
//   );
// }
// function App() {
//   return (
//     <Home />
//   );
// }

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creativecoding" element={<CreativeCoding />} />
        <Route path="/gamedev" element={<GameDevTeam />} />
        <Route path="/nlpteam" element={<NLPTeam />} />
        <Route path="/aiteam" element={<AITeam />} />
      </Routes>
    </>
  );
};


export default App;
