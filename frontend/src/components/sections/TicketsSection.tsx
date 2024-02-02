import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import CountDown from "../UI/CountDown";
const Ticket = dynamic(() => import("../UI/Ticket"));

import MoneyBack from "../../../public/images/money_back.png";

import { ticket, tickets } from "@/data/tickets";
import ActionButton from "../UI/ActionButton";

const TicketsSection: React.FC = () => {
	return (
		<section id="prices" className="w-full">
			<div className="flex flex-col justify-start items-center gap-y-16">
				<h3 className="text-xl text-center animate fade-in">But WAIT that&apos;s not everything…</h3>
				<p className="text-lg text-black lg:w-[80%] animate fade-in">
					Making it this far only shows me you are TRULY serious about
					10x your clients and for this reason, I will give you a
					<strong className="inline"> special discount </strong>if you
					sign up for discussion in the next <b className="text-red-500">24</b>{" "}
					hours
				</p>
				<h2 className="text-[45px]">Plans</h2>
				<CountDown hours={24} />
				<p className="text-black underline">
					<strong>No additional</strong> and <strong>hidden fees</strong> - pay
					once and get full access to your website
				</p>
			</div>
			<div className="grid grid-cols-1 mt-4 gap-8 lg:grid-cols-3">
				{ tickets.map((ticket: ticket) => {
					return (
						<Ticket
							key={ticket.id}
							ticket={ticket}
						/>
					)
				})}
			</div>
			<ActionButton href='#contact' className='text-orange-500 justify-center mt-4'>Send message</ActionButton>
			<div className="lg:flex lg:gap-x-3 lg:justify-between lg:items-center mt-10 w-full">
				<h2 className="font-semibold max-w-[33rem] w-full animate fade-left">
					And of course, if you are not satisfied with ANY of my services, you
					will get a 100% refund of your money in the blink of an eye.
				</h2>
				<div className='flex w-[15rem] animate fade-right'>
					<Image src={MoneyBack} alt="Money Back" placeholder="blur" />
				</div>
			</div>
		</section>
	);
};

export default TicketsSection;
