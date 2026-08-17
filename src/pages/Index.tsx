import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SplashIntro from '@/components/SplashIntro';
import HeroSection from '@/components/HeroSection';
import VernacularAISection from '@/components/VernacularAISection';
import ProductModulesSection from '@/components/ProductModulesSection';

import FoundersSection from '@/components/FoundersSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  const [revealed, setRevealed] = useState(true); // Set to true by default

  return (
    <>
      {/* Splash overlay sits outside Layout so it covers header/footer/bot */}
      <SplashIntro onDone={() => setRevealed(true)} />
      <div
        className={`transition-opacity duration-500 ease-out ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Layout>
          <HeroSection />
          <VernacularAISection />
          <ProductModulesSection />

          <FoundersSection />
          <CTASection />
        </Layout>
      </div>
    </>
  );
};

export default Index;
