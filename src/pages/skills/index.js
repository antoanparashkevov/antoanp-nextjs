'use client';
import { Fragment } from "react";

//section components
import Badge from "@/components/UI/Badge";
import CertificationSection from "@/components/skills/CertificationSection";

const SkillsPage = () => {
    
   return (
       <Fragment>
           <Badge>Certificates</Badge>
           <CertificationSection />
       </Fragment>
       
   )
}

export default SkillsPage;