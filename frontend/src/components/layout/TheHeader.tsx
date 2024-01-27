import Link from "next/link";
import React from "react";
import Icon from "../UI/Icon";
import ArrowIcon from '../../../public/icons/arrow.svg';

const TheHeader: React.FC = () => {

    return (
        <nav className='flex justify-between items-center w-full min-h-full text-orange-500'>
            <h3 className='cursor-pointer'>AntoanP</h3>
            <ul role='list'>
                <li>
                    <Link href='/' className='flex gap-x-1 text-sm font-bold text-orange-500'>
                        Go to prices
                        <Icon 
                            src={ArrowIcon}
                            alt='Arrow Icon'
                            width={15}
                            height={15}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default TheHeader;