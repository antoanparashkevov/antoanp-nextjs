import React from 'react';
import Image from 'next/image';

import PortraitImage from '../../../public/images/portrait_pic_3.png';
import PortraitDiplomaImage2 from '../../../public/images/portrait_diploma_pic_2.png';
import PortraitDiplomaImage3 from '../../../public/images/portrait_diploma_pic_3.png';

const AboutMeSection: React.FC = () => {

    return (
			<section className="lg:flex lg:gap-x-8 lg:items-center w-full">
				<div className="lg:flex-shrink-0 max-w-[30rem] w-full">
					<h2 className='mb-4 animate fade-left'>A little about me</h2>
					<p className='animate fade-left'>
						Graduated from
						<span className="text-orange-500"> The #1 Software University in Bulgaria</span>.
						<br />
						During my studies there, I had the amazing opportunity to learn from
						<span className="text-orange-500"> top experts and professors </span>
						with more than
						<span className="text-orange-500"> 10 years of experience </span>in
						the area. Besides mastering the basics, I&apos;ve also learned more
						advanced techniques that will be the “secret sauce” when it comes to
						attracting new customers to your website and making tons of money
						from them.
					</p>
				</div>

				<div className="flex gap-6">
					<div className="w-[22rem] flex gap-4">
						<div className="w-1/2 pt-[3rem] pb-[5rem] animate fade-in">
							<Image
								src={PortraitDiplomaImage3}
								alt="Portrait Diploma Software Engineer"
								placeholder="blur"
								className="rounded-xl"
							/>
						</div>
						<div className="w-1/2 pt-[12rem] animate fade-in">
							<Image
								src={PortraitDiplomaImage2}
								alt="Portrait Diploma Software Engineer"
								placeholder="blur"
								className="rounded-xl"
							/>
						</div>
					</div>
                    <div className='w-[22rem] animate fade-right'>
                        <Image
                            src={PortraitImage}
                            alt='Portrait Software Engineer'
                            placeholder='blur'
                            className='rounded-xl'
                        />
                    </div>
				</div>
			</section>
		);
};

export default AboutMeSection;