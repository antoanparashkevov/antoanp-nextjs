import React from 'react';
import SeparationLine from '@/components/UI/SeparationLine';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import BenefitsSection from '@/components/sections/BenefitsSection';

const Home: React.FC = () => {
	return (
        <React.Fragment>
            <HeroSection />
            <SeparationLine />
            <IntroductionSection/>
            <SeparationLine/>
            <BenefitsSection/>
        </React.Fragment>
    );
};

export default Home;
