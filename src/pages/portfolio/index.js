'use client';

import { Fragment } from "react";

//section components
import ITCommunitySection from "@/components/portfolio/ITCommunitySection";
import FindFreelancerSection from "@/components/portfolio/FindFreelancerSection";
import FindCoachesSection from "@/components/portfolio/FindCoachesSection";
import Badge from "@/components/UI/Badge";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Badge>IT Community</Badge>
            <ITCommunitySection />
            <Badge>Find A Freelancer</Badge>
            <FindFreelancerSection />
            <Badge>Find Coaches</Badge>
            <FindCoachesSection />
        </Fragment>
    )
}

export default PortfolioPage;