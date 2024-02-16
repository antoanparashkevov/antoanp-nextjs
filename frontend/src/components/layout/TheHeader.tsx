'use client';

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { supportedLocales } from "@/middleware";

import { headerContent } from "@/lib/content";

import ActionButton from "../UI/ActionButton";

import DataSelectorWrapper, { selectorItem } from "../UI/DataSelectorWrapper";

import { LanguageContext } from "@/context/language-context";

const TheHeader: React.FC = () => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const { language, setLanguageCode } = useContext(LanguageContext);

	const selectorData = useMemo(
		() => supportedLocales.map(
			(local: string) => ({
				title: local.toUpperCase(),
				code: local 
			})
			),
		[]
	)

	function changeLanguage(data: selectorItem) {
		setLanguageCode(data.code);
		setOpenDropdown(false);
	}

    return (
			<nav className="flex justify-between items-center w-full min-h-full">
				<h3 className="cursor-pointer text-orange-500">
					<Link href="/">AntoanP</Link>
				</h3>
				<ul role="list" className="flex items-center gap-x-4">
					<li className='relative'>
						<svg
							onClick={() => setOpenDropdown(!openDropdown)}
							width="22"
							height="22"
							viewBox="0 0 22 22"
							className="fill-white stroke-orange-500 cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21M11 1C8.49872 3.73835 7.07725 7.29203 7 11C7.07725 14.708 8.49872 18.2616 11 21M11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21M11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21M1.50002 8H20.5M1.5 14H20.5"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						{ openDropdown && (
							<DataSelectorWrapper
								selectorData={selectorData}
								placeholderValue={language}
								onResubForNewData={changeLanguage}
							/>
						)}
					</li>
					<li>
						<ActionButton className="text-orange-500" href="#prices">
							{headerContent[language].actionButtonLabel}
						</ActionButton>
					</li>
				</ul>
			</nav>
		);
};

export default TheHeader;