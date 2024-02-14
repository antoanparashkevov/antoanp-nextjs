import React from 'react';
import Image from 'next/image';

import PortraitImage from '../../../public/images/portrait_pic_3.webp';
import PortraitDiplomaImage2 from '../../../public/images/portrait_diploma_pic_2.webp';
import PortraitDiplomaImage3 from '../../../public/images/portrait_diploma_pic_3.webp';
import { AboutMeSectionContent } from '@/lib/content';

const AboutMeSection: React.FC<{ content: AboutMeSectionContent }> = ({ content }) => {

    return (
			<section className="lg:flex lg:gap-x-8 lg:items-center w-full">
				<div className="lg:flex-shrink-0 max-w-[30rem] w-full">
					<h2 className='mb-4 animate fade-left'>{content.headline}</h2>
					<p className='animate fade-left'>
						{content.para.map((item: string, index: number) => {
							if( index % 2 === 1) {
								return <span key={index} className="text-orange-500">{item}</span>
							}
							return item;
						})}
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