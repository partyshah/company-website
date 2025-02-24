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
import PythonTeam from './PythonTeam/PythonTeam';
import AITeam from './AITeam/AITeam';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
        <Route path="/pythonteam" element={<PythonTeam />} />
        <Route path="/aiteam" element={<AITeam />} />
        <Route path="/aifinance" element={<AITeam />} />
        <Route path="/gamedev" element={<PythonTeam />} />
      </Routes>
    </>
  );
};


export default App;
