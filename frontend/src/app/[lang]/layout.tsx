import { Source_Sans_3 } from 'next/font/google';
import { defaultLocale } from '@/middleware';

import '@/styles/globals.css';

import TheHeader from '@/components/layout/TheHeader';

import { metadataContent } from '@/lib/content';
import { LanguageContextProvider } from '@/context/language-context';

const source_sans_3 = Source_Sans_3({
	weight: ['400', '600', '700'],
	style: 'normal',
	subsets: ['latin', 'cyrillic'],
	variable: '--font-source-sans-3'
});

export function generateMetadata({
	params
}: Readonly<{
	params: { lang: string }; 
}>) {
	const lang = params.lang || defaultLocale;

	return metadataContent[lang];
}

export default function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {

	return (
		<html lang={params.lang ?? defaultLocale} className={`${source_sans_3.variable} font-sans`}>
			<LanguageContextProvider params={params}>
				<body className="min-w-[360px] w-full min-h-screen flex flex-col text-main text-base">
					<div id='overlay' />
					<div id='backdrop' />
					<header className="container flex w-full min-h-[130px] mb-16">
						<TheHeader />
					</header>
					<main className="container flex flex-col flex-grow justify-start items-center">
						{children}
					</main>
					<footer className="min-h-[90px] flex items-end">
						<span className="block w-full h-1 bg-blue-600"></span>
					</footer>
				</body>
			</LanguageContextProvider>
		</html>
	);
}
