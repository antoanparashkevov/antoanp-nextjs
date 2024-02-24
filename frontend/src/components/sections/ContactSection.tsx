import React from "react";

import ContactForm from "../UI/ContactForm";

import type { ContactSectionContent } from "@/lib/content";

const ContactSection: React.FC<{ content: ContactSectionContent }> = ({ content }) => {
	return (
		<section className="w-full">
			<h1 className="md:w-[80%] text-xl md:text-[45px] leading-loose mb-4 text-center mx-auto">
				{content.headline.map((item: string, index: number) => {
					if( index % 2 === 1 ) {
						return <span key={index} className='text-orange-500'>{item}</span>
					} 
					return item;
				})}
			</h1>
			<ContactForm 
				notificationContent={content.notificationContent}
				subheadline={content.subheadline} 
				picked_plan={content.picked_plan} 
				formLabels={content.form} 
			/>
		</section>
	);
};

export default ContactSection;
