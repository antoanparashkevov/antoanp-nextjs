'use client';
import { Fragment } from "react";

//section components
import EducationSection from '../../components/about/EducationSection';
import WorkExperience from "@/components/about/WorkExperience";
import Badge from "@/components/UI/Badge";

const AboutPage = () => {
    
   return (
       <Fragment>
           <Badge>Education</Badge>
           <EducationSection />
           <Badge>Work Experience</Badge>
           <WorkExperience />
       </Fragment>
   )
}

export default AboutPage;