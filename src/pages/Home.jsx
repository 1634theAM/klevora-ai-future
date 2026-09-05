import Hero from '../components/Hero.jsx'
import WhatItIs from '../components/WhatItIs.jsx'
import ParserComposer from '../components/ParserComposer.jsx'
import YamlSection from '../components/YamlSection.jsx'
import Sovereignty from '../components/Sovereignty.jsx'
import Numbers from '../components/Numbers.jsx'
import Deployment from '../components/Deployment.jsx'
import WhoFor from '../components/WhoFor.jsx'
import AdaptiveTeaser from '../components/AdaptiveTeaser.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItIs />
      <ParserComposer />
      <YamlSection />
      <Sovereignty />
      <AdaptiveTeaser />
      <Numbers />
      <Deployment />
      <WhoFor />
      <CTA />
    </>
  )
}
