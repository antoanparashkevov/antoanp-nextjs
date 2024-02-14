"use client";

import React, { useCallback, useContext } from 'react';

import Circle from './Circle';
import Icon from './Icon';

import MarkIcon from '../../../public/icons/mark.svg';
import DocumentIcon from '../../../public/icons/document.svg';
import InfoIcon from '../../../public/icons/info.svg';

import { TicketContext } from '@/context/ticket-context';
import { CountContext } from '@/context/count-context';

import type { feature, ticket } from '@/lib/content';

type ticketProps = {
	ticket: ticket;
	langCode: string;
}

const Ticket: React.FC<ticketProps> = ({ ticket, langCode }) => {
	const ticketCtx = useContext(TicketContext);
	const { isExpired } = useContext(CountContext);

	const activateTicket = (): void => {
		ticketCtx.updateTicket(ticket.code);
	}

	const priceWithCurrency = useCallback((price: number): string => {

		if( ticket.currency === "$") {
			return `$${price}`;
		}

		return `${price}${ticket.currency}`
	}, [ticket.currency])

	return (
		<div
			className={`flex flex-col justify-start items-start gap-[25px] p-8 rounded-[1.5rem] border border-solid animate ${
				ticketCtx.activeTicket === ticket.code
					? "border-blue-600"
					: "border-main"
			}
				${ticket.id === 1 ? "fade-left" : ticket.id === 2 ? "fade-in" : "fade-right"}
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
					}
				>
					{ticket.name}
				</h2>
			</div>
			<p>{ticket.intro}</p>
			<div className="flex items-end h-[64px] w-full">
				<p className="relative flex items-baseline">
					{!isExpired && (
						<span
							className={`
								absolute bottom-0 left-0 origin-left -rotate-[25deg]
								w-[85px] ${langCode === "en" ? "md:w-[85px]" : "md:w-[115px]"} h-[3px] bg-black
							`}
						/>
					)}
					<span className="text-[28px] font-extralight">
						{priceWithCurrency(ticket.price.defaultPrice)}
					</span>
					<span className="text-sm md:text-[18px] font-semibold">
						/{ticket.oneTimeLabel}
					</span>
				</p>
				{!isExpired && (
					<p className="flex self-start items-baseline">
						<span className="text-[28px] text-red-800 font-bold">
							{priceWithCurrency(ticket.price.discountedPrice)}
						</span>
						<span className="text-sm md:text-[18px] font-semibold">
							/{ticket.oneTimeLabel}
						</span>
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
                `}
			>
				{ticket.actionButtonLabel}
			</button>
			<ul role="list" className="flex flex-col gap-y-[25px] w-full">
				{ticket.features.map((feature: feature, index: number) => {
					return (
						<li key={index} className="flex items-center text-sm text-main">
							<Icon
								src={MarkIcon}
								alt="Mark Icon"
								className="text-orange-500 mr-1"
							/>
							<span
								className={
									feature.hasOwnProperty("bold") ? "font-bold" : "font-normal"
								}
							>
								{typeof feature === "string" ? feature : feature.name}
							</span>
							{typeof feature === "object" &&
								feature.name &&
								feature.hasOwnProperty("tooltip") && (
									<Icon
										src={InfoIcon}
										alt="Info Icon"
										parentClassName="ml-2"
										tooltipOptions={{
											activateTooltip: true,
											tooltipContent: feature.tooltip!
										}}
									/>
								)}
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
						className={`relative flex ${
							isExpired ? "items-center" : "items-end"
						} text-sm h-8`}
					>
						{!isExpired && (
							<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[2.5rem] h-[1px] bg-black" />
						)}
						<span className="font-extralight">
							+{priceWithCurrency(ticket.pricePerPage.defaultPrice)}&nbsp;
						</span>
						{ticket.additionalPageLabel}
						{!isExpired && (
							<span className="absolute top-0 left-3 text-red-800 font-bold">
								{priceWithCurrency(ticket.pricePerPage.discountedPrice)}
							</span>
						)}
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Ticket;
