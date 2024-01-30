import React from "react";
import ContactForm from "../UI/ContactForm";

const ContactSection: React.FC = () => {
	return (
		<section className="w-full">
			<h1 className="w-[80%] text-[45px] mb-4 text-center mx-auto">
				Sign Up For a Call <span className="text-orange-500">Now</span> And
				Let&apos;s Make You A Lot of Money By Building Your{" "}
				<span className="text-orange-500">Affordable High-Performing</span>{" "}
				Website
			</h1>
			<ContactForm />
		</section>
	);
};

export default ContactSection;
