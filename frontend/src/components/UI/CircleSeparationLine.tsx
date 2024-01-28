import React from "react";

const CircleSeparationLine: React.FC<{className?: string}> = ({className}) => {

    return (
        <div className={`${className || ''} flex justify-center items-center gap-x-2`}>
            <span className='w-[10px] h-[10px] rounded-full bg-blue-600' />
            <span className='w-[230px] h-[1px] bg-main' />
        </div>
    )
};

export default CircleSeparationLine;