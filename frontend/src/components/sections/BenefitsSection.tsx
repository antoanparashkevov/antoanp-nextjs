import React, { Fragment } from "react";
import CircleSeparationLine from "../UI/CircleSeparationLine";
import ActionButton from "../UI/ActionButton";
import { BenefitsSectionContent } from "@/lib/content";

const BenefitsSection: React.FC<{ content: BenefitsSectionContent }> = ({ content }) => {
	return (
		<section className="flex flex-col justify-start items-center gap-y-8 w-full">
			<div className="flex justify-center items-center w-[70%]">
				<h3 className="text-main font-normal animate fade-in">
					{content.headline.map((item: string, index: number) => {
						if( index % 2 === 1) {
							return <strong key={index}>{item}</strong>
						}
						return item;
					})}
				</h3>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(210px,_250px))] justify-center gap-6 w-full">
					{content.sections.map(
						(
							section: {
								headline: string;
								para: string[];
								actionButton: { href: string; label: string };
							},
							index: number
						) => {
							return (
								<div key={index} className="flex flex-col justify-between items-start h-[550px] animate fade-left">
									<CircleSeparationLine className="mb-4" />
									<h4 className="flex-grow">{section.headline}</h4>
									<p className="flex-grow">
										{section.para.map((item: string, indexPara: number) => {
											if (indexPara % 2 === 1) {
												return <strong key={indexPara}>{item}</strong>;
											}

											return item;
										})}
									</p>
									<ActionButton href={section.actionButton.href} className="text-orange-500 mt-3">
										{section.actionButton.label}
									</ActionButton>
								</div>
							);
						}
					)}
			</div>
		</section>
	);
};

export default BenefitsSection;
