import { useRouter } from "next/router";
import { useEffect } from "react";

const ContactPage = () => {
    const router = useRouter();
    
    useEffect(() => {
        console.log('router >>> ', router)
    }, [])
    return (
        <h1>Catch all paths /contact/something/something/.... BUT WITHOUT JUST /contact</h1>
    )
}

export default ContactPage;