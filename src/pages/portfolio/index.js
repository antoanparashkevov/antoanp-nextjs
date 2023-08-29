'use client';

import { Fragment } from "react";

//section components
import ITCommunitySection from "@/components/portfolio/ITCommunitySection";
import FindFreelancerSection from "@/components/portfolio/FindFreelancerSection";
import Badge from "@/components/UI/Badge";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Badge>IT Community</Badge>
            <ITCommunitySection />
            <Badge>Find A Freelancer</Badge>
            <FindFreelancerSection />
        </Fragment>
    )
}

export default PortfolioPage;