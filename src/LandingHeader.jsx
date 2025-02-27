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
        Pike matches top high school computer science students with teams coached by engineers from Google, Amazon, and Atlassian to compete in a 6-week app challenge competition
        </p>
        <div className="cta-container">
          <p className="date">Applications for Summer 2025 are due March 14th</p>
          <a 
            href="https://airtable.com/appjy9bfsSpDxkkdH/pag2lPoEXUuNpLbmp/form" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
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
