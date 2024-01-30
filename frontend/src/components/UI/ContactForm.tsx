'use client';

import React from 'react';
import Icon from '@/components/UI/Icon';

import EmailIcon from '../../../public/icons/email.svg';
import LinkedinIcon from '../../../public/icons/linkedin.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import TikTokIcon from '../../../public/icons/tiktok.svg';
import GithubIcon from '../../../public/icons/github.svg';

import PersonIcon from '../../../public/icons/user.svg';

import Input from './Input';
import TextArea from './TextArea';

const ContactForm: React.FC = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2">
			<div className="py-20 px-6 lg:py-48 lg:px-8 bg-[#F3F4F6] shadow-[10px_0px_0px_0px_rgba(0,_0,_0,_0.11)]">
				<h2>Get in touch</h2>
				<dl className="flex flex-col justify-start items-start gap-y-[20px] mt-12">
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
			<form>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 py-20 px-6 lg:py-48 lg:px-8">
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-bold mb-[10px]"
                        >
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
							reset={() => console.log('clicking on reset icon')}
						/>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-bold mb-[10px]"
                        >
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
							reset={() => console.log('clicking on reset icon')}
						/>
					</div>
					<div className="md:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-bold mb-[10px]"
                        >
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
							reset={() => console.log('clicking on reset icon')}
						/>
					</div>
					<div className="md:col-span-2">
                        <label
							htmlFor="message"
							className="block text-sm font-bold mb-[10px]"
                        >
						    Message
						</label>
                        <TextArea
                            id='message'
                            name='message'
                            value='Test'
                        />
                    </div>
				</div>
				<div className='flex justify-end'>
                    <button className="base-btn">Send a message</button>
                </div>
			</form>
		</section>
	);
};

export default ContactForm;
