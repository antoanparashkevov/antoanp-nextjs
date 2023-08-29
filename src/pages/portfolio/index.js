'use client';

import { Fragment } from "react";

//section components
import ITCommunitySection from "@/components/portfolio/ITCommunitySection";
import Badge from "@/components/UI/Badge";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Badge>IT Community</Badge>
            <ITCommunitySection />
        </Fragment>
    )
}

export default PortfolioPage;