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
import FAQ from './FAQ';
import InfoSession from './InfoSession';
import History from './History';
import Timeline from './Timeline';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <LandingHeader />
      {/* <HowItWorks /> */}
      <BrandBar />
      <History />
      <Timeline />
      <Teams />
      {/* <Coaches /> */}
      <Testimonials />
      <FAQ />
      <InfoSession />
      <Apply />
      <Footer />
    </div>
  );
}

export default Home;