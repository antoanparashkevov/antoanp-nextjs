'use client';

import React, { useContext } from 'react';

import SeparationLine from '@/components/UI/SeparationLine';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TicketsSection from '@/components/sections/TicketsSection';
import ContactSection from '@/components/sections/ContactSection';

import { TicketContextProvider } from '@/context/ticket-context';
import { CountContextProvider } from '@/context/count-context';

import { dictionary } from '@/lib/content';
import { LanguageContext } from '@/context/language-context';

const Home: React.FC<{params: { lang: string }}> = ({ params }) => {
	
	const { language: lang } = useContext(LanguageContext);
	
	return (
		<TicketContextProvider>
			<CountContextProvider>
				<HeroSection content={dictionary[lang]["heroSection"]} />
				<SeparationLine />
				<IntroductionSection content={dictionary[lang]['introductionSection']} />
				<SeparationLine />
				<BenefitsSection content={dictionary[lang]['benefitsSection']} />
				<SeparationLine />
				<AboutMeSection content={dictionary[lang]['aboutMeSection']} />
				<SeparationLine />
				<FeaturesSection content={dictionary[lang]['featuresSection']} />
				<SeparationLine />
				<TestimonialsSection content={dictionary[lang]['testimonialsSection']} />
				<SeparationLine />
				<TicketsSection content={dictionary[lang]['ticketsSection']} langCode={lang} />
				<SeparationLine />
				<ContactSection content={dictionary[lang]['contactSection']} />
			</CountContextProvider>
		</TicketContextProvider>
	);
};

export default Home;
