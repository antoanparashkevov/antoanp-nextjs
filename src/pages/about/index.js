import { useRouter } from "next/router";
import { useEffect } from "react";

const AboutPage = () => {
    const router = useRouter();
    
    useEffect(() => {
        console.log('router >>> ', router)
    }, [])
    return (
        <h1>About page</h1>
    )
}

export default AboutPage;