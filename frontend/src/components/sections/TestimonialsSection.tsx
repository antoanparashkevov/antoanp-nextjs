import Image from 'next/image';
import CommunityIcon from '../../../public/images/community.jpg';
import StarIcon from '../../../public/icons/star.svg';
import PersonImage from '../../../public/images/person.jpg';
import Icon from '../UI/Icon';

const TestimonialsSection = () => {
	return (
		<section id='testimonials' className="relative grid grid-cols-1 justify-center items-center w-full h-full py-20 px-10 gap-8 lg:grid-cols-3 lg:py-40 lg:px-10 lg:gap-12">
			<div className="absolute inset-0">
				<Image
					src={CommunityIcon}
					alt="Together"
					fill
					className="object-cover blur-sm"
				/>
			</div>
			<figure className='rounded-[40px] opacity-75 backdrop-blur-lg p-8' style={{"background": "linear-gradient(130deg, #676767 26.91%, rgba(0, 0, 0, 0.00) 100%)"}}>
                <p className='accessibility'>5 out of 5</p>
                <div className='flex gap-x-1'>
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                </div>
				<blockquote className='text-white my-8'>
					“Quality work, fast and open-minded. Thank you. Will recommend to my
					colleagues”
				</blockquote>
				<figcaption className='flex gap-x-3 justify-start items-center py-4'>
                    <div className='relative w-[65px] h-[65px] rounded-full overflow-hidden'>
                        <Image
                            src={PersonImage}
                            alt='Testimonial Person Image'
                            className='object-cover'
                            fill
                        />
                    </div>
                    <div className='text-white'>
                        <div className='font-bold'>Yoana Drashkova</div>
                        <div className='text-sm'>Student</div>
                    </div>
                </figcaption>
			</figure>
			<figure className='rounded-[40px] opacity-75 backdrop-blur-lg p-8' style={{"background": "linear-gradient(130deg, #676767 26.91%, rgba(0, 0, 0, 0.00) 100%)"}}>
                <p className='accessibility'>5 out of 5</p>
                <div className='flex gap-x-1'>
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                </div>
				<blockquote className='text-white my-8'>
					“Quality work, fast and open-minded. Thank you. Will recommend to my
					colleagues”
				</blockquote>
				<figcaption className='flex gap-x-3 justify-start items-center py-4'>
                    <div className='relative w-[65px] h-[65px] rounded-full overflow-hidden'>
                        <Image
                            src={PersonImage}
                            alt='Testimonial Person Image'
                            className='object-cover'
                            fill
                        />
                    </div>
                    <div className='text-white'>
                        <div className='font-bold'>Yoana Drashkova</div>
                        <div className='text-sm'>Student</div>
                    </div>
                </figcaption>
			</figure>
			<figure className='rounded-[40px] opacity-75 backdrop-blur-lg p-8' style={{"background": "linear-gradient(130deg, #676767 26.91%, rgba(0, 0, 0, 0.00) 100%)"}}>
                <p className='accessibility'>5 out of 5</p>
                <div className='flex gap-x-1'>
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                    <Icon
                        src={StarIcon}
                        alt='Star Icon'
                        width={20}
                        height={20}
                    />
                </div>
				<blockquote className='text-white my-8'>
					“Quality work, fast and open-minded. Thank you. Will recommend to my
					colleagues”
				</blockquote>
				<figcaption className='flex gap-x-3 justify-start items-center py-4'>
                    <div className='relative w-[65px] h-[65px] rounded-full overflow-hidden'>
                        <Image
                            src={PersonImage}
                            alt='Testimonial Person Image'
                            className='object-cover'
                            fill
                        />
                    </div>
                    <div className='text-white'>
                        <div className='font-bold'>Yoana Drashkova</div>
                        <div className='text-sm'>Student</div>
                    </div>
                </figcaption>
			</figure>
		</section>
	);
};

export default TestimonialsSection;
