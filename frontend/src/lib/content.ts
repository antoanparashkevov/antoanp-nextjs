import type { Metadata } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import YoanaImage from "../../public/images/Yoana.jpg";
import SlaviImage from "../../public/images/Slavi.jpg";
import NikiImage from "../../public/images/Niki.jpg";
import SevdelinImage from "../../public/images/Sevdelin.jpg";
import StanimirImage from "../../public/images/Stanimir.jpg";

export type HeaderContent = {
	actionButtonLabel: string;
}

export type HeroSectionContent = {
	headline: string[];
	subheadline: string[];
};

export type IntroductionSectionContent = {
	sections: { headline?: string; para: string[] }[];
	outro: string;
	contactMeLabel: string;
};

export type BenefitsSectionContent = {
	headline: string[];
	sections: {
		headline: string;
		para: string[];
		actionButton: { href: string; label: string };
	}[];
};

export type AboutMeSectionContent = {
	headline: string;
	para: string[];
};

export type FeaturesSectionContent = {
	headline: string;
	subheadline: string;
	sections: { headline: string[]; para: string[] }[];
};

export type testimonial = {
	id: number;
	quote: string;
	author: string;
	authorInfo: string;
	projectLink?: string;
	designLink?: string;
	githubLink?: string;
	authorImage: StaticImport | string;
};

export type TestimonialsSectionContent = testimonial[];

export type CountDown = {
	headline: string;
	subheadline: string;
	actionButtonLabel: string;
}

export type feature =
	| string
	| { name: string; tooltip?: string; bold?: boolean };

export type featureType = feature[];

export type ticket = {
	id: number;
	code: string;
	name: string;
	intro: string;
	currency: string;
	price: {
		defaultPrice: number;
		discountedPrice: number;
	};
	oneTimeLabel: string;
	features: featureType;
	pricePerPage: {
		defaultPrice: number;
		discountedPrice: number;
	};
	actionButtonLabel: string;
	additionalPageLabel: string;
};

export type TicketsSectionContent = {
	headline: string;
	subheadline: string[];
	plans: string;
	countDown: CountDown;
	actionButtonLabel: string;
	tickets: ticket[];
	para: string;
	money_back: string;
};

export type NotificationContent = {
	success: string;
	error: string;
};

export type FormLabels = {
	first_name: string;
	last_name: string;
	email: string;
	message: string;
	buttonAction: {
		label: string;
		sendingLabel: string;
	};
};

export type ContactSectionContent = {
	notificationContent: NotificationContent;
	headline: string[];
	subheadline: string;
	picked_plan: string;
	form: FormLabels;
};

type DictionaryEntry = {
	heroSection: HeroSectionContent;
	introductionSection: IntroductionSectionContent;
	benefitsSection: BenefitsSectionContent;
	aboutMeSection: AboutMeSectionContent;
	featuresSection: FeaturesSectionContent;
	testimonialsSection: TestimonialsSectionContent;
	ticketsSection: TicketsSectionContent;
	contactSection: ContactSectionContent;
};

export const metadataContent: Record<string, Metadata> = {
	en: {
		title:
			"Professional Web-Development Services At Affordable Price For Your Business",
		description:
			"Professional website development for your business with an expert web developer including web design with Figma"
	},
	bg: {
		title:
			"Професионални услуги по уеб разработка на достъпни цени за твоя бизнес",
		description:
			"Професионално разработване на уебсайт за твоя бизнес включващ уеб дизайн с Фигма от експертен уеб разработчик"
	}
};

export const headerContent: Record<string, HeaderContent> = {
	en: {
		actionButtonLabel: "Go to prices"
	},
	bg: {
		actionButtonLabel: "Отиди до цените"
	}
};

