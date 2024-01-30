import React from 'react';

import Circle from './Circle';
import Icon from './Icon';

import MarkIcon from '../../../public/icons/mark.svg';
import DocumentIcon from '../../../public/icons/document.svg';

const Ticket: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-start gap-[25px] p-8 rounded-[1.5rem] border border-solid border-main">
			<div className="flex gap-x-[2px]">
				<Circle />
				<h2>Basic</h2>
			</div>
			<p>Build a web application. Front End or Backend.</p>
			<div className="flex items-end h-[64px]">
				<p className="relative flex items-baseline">
					<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[100px] h-[3px] bg-black" />
					<span className="text-[36px] font-extralight">$150</span>
					<span className="text-[18px] font-semibold">/once</span>
				</p>
				<p className="flex self-start items-baseline">
					<span className="text-[36px] text-red-800 font-bold">$100</span>
					<span className="text-[18px] font-semibold">/once</span>
				</p>
			</div>
			<button
				className="
                    self-center cursor-pointer py-2.5 px-20 border border-solid border-main text-sm text-blue-600 font-bold
                ">
				Claim the offer
			</button>
			<ul role="list" className="flex flex-col gap-y-[25px] w-full">
				<li className="flex items-center text-sm text-main">
					<Icon
						src={MarkIcon}
						alt="Mark Icon"
						className="text-orange-500 mr-1"
					/>
					Up to 2 pages
				</li>
				<li className="flex items-center text-sm text-main">
					<Icon
						src={DocumentIcon}
						alt="Document Icon"
						className="text-orange-500 mr-1"
					/>
					<p className="relative flex items-end text-sm h-8">
						<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[2.5rem] h-[3px] bg-black" />
						<span className="font-extralight">+$75&nbsp;</span>
						for each additional page
						<span className="absolute top-0 left-3 text-red-800 font-bold">$50</span>
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Ticket;
