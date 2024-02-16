'use client';

import React, { createContext, useState } from 'react';

export type LanguageContext = {
    language: string;
    setLanguageCode: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContext>({
    language: 'en',
    setLanguageCode: () => {}
});

type LanguageContextProviderProps = {
    children: Readonly<React.ReactNode>;
    params: { lang: string }
};
export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({
    children,
    params
}): React.ReactNode => {
    const [language, setLanguage] = useState(params.lang);

    const setLanguageCode = (lang: string) => {
        setLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguageCode }}>
            {children}
        </LanguageContext.Provider>
    )
}