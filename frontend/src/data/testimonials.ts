import { StaticImport } from "next/dist/shared/lib/get-img-props";

import YoanaImage from '../../public/images/Yoana.jpeg';
import SlaviImage from '../../public/images/Slavi.jpg';
import NikiImage from '../../public/images/Niki.jpeg';

export type testimonial = {
	id: number,
    quote: string,
    author: string,
    authorInfo: string,
	projectLink?: string,
	githubLink?: string,
    authorImage: StaticImport | string
}

export const testimonials: testimonial[] = [
	{
		id: 1,
		quote: `“Quality work, fast and open-minded. Thank you. Will recommend to my colleagues”`,
		author: "Yoana Drashkova",
		authorInfo: "Student",
		githubLink: "https://github.com/antoanparashkevov/evento-MPA",
		authorImage: YoanaImage
	},
	{
		id: 2,
		quote: `"The website you made for my shed business is unique! I will definitely recommend you!"`,
		author: "Slavi Dimchev",
		authorInfo: "Business owner",
		projectLink: "https://naves4e.bg",
		githubLink: "https://github.com/antoanparashkevov/shed-nextjs",
		authorImage: SlaviImage
	},
	{
		id: 3,
		quote: `"I had the pleasure of working with Antoan on our IT Job Board web project, and the experience was nothing short of exceptional."`,
		author: "Nikolay Yordanov",
		authorInfo: "Business owner",
		projectLink: "https://itcommunity.vercel.app",
		githubLink: "https://github.com/antoanparashkevov/it-community-react",
		authorImage: NikiImage
	}
];