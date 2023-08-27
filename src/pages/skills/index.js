'use client';
import { Fragment } from "react";

//section components
import Badge from "@/components/UI/Badge";
import CertificationSection from "@/components/skills/CertificationSection";
import FrontendSection from "@/components/skills/FrontendSection";

const SkillsPage = () => {
    
   return (
       <Fragment>
           <Badge>Certificates</Badge>
           <CertificationSection />
           <Badge>Frontend Part</Badge>
           <FrontendSection />
       </Fragment>
       
   )
}

export default SkillsPage;