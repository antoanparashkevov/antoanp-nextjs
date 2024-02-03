export type featureType = (string | { name: string; tooltip: string })[];

export type ticket = {
	id: number;
	code: string;
	name: string;
	intro: string;
	price: {
		defaultPrice: number;
		discountedPrice: number;
	};
	features: featureType;
	pricePerPage: {
		defaultPrice: number;
		discountedPrice: number;
	};
};

export const tickets: ticket[] = [
	{
		id: 1,
		code: "basic",
		name: "Basic",
		intro: "Build a web application. Front End or Back End",
		price: {
			defaultPrice: 199.99,
			discountedPrice: 149.99
		},
		features: ["Up to 2 pages", "Included source code", "Responsive design"],
		pricePerPage: {
			defaultPrice: 99.99,
			discountedPrice: 74.99
		}
	},
	{
		id: 2,
		code: "standard",
		name: "Standard",
		intro: "Full-Stack web application. Front End + Back End",
		price: {
			defaultPrice: 319.99,
			discountedPrice: 239.99
		},
		features: [
			"Up to 4 pages",
			"Included source code",
			"Responsive design",
			"Error Validation",
			"Search Engine Optimization"
		],
		pricePerPage: {
			defaultPrice: 79.99,
			discountedPrice: 59.99
		}
	},
	{
		id: 3,
		code: "premium",
		name: "Premium",
		intro:
			"Full-Stack web application. Front End + Back End + User Authentication",
		price: {
			defaultPrice: 489.99,
			discountedPrice: 349.99
		},
		features: [
			"Up to 7 pages",
			"Included source code",
			"Responsive design",
			"Error Validation",
			"Search Engine Optimization",
			{
				name: "Accessibility",
				tooltip: `
					I believe in inclusivity. My websites are crafted with accessibility in mind,
					ensuring that everyone can navigate and interact effortlessly. 
					From clean semantic code to keyboard navigation, I make your website usable by all.
				`
			},
			"Custom design using Figma"
		],
		pricePerPage: {
			defaultPrice: 69.99,
			discountedPrice: 49.99
		}
	}
];
