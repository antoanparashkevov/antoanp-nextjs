"use client";

import React, { useContext } from 'react';

import Circle from './Circle';
import Icon from './Icon';

import MarkIcon from '../../../public/icons/mark.svg';
import DocumentIcon from '../../../public/icons/document.svg';

import { ticket } from '@/data/tickets';

import { TicketContext } from '@/context/ticket-context';
import { CountContext } from '@/context/count-context';

type ticketProps = {
	ticket: ticket,
}

const Ticket: React.FC<ticketProps> = ({ ticket }) => {
	const ticketCtx = useContext(TicketContext);
	const { isExpired } = useContext(CountContext);

	const activateTicket = (): void => {
		ticketCtx.updateTicket(ticket.code);
	}

	return (
		<div
			className={`flex flex-col justify-start items-start gap-[25px] p-8 rounded-[1.5rem] border border-solid animate ${
				ticketCtx.activeTicket === ticket.code
					? "border-blue-600"
					: "border-main"
				}
				${ticket.id === 1 ? "fade-left" : (ticket.id === 2 ? "fade-in" : "fade-right")}
			`}
		>
			<div className="flex gap-x-[2px]">
				<Circle
					className={
						ticketCtx.activeTicket === ticket.code ? "!bg-blue-600" : "bg-main"
					}
				/>
				<h2
					className={
						ticketCtx.activeTicket === ticket.code
							? "text-blue-600"
							: "text-black"
					}>
					{ticket.name}
				</h2>
			</div>
			<p>{ticket.intro}</p>
			<div className="flex items-end h-[64px]">
				<p className="relative flex items-baseline">
					{!isExpired && (
						<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[100px] h-[3px] bg-black" />
					)}
					<span className="text-[36px] font-extralight">
						${ticket.price.defaultPrice}
					</span>
					<span className="text-[18px] font-semibold">/once</span>
				</p>
				{!isExpired && (
					<p className="flex self-start items-baseline">
						<span className="text-[36px] text-red-800 font-bold">
							${ticket.price.discountedPrice}
						</span>
						<span className="text-[18px] font-semibold">/once</span>
					</p>
				)}
			</div>
			<button
				onClick={activateTicket}
				className={`
                    self-center cursor-pointer py-2.5 px-20 border border-solid rounded-1 border-main text-sm font-bold
					focus:shadow-lg
					${
						ticketCtx.activeTicket === ticket.code
							? "bg-blue-600 text-white hover:bg-blue-700 border-none"
							: "bg-white text-blue-600 hover:bg-slate-100"
					}
                `}>
				Claim the offer
			</button>
			<ul role="list" className="flex flex-col gap-y-[25px] w-full">
				{ticket.features.map((feature: string, index: number) => {
					return (
						<li key={index} className="flex items-center text-sm text-main">
							<Icon
								src={MarkIcon}
								alt="Mark Icon"
								className="text-orange-500 mr-1"
							/>
							{feature}
						</li>
					);
				})}
				<li className="flex items-center text-sm text-main">
					<Icon
						src={DocumentIcon}
						alt="Document Icon"
						className="text-orange-500 mr-1"
					/>
					<p
						className={`relative flex ${isExpired ? "items-center" : "items-end"} text-sm h-8`}
					>
						{!isExpired && (
							<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[2.5rem] h-[1px] bg-black" />
						)}
						<span className="font-extralight">
							+{ticket.pricePerPage.defaultPrice}&nbsp;
						</span>
						for each additional page
						{!isExpired && (
							<span className="absolute top-0 left-3 text-red-800 font-bold">
								{ticket.pricePerPage.discountedPrice}
							</span>
						)}
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Ticket;
