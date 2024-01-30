import React from 'react';

import Circle from './Circle';
import Icon from './Icon';

import MarkIcon from '../../../public/icons/mark.svg';

const Ticket: React.FC = () => {
	return (
		<div className="flex flex-col justify-start items-start gap-[25px] p-8 rounded-[1.5rem] border border-solid border-main">
			<div className="flex gap-x-[2px]">
				<Circle />
				<h2>Basic</h2>
			</div>
			<p>Simple web application. Front End or Backend.</p>
			<div className='flex gap-x-1 items-end h-[64px]'>
				<p className="relative flex gap-x-1 items-baseline">
					<span className="absolute bottom-0 left-0 origin-left -rotate-[25deg] w-[100px] h-[3px] bg-black"></span>
					<span className="text-[36px] font-extralight">$150</span>
					<span className="text-[18px] font-semibold">/once</span>
				</p>
				<p className="flex self-start">
					<span className="text-[36px] text-red-800 font-bold">$100</span>
					<span className="text-[18px] font-semibold">/once</span>
				</p>
			</div>
            <button className='self-center cursor-pointer py-[10px] px-20 border border-solid border-main rounded-1 text-sm text-blue-600 font-bold'>Claim the offer</button>
            <ul role='list' className='flex flex-col gap-y-[25px]'>
                <li className='flex gap-x-1 items-center text-sm text-main'>
                    <Icon
                        src={MarkIcon}
                        alt='Mark Icon'
                        width={20}
                        height={20}
                        className='text-orange-500 mr-1'
                    />
                    Up to 2 pages
                </li>
                <li className='flex gap-x-1 items-center text-sm text-main'>
                    <Icon
                        src={MarkIcon}
                        alt='Mark Icon'
                        width={20}
                        height={20}
                        className='text-orange-500 mr-1'
                        parentClassName='inline-block'
                    />
                    Up to 2 pages
                </li>
                <li className='flex gap-x-1 items-center text-sm text-main'>
                    <Icon
                        src={MarkIcon}
                        alt='Mark Icon'
                        width={20}
                        height={20}
                        className='text-orange-500 mr-1'
                        parentClassName='inline-block'
                    />
                    Up to 2 pages
                </li>
                <li className='flex gap-x-1 items-center text-sm text-main'>
                    <Icon
                        src={MarkIcon}
                        alt='Mark Icon'
                        width={20}
                        height={20}
                        className='text-orange-500 mr-1'
                        parentClassName='inline-block'
                    />
                    Up to 2 pages
                </li>
            </ul>
		</div>
	);
};

export default Ticket;
