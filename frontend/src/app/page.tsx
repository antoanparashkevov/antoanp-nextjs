import React from 'react';

import SeparationLine from '@/components/UI/SeparationLine';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TicketsSection from '@/components/sections/TicketsSection';
import ContactSection from '@/components/sections/ContactSection';

// import CountContext from '@/context/count-context';
import { TicketContextProvider } from '@/context/ticket-context';
import { CountContextProvider } from '@/context/count-context';

import CountDown from '@/components/UI/CountDown';

const Home: React.FC = () => {

	return (
		<TicketContextProvider>
			<CountContextProvider>
				{/* <HeroSection /> */}
				{/* <SeparationLine /> */}
				{/* <IntroductionSection /> */}
				{/* <SeparationLine /> */}
				{/* <BenefitsSection /> */}
				{/* <SeparationLine /> */}
				{/* <AboutMeSection /> */}
				{/* <SeparationLine /> */}
				{/* <FeaturesSection /> */}
				{/* <SeparationLine /> */}
				{/* <TestimonialsSection /> */}
				{/* <SeparationLine /> */}
				{/* <TicketsSection /> */}
				{/* <SeparationLine /> */}
				<CountDown hours={24} />
				{/* <ContactSection /> */}
			</CountContextProvider>
		</TicketContextProvider>
	);
};

export default Home;
