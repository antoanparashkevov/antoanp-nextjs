import React from 'react';
import Image from 'next/image';
import CountDown from '../UI/CountDown';
import Ticket from '../UI/Ticket';

import MoneyBack from '../../../public/images/money_back.png';

const TicketsSection: React.FC = () => {
	return (
		<section className="flex flex-col justify-start items-center w-full">
			<div className="flex flex-col justify-start items-center gap-y-16">
				<h3 className="text-xl">But WAIT that&apos;s not everything…</h3>
				<p className="text-lg text-black w-1/2">
					Making it this far only shows me/proves you are TRULY serious about
					10x your clients and for this reason, I will give you a unique/special
					discount if you sign up for discussion in the next 48 hours
				</p>
				<h2 className="text-[45px]">Plans</h2>
				<CountDown />
			</div>
			<div className="grid grid-cols-1 mt-4 gap-8 lg:grid-cols-3">
				<Ticket />
				<Ticket />
				<Ticket />
			</div>
			<div className="flex gap-x-3 items-center mt-10">
				<h2 className="text-[32px] font-semibold">
					And of course, if you are not satisfied with ANY of my services, you
					will get a 100% refund of your money in the blink of an eye.
				</h2>
                <Image
                    src={ MoneyBack }
                    alt='Money Back'
                    width={ 250 }
                    height={ 250 }
                    placeholder='blur'
                />
			</div>
		</section>
	);
};

export default TicketsSection;
