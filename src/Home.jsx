import "./App.css";
import Navbar from "./Navbar";
import LandingHeader from "./LandingHeader";
import HowItWorks from "./HowItWorks";
import Teams from "./Teams";
import Coaches from './Coaches';
import Testimonials from './Testimonials';
import Apply from './Apply';
import Footer from "./Footer";
import BrandBar from './BrandBar';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <LandingHeader />
      {/* <HowItWorks /> */}
      <BrandBar />
      <Teams />
      {/* <Coaches /> */}
      <Testimonials />
      <Apply />
      <Footer />
    </div>
  );
}

export default Home;