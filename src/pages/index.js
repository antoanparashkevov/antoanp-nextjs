import { Fragment } from "react";

//section components
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ContactSection from "@/components/home/ContactSection";
import Badge from "@/components/UI/Badge";

export default function HomePage () {
    
  return (
    <Fragment>
        <Badge>About me</Badge>
        <AboutSection />
        <Badge>Skills</Badge>
        <SkillsSection />
        <Badge>Portfolio</Badge>
        <PortfolioSection />
        <Badge>Contact</Badge>
        <ContactSection />
    </Fragment>
  )
}

