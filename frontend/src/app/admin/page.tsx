import React, { Fragment } from "react";
import AdminForm from "@/components/UI/AdminForm";

const AdminPage: React.FC = () => {

    return (
        <Fragment>
            <h1 className='text-orange-500'>Admin Panel</h1>
            <AdminForm/>
        </Fragment>
    )
}

export default AdminPage;