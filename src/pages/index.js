'use client';

import { useState } from "react";

//section components
import IntroSection from "@/components/home/IntroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ContactSection from "@/components/home/ContactSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import Badge from "@/components/UI/Badge";

//context
import CountContext from "@/store/count-context";

export default function HomePage () {
    const [isExpired, setIsExpired] = useState(false);
    
    const countCtx = { 
        isExpired,
        setIsExpired
    }
    
  return (
    <CountContext.Provider value={countCtx}>
        <IntroductionSection />
        <Badge>Who Am I?</Badge>
        <IntroSection />
        <Badge>How can I help you?</Badge>
        <SkillsSection />
        <Badge>Contact</Badge>
        <ContactSection />
    </CountContext.Provider>
  )
}

