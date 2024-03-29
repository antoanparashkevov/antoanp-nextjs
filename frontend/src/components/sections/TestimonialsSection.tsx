import Image from 'next/image';

import CommunityIcon from '../../../public/images/community.webp';

import Testimonial from '../UI/Testimonial';
import React from 'react';

import type { TestimonialsSectionContent, testimonial } from '@/lib/content';

const TestimonialsSection: React.FC<{ content: TestimonialsSectionContent }> = ({ content }) => {
	return (
		<section
			id="testimonials"
			className="relative grid grid-cols-1 justify-center items-center w-full py-20 px-10 gap-8 xl:grid-cols-3 xl:py-40 xl:px-10 xl:gap-12">
			<div className="absolute inset-0">
				<Image
					src={CommunityIcon}
					alt="Together"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover blur-sm"
				/>
			</div>
			{ content.map((testimonial: testimonial) => {
				return (
					<Testimonial 
						key={testimonial.id}
						testimonial={testimonial}
					/>
				);
			})}
		</section>
	);
};

export default TestimonialsSection;
