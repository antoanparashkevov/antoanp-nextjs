import React from "react";
import Image from "next/image";

import DepressedImage from '../../../public/images/depressed.jpeg';
import HandshakeImage from '../../../public/images/handshake.jpg';//TODO: vertical handshake image
import HappyImage from '../../../public/images/happy.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className='flex flex-grow flex-wrap justify-start items-start w-full'>
            <div className='flex flex-col flex-grow justify-start items-center w-1/2'>
                <h1 className='text-2xl mb-16'>
                    How To <span className='text-orange-500'>“Unstuck”</span> Your Starting Business From Having 0 or FEW Clients To 10x <span className='text-orange-500'>In Less Than 60 Days</span>
                </h1>
                <p className='text-lg mb-8'>Let&apos;s Fix This Once And For All By Building You An <span className='text-orange-500'>Affordable High-Performing Website</span> That Will Steal Your Competitors&apos; Clients</p>
                <button className='base-btn'>Testimonials</button>
            </div>
            <div className='relative w-1/2 h-[600px]'>
                <Image 
                    src={DepressedImage}
                    alt="Feeling depression"
                    width={329}
                    height={219}
                    placeholder="blur"
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[15px]'
                />
                <Image 
                    src={HappyImage}
                    alt="Feeling happy"
                    width={329}
                    height={219}
                    placeholder="blur"
                    className='absolute top-36 rounded-[15px]'
                />
                <Image 
                    src={HandshakeImage}
                    alt="Handshake after a good deal"
                    width={173}
                    height={260}
                    placeholder="blur"
                    className='absolute top-0 right-0 rounded-[15px]'
                />
            </div>
        </section>
    )
}

export default HeroSection;