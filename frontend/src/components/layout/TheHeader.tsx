import React from "react";
import ActionButton from "../UI/ActionButton";

const TheHeader: React.FC = () => {

    return (
        <nav className='flex justify-between items-center w-full min-h-full'>
            <h3 className='cursor-pointer text-orange-500'>AntoanP</h3>
            <ul role='list'>
                <li>
                    <ActionButton className='text-orange-500'>Go to prices</ActionButton>
                </li>
            </ul>
        </nav>
    )
};

export default TheHeader;