import React from "react";
import Link from "next/link"

const NotFoundPage: React.FC = () => {
    return (
        <section className="container flex flex-col items-center gap-y-4">
            <h1 className='text-[45px]'>The page you are trying to access is not valid</h1>
            <Link href="/" className='base-btn'>Go back to the home page</Link>
        </section>
    )
}

export default NotFoundPage;