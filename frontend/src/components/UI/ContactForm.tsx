"use client";

import React, { Fragment, useContext } from "react";
import { useFormState } from "react-dom";
import Icon from "@/components/UI/Icon";

import PersonIcon from "../../../public/icons/user.svg";

import Input from "./Input";
import TextArea from "./TextArea";
import Circle from "./Circle";
const SubmitButton = dynamic(() => import("./SubmitButton"));

import { create } from "@/lib/actions";
import { TicketContext } from "@/context/ticket-context";
import { CountContext } from "@/context/count-context";

import { social, socials } from "@/data/social";
import dynamic from "next/dynamic";

import { formStateType } from "./SubmitButton";

import type { FormLabels, NotificationContent } from "@/lib/content";

const initialState: formStateType = {
	errors: null,
	message: '',
}

type ContactFormProps = {
	notificationContent: NotificationContent;
	subheadline: string;
	picked_plan: string;
	formLabels: FormLabels;
};

const ContactForm: React.FC<ContactFormProps> = ({ notificationContent, subheadline, picked_plan, formLabels }) => {
	const ticketCtx = useContext(TicketContext);
	const { isExpired } = useContext(CountContext);

	const [formState, formAction] = useFormState(create.bind(null, ticketCtx.activeTicket, isExpired, notificationContent), initialState);

	return (
		<Fragment>
			<section id="contact" className="grid grid-cols-1 lg:grid-cols-3">
				<div className="py-20 px-6 lg:py-48 lg:px-8 bg-[#F3F4F6] shadow-[10px_0px_0px_0px_rgba(0,_0,_0,_0.11)]">
					<h2 className='text-base md:text-lg'>{subheadline}</h2>
					<dl className="flex flex-col justify-start items-start gap-y-[20px] mt-12 text-[1rem]">
						{socials.map((social: social) => {
							return (
								<div className="flex gap-x-4" key={social.id}>
									<dt>
										<p className="accessibility">{social.code}</p>
										<Icon src={social.icon} alt={`${social.name} icon`} />
									</dt>
									<dd className="font-sm font-bold text-main">
										<a target="_blank" href={social.link}>
											{social.name}
										</a>
									</dd>
								</div>
							);
						})}
					</dl>
				</div>
				<form
					action={formAction}
					className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-x-8 gap-y-6 py-20 px-6 lg:py-48 lg:px-8">
					<p className="flex text-sm text-black font-bold md:col-span-2">
						{picked_plan}:&nbsp;
						<span className="inline-flex gap-x-[1px] text-blue-600">
							<Circle className="bg-blue-600" />
							{ticketCtx.activeTicket.charAt(0).toUpperCase() +
								ticketCtx.activeTicket.slice(1)}
						</span>
					</p>
					<div className="flex flex-col justify-start items-start gap-y-[10px]">
						<label htmlFor="firstName" className="block text-sm font-bold">
							{formLabels.first_name}
						</label>
						<Input
							id="firstName"
							type="text"
							name="firstName"
							iconSrc={PersonIcon}
							iconAlt="Person Icon"
						/>
					</div>
					<div className="flex flex-col justify-start items-start gap-y-[10px]">
						<label htmlFor="lastName" className="block text-sm font-bold">
							{formLabels.last_name}
						</label>
						<Input
							id="lastName"
							type="text"
							name="lastName"
							iconSrc={PersonIcon}
							iconAlt="Person Icon"
						/>
					</div>
					<div className="flex flex-col justify-start items-start gap-y-[10px] md:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-bold mb-[10px]"
						>
							{formLabels.email}
						</label>
						<Input
							id="email"
							type="email"
							name="email"
							iconSrc={PersonIcon}
							iconAlt="Person Icon"
						/>
					</div>
					<div className="flex flex-col justify-start items-start gap-y-[10px] md:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-bold mb-[10px]"
						>
							{formLabels.message}
						</label>
						<TextArea id="message" name="message" />
					</div>
					<div className="flex justify-end md:col-span-2">
						<SubmitButton 
							formState={formState}
							buttonLabels={formLabels.buttonAction} 
							notificationContent={notificationContent} 
						/>
					</div>
				</form>
			</section>
		</Fragment>
	);
};

export default ContactForm;
