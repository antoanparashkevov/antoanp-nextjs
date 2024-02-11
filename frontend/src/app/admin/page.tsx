import React, { Fragment } from "react";

import BaseDialog from "@/components/UI/BaseDialog";
import LoginForm from "@/components/admin/LoginForm";

import { getSession } from "@/lib/auth";
import mongoDBClient from "../../../mongoose/config/configuration";

import { applicationItem, getAll } from "../../../mongoose/services/applicationService";

async function getData(session: string | null): Promise<null | applicationItem[]> {
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
			<section className='flex flex-col justify-start items-start w-full'>
				{!session && (
					<BaseDialog title="Log in" fixed={false}>
						<LoginForm />
					</BaseDialog>
				)}
				<h1 className="text-orange-500 self-center">Admin Panel</h1>
				{session && 
					<Fragment>
						<span>Welcome back, {session.email}</span>
						{ data && 
							<ul>
								{data.map((application, index: number) => {
									return (
										<li key={index}>
											{application.firstName}
											{application.lastName}
											{application.email}
											{application.ticketCode}
											{application.isExpired}
										</li>
									)
								})}
							</ul>
						}
					</Fragment>
				}
			</section>
		);
}

export default AdminPage;