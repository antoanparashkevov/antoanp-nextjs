'use server';//module level Server Actions

//Server Action
export async function create(activeTicketCode: string, formData: FormData) {

	console.log("invoked");
	console.log("formData", formData);
}