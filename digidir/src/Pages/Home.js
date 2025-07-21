import React from 'react'
import InvestmentExpertsSection from '../Components/Investment/InvestmentExpertsSection'
import BusinessValueSection from '../Components/Business Value/BusinessValueSection'
import AboutSection from '../Components/AboutSection/AboutSection'
import EmailMarketingRangeSection from '../Components/EmailMarketing/EmailMarketingRangeSection'
import SEOSection from '../Components/SEOSection/SEOSection'
import SocialAdsSection from '../Components/SocialAds/SocialAdsSection'
// import GoogleAdsRangeSection from '../Components/GoogleAds/GoogleAdsRangeSection'
import GetStarted from '../Components/GetStarted/GetStarted'
import TransparencyServiceSection from '../Components/Transparency/TransparencyServiceSection'
import TestimonialsSection from '../Components/Testimonials/TestimonialsSection'
import ContactSection from '../Components/Contact/ContactSection'
import HeroSection from '../Components/HeroSection/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SEOSection />
      <SocialAdsSection />
      {/* <GoogleAdsRangeSection /> */}
      <EmailMarketingRangeSection />
      <BusinessValueSection/>
      <InvestmentExpertsSection />
      <GetStarted/>
      <TransparencyServiceSection/>
      <TestimonialsSection />
      <ContactSection/>
    </div>
  )
}

export default Home