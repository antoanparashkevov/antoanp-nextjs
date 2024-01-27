import React from "react";
import Link from "next/link";

type navLinkProps = {
    children: React.ReactNode | string,
    href: string,
    className?: string
}

export const NavLink: React.FC<navLinkProps> = ({ children, href, className }) => {

    return (
        <Link
            className={`
                block px-[1.75rem] py-[0.75rem] text-[1rem] cursor-pointer text-mainText leading-none
                ${className}
            `}
            href={href}
        >
            {children}
        </Link>
    );
};