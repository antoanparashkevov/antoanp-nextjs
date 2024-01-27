"use client";

import Image from "next/image";
import { Tooltip } from "react-tooltip";
import classNames from "classnames";
import React from "react";

type tooltipPlace = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"
type tooltipVariant = "dark" | "light" | "success" | "warning" | "error" | "info";

type tooltipOptions = {
    activateTooltip: boolean,
    tooltipText: string,
    tooltipPlace: tooltipPlace,
    tooltipStyles?: {},
    tooltipVariant?: tooltipVariant,
    tooltipClickable?: boolean,
    tooltipDelayShow?: number,
    tooltipDelayHide?: number
}

export type iconProps = {
    parentClassName?: string | [] | {},
    className?: string,
    src: string,
    width?: number,
    height?: number,
    fill?: boolean,
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
        fill,
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
        <div className={classNames("relative", parentClassName)} onClick={onClick}>
            {href && target ? <a href={href} target={target} /> : null}
            <Image
                className={className}
                data-tooltip-id={id}
                src={src}
                width={width}
                height={height}
                fill={fill}
                priority
                alt={alt}
            />
            {tooltipOptions && tooltipOptions.activateTooltip &&
                <Tooltip 
                    id={id}
                    variant={tooltipOptions.tooltipVariant}
                    style={tooltipOptions.tooltipStyles} 
                    place={tooltipOptions.tooltipPlace} 
                    clickable={tooltipOptions.tooltipClickable}
                    delayShow={tooltipOptions.tooltipDelayShow}
                    delayHide={tooltipOptions.tooltipDelayHide}
                    content={tooltipOptions.tooltipText}
                />
            }
        </div>
    );
};

export default Icon;