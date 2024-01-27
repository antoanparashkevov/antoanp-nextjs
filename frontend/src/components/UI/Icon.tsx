"use client";

import React from "react";
import Image from "next/image";

type tooltipPlace = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"
type tooltipVariant = "dark" | "light" | "success" | "warning" | "error" | "info";

type tooltipOptions = {
    activateTooltip: boolean,
    tooltipContent: string,
    tooltipPlace: tooltipPlace,
    tooltipVariant?: tooltipVariant,
}

export type iconProps = {
    parentClassName?: string | [] | {},
    className?: string,
    src: string,
    width: number,
    height: number,
    alt: string,
    id?: string,
    href?: string,
    target?: string,
    onClick?: () => void,
    tooltipOptions?: tooltipOptions
}

const Icon: React.FC<iconProps> = (
    {
        parentClassName,
        className,
        src,
        width,
        height,
        alt,
        id,
        href,
        target,
        onClick,
        tooltipOptions
    }
) => {

    {/*priority is set to high (fetchpriority='high'), not loading lazily (loading='lazy') since this is just a normal icon, small format and lightweight*/}
    return (
        <div className={`${parentClassName || ''} relative`} onClick={onClick}>
            {href && target ? <a href={href} target={target} /> : null}
            <Image
                className={className || ''}
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
            />
            {/* {tooltipOptions && tooltipOptions.activateTooltip &&
                //TODO: TooltipWrapper component
                <TooltipWrapper
                    id={id}
                    variant={tooltipOptions.tooltipVariant}
                    place={tooltipOptions.tooltipPlace} 
                    content={tooltipOptions.tooltipContent}
                />
            } */}
        </div>
    );
};

export default Icon;