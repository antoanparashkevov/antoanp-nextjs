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
			sans: ["var(--font-source-sans-3)"]
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
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
			white: "#FFFFFF",
			black: "#000000",
			transparent: "transparent",
			orange: {
				"50": "#fffcea",
				"100": "#fff3c5",
				"200": "#ffe785",
				"300": "#ffd446",
				"400": "#ffc01b",
				"500": "#ff9d01",
				"600": "#e27500",
				"700": "#bb4f02",
				"800": "#983d08",
				"900": "#7c320b",
				"950": "#481800"
			},
			blue: {
				"50": "#eff4ff",
				"100": "#dbe6fe",
				"200": "#bfd3fe",
				"300": "#93b4fd",
				"400": "#6090fa",
				"500": "#3b76f6",
				"600": "#2563eb",
				"700": "#1d58d8",
				"800": "#1e4baf",
				"900": "#1e408a",
				"950": "#172a54"
			},
			"headerText": "#111827",
			"paraText": "#4B5563"
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
