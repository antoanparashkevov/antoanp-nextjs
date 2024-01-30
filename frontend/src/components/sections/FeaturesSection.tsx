import React from "react";
import Image from "next/image";
import CircleSeparationLine from "../UI/CircleSeparationLine";
import MarkIcon from "../../../public/icons/mark.svg";

const FeaturesSection: React.FC = () => {
	return (
		<section
			id="offers"
			className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-3 lg:gap-x-8">
			<div className="flex flex-col items-start justify-center gap-y-4">
				<h2 className="text-orange-500 font-bold">
					Since I am a generous person and want to provide my clients with as
					much value as possible
				</h2>
				<CircleSeparationLine />
				<p className="text-lg">
					In addition to ALL of the exclusive benefits above, you will also get:
				</p>
			</div>

			<dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 col-span-2">
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
				<div className="relative pl-12">
					<dt className="font-bold text-black">
						<Image
							src={MarkIcon}
							alt="Mark icon"
							className="w-5 h-5 absolute top-1 left-0"
						/>
						Interactive Elegance: The Artistry of Front-End Brilliance
					</dt>
					<dd className="text-main">
						If your website is an expensive luxurious sports car, the front end
						is the sleek exterior design, polished finish, and cutting-edge
						features of the vehicle. It&apos;s everything your client will
						interact with on your website: the layout, design, buttons, forms,
						and any other visual element. For this part, I&apos;m using one of
						the latest technologies right now - Next.JS that optimizes the most
						important parts in a website - Images and Fonts
					</dd>
				</div>
			</dl>
		</section>
	);
};

export default FeaturesSection;
