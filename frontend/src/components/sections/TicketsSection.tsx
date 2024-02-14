import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import CountDown from "../UI/CountDown";
const Ticket = dynamic(() => import("../UI/Ticket"));

import MoneyBack from "../../../public/images/money_back.png";

import ActionButton from "../UI/ActionButton";

import type { TicketsSectionContent, ticket } from "@/lib/content";

const TicketsSection: React.FC<{ content: TicketsSectionContent, langCode: string }> = ({ content, langCode }) => {
	return (
		<section id="prices" className="w-full">
			<div className="flex flex-col justify-start items-center gap-y-16">
				<h3 className="text-xl text-center animate fade-in">
					{content.headline}
				</h3>
				<p className="text-lg text-black lg:w-[80%] animate fade-in">
					{content.subheadline.map((item: string, index: number) => {
						if( index % 2 === 1 ) {
							return <strong key={index}>{item}</strong>
						}

						return item;
					})}
				</p>
				<h2 className="text-[45px]">{content.plans}</h2>
				<CountDown hours={24} content={content.countDown} />
				<p className="text-black underline">
					{content.para}
				</p>
			</div>
			<div className="grid grid-cols-1 mt-4 gap-8 lg:grid-cols-3">
				{ content.tickets.map((ticket: ticket) => {
					return (
						<Ticket
							key={ticket.id}
							ticket={ticket}
							langCode={langCode}
						/>
					)
				})}
			</div>
			<ActionButton href='#contact' className='text-orange-500 justify-center mt-4'>{content.actionButtonLabel}</ActionButton>
			<div className="lg:flex lg:gap-x-3 lg:justify-between lg:items-center mt-10 w-full">
				<h2 className="font-semibold max-w-[33rem] w-full animate fade-left">
					{content.money_back}
				</h2>
				<div className='flex w-[15rem] animate fade-right'>
					<Image src={MoneyBack} alt="Money Back" placeholder="blur" />
				</div>
			</div>
		</section>
	);
};

export default TicketsSection;
