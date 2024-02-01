import { StaticImport } from "next/dist/shared/lib/get-img-props";

import EmailIcon from "../../public/icons/email.svg";
import LinkedinIcon from "../../public/icons/linkedin.svg";
import InstagramIcon from "../../public/icons/instagram.svg";
import TikTokIcon from "../../public/icons/tiktok.svg";
import GithubIcon from "../../public/icons/github.svg";

export type social = {
    id: number,
    code: string,
    name: string,
    link: string,
    icon: StaticImport | string
}

export const socials: social[] = [
	{
        id: 1,
        code: 'email',
		name: "antoanparashkevov@gmail.com",
		link: "mailto:antoanparashkevov@gmail.com",
		icon: EmailIcon
	},
	{
        id: 2,
        code: 'linkedin',
		name: "Antoan Parashkevov",
		link: "https://www.linkedin.com/in/antoanp/",
		icon: LinkedinIcon
	},
    {
        id: 3,
        code: 'github',
		name: "@antoanparashkevov",
		link: "https://github.com/antoanparashkevov",
		icon: GithubIcon
	},
	{
        id: 4,
        code: 'instagram',
		name: "antoanp15",
		link: "https://www.instagram.com/antoanp15/",
		icon: InstagramIcon
	},
	{
        id: 5,
        code: 'tiktok',
		name: "antoanp1505",
		link: "https://www.tiktok.com/@antoanp1505",
		icon: TikTokIcon
	},
];