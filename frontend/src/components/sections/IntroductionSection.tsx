import React from "react";
import Image from "next/image";
import Link from "next/link";

import DiplomaImage from "../../../public/images/diploma.png";
import PortraitDiplomaImage from "../../../public/images/portrait_diploma_pic_1.webp";

import PortraitImage1 from "../../../public/images/portrait_pic_1.webp";
import PortraitImage2 from "../../../public/images/portrait_pic_2.webp";

import LinearGradient from "@/components/UI/LinearGradient";

const IntroductionSection: React.FC = () => {
	return (
		<section className="relative lg:flex lg:gap-x-14 lg:items-center w-full">
			<LinearGradient className="top-8 right-0" />
			<div className="flex flex-col items-start lg:flex-shrink-0 max-w-[36rem] w-full">
				<p className="my-8 animate fade-in">
					Right now you might think:
					<br />
					<br />
					“How is this guy going to get a lot of clients for my business?”
					<br />
					<br />
					That&apos;s a good question, but before we dive in I want to ask you
					something important:
					<br />
				</p>
				<h3 className="text-main animate fade-in">
					How badly do you want your business to succeed?
				</h3>
				<p className="my-8 animate fade-in">
					You see, as a professional full-stack web developer dedicated to his
					craft for over 3 years now, I want to make sure I will work with a
					<i> serious ambitious individual</i> who wants
					<strong>
						&nbsp;nothing but the best for himself and his starting business
					</strong>
					.
					<br />
					<br />
					Someone who is committed to making his business №1 and blowing away
					the competition, and most importantly:
					<br />
					<br />
					Someone who will not quit and run away when things get difficult. I
					might be a little direct but there&apos;s a specific reason for that.
				</p>
				<h3 className="text-main animate fade-in">
					I want the best possible results for you!
				</h3>
				<p className="my-8 animate fade-in">
					To achieve that, I must ensure you are thinking as a winner. And if
					you&apos;re still reading this, I can confidentially tell
					<strong>&nbsp;you are</strong>.
					<br />
					<br />
					So how will I get you a lot of clients? The answer is simple:
					<br />
					<br />
					I will build you a top-tier website that when your clients see for the
					first time, they will look at as if they saw the 8th wonder of the
					world.
					<br />
					<br />A website that even your competitors will appreciate how
					<strong>&nbsp;professional</strong> and{" "}
					<strong>&nbsp;well-ordered</strong> it looks.
				</p>
				<Link href="#testimonials" className="base-btn animate fade-left">
					Testimonials
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
