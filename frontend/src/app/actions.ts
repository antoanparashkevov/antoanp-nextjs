"use server"; //module level Server Actions defined by 'use server' React directive

import { z } from "zod";

const schema = z.object({
	firstName: z
		.string({
			invalid_type_error:
				"Invalid First Name. Should be at least 2 characters long."
		})
		.min(2),
	lastName: z
		.string({
			invalid_type_error:
				"Invalid Last Name. Should be at least 2 characters long."
		})
		.min(2),
	email: z.string({
		invalid_type_error: "Invalid Email"
	})
});

//Server Action - async functions that are executed on the server
export async function create(ticketCode: string, initialState: any, formData: FormData) {
	const validateFields = schema.safeParse({
		firstName: formData.get("firstName"),
		lastName: formData.get("lastName"),
		email: formData.get("email")
	});

	if ( validateFields.success === false ) {

		return {
			errors: validateFields.error.flatten().fieldErrors,
			message: ""
		};
	}

	return {
		errors: null,
		message: "You've successfully sent the message!"
	};
}