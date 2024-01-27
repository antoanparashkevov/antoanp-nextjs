import React from "react";

type separationLineProps = {
    maxWidth?: string,
    vertical?: boolean,
    className?: string
}

const SeparationLine: React.FC<separationLineProps> = ({maxWidth, vertical, className}) => {

    return (
        <span
            className={`
                block bg-[#BFBFBF] my-8 rounded
                ${maxWidth ? `max-w-[${maxWidth}px]` : ""}
                ${vertical ? "w-[3px] h-full" : "w-full h-[3px]"}
                ${className}
            `}
        />
    );
};

export default SeparationLine;