import React from "react";
import Image from "next/image";

import Icon from "../UI/Icon";
import StarIcon from "../../../public/icons/star.svg";
import { testimonial } from "@/data/testimonials";

const Testimonial: React.FC<{testimonial: testimonial}> = ({testimonial}) => {
	return (
		<figure
			key={testimonial.id}
			className="rounded-[40px] opacity-75 backdrop-blur-lg p-4 lg:p-8"
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
				className={`text-white mt-8 ${testimonial.projectLink ? 'mb-[calc(2rem_-_26px)]' : 'mb-8'}`}
			>
				{testimonial.quote}
			</blockquote>
			{testimonial.projectLink && (
				<a
					href={testimonial.projectLink}
					target="_blank"
					rel="noreferrer"
					className="block truncate text-orange-500 hover:underline">
					{testimonial.projectLink}
				</a>
			)}
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