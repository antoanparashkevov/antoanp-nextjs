import Image from 'next/image';
import Icon from '../UI/Icon';

import CommunityIcon from '../../../public/images/community.jpg';
import StarIcon from '../../../public/icons/star.svg';

import { testimonials, testimonial } from '../../data/testimonials';

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
						<blockquote className="text-white my-8">
							{testimonial.quote}
						</blockquote>
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
			})}
		</section>
	);
};

export default TestimonialsSection;
