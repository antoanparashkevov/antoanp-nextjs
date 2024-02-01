import React from "react";
import CircleSeparationLine from "../UI/CircleSeparationLine";
import ActionButton from "../UI/ActionButton";

const BenefitsSection: React.FC = () => {
	return (
		<section className="flex flex-col justify-start items-center gap-y-8 w-full">
			<div className="flex justify-center items-center w-[70%]">
				<h3 className="text-main font-normal">
					So in the past few months, I&apos;ve done detailed research about my
					competitors&apos; performance and picked the <i>4 most crucial elements </i>
					they miss in their services. And of course, as a competitive
					professional who wants only<strong> the best possible results for my clients</strong>,
					I will ensure you won&apos;t miss a single one of them and completely
					distinguish you from the amateurs.
				</h3>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(210px,_250px))] justify-center gap-6 w-full">
				<div className="flex flex-col justify-between items-start h-[550px]">
					<CircleSeparationLine className="mb-4" />
					<h4 className="flex-grow">Start Strong, Spend Smart</h4>
					<p className="flex-grow">
						I know from experience how “pocket-draining” and stressful it can be
						to take off a business. That&apos;s why I want to reduce the risk as
						much as possible for you and provide you with a high-quality website
						for a <strong>very affordable starting price</strong>.
					</p>
					<ActionButton href="#testimonials" className="text-orange-500 mt-3">
						Go to prices
					</ActionButton>
				</div>
				<div className="flex flex-col justify-between items-start h-[550px]">
					<CircleSeparationLine className="mb-4" />
					<h4 className="flex-grow">Your Website, Your Vision, Your Way!</h4>
					<p className="flex-grow">
						Picture the perfect-looking design for your website. Think of every
						color, layout, and detail of it.<strong> This exactly what you will get</strong>. 
						Unlike the pretty restricted and expensive template choices
						some big companies have, I will create a beautiful-looking design
						for your website completely to your visual taste.
					</p>
					<ActionButton href="#offers" className="text-orange-500 mt-3">
						Go to offers
					</ActionButton>
				</div>
				<div className="flex flex-col justify-between items-start h-[550px]">
					<CircleSeparationLine className="mb-4" />
					<h4 className="flex-grow">
						User Bliss: Where Functionality Meets Friendliness!
					</h4>
					<p className="flex-grow">
						Most websites lack a good user experience for their clients. Imagine
						you enter a website and you see the bad structure, saturated colors,
						and scattered text all over the place. It&apos;s an unpleasant
						experience, isn&apos;t it? That&apos;s why we will be professionals
						and will provide your audience with an<strong> easy-to-use well-ordered </strong>
						website with a seamless user experience.
					</p>
					<ActionButton href="#offers" className="text-orange-500 mt-3">
						Go to offers
					</ActionButton>
				</div>
				<div className="flex flex-col justify-between items-start h-[550px]">
					<CircleSeparationLine className="mb-4" />
					<h4 className="flex-grow">Your Domain, Your Rules!</h4>
					<p className="flex-grow">
						Privacy is <strong>sacred</strong> for most people. Unfortunately, many big companies
						ignore this crucial fact and use their clients&apos; data
						information for their own marketing purposes which in my opinion is
						<strong> pathetic</strong>! But don&apos;t worry, once your website is finished, you
						and ONLY you will have access to the code.
					</p>
					<ActionButton href="#offers" className="text-orange-500 mt-3">
						Go to offers
					</ActionButton>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
