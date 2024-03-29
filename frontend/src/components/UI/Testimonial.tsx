import React from "react";
import Image from "next/image";

import Icon from "../UI/Icon";

import StarIcon from "../../../public/icons/star.svg";
import GithubIcon from '../../../public/icons/github_black.svg';
import GlobeIcon from '../../../public/icons/globe.svg';
import FigmaIcon from '../../../public/icons/figma.svg';

import type { testimonial } from "@/lib/content";

const Testimonial: React.FC<{testimonial: testimonial}> = ({testimonial}) => {
	return (
		<figure
			className={
				`rounded-[40px] opacity-75 backdrop-blur-lg p-4 lg:p-8 animate 
				${testimonial.id === 1 ? 'fade-left' : (testimonial.id === 2 ? 'fade-in' : 'fade-right')}
			`}
			style={{
				background:
					"linear-gradient(130deg, #676767 26.91%, rgba(0, 0, 0, 0.00) 100%)"
			}}>
			<p className="accessibility">5 out of 5</p>
			<div className="flex gap-x-1">
				<Icon src={StarIcon} alt="Star Icon" />
				<Icon src={StarIcon} alt="Star Icon" />
				<Icon src={StarIcon} alt="Star Icon" />
				<Icon src={StarIcon} alt="Star Icon" />
				<Icon src={StarIcon} alt="Star Icon" />
			</div>
			<blockquote
				className={`text-white mt-8 lg:min-h-[155px] ${
					testimonial.projectLink || testimonial.githubLink
						? "mb-[calc(2rem_-_20px)]"
						: "mb-8"
				}`}>
				{testimonial.quote}
			</blockquote>
			<div className="flex justify-end items-center gap-x-2">
				<span className='text-white font-bold text-[16px]'>Links:</span>
				{testimonial.projectLink && (
					<Icon src={GlobeIcon} alt="Globe Icon" href={testimonial.projectLink} target="_blank" />
				)}
				{testimonial.designLink && (
					<Icon src={FigmaIcon} alt="Figma Icon" href={testimonial.designLink} target="_blank" />
				)}
				{testimonial.githubLink && (
					<Icon src={GithubIcon} alt="Github Icon" href={testimonial.githubLink} target="_blank" />
				)}
			</div>
			<figcaption className="flex gap-x-3 justify-start items-center py-4">
				<div className="relative w-[65px] h-[65px] rounded-full overflow-hidden">
					<Image
						src={testimonial.authorImage}
						alt="Testimonial Person Image"
						className="object-cover object-top"
						fill
						sizes="(max-width: 1440px) 65w, 65w"
					/>
				</div>
				<div className="text-white">
					<div className="font-bold">{testimonial.author}</div>
					<div className="text-sm">{testimonial.authorInfo}</div>
				</div>
			</figcaption>
		</figure>
	);
};

export default Testimonial;