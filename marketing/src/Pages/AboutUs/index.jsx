import React from 'react';
import AboutUsHero from '../../Components/AboutUs/Hero/AboutUsHero';
import AboutUsIntro from  '../../Components/AboutUs/Intro/AboutUsIntro'
import Capabilities from '../../Components/AboutUs/Capabilities/Capabilities';
import Work from '../../Components/AboutUs/Work/Work';
import CTA from '../../Components/AboutUs/CTA';
import Services from '../../Components/AboutUs/Services/Services';
import FAQ from '../../Components/AboutUs/FAQ/FAQ';

function AboutUs() {
  return(
    <div>
      <AboutUsHero />
      <AboutUsIntro />
      <Services />
      <Capabilities />
      <Work />
      <CTA />
      <FAQ />
    </div>
  ) 
}

export default AboutUs;