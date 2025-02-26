import React from 'react';
import './BrandBar.css';

// Import all brand logos
import atlassianLogo from './images/brandlogos/atlassianlogo.png';
import brownLogo from './images/brandlogos/brownlogo.png';
import googleLogo from './images/brandlogos/googlelogo.png';
import amazonLogo from './images/brandlogos/amazonlogo.png';
import umichLogo from './images/brandlogos/umichlogo.png';
import draftKingsLogo from './images/brandlogos/draftkingslogo.png';

const BrandBar = () => {
  return (
    <section className="brandbar-container">
      <h2 className="brandbar-header">Where our coaches come from</h2>
      <div className="brandbar-logos">
        <img src={atlassianLogo} alt="Atlassian" className="brand-logo" />
        <img src={brownLogo} alt="Brown University" className="brand-logo" />
        <img src={googleLogo} alt="Google" className="brand-logo" />
        <img src={amazonLogo} alt="Amazon" className="brand-logo" />
        <img src={umichLogo} alt="University of Michigan" className="brand-logo" />
        <img src={draftKingsLogo} alt="DraftKings" className="brand-logo" />
      </div>
    </section>
  );
};

export default BrandBar; 