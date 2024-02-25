import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import DiplomaImage from "../../../public/images/diploma.png";
import PortraitDiplomaImage from "../../../public/images/portrait_diploma_pic_1.webp";

import PortraitImage1 from "../../../public/images/portrait_pic_1.webp";
import PortraitImage2 from "../../../public/images/portrait_pic_2.webp";

import LinearGradient from "@/components/UI/LinearGradient";
import { IntroductionSectionContent } from "@/lib/content";

const IntroductionSection: React.FC<{ content: IntroductionSectionContent }> = ({ content }) => {
	return (
		<section className="relative lg:flex lg:gap-x-14 lg:items-center w-full">
			<LinearGradient className="top-8 right-0" />
			<div className="relative flex flex-col items-start lg:flex-shrink-0 max-w-[36rem] w-full pb-52">
				{ content.sections.map((item: { headline?: string, para: string[]}, index: number) => {
					return (
						<Fragment key={index}>
							{item.headline && (
								<h3 className="text-main animate fade-in">{item.headline}</h3>
							)}
							<p className="my-8 animate fade-in">
								{item.para.map((item: string, indexPara: number) => {
									if (item.includes("<br />")) {
										return <br key={indexPara} />;
									}

									if (indexPara % 2 === 1) {
										return <strong key={indexPara}>{item}</strong>;
									}

									return item;
								})}
							</p>
						</Fragment>
					);
				})}
				<Link href="#testimonials" className="base-btn animate fade-left mb-25">
					Testimonials
				</Link>
				<Link
					href='#contact'
					className='
						w-full
						absolute bottom-0 max-md:left-0 md:left-1/2
						font-bold uppercase p-6 italic
						border border-solid border-orange-500 rounded-md
						hover:bg-gray-50 hover:shadow-2xl
						animate fade-in
					'
				>
					{content.outro}
				</Link>
			</div>
			<div className="flex gap-8">
				<div className="w-[11rem] pt-[4rem] animate fade-right">
					<Image
						src={PortraitImage1}
						alt="Portrait"
						placeholder="blur"
						className="rounded-xl"
					/>
					<Image
						src={PortraitImage2}
						alt="Portrait"
						placeholder="blur"
						className="rounded-xl mt-4"
					/>
				</div>
				<div className="w-[11rem] pt-[1rem] animate fade-right">
					<Image
						src={PortraitDiplomaImage}
						alt="Portrait Diploma Software Engineer"
						placeholder="blur"
						className="rounded-xl"
					/>
					<Image
						src={DiplomaImage}
						alt="Diploma Software Engineer"
						placeholder="blur"
						className="rounded-xl mt-4"
					/>
				</div>
			</div>
		</section>
	);
};

export default IntroductionSection;
