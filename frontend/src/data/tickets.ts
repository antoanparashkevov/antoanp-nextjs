export type ticket = {
	id: number;
    code: string,
	name: string;
	intro: string;
	price: {
		defaultPrice: number;
		discountedPrice: number;
	};
	features: string[];
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
			defaultPrice: 200,
			discountedPrice: 150
		},
		features: ["Up to 2 pages", "Included source code", "Responsive design"],
		pricePerPage: {
			defaultPrice: 100,
			discountedPrice: 75
		}
	},
	{
		id: 2,
        code: "standard",
		name: "Standard",
		intro: "Full-Stack web application. Front End + Back End",
		price: {
			defaultPrice: 320,
			discountedPrice: 240
		},
		features: [
			"Up to 4 pages",
			"Included source code",
			"Responsive design",
			"Error Validation",
			"Search Engine Optimization"
		],
		pricePerPage: {
			defaultPrice: 80,
			discountedPrice: 60
		}
	},
	{
		id: 3,
        code: "premium",
		name: "Premium",
		intro:
			"Full-Stack web application. Front End + Back End + User Authentication",
		price: {
			defaultPrice: 490,
			discountedPrice: 350
		},
		features: [
			"Up to 7 pages",
			"Included source code",
			"Responsive design",
			"Error Validation",
			"Search Engine Optimization",
            "Accessibility",
            "Custom design using Figma"
		],
		pricePerPage: {
			defaultPrice: 70,
			discountedPrice: 50
		}
	}
];
