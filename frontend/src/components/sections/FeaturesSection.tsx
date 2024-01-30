import React from "react";
import Image from "next/image";
import CircleSeparationLine from "../UI/CircleSeparationLine";
import MarkIcon from "../../../public/icons/mark.svg";

const FeaturesSection: React.FC = () => {
	return (
		<section
			id="offers"
			className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-3 lg:gap-x-8">
			<div className="flex flex-col items-start justify-center gap-y-4">
				<h2 className="text-orange-500 font-bold">
					Since I am a generous person and want to provide my clients with as
					much value as possible
				</h2>
				<CircleSeparationLine />
				<p className="text-lg">
					In addition to ALL of the exclusive benefits above, you will also get:
				</p>
			</div>

			<dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 col-span-2">
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive <span className="text-orange-500">Elegance</span>: The
						Artistry of <span className="text-orange-500">Front-End</span>{" "}
						Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the&nbsp;
						<span className="text-orange-500">layout</span>,&nbsp;
						<span className="text-orange-500">design</span>,&nbsp;
						<span className="text-orange-500">buttons</span>,&nbsp;
						<span className="text-orange-500">forms</span>, and any other visual
						element. For this part, I&apos;m using one of the latest
						technologies right now - &nbsp;
						<a
							target="_blank"
							href="https://nextjs.org"
							className="text-orange-500 font-bold">
							Next.JS
						</a>
						&nbsp; that optimizes the most important parts in a website -{" "}
						<strong>Images</strong> and <strong>Fonts</strong>.
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Back-End <span className="text-orange-500">Perfection</span>: The
						Unseen Architect of&nbsp;
						<span className="text-orange-500">Seamless</span> Functionality
					</dt>
					<dd className="text-main">
						While the front end focuses on the&nbsp;
						<span className="text-orange-500">
							pleasant visual experience
						</span>{" "}
						of your website, this service manages the “behind the scenes” magic
						of it. This includes the server, the database, and the security
						(CSRF protection, CORS protection, Authentication protection). Here
						I am using one of the most modern PHP back-end technologies right
						now -
						<a
							target="_blank"
							href="https://laravel.com"
							className="text-orange-500 font-bold">
							Laravel
						</a>
						.
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Elevate Your{" "}
						<span className="text-orange-500">Online Presence</span>: SEO
						Tactics for Enhanced Visibility
					</dt>
					<dd className="text-main">
						This is the <span className="text-orange-500">golden key</span> that
						will unlock the full potential of your website&apos;s presence. Here
						I&apos;m using a specific technology that will{" "}
						<span className="text-orange-500">skyrocket</span> the visibility of
						your website to your desired target audience by at least 10% -
						because a well-crafted website deserves to be at the top of the
						search engines.
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Versatile <span className="text-orange-500">User Experience</span>:
						The Magic of&nbsp;
						<span className="text-orange-500">Responsive</span>
						Design
					</dt>
					<dd className="text-main">
						One website - <span className="text-orange-500">diversity</span> of
						ways to reach it. This one-of-a-kind service is specifically
						designed to deliver multiple ways for people to reach your website
						across <span className="text-orange-500">ALL devices</span>.&nbsp;
						Witness a stunning and seamless user experience as your site
						dynamically adapts to
						<span className="text-orange-500">desktops</span>,&nbsp;
						<span className="text-orange-500">tablets</span>, and&nbsp;
						<span className="text-orange-500">smartphones</span>.
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Zero Tolerance for <span className="text-orange-500">Glitches</span>
						: Elevate Performance with Rigorous{" "}
						<span className="text-orange-500">Error Validation</span>
					</dt>
					<dd className="text-main">
						Don&apos;t you hate when forms fail to send or links lead nowhere?
						The validation service makes sure your website&nbsp;
						<span className="text-orange-500">runs like a Swiss Watch</span>. No
						more web crashes; it&apos;s all about{" "}
						<span className="text-orange-500">precision</span>&nbsp; and{" "}
						<span className="text-orange-500">reliability</span>.
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black mb-2">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Inclusive Design,{" "}
						<span className="text-orange-500">Exclusive Experience</span>:
						Tailoring Accessibility for{" "}
						<span className="text-orange-500">
							All of Your Website&apos;s Users
						</span>
					</dt>
					<dd className="text-main">
						I&apos;ll make your website open to <span className='text-orange-500'>everyone</span>. Accessibility is my
						commitment to ensuring that every visitor, including those with
						disabilities, can enjoy your website. It&apos;s about making your website
						an <span className='text-orange-500'>inclusive</span> place for every single visitor.
					</dd>
				</div>
			</dl>
		</section>
	);
};

export default FeaturesSection;
