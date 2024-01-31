"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { setTimeout } from "timers";

const createWrapperElement = (wrapperId: string) => {

	if( !document ) {
		return null;
	}

	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

type alertProps = {
	children: React.ReactNode | string;
	notificationStatus: string;
};

const Notification: React.FC<alertProps> = ({ children, notificationStatus }) => {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

	useLayoutEffect(() => {
		let element = document.getElementById('overlay');
		let systemCreated = false;

		if( !element ) {
			systemCreated = true;
			element = createWrapperElement('overlay');
		}

		setWrapperElement(element!);

		return () => {

			// delete the programatically created element
			if( systemCreated && element!.parentNode) {
				element?.parentNode.removeChild(element);
			}
		}
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsVisible(false);
		}, 4000);

		return () => clearTimeout(timeoutId);
	}, []);

	if( !wrapperElement || isVisible === false ) {
		return null;
	}

	return createPortal(
		<label>
			<input type="checkbox" className='hidden' />
			<div className={`
				${notificationStatus === "success" ? 'bg-green-500' : 'bg-red-600'}
				fixed right-1/2 top-8 translate-x-1/2 z-50 p-6 rounded-xl pointer
			`}
			>
				<span className='my-0 mx-auto text-white font-bold text-base'>
					{children}
				</span>
			</div>
		</label>,
		wrapperElement
	);
};

export default Notification;
