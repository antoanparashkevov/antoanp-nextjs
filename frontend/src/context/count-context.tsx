"use client";

import React, { createContext, useState } from "react";

export type countContext = {
	isExpired: boolean;
	updateIsExpired: (isExpired: boolean) => void;
};

//PascalCase for context name
export const CountContext = createContext<countContext>({
	isExpired: false,
	updateIsExpired: () => {}
});

export const CountContextProvider: React.FC<{
	children: Readonly<React.ReactNode>;
}> = ({ children }): React.ReactNode => {
	const [isExpired, setIsExpired] = useState<boolean>(false);

	const updateIsExpired = (isExpired: boolean) => {
		setIsExpired(isExpired);
	};

	return (
        <CountContext.Provider value={{ isExpired, updateIsExpired }}>
            {children}
        </CountContext.Provider>
	);
};
