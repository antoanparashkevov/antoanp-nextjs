'use client';

import { Fragment } from "react";

//section components
import ITCommunity from "@/components/portfolio/ITCommunity";
import Badge from "@/components/UI/Badge";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Badge>IT Community</Badge>
            <ITCommunity />
        </Fragment>
    )
}

export default PortfolioPage;