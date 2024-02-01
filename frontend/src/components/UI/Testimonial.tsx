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
			<blockquote className="text-white my-8">{testimonial.quote}</blockquote>
			<figcaption className="flex gap-x-3 justify-start items-center py-4">
				<div className="relative w-[65px] h-[65px] rounded-full overflow-hidden">
					<Image
						src={testimonial.authorImage}
						alt="Testimonial Person Image"
						className="object-cover"
						fill
						sizes="65w"
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