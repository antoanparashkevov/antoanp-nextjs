import React from "react";
import Image from "next/image";
import CountDown from "../UI/CountDown";
import Ticket from "../UI/Ticket";

import MoneyBack from "../../../public/images/money_back.png";

const TicketsSection: React.FC = () => {
	return (
		<section id="prices" className="w-full">
			<div className="flex flex-col justify-start items-center gap-y-16">
				<h3 className="text-xl text-center">But WAIT that&apos;s not everything…</h3>
				<p className="text-lg text-black lg:w-[80%]">
					Making it this far only shows me/proves you are TRULY serious about
					10x your clients and for this reason, I will give you a
					<strong className="inline"> unique/special discount </strong>if you
					sign up for discussion in the next <b className="text-red-500">24</b>{" "}
					hours
				</p>
				<h2 className="text-[45px]">Plans</h2>
				<CountDown />
				<p className="text-black">
					<strong>No additional</strong> and <strong>hidden fees</strong> - pay
					once and get full access to your website
				</p>
			</div>
			<div className="grid grid-cols-1 mt-4 gap-8 lg:grid-cols-3">
				<Ticket />
				<Ticket />
				<Ticket />
			</div>
			<div className="lg:flex lg:gap-x-3 lg:justify-between lg:items-center mt-10 w-full">
				<h2 className="font-semibold max-w-[33rem] w-full">
					And of course, if you are not satisfied with ANY of my services, you
					will get a 100% refund of your money in the blink of an eye.
				</h2>
				<div className='flex w-[15rem]'>
					<Image src={MoneyBack} alt="Money Back" placeholder="blur" />
				</div>
			</div>
		</section>
	);
};

export default TicketsSection;
