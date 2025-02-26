import React from "react";
import stock1 from "./images/stockimages/stock1.png";
import stock2 from "./images/stockimages/stock2.png";
import stock3 from "./images/stockimages/stock3.png";
import stock4 from "./images/stockimages/stock4.png";
import "./LandingHeader.css";

const LandingHeader = () => {
  return (
    <header className="header">
      <div className="content">
        <h1>Build real software products, in a team</h1>
        <p className="header-description">
          The Pike App Challenge is an intense 6-week competition for top
          high school computer science students. Join a team led by engineers
          from Google, Amazon, and Atlassian.
        </p>
        <div className="cta-container">
          <p className="date">Summer 2025</p>
          <a href="#apply" className="cta-button">
            Apply now
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock2})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock3})` }}
          />
        </div>
        <div className="imageColumn">
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock1})` }}
          />
          <div 
            className="gridImage"
            style={{ backgroundImage: `url(${stock4})` }}
          />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
