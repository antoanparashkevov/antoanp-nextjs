import Image from 'next/image';

import CommunityIcon from '../../../public/images/community.jpg';

import { testimonials, testimonial } from '../../data/testimonials';
import Testimonial from '../UI/Testimonial';

const TestimonialsSection = () => {
	return (
		<section
			id="testimonials"
			className="relative grid grid-cols-1 justify-center items-center w-full py-20 px-10 gap-8 lg:grid-cols-3 lg:py-40 lg:px-10 lg:gap-12">
			<div className="absolute inset-0">
				<Image
					src={CommunityIcon}
					alt="Together"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover blur-sm"
				/>
			</div>
			{ testimonials.map((testimonial: testimonial) => {
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
