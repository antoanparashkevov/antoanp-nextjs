import React from 'react';
import SeparationLine from '@/components/UI/SeparationLine';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const Home: React.FC = () => {
	return (
        <React.Fragment>
            <HeroSection />
            <SeparationLine />
            <IntroductionSection/>
            <SeparationLine/>
            <BenefitsSection/>
            <SeparationLine/>
            <AboutMeSection/>
            <SeparationLine/>
            <FeaturesSection/>
            <SeparationLine/>
            <TestimonialsSection/>
            <SeparationLine/>
        </React.Fragment>
    );
};

export default Home;
