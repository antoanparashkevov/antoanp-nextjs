import React from "react";
import Image from "next/image";
import Link from "next/link";

import HandshakeImage from "../../../public/images/handshake.webp";

import HappyImage from "../../../public/images/happy.webp";
import HappyMoneyImage from "../../../public/images/happy_money.jpg";

import DepressedImage from "../../../public/images/depressed.webp";
import TiredImage from "../../../public/images/tired.webp";

import LinearGradient from "@/components/UI/LinearGradient";

import type { HeroSectionContent } from "@/lib/content";

const HeroSection: React.FC<{ content: HeroSectionContent }> = ({content}) => {
	return (
		<section className="relative lg:flex lg:gap-x-14 lg:items-center w-full">
			<LinearGradient className='top-8 right-0'/>
			<div className="flex flex-col items-start lg:flex-shrink-0 max-w-[36rem] w-full">
				<h1 className="text-xl md:text-2xl mb-16 animate-showContent">
					{content.headline.map((item: string, index: number) => {
						if( index % 2 === 1 ) {
							return (
								<span key={index} className="text-orange-500">
									{item}
								</span>
							);
						}

						return item;
					})}
				</h1>

				<p className="text-base md:text-lg mb-8 animate-showContent-smallDelay">
					{content.subheadline.map((item: string, index: number) => {
						if( index % 2 === 1 ) {
							return (
								<span key={index} className="text-orange-500 font-bold">
									{item}
								</span>
							);
						}
						
						return item;
					})}
				</p>

				<Link href="#testimonials" className="base-btn animate-showContent-bigDelay">
					Testimonials
				</Link>
			</div>

			<div className="flex gap-8">
				<div className="w-[11rem] pt-[8rem] md:pt-[20rem] lg:pt-[9rem] lg:order-last">
					<Image
						src={HandshakeImage}
						alt="Handshake after a good deal"
						placeholder="blur"
						className="rounded-xl"
					/>
				</div>

				<div className="w-[11rem] pt-[1rem] md:pt-[13rem] lg:pt-[9rem]">
					<Image
						src={HappyImage}
						alt="Feeling happy"
						placeholder="blur"
						className="rounded-xl"
					/>
					<Image
						src={HappyMoneyImage}
						alt="Happy money"
						placeholder="blur"
						className="rounded-xl mt-8"
					/>
				</div>

				<div className="w-[11rem] pt-[8rem] md:pt-0 lg:pt-0">
					<Image
						src={DepressedImage}
						alt="Feeling depression"
						placeholder="blur"
						className="rounded-xl"
					/>
					<Image
						src={TiredImage}
						alt="Feeling tired"
						placeholder="blur"
						className="rounded-xl mt-8"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
