"use client";

import React, { useContext } from "react";
import Icon from "@/components/UI/Icon";

import EmailIcon from "../../../public/icons/email.svg";
import LinkedinIcon from "../../../public/icons/linkedin.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import TikTokIcon from "../../../public/icons/tiktok.svg";
import GithubIcon from "../../../public/icons/github.svg";

import PersonIcon from "../../../public/icons/user.svg";

import Input from "./Input";
import TextArea from "./TextArea";
import Circle from "./Circle";

import { TicketContext } from "@/context/ticket-context";

const ContactForm: React.FC = () => {
	const ticketCtx = useContext(TicketContext);

	return (
		<section id='contact' className="grid grid-cols-1 lg:grid-cols-3">
			<div className="py-20 px-6 lg:py-48 lg:px-8 bg-[#F3F4F6] shadow-[10px_0px_0px_0px_rgba(0,_0,_0,_0.11)]">
				<h2>Get in touch</h2>
				<dl className="flex flex-col justify-start items-start gap-y-[20px] mt-12 text-[1rem]">
					<div className="flex gap-x-4">
						<dt>
							<p className="accessibility">Email</p>
							<Icon src={EmailIcon} alt="Email icon" />
						</dt>
						<dd className="font-sm font-bold text-main">
							<a href="mailto:antoanparashkevov@gmail.com">
								antoanparashkevov@gmail.com
							</a>
						</dd>
					</div>
					<div className="flex gap-x-4">
						<dt>
							<p className="accessibility">Linkedin</p>
							<Icon src={LinkedinIcon} alt="LinkedIn icon" />
						</dt>
						<dd className="font-sm font-bold text-main">Antoan Parashkevov</dd>
					</div>
					<div className="flex gap-x-4">
						<dt>
							<p className="accessibility">Instagram</p>
							<Icon src={InstagramIcon} alt="Instagram icon" />
						</dt>
						<dd className="font-sm font-bold text-main">antoanp15</dd>
					</div>
					<div className="flex gap-x-4">
						<dt>
							<p className="accessibility">TikTok</p>
							<Icon src={TikTokIcon} alt="TikTok icon" />
						</dt>
						<dd className="font-sm font-bold text-main">antoanp15</dd>
					</div>
					<div className="flex gap-x-4">
						<dt>
							<p className="accessibility">Github</p>
							<Icon src={GithubIcon} alt="Github icon" />
						</dt>
						<dd className="font-sm font-bold text-main">@antoanparashkevov</dd>
					</div>
				</dl>
			</div>
			<form className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-x-8 gap-y-6 py-20 px-6 lg:py-48 lg:px-8">
				<p className="col-span-2 flex text-sm text-black font-bold">
					Picked plan:&nbsp;
					<span className="inline-flex gap-x-[1px] text-blue-600">
						<Circle className="bg-blue-600" />
						{ticketCtx.activeTicket.charAt(0).toUpperCase() +
							ticketCtx.activeTicket.slice(1)}
					</span>
				</p>
				<div className="flex flex-col justify-start items-start gap-y-[10px]">
					<label htmlFor="firstName" className="block text-sm font-bold">
						First name
					</label>
					<Input
						id="firstName"
						type="text"
						name="firstName"
						showRemoveIcon
						iconSrc={PersonIcon}
						iconAlt="Person Icon"
						enteredValue="Test"
						reset={() => console.log("clicking on reset icon")}
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-[10px]">
					<label htmlFor="lastName" className="block text-sm font-bold">
						Last name
					</label>
					<Input
						id="lastName"
						type="text"
						name="lastName"
						showRemoveIcon
						iconSrc={PersonIcon}
						iconAlt="Person Icon"
						enteredValue="Test"
						reset={() => console.log("clicking on reset icon")}
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-[10px] md:col-span-2">
					<label htmlFor="email" className="block text-sm font-bold mb-[10px]">
						Email
					</label>
					<Input
						id="email"
						type="text"
						name="email"
						showRemoveIcon
						iconSrc={PersonIcon}
						iconAlt="Person Icon"
						enteredValue="Test"
						reset={() => console.log("clicking on reset icon")}
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-[10px] md:col-span-2">
					<label
						htmlFor="message"
						className="block text-sm font-bold mb-[10px]">
						Message
					</label>
					<TextArea id="message" name="message" value="Test" />
				</div>
				<div className="flex justify-end md:col-span-2">
					<button className="base-btn">Send a message</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
