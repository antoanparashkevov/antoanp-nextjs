import { useRouter } from "next/router";

const ServiceIdPage = () => {
    const router = useRouter();
    
    return (
        <h1>Service ID: {router.query['serviceId']}</h1>
    )
}

export default ServiceIdPage;