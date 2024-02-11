import React from "react";

import BaseDialog from "@/components/UI/BaseDialog";
import LoginForm from "@/components/admin/LoginForm";

import { getSession } from "@/lib/auth";

const AdminPage: React.FC = async () => {
	const session = await getSession();

    return (
			<section className='flex flex-col justify-start items-start w-full'>
				{!session && (
					<BaseDialog title="Log in" fixed={false}>
						<LoginForm />
					</BaseDialog>
				)}
				<h1 className="text-orange-500 self-center">Admin Panel</h1>
				{session && 
					<span>Welcome back, {session.email}</span>
				}
				<ul>
					<li></li>
				</ul>
			</section>
		);
}

export default AdminPage;