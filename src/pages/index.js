import { Fragment } from "react";

//section components
import AboutSection from "@/components/home/AboutSection";
import Badge from "@/components/home/Badge";

export default function HomePage () {
    
  return (
    <Fragment>
        <Badge>About me</Badge>
        <AboutSection />
        <Badge>Skills</Badge>
    </Fragment>
  )
}

