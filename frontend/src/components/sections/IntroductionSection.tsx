import React from 'react';

const IntroductionSection: React.FC = () => {
	return (
		<section className="flex flex-wrap justify-start items-start w-full">
			<div className='flex flex-col flex-grow justify-start items-center w-1/2'>
				<p className='my-8'>
					Right now you might think:
					<br />
					“How is this guy going to get a lot of clients for my business?”
					<br />
					That&apos;s a good question, but before we dive in I want to ask you
					something important:
					<br />
				</p>
				<h3 className='text-main'>How badly do you want your business to succeed?</h3>
				<p className='my-8'>
					You see, as a professional full-stack web developer dedicated to his
					craft for over 3 years now, I want to make sure I will work with a
					serious ambitious individual who wants nothing but the best for
					himself and his starting business.
					<br />
					Someone who is committed to making his business №1 and blowing away
					the competition, and most importantly: Someone who will not quit and
					run away when things get difficult. I might be a little direct but
					there&apos;s a specific reason for that.
				</p>
				<h3 className='text-main'>I want the best possible results for you!</h3>
				<p className='my-8'>
					To achieve that, I must ensure you are thinking as a winner. And if
					you&apos;re still reading this, I can confidentially tell you are. So
					how will I get you a lot of clients? The answer is simple: I will
					build you a top-tier website that when your clients see for the first
					time, they will look at as if they saw the 8th wonder of the world. A
					website that even your competitors will appreciate how professional
					and well-ordered it looks.
				</p>
				<button className="base-btn">Testimonials</button>
			</div>
            <div className='w-1/2 h-[600px]'></div>
		</section>
	);
};

export default IntroductionSection;
