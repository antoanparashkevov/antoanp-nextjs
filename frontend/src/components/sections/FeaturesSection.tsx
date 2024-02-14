import React from "react";
import Image from "next/image";

import CircleSeparationLine from "../UI/CircleSeparationLine";

import MarkIcon from "../../../public/icons/mark.svg";

import type { FeaturesSectionContent } from "@/lib/content";

const FeaturesSection: React.FC<{ content: FeaturesSectionContent }> = ({ content }) => {
	return (
		<section
			id="offers"
			className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-3 lg:gap-x-8"
		>
			<div className="flex flex-col items-start justify-center gap-y-4 animate fade-left">
				<h2 className="text-orange-500 font-bold">{content.headline}</h2>
				<CircleSeparationLine />
				<p className="text-lg">{content.subheadline}</p>
			</div>

			<dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 col-span-2">
				{content.sections.map(
					(section: { headline: string[]; para: string[] }, index: number) => {
						return (
							<div key={index} className="relative pl-12 animate fade-right">
								<dt className="font-bold text-black mb-2">
									<Image
										src={MarkIcon}
										alt="Mark icon"
										className="w-5 h-5 absolute top-1 left-0"
									/>
									{section.headline.map((item: string, indexHeadline: number) => {
										if( indexHeadline % 2 === 1) {
											return <span key={indexHeadline} className="text-orange-500">{item}</span>
										}
										return item;
									})}
								</dt>
								<dd className="text-main">
									{section.para.map((item: string, indexPara: number) => {
										if( indexPara % 2 === 1 ) {
											return <span key={indexPara} className="text-orange-500">{item}</span>
										} 
										return item;
									})}
								</dd>
							</div>
						);
					}
				)}
			</dl>
		</section>
	);
};

export default FeaturesSection;
