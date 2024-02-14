import React from "react";
import ActionButton from "../UI/ActionButton";
import Link from "next/link";

import type { HeaderContent } from "@/lib/content";

const TheHeader: React.FC<{ content: HeaderContent}> = ({ content }) => {

    return (
			<nav className="flex justify-between items-center w-full min-h-full">
				<h3 className="cursor-pointer text-orange-500">
					<Link href="/">AntoanP</Link>
				</h3>
				<ul role="list">
					<li>
						<ActionButton className="text-orange-500" href="#prices">
							{content.actionButtonLabel}
						</ActionButton>
					</li>
				</ul>
			</nav>
		);
};

export default TheHeader;