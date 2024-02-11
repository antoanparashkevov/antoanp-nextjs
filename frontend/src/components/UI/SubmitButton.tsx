"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
import { useFormStatus } from "react-dom";

const Notification = dynamic(() => import('./Notification'));

import type { ZodIssue } from "zod";

export type formStateType = {
	message: string;
	errors: ZodIssue[] | null | string;
};

const SubmitButton: React.FC<{ formState: formStateType, buttonStyle?: string }> = ({
	formState,
	buttonStyle
}) => {
	const { pending } = useFormStatus();

	return (
		<Fragment>
			{!pending && (formState.errors?.length! > 0 || formState.message) && (
				<Notification
					status={formState.message ? "success" : "error"}
					timeout={4000}
				>
					{formState.message ||
						(formState.errors
							? Array.isArray(formState.errors)
								? formState
										.errors!.map((error: ZodIssue) => error.message)
										.join("\n")
								: formState.errors
							: "Something went wrong!")}
				</Notification>
			)}
			<button
				type="submit"
				aria-disabled={pending}
				disabled={pending}
				className={`base-btn ${buttonStyle}`.trim()}
			>
				{pending ? "Submitting..." : "Submit"}
			</button>
		</Fragment>
	);
};

export default SubmitButton;