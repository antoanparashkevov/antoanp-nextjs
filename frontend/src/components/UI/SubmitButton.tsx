"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
import { useFormStatus } from "react-dom";

import type { FormLabels, NotificationContent } from "@/lib/content";

const Notification = dynamic(() => import('./Notification'));

import type { ZodIssue } from "zod";

export type formStateType = {
	message: string;
	errors: ZodIssue[] | null | string;
};

const SubmitButton: React.FC<{ formState: formStateType, buttonStyle?: string, buttonLabels: FormLabels['buttonAction'], notificationContent?: NotificationContent }> = ({
	formState,
	buttonStyle,
	buttonLabels,
	notificationContent
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
							: (notificationContent?.error || "Something went wrong!"))}
				</Notification>
			)}
			<button
				type="submit"
				aria-disabled={pending}
				disabled={pending}
				className={`base-btn ${buttonStyle}`.trim()}
			>
				{pending
					? buttonLabels?.sendingLabel || "Submitting"
					: buttonLabels?.label || "Submit"}
			</button>
		</Fragment>
	);
};

export default SubmitButton;