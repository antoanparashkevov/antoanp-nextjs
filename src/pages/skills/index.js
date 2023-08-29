'use client';
import { Fragment } from "react";

//section components
import Badge from "@/components/UI/Badge";
import CertificationSection from "@/components/skills/CertificationSection";
import FrontendSection from "@/components/skills/FrontendSection";
import BackendSection from "@/components/skills/BackendSection";

const SkillsPage = () => {
    
   return (
       <Fragment>
           <Badge>Certificates</Badge>
           <CertificationSection />
           <Badge>Frontend Part</Badge>
           <FrontendSection />
           <Badge>Backend Part</Badge>
           <BackendSection />
       </Fragment>
       
   )
}

export default SkillsPage;