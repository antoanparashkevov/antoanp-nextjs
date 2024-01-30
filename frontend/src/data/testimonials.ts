import { StaticImport } from "next/dist/shared/lib/get-img-props";

import YoanaImage from '../../public/images/person.jpg';

export type testimonial = {
	id: number,
    quote: string,
    author: string,
    authorInfo: string,
    authorImage: StaticImport | string
}

export const testimonials: testimonial[] = [
	{
		id: 1,
		quote: `“Quality work, fast and open-minded. Thank you. Will recommend to my colleagues”`,
		author: "Yoana Drashkova",
		authorInfo: "Student",
		authorImage: YoanaImage
	},
	{
		id: 2,
		quote: `"The website you made for my shed business is unique! I will definitely recommend you!"`,
		author: "Slavi Panayotov",
		authorInfo: "Business owner",
		authorImage: YoanaImage
	},
	{
		id: 3,
		quote: `"The website you made for my shed business is unique! I will definitely recommend you!"`,
		author: "Slavi Panayotov",
		authorInfo: "Business owner",
		authorImage: YoanaImage
	}
];