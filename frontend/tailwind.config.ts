import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

//IMPORTANT - THIS FILE MUST STAY AT THE ROOT OF THE PROJECT

//to create a configuration file - npx tailwindcss init -p (for PostCSS configuration)

//configure Tailwind
const config: Config = {
	important: true, //this option lets you control whether Tailwind"s utility classes should be marked with !important
	content: [
		//here we configure the paths to all HTML templates (in our case React Components)
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/styles/*.{scss,css,sass}"
	],
	//when set to class, instead of dark:{utilityClass} being applied based on prefers-color-scheme, they will be applied whenever "dark" class is present for any parent element in the HTML tree
	//when set to media (by default), this uses the prefers-color-scheme CSS media feature and will be applied with dark:{utilityClass}
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["var(--font-inter)"]
		},
		screens: {
			sm: "500px",
			md: "750px",
			lg: "1024px",
			xl: "1280px"
			// "2xl": "1536px"
		},
		colors: {
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
			white: "#FFFFFF",
			black: "#333333",
			transparent: "transparent",
			"custom-ocean": {
				"100": "#d8eff5",
				"200": "#b6dfeb",
				"300": "#84c9dc",
				"400": "#4aa9c6",
				"500": "#2e8cac",
				"600": "#2c799a",
				"700": "#275d77",
				"800": "#284e62",
				"900": "#254254"
			},
			"custom-brown": {
				"400": "#f1cb1e",
				"500": "#e1b311",
				"600": "#c28b0c",
				"700": "#9b640d",
				"800": "#804f13",
				"900": "#603913",
				"950": "#402108"
			},
			"kingfisher-daisy": {
				"50": "#f4f1ff",
				"100": "#ede5ff",
				"200": "#dcceff",
				"300": "#c3a7ff",
				"400": "#a876ff",
				"500": "#8f3fff",
				"600": "#8518ff",
				"700": "#7907fa",
				"800": "#6505d2",
				"900": "#5406ac",
				"950": "#3d008d"
			},
			magnolia: {
				"50": "#faf6ff",
				"100": "#f2e8ff",
				"200": "#e7d5ff",
				"300": "#d4b4fe",
				"400": "#b984fc",
				"500": "#9f55f7",
				"600": "#8933ea",
				"700": "#7422ce",
				"800": "#6421a8",
				"900": "#521c87",
				"950": "#360764"
			},
			green: {
				"50": "#dbfdec",
				"100": "#dbfdec",
				"200": "#baf8d9",
				"300": "#84f1bc",
				"400": "#47e196",
				"500": "#47e196",
				"600": "#13a65f",
				"700": "#13824d",
				"800": "#146741",
				"900": "#135437",
				"950": "#042f1d"
			},
			altGray: "#9FA5C0",
			mainText: "#2E3E5C"
		},
		spacing: {
			px: "1px",
			0: "0",
			0.5: "0.125rem",
			1: "0.25rem",
			1.5: "0.375rem",
			2: "0.5rem",
			2.5: "0.625rem",
			3: "0.75rem",
			3.5: "0.875rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			11: "2.75rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
			100: "25rem"
		},
		//Extending the default theme.
		//Preserve the default values for a theme option (for example spacing option), but also add new values
		extend: {
			zIndex: {
				100: "100",
				1000: "1000",
				10000: "10000"
			}
		}
	},
	plugins: []
};

export default config;
