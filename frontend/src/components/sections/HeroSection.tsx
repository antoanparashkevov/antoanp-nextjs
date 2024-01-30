import React from "react";
import Image from "next/image";
import Link from "next/link";

import HandshakeImage from '../../../public/images/handshake.jpg';

import HappyImage from '../../../public/images/happy.jpg';
import ThumbsUpImage from '../../../public/images/thumbs-up.jpg';

import DepressedImage from '../../../public/images/depressed.jpg';
import TiredImage from '../../../public/images/tired.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className='lg:flex lg:gap-x-14 lg:items-center w-full'>

            <div className='flex flex-col items-start lg:flex-shrink-0 max-w-[36rem] w-full'>

                <h1 className='text-2xl mb-16'>
                    How To <span className='text-orange-500'>“Unstuck”</span> Your Starting Business From Having 0 or FEW Clients To 10x <span className='text-orange-500'>In Less Than 60 Days</span>
                </h1>

                <p className='text-lg mb-8'>Let&apos;s Fix This Once And For All By Building You An <span className='text-orange-500'>Affordable High-Performing Website</span> That Will Steal Your Competitors&apos; Clients</p>
                
                <Link href='#testimonials' className='base-btn'>Testimonials</Link>
            </div>

            <div className='flex gap-8'>
                
                <div className="w-[11rem] pt-[8rem] md:pt-[20rem] lg:pt-[9rem] lg:order-last">
                    <Image 
                        src={HandshakeImage}
                        alt="Handshake after a good deal"
                        placeholder="blur"
                        className='rounded-xl'
                    />
                </div>

                <div className='w-[11rem] pt-[1rem] md:pt-[13rem] lg:pt-[9rem]'>
                    <Image 
                        src={HappyImage}
                        alt="Feeling happy"
                        placeholder="blur"
                        className='rounded-xl'
                    />
                    <Image 
                        src={ThumbsUpImage}
                        alt="Thumbs up"
                        placeholder="blur"
                        className='rounded-xl mt-8'
                    />
                </div>

                <div className='w-[11rem] pt-[8rem] md:pt-0 lg:pt-0'>
                    <Image 
                        src={DepressedImage}
                        alt="Feeling depression"
                        placeholder="blur"
                        className='rounded-xl'
                    />
                    <Image 
                        src={TiredImage}
                        alt="Feeling tired"
                        placeholder="blur"
                        className='rounded-xl mt-8'
                    />
                </div>    
            </div>
        </section>
    )
}

export default HeroSection;