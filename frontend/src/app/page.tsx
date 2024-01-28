import React from 'react';
import SeparationLine from '@/components/UI/SeparationLine';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';

const Home: React.FC = () => {
	return (
        <React.Fragment>
            <HeroSection />
            <SeparationLine />
            <IntroductionSection/>
        </React.Fragment>
    );
};

export default Home;
