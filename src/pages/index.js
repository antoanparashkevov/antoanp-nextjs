'use client';

import { Fragment } from "react";

//section components
import IntroSection from "@/components/home/IntroSection";
import SkillsSection from "@/components/home/SkillsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ContactSection from "@/components/home/ContactSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import Badge from "@/components/UI/Badge";

export default function HomePage () {
    
  return (
    <Fragment>
        <IntroductionSection />
        <Badge>Who Am I?</Badge>
        <IntroSection />
        <Badge>How can I help you?</Badge>
        <SkillsSection />
        {/*TODO, REMOVE THE Portfolio Section forever?*/}
        {/*<Badge>Portfolio</Badge>*/}
        {/*<PortfolioSection />*/}
        <Badge>Contact</Badge>
        <ContactSection />
    </Fragment>
  )
}

