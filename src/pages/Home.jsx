import Hero from '../components/Hero.jsx'
import WhatItIs from '../components/WhatItIs.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import RealExample from '../components/RealExample.jsx'
import WorkflowEngine from '../components/WorkflowEngine.jsx'
import BackendIntegration from '../components/BackendIntegration.jsx'
import WhySetu from '../components/WhySetu.jsx'
import Playground from '../components/Playground.jsx'
import DevSection from '../components/DevSection.jsx'
import Deployment from '../components/Deployment.jsx'
import WhoFor from '../components/WhoFor.jsx'
import AdaptiveTeaser from '../components/AdaptiveTeaser.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Playground />
      <WhatItIs />
      <HowItWorks />
      <RealExample />
      <WorkflowEngine />
      <BackendIntegration />
      <WhySetu />
      <DevSection />
      <Deployment />
      <AdaptiveTeaser />
      <WhoFor />
      <CTA />
    </>
  )
}