export const dictionary: Record<string, DictionaryEntry> = {
	en: {
		heroSection: {
			headline: [
				"How To ",
				"Transform",
				" Your Starting Business From Having 0 or FEW Clients To 10x ",
				"In Less Than 90 Days"
			],
			subheadline: [
				"Let's Fix This Once And For All By Building You An ",
				"Affordable High-Performing Website",
				" That Will Steal Your Competitors' Clients"
			]
		},
		introductionSection: {
			sections: [
				{
					para: [
						"Right now you might think:",
						"<br />",
						"<br />",
						`“How is this guy going to get a lot of clients for my business?”`,
						"<br />",
						"<br />",
						"That's a good question, but before we dive in I want to ask you something important:",
						"<br />"
					]
				},
				{
					headline: "How badly do you want your business to succeed?",
					para: [
						`
                            You see, as a professional full-stack web developer dedicated to his
                            craft for over 3 years now, I want to make sure I will work with a
                            serious ambitious individual.
                        `,
						"<br />",
						"<br />",
						"",
						"I might be a little direct but there's a specific reason for that."
					]
				},
				{
					headline: "I want the best possible results for you!",
					para: [
						`
                            To achieve that, I must ensure you are thinking as an individual who 
                            wants the best for his starting business, and more specifically:
                        `,
						"<br />",
						"<br />",
						"To attain hundreds of clients for your business and make tons of money from them.",
						"<br />",
						"<br />",
						"So how will I get you a lot of clients? The answer is simple:",
						"<br />",
						"<br />",
						`I will build you a top-tier website so that when your clients see it for the time, 
						they will have NO CHOICE but to buy your products or services.`,
						"<br />",
						"<br />",
						"How do I know?",
						"<br />",
						"<br />",
						"Because I have already done that repeatedly with my previous customers as you can check here.",
					]
				}
			],
			outro: "Sign up here if you want an elite website that will drag you hundreds of clients for your starting business.",
			contactMeLabel: "Contact me"
		},
		benefitsSection: {
			headline: [
				`Over the past few months, I conducted an in-depth study of the top web development 
				companies worldwide and identified the `,
				"four key",
				` elements missing from their services to 
				achieve optimal results for their clients. These elements `,
				"WILL NOT BE MISSING",
				" once we create your website and will completely set you apart from the competition.",
			],
			sections: [
				{
					headline: "Start Strong, Spend Smart",
					para: [
						`I know from experience how “pocket-draining” and stressful it can be
						to take off a business and to make it as easy as possible for you 
						I will make you a website that is not only high-quality, 
						but it will also be at a `,
						"very affordable price",
						"."
					],
					actionButton: {
						href: "#prices",
						label: "Go to prices"
					}
				},
				{
					headline: "Your Website, Your Vision, Your Way!",
					para: [
						`Unlike the pretty limited and expensive template choices
						some big companies offer to their clients, I will create a beautifully 
						designed website tailored to your preferences that will leave your visitors with dropped jaws.`
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				},
				{
					headline: "User Bliss: Where Functionality Meets Friendliness!",
					para: [
						`Imagine entering a low-quality website and seeing its poor structure, 
						saturated colors, and scattered text. Not pleasant, right? 
						That's why we will be professionals and provide your visitors with an easily accessible and 
						well-organized website that is comfortable to read and won't overwhelm them with endless text!`,
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				},
				{
					headline: "Your Domain, Your Rules!",
					para: [
						"Privacy is ",
						"sacred",
						` for most people. Unfortunately, many big companies
						ignore this crucial fact and use their clients' data
						information for their own marketing purposes which in my opinion is `,
						"pathetic",
						"! But don't worry, once your website is finished, you and ONLY you will have access to the code."
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				}
			]
		},
		aboutMeSection: {
			headline: "A little about me",
			para: [
				"Graduated from ",
				"The #1 Software University in Bulgaria",
				". During my studies there, I had the amazing opportunity to learn from ",
				"top experts and professors",
				" with more than ",
				"10 years of experience ",
				`
                    in the area. Besides mastering the basics, I've also learned more
                    advanced techniques that will be the “secret sauce” when it comes to
                    attracting new customers to your website and making tons of money
                    from them.
                `
			]
		},
		featuresSection: {
			headline:
				"Since I am a generous person and want to provide you as much value as possible for your starting business",
			subheadline:
				"In addition to the benefits above, you will also get:",
			sections: [
				{
					headline: [
						"Interactive ",
						"Elegance",
						": The Artistry of ",
						"Front-End",
						" Briliance"
					],
					para: [
						"It's everything your client will interact with on your website – the ",
						"layout",
						", ",
						"design",
						", ",
						"buttons",
						", ",
						"forms",
						", and any other ",
						"visual element",
						`. For this part, I'm using one of the most efficient
						technologies right now - `,
						"Next.JS",
						" which optimizes the most important parts of a website - ",
						"Images",
						" and ",
						"Fonts",
						"."
					]
				},
				{
					headline: [
						"Back-End ",
						"Perfection",
						": The Unseen Architect of ",
						"Seamless",
						" Funtionality"
					],
					para: [
						"While the front end focuses on the ",
						"pleasant visual experience ",
						`
                            of your website, this service manages the “behind the scenes” magic
                            of it. This includes the server, the database, and the security
                            (CSRF protection, CORS protection, Authentication protection). Here
                            I am using one of the most modern PHP back-end technologies right
                            now - 
                        `,
						"Laravel",
						"."
					]
				},
				{
					headline: [
						"Elevate your ",
						"Online Presence",
						": SEO Tactics for Enhanced Visibility"
					],
					para: [
						"This is a ",
						"special technology",
						` that will significantly enhance the visibility of your website in the online space 
						by targeting your desired audience with at least 10% - because a `,
						"high-level website",
						" deserves to be ",
						"at the top",
						" of the search engine!"
					]
				},
				{
					headline: [
						"Versatile ",
						"User Experience",
						": The Magic of ",
						"Responsive",
						" Design"
					],
					para: [
						"One website - ",
						"diversity",
						` of ways to reach it. This one-of-a-kind service is specifically
						designed to deliver multiple ways for people to reach your website
						across `,
						"ALL devices",
						`. Witness a stunning and seamless user experience as your site
						dynamically adapts to `,
						"desktops",
						", ",
						"tablets",
						", and ",
						"smartphones",
						"."
					]
				},
				{
					headline: [
						"Zero Tolerance for ",
						"Glitches",
						": Elevate Performance with Rigorous ",
						"Error Validation"
					],
					para: [
						"Don't you hate when forms fail to send or links lead nowhere? The validation service makes sure your website ",
						"runs like a Swiss Watch",
						". No more web crashes; it's all about ",
						"precision",
						" and ",
						"reliability",
						"."
					]
				},
				{
					headline: [
						"Inclusive Design, ",
						"Exclusine Experience",
						": Tailoring Accessibility for ",
						"All of Your Website's Users"
					],
					para: [
						"I'll make your website open and accessible to ",
						"everyone",
						`. I must ensure that every visitor, including those with
						disabilities, can fully enjoy your website.`,
					]
				}
			]
		},
		testimonialsSection: [
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
				projectLink: "https://itcommunity.antoanp.com",
				designLink:
					"https://www.figma.com/file/tqyxHF9RfEQyLEMCzFDvhz/it-community?type=design&node-id=0-1&mode=design&t=hqsgZKdr6Hkq2f0b-0",
				githubLink: "https://github.com/antoanparashkevov/it-community-react",
				authorImage: NikiImage
			},
			{
				id: 4,
				quote: `"Antoan is extremely serious and reliable partner! The process was easy and enjoyable! With his professionalism and strong skills he managed to exceed my desired result!"`,
				author: "Sevdelin Kolarov",
				authorInfo: "Businessman",
				projectLink: "https://lovejourney69.xyz",
				githubLink: "https://github.com/antoanparashkevov/book-nextjs",
				authorImage: SevdelinImage
			},
			{
				id: 5,
				quote: `"Web development was always a challenging task for me until I collaborated with Antoan. His innovative ideas truly set him apart. The project, General Meal, exceeded my expectations."`,
				author: "Stanimir Stoykow",
				authorInfo: "Young entrepreneur",
				projectLink: "https://generalmeal.com",
				githubLink: "https://github.com/antoanparashkevov/general-meal-nextjs",
				authorImage: StanimirImage
			}
		],
		ticketsSection: {
			headline: "But WAIT that's not everything…",
			subheadline: [
				`Making it this far shows me that you are TRULY about
				attaining hundreds of clients for your starting business and for this reason, I will make you a `,
				"special discount",
				" if you sign up for discussion with me in the next ",
				"24 hours"
			],
			plans: "Plans",
			countDown: {
				headline: "Unfortunately, your time expired...",
				subheadline:
					"But don't worry, you still have a chance to get the discounts if you contact me now",
				actionButtonLabel: "Contact Me"
			},
			actionButtonLabel: "Send a message",
			tickets: [
				{
					id: 1,
					code: "basic",
					name: "Basic",
					intro: "Build a web application. Front End or Back End",
					currency: "$",
					price: {
						defaultPrice: 199.99,
						discountedPrice: 149.99
					},
					oneTimeLabel: "once",
					features: [
						"Up to 2 pages",
						"Included source code",
						"Responsive design"
					],
					pricePerPage: {
						defaultPrice: 99.99,
						discountedPrice: 74.99
					},
					additionalPageLabel: "for each additional page",
					actionButtonLabel: "Claim the offer"
				},
				{
					id: 2,
					code: "standard",
					name: "Standard",
					intro: "Full-Stack web application. Front End + Back End",
					currency: "$",
					price: {
						defaultPrice: 319.99,
						discountedPrice: 239.99
					},
					oneTimeLabel: "once",
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
					},
					additionalPageLabel: "for each additional page",
					actionButtonLabel: "Claim the offer"
				},
				{
					id: 3,
					code: "premium",
					name: "Premium",
					intro:
						"Full-Stack web application. Front End + Back End + User Authentication",
					currency: "$",
					price: {
						defaultPrice: 489.99,
						discountedPrice: 349.99
					},
					oneTimeLabel: "once",
					features: [
						"Up to 7 pages",
						"Included source code",
						"Responsive design",
						"Error Validation",
						{
							name: "Search Engine Optimization",
							bold: true
						},
						{
							name: "Accessibility",
							tooltip: `
								I believe in inclusivity. My websites are crafted with accessibility in mind,
								ensuring that everyone can navigate and interact effortlessly. 
								From clean semantic code to keyboard navigation, I make your website usable by all.
							`,
							bold: true
						},
						"Custom design using Figma"
					],
					pricePerPage: {
						defaultPrice: 69.99,
						discountedPrice: 49.99
					},
					additionalPageLabel: "for each additional page",
					actionButtonLabel: "Claim the offer"
				}
			],
			para: "No additional and hidden fees - pay once and get full access to your website",
			money_back: `
                    And of course, if you are not satisfied with my services, you
					will get a 100% refund of your money in the blink of an eye.
                `
		},
		contactSection: {
			notificationContent: {
				success: "You've successfully sent the message!",
				error: "Something went wrong!"
			},
			headline: [
				"Sign Up ",
				"Now",
				" And Let's Create An ",
				"Elite-Performing",
				" Website For Your Starting Business"
			],
			subheadline: "Get in touch",
			picked_plan: "Picked plan",
			form: {
				first_name: "First name",
				last_name: "Last name",
				email: "Email",
				message: "Message",
				buttonAction: {
					label: "Submit",
					sendingLabel: "Submitting..."
				}
			}
		}
	},
	bg: {
		heroSection: {
			headline: [
				"Как да",
				" трансформираш ",
				"своя стартиращ бизнес от 0 или няколко клиента до 10х ",
				"за по-малко от 90 дни"
			],
			subheadline: [
				"Нека поправим това веднъж завинаги като ти създам ",
				"високопроизводителен сайт",
				" на ",
				"изключително достъпна цена",
				", който ще открадне клиентите на твоите конкуренти!"
			]
		},
		introductionSection: {
			sections: [
				{
					para: [
						"Сега сигурно се чудиш:",
						"<br />",
						"<br />",
						`“Как този човек ще ми доведе много клиенти за моя бизнес?”`,
						"<br />",
						"<br />",
						"Това е добър въпрос, но преди да ти отговоря, искам да ти задам един важен въпрос:",
						"<br />"
					]
				},
				{
					headline: "Колко силно искаш твоят бизнес да успее?",
					para: [
						`Като професионален full-stack уеб разработчик, който е посветен над занаята си повече от 3 години, 
						аз искам да се уверя, че работя със сериозен и амбициран човек.`,
						"<br />",
						"<br />",
						"",
						"Може да съм леко директен, но за това си има конкретна причина:"
					]
				},
				{
					headline: "Аз искам най-добрите възможни резултати за теб!",
					para: [
						`И за да ги постигнем, аз трябва се уверя, че искаш най-доброто 
						за своя стартиращ бизнес, а именно:`,
						"<br />",
						"<br />",
						"Да привлечеш стотици клиенти за бизнеса си и да изкараш купища пари от тях.",
						"<br />",
						"<br />",
						"И сега да се върнем на въпроса как ще ти докарам много клиенти? Отговорът е прост:",
						"<br />",
						"<br />",
						`Ще ти направя уебсайт на такова ниво, че когато клиентите ти го видят, 
						те няма да имат избор но да купят продуктите или услугите, които предлагаш.`,
						"<br />",
						"<br />",
						"Откъде съм толкова сигурен?",
						"<br />",
						"<br />",
						"Знам, защото вече съм го постигал многократно с мои предишни доволни клиенти, както може да видиш тук.",
					]
				}
			],
			outro: "Свържи се с мен сега, ако искаш елитен уебсайт, който ще привлече стотици клиенти за твоя стартиращ бизнес!",
			contactMeLabel: "Изпрати съобщение"
		},
		benefitsSection: {
			headline: [
				"Последните няколко месеца направих подробно проучване на най-големите компании за уеб-разработка в света и от тях взех ",
				"4-те ключови елемента",
				", които липсват в услугите им за постигане на най-добрите възжмони резултати за техните клиенти. ",
				"",
				"Елементи, който ",
				"НЯМА ДА ЛИПСВАТ",
				" в твоя уебсайт и ще те отличат напълно от конкуренцията."
			],
			sections: [
				{
					headline: "Започни силно, харчи умно",
					para: [
						`Знам от опит колко скъпо и стресиращо е да започнеш бизнес и за да те улесня 
						максимално ще ти направя уебсайт не просто на високо ниво, но и на `,
						"много достъпна цена",
						"."
					],
					actionButton: {
						href: "#prices",
						label: "Go to prices"
					}
				},
				{
					headline: "Твоят сайт, Твоята визия, Твоят начин!",
					para: [
						`За разлика от доста ограничените и скъпи шаблони, които повечето уеб-разработчици и компании предлагат, 
						аз ще създам красиво изглеждащ дизайн за твоя уебсайт по твой вкус, който ще остави посетителите ти с паднало чене.`
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				},
				{
					headline: "Където функционалността е приоритет!",
					para: [
						`Представи си как влизаш в нискокачествен уебсайт и виждаш лошата структура, 
						наситените цветове, и разпръснатият текст по него. Не е приятно, нали? 
						Затова ние ще сме професионалисти и ще предоставим на клиентите ти `,
						"леснодостъпен",
						" и ",
						"добре организиран",
						" уебсайт, който ще е удобен за четене и няма да ги натоварва с безкраен текст!"
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				},
				{
					headline: "Твоят домейн, твоите правила!",
					para: [
						"Поверителността за много хора е ",
						"от голямо значение!",
						` 
                            Но за съжаление, много големи компании игнорират този ключов факт и 
                            използват данните на своите клиенти за техни лични маркетингови цели, 
                            което лично според мен е 
                        `,
						"жалко",
						"! Но ти не се притеснявай, веднъж щом сайта ти бъде готов, ти и ",
						"САМО ТИ",
						" ще имаш пълния достъп до кода и базата данни!"
					],
					actionButton: {
						href: "#offers",
						label: "Go to offers"
					}
				}
			]
		},
		aboutMeSection: {
			headline: "Накратко за мен",
			para: [
				"Завършил съм ",
				"един от най-добрите софтуерни университети в България - Софтуни",
				". По време на обучението ми там, имах невероятната възможност да се обуча от ",
				"топ експерти",
				" с ",
				"над 10 години опит в сферата ",
				`
                    на програмирането. Освен научаване и затвърдяване на основите, 
                    аз също научих по-напреднали техники, които ще бъдат “тайният сос”, 
                    когато дойде ред да привлечем нови клиенти в твоят уебсайт.
                `
			]
		},
		featuresSection: {
			headline:
				"И тъй като съм щедър човек, който иска да ти даде колкото се може повече стойност за твоя стартиращ бизнес:",
			subheadline:
				"В допълнение към ползите, които описах горе, ти също ще получиш:",
			sections: [
				{
					headline: [
						"Интерактивна ",
						"елегантност",
						": Артистичността и блясъкът на ",
						"Front-End"
					],
					para: [
						"Това включва всичко, с което клиентът ти ще взаимодейства по твоя уебсайт - ",
						"оформлението",
						", ",
						"дизайнът",
						", ",
						"бутоните",
						", ",
						"формите",
						`, и всичко останали визуални елементи по екрана.
						За тази част, аз използвам най-модерната технология в момента - `,
						"Next.JS",
						", която оптимизира най-важните части на уебсайта - ",
						"текстът",
						" и ",
						"снимките",
						"."
					]
				},
				{
					headline: [
						"Back-End ",
						"съвършенство",
						": Невижданият архитект на безпроблемната ",
						"функционалност"
					],
					para: [
						`Докато Front-End частта се фокусира върху приятното визуално преживяване на твоя уебсайт, 
						тази услуга управлява задкулисната магия в него. Това включва сървър, база от данни, 
						защита (CSRF protection, CORS protection, Authentication protection). 
						Тук използвам една от най-модерните PHP технологии - `,
						"Laravel",
						"."
					]
				},
				{
					headline: [
						"Издигни своето ",
						"Онлайн присъствие",
						": SEO тактики за подобряване на видимостта"
					],
					para: [
						"Тук аз използвам специална технология, която ",
						"драстично ще засили",
						` видимостта на твоя уебсайт в онлайн пространството, 
						като таргетира твоята желана аудитория с поне 10% - защото сайт на високо ниво 
						заслужава да бъде на високо място в търсачката!`,
					]
				},
				{
					headline: [
						"Универсално ",
						"потребителско изживяване",
						": Магията на ",
						"Responsive",
						" дизайна"
					],
					para: [
						`Един сайт - разнообразие от начини да го достъпиш! Това е единствена по рода си услуга, 
						която е специфично устроена да достави различни начини на хората да достъпват уебсайта ти от `,
						"ВСЯКО устройство",
						`! Той ще има зашеметяващо и безпроблемно потребителско изживяване, 
						динамично адаптирайки се на `,
						"таблети",
						", ",
						"телефони",
						", ",
						"компютри",
						"."
					]
				},
				{
					headline: [
						"Никаква толерантност за ",
						"бъговете",
						": Издигни производителността на сайта си със строга ",
						"проверка за грешки"
					],
					para: [
						`Не ти ли е неприятно когато формата не успее да се изпрати или линкът води до никъде? 
						Услугата за валидиране прави възможното твоят уебсайт да върви като `,
						"Швейцарски часовник",
						"! Без повече бъгове: всичко с ",
						"прецизност",
						" and ",
						"надеждност",
						"."
					]
				},
				{
					headline: [
						"изключителен дизайн, ",
						"екслузивно преживяване",
						": Адаптиране на уебсайта за ",
						"всички потребители"
					],
					para: [
						"Аз ще ти направя уебсайта ти отворен и достъпен за ",
						"всички",
						`! Мое задължение е да бъда сигурен, че всеки посетител, включително и тези с усложнения, 
						ще могат да му се насладят напълно.`,
					]
				}
			]
		},
		testimonialsSection: [
			{
				id: 1,
				quote: `“Качествена работа, бърз и непринуден! Благодаря ти! Определено ще те препоръчам на моите колеги!”`,
				author: "Йоана Драшкова",
				authorInfo: "Студент",
				githubLink: "https://github.com/antoanparashkevov/evento-MPA",
				authorImage: YoanaImage
			},
			{
				id: 2,
				quote: `"Уебсайтът, който направи за моя бизнес с навеси, е уникален! Определено ще те препоръчам!"`,
				author: "Слави Димчев",
				authorInfo: "Млад предприемач",
				projectLink: "https://naves4e.bg",
				githubLink: "https://github.com/antoanparashkevov/shed-nextjs",
				authorImage: SlaviImage
			},
			{
				id: 3,
				quote: `"Имах удоволствието да работя с Антоан върху уеб проекта IT Job Board и изживяването не беше нищо друго освен изключително!"`,
				author: "Николай Йорданов",
				authorInfo: "Млад предприемач",
				projectLink: "https://itcommunity.antoanp.com",
				designLink:
					"https://www.figma.com/file/tqyxHF9RfEQyLEMCzFDvhz/it-community?type=design&node-id=0-1&mode=design&t=hqsgZKdr6Hkq2f0b-0",
				githubLink: "https://github.com/antoanparashkevov/it-community-react",
				authorImage: NikiImage
			},
			{
				id: 4,
				quote: `"Aнтоан е изключително сериозен и надежден партньор! Процесът беше лек и приятен! Със неговия професионализъм и завидни умения, успя да надмине желания от мен резултат!"`,
				author: "Севделин Коларов",
				authorInfo: "Бизнесмен",
				projectLink: "https://lovejourney69.xyz",
				githubLink: "https://github.com/antoanparashkevov/book-nextjs",
				authorImage: SevdelinImage
			},
			{
				id: 5,
				quote: `"Уеб разработката винаги беше трудна задача за мен, докато не се сътрудничих с Антоан. Неговите новаторски идеи наистина го отличават. Проектът, General Meal, надмина моите очаквания."`,
				author: "Станимир Стойков",
				authorInfo: "Млад предприемач",
				projectLink: "https://generalmeal.com",
				githubLink: "https://github.com/antoanparashkevov/general-meal-nextjs",
				authorImage: StanimirImage
			}
		],
		ticketsSection: {
			headline: "Но ИЗЧАКАЙ, това не е всичко…",
			subheadline: [
				`Стигайки до тук, ти ми доказа, че си наистина сериозен за 
				постигането на стотици клиенти за твоя стартиращ бизнес и поради тази причина, ще ти направя `,
				"специална оферта",
				" ако се свържеш с мен в следващите ",
				"24 часа"
			],
			plans: "Планове",
			countDown: {
				headline: "За жалост твоето време изтече...",
				subheadline:
					"Но не се притеснявай, все още имаш шанс да грабнеш офертите, ако се свържеш с мен сега",
				actionButtonLabel: "Свържи се с мен"
			},
			actionButtonLabel: "Изпрати съобщение",
			tickets: [
				{
					id: 1,
					code: "basic",
					name: "Базов",
					intro: "Разработка на уеб приложение. Front-End или Back-End",
					currency: "лв",
					price: {
						defaultPrice: 364.99,
						discountedPrice: 274.99
					},
					oneTimeLabel: "веднъж",
					features: [
						"До 2 страници",
						"С включен source code",
						"Responsive design"
					],
					pricePerPage: {
						defaultPrice: 182.99,
						discountedPrice: 134.99
					},
					additionalPageLabel: "за всяка допълнителна страница",
					actionButtonLabel: "Грабни офертата"
				},
				{
					id: 2,
					code: "standard",
					name: "Стандартен",
					intro: "Full-Stack уеб приложение. Front End + Back End",
					currency: "лв",
					price: {
						defaultPrice: 584.99,
						discountedPrice: 434.99
					},
					oneTimeLabel: "веднъж",
					features: [
						"До 4 страници",
						"С включен source code",
						"Responsive design",
						"Error Validation",
						"Search Engine Optimization"
					],
					pricePerPage: {
						defaultPrice: 145.99,
						discountedPrice: 109.99
					},
					additionalPageLabel: "за всяка допълнителна страница",
					actionButtonLabel: "Грабни офертата"
				},
				{
					id: 3,
					code: "premium",
					name: "Премиум",
					intro:
						"Full-Stack уеб приложение. Front End + Back End + User Authentication",
					currency: "лв",
					price: {
						defaultPrice: 895.99,
						discountedPrice: 639.99
					},
					oneTimeLabel: "веднъж",
					features: [
						"До 7 страници",
						"С включен source code",
						"Responsive design",
						"Error Validation",
						{
							name: "Search Engine Optimization",
							bold: true
						},
						{
							name: "Accessibility",
							tooltip: `
								Вярвам в приобщаването. Моите уебсайтове са създадени с мисъл за достъпността,
								гарантирайки, че всеки може да навигира и да взаимодейства без усилие.
								От чист семантичен код до навигация с клавиатура, аз правя вашия уебсайт използваем от всички.
							`,
							bold: true
						},
						"Custom design използвайки Figma"
					],
					pricePerPage: {
						defaultPrice: 127.99,
						discountedPrice: 89.99
					},
					additionalPageLabel: "за всяка допълнителна страница",
					actionButtonLabel: "Грабни офертата"
				}
			],
			para: "Без допълнителни и скрити такси - плащаш веднъж и получаваш достъп до твоя уебсайт",
			money_back:
				`Разбира се, ако не си удовлетворен от услугите ми, 
				веднага ще получиш 100% възвръщаемост на парите си!`
		},
		contactSection: {
			notificationContent: {
				success: "Успешно изпрати съобщението!",
				error: "Нещо се обърка!"
			},
			headline: [
				"Свържи Се С Мен ",
				"Сега",
				" И Нека Създадем ",
				"Високофункциониращ",
				" Уебсайт За Твоя Стартиращ Бизнес"
			],
			subheadline: "Свържете се с мен и през социалните ми мрежи",
			picked_plan: "Избран план",
			form: {
				first_name: "Собствено име",
				last_name: "Фамилно име",
				email: "Имейл",
				message: "Съобщение",
				buttonAction: {
					label: "Изпрати",
					sendingLabel: "Изпращане..."
				}
			}
		}
	}
};
