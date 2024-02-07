import React, {Fragment} from "react";
import {getSession, signIn, signOut} from "@/auth";

const AdminForm: React.FC = async () => {
    const session = await getSession();

    return (
        <Fragment>
            <form action={signIn}>
                <input type="email" name='email' required/>
                <input type="password" name='password' required/>
                <button type='submit'>Login</button>
            </form>
            <form action={signOut}>
                <button type='submit'>Logout</button>
            </form>
            <pre>
                {JSON.stringify(session, null, 2)}
            </pre>
        </Fragment>
    );
};


export default AdminForm;