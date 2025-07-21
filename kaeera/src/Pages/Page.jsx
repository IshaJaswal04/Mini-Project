import React from 'react'
import HeroSection from '../Components/HeroSection/index'
import WhyChoose from '../Components/WhyChoose/index'
import Chat from '../Components/Chat/ChatWidgets'
import Faq from '../Components/Faq/index'
function Page() {
  return (
    <div>
        <HeroSection/>
        <WhyChoose/>
        <Chat/>
        <Faq/>    
    </div>
  )
}

export default Page