import React, { Fragment } from "react";

import BaseDialog from "@/components/UI/BaseDialog";
import LoginForm from "@/components/admin/LoginForm";

import { getSession } from "@/lib/auth";
import mongoDBClient from "../../../mongoose/config/configuration";

import {
	applicationItem,
	getAll
} from "../../../mongoose/services/applicationService";

async function getData(
	session: string | null
): Promise<null | applicationItem[]> {
	if (session) {
		await mongoDBClient();
		return await getAll();
	}
	return null;
}

const AdminPage: React.FC = async () => {
	const session = await getSession();
	const data = await getData(session);

	return (
		<section className="flex flex-col justify-start items-start w-full">
			{!session && (
				<BaseDialog title="Log in" fixed={false}>
					<LoginForm />
				</BaseDialog>
			)}
			<h1 className="text-orange-500 self-center">Admin Panel</h1>
			{session && (
				<Fragment>
					<span>Welcome back, {session.email}</span>
					{data && (
						<ul className="flex flex-col justify-center gap-8 my-8">
							{data.map((application, index: number) => {
								return (
									<li
										key={index}
										className="flex flex-col p-8 border border-solid border-black-500 rounded-xl"
									>
										<h3>
											{application.firstName.concat(` ${application.lastName}`)}
										</h3>
										<span>
											Email:{" "}
											<a
												href={`mailto:${application.email}`}
												className="hover:underline"
											>
												{application.email}
											</a>
										</span>
										<h3>Ticket info:</h3>
										<p>
											Type: <span className='font-bold'>{application.ticketCode.toUpperCase()}</span>
										</p>
										<p>
											Is expired?{" "}
											<span className="font-bold">
												{application.isExpired ? "Yes" : "No"}
											</span>
										</p>
										<h3>Message:</h3>
										<p>{application.message}</p>
									</li>
								);
							})}
						</ul>
					)}
				</Fragment>
			)}
		</section>
	);
};

export default AdminPage;
