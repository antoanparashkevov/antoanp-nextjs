"use server"; //module level Server Actions defined by 'use server' React directive

import { z } from "zod";

import mongoDBClient from "../../mongoose/config/configuration";
import { applicationItem, create as createApplication } from "../../mongoose/services/applicationService";

const schema = z.object({
	firstName: z
		.string()
		.trim()
		.min(2, { message: "Your first name should contain at least 2 characters!"}),
	lastName: z
		.string()
		.trim()
		.min(2, { message: "Your last name should contain at least 2 characters!"}),
	email: z
		.string()
		.trim()
		.email({ message: "Invalid email address"}),
	ticketCode: z
		.string()
		.trim()
		.min(4, { message: "Something went wrong with selecting a plan! Please, reload the page and try again!" })
});

//Server Action - async functions that are executed on the server
export async function create(ticketCode: string, isExpired: boolean, initialState: any, formData: FormData) {
	const fields: applicationItem = {
		firstName: formData.get("firstName") as string || '',
		lastName: formData.get("lastName") as string || '',
		email: formData.get("email") as string || '',
		message: formData.get("message") as string || '',
		ticketCode,
		isExpired
	}

	const validateFields = schema.safeParse({
		firstName: fields.firstName,
		lastName: fields.lastName,
		email: fields.email,
		ticketCode: fields.ticketCode
	});

	if ( validateFields.success === false ) {
		return {
			errors: validateFields.error.issues,
			message: ""
		};
	}

	await mongoDBClient(); //establish a connection to the MongoDB

	await createApplication(fields);//create a record in the DB

	return {
		errors: null,
		message: "You've successfully sent the message!"
	};
}