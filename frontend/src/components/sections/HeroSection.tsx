import React from "react";
import Image from "next/image";

import DepressedImage from '../../../public/images/depressed.jpeg';
import HandshakeImage from '../../../public/images/handshake.jpg';//TODO: vertical handshake image
import HappyImage from '../../../public/images/happy.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className='lg:flex lg:gap-x-14 lg:items-center w-full'>
            <div className='lg:flex-shrink-0 max-w-[36rem] w-full'>
                <h1 className='text-2xl mb-16'>
                    How To <span className='text-orange-500'>“Unstuck”</span> Your Starting Business From Having 0 or FEW Clients To 10x <span className='text-orange-500'>In Less Than 60 Days</span>
                </h1>
                <p className='text-lg mb-8'>Let&apos;s Fix This Once And For All By Building You An <span className='text-orange-500'>Affordable High-Performing Website</span> That Will Steal Your Competitors&apos; Clients</p>
                <button className='base-btn'>Testimonials</button>
            </div>
            <div className='flex gap-8'>
                <div className="w-[11rem] lg:order-last pt-[8rem] md:pt-[20rem] lg:pt-[9rem]">
                <Image 
                    src={HandshakeImage}
                    alt="Handshake after a good deal"
                    placeholder="blur"
                    className='rounded-xl'
                />
                </div>
                <div className='w-[11rem] md:pt-[13rem] lg:pt-[9rem]'>
                    <Image 
                        src={HappyImage}
                        alt="Feeling happy"
                        placeholder="blur"
                        className='rounded-xl'
                    />
                </div>
                <div className='w-[11rem] pt-[8rem] md:pt-[6rem] lg:pt-[16rem]'>
                    <Image 
                        src={DepressedImage}
                        alt="Feeling depression"
                        placeholder="blur"
                        className='rounded-xl'
                    />
                </div>    
            </div>
        </section>
    )
}

export default HeroSection;