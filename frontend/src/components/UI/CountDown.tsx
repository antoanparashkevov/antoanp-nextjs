"use client";

import React, { useContext, useEffect, useRef, useState, Fragment } from "react";
import styles from "./CountDown.module.css";

//context
import { CountContext } from "@/context/count-context";
import Link from "next/link";

const CountDown: React.FC<{ hours: number }> = ({ hours = 24 }) => {
	const { isExpired } = useContext(CountContext);

	const [countToDate, setCountToDate] = useState(
		new Date().setHours(new Date().getHours() + hours)
	);

	const { updateIsExpired } = useContext(CountContext);

	const previousTimeBetweenDatesInSeconds = useRef(0);

	const [hoursTens, setHoursTens] = useState(0);
	const [hoursOnes, setHoursOnes] = useState(0);

	const [minutesTens, setMinutesTens] = useState(0);
	const [minutesOnes, setMinutesOnes] = useState(0);

	const [secondsTens, setSecondsTens] = useState(0);
	const [secondsOnes, setSecondsOnes] = useState(0);

	useEffect(() => {
		if (typeof localStorage.getItem("d") === "string") {
			let timestamp = Number(localStorage.getItem("d"));

			setCountToDate(
				new Date(Number(timestamp)).setHours(
					new Date(timestamp).getHours() + 48
				)
			);
		} else {
			//now() is a static method that returns the number of milliseconds elapsed since the epoch, which is defined at the beginning of the 1 January 1970
			localStorage.setItem("d", Date.now().toString());
		}
	}, []);

	useEffect(() => {
		const intervalID = setInterval(() => {
			const currentDate = new Date(); //returns current date in milliseconds

			//(countToDate - currentDate) returns the difference in milliseconds.
			//Since one second has 1000 milliseconds, if we divide (countToDate - currentDate) by 1000
			//we will have the seconds number
			const timeBetweenDatesInSeconds = Math.ceil(
				(countToDate - Number(currentDate)) / 1000
			);

			//this will execute 1 time per second since previousTimeBetweenDatesInSeconds will be different from timeBetweenDatesInSeconds for every one second
			if (
				previousTimeBetweenDatesInSeconds.current !==
					timeBetweenDatesInSeconds &&
				timeBetweenDatesInSeconds > 0
			) {
				// console.log('1 second passed...')
				flipAllCards(timeBetweenDatesInSeconds);
			}

			if (timeBetweenDatesInSeconds <= 0) {
				flipAllCards(0);
				updateIsExpired(true);
				clearInterval(intervalID);
			}

			previousTimeBetweenDatesInSeconds.current = timeBetweenDatesInSeconds;
		}, 250); //1/4 from a second

		//cleanup function
		return () => clearInterval(intervalID);
	}, [countToDate, updateIsExpired]);

	function flipAllCards(timeBetweenDatesInSeconds: number) {
		//timeBetweenDatesInSeconds is in seconds

		const seconds = timeBetweenDatesInSeconds % 60; //the exact remain seconds
		const minutes = Math.floor((timeBetweenDatesInSeconds / 60) % 60); //one minute has 60 seconds
		const hours = Math.floor(timeBetweenDatesInSeconds / 3600); //one hour has 3600 seconds

		const newHoursTens = Math.floor(hours / 10); //example: 23 hours / 10 => 2.3 => Math.floor => 2
		const newHoursOnes = hours % 10; //example: 23 hours % 10 => 3

		const newMinutesTens = Math.floor(minutes / 10);
		const newMinutesOnes = minutes % 10;

		const newSecondsTens = Math.floor(seconds / 10);
		const newSecondsOnes = seconds % 10;

		//hours
		setHoursTens(newHoursTens);
		setHoursOnes(newHoursOnes);

		//minutes
		setMinutesTens(newMinutesTens);
		setMinutesOnes(newMinutesOnes);

		//seconds
		setSecondsTens(newSecondsTens);
		setSecondsOnes(newSecondsOnes);
	}

	return (
		<Fragment>
			<section className={styles["count_down"]}>
				<div className={styles["count_down_segment"]}>
					<span>Hours</span>
					<div className={styles["count_down_flip_cards"]}>
						<div className={styles["flip_card"]}>
							<div key={hoursTens + "_top1"} className={styles["top"]}>
								{hoursTens}
							</div>
							<div key={hoursTens + "_top2"} className={styles["top_flip"]}>
								{hoursTens}
							</div>
							<div key={hoursTens + "_bottom1"} className={styles["bottom"]}>
								{hoursTens}
							</div>
							<div
								key={hoursTens + "_bottom2"}
								className={styles["bottom_flip"]}>
								{hoursTens}
							</div>
						</div>
						<div className={styles["flip_card"]}>
							<div key={hoursOnes + "_top"} className={styles["top"]}>
								{hoursOnes}
							</div>
							<div key={hoursOnes + "_top2"} className={styles["top_flip"]}>
								{hoursOnes}
							</div>
							<div key={hoursOnes + "_bottom1"} className={styles["bottom"]}>
								{hoursOnes}
							</div>
							<div
								key={hoursOnes + "_bottom2"}
								className={styles["bottom_flip"]}>
								{hoursOnes}
							</div>
						</div>
					</div>
				</div>
				<div className={styles["count_down_segment"]}>
					<span>Minutes</span>
					<div className={styles["count_down_flip_cards"]}>
						<div className={styles["flip_card"]}>
							<div key={minutesTens + "_top1"} className={styles["top"]}>
								{minutesTens}
							</div>
							<div key={minutesTens + "_top2"} className={styles["top_flip"]}>
								{minutesTens}
							</div>
							<div key={minutesTens + "_bottom1"} className={styles["bottom"]}>
								{minutesTens}
							</div>
							<div
								key={minutesTens + "_bottom2"}
								className={styles["bottom_flip"]}>
								{minutesTens}
							</div>
						</div>
						<div className={styles["flip_card"]}>
							<div key={minutesOnes + "_top1"} className={styles["top"]}>
								{minutesOnes}
							</div>
							<div key={minutesOnes + "_top2"} className={styles["top_flip"]}>
								{minutesOnes}
							</div>
							<div key={minutesOnes + "_bottom1"} className={styles["bottom"]}>
								{minutesOnes}
							</div>
							<div
								key={minutesOnes + "_bottom2"}
								className={styles["bottom_flip"]}>
								{minutesOnes}
							</div>
						</div>
					</div>
				</div>
				<div className={styles["count_down_segment"]}>
					<span>Seconds</span>
					<div className={styles["count_down_flip_cards"]}>
						<div className={styles["flip_card"]}>
							<div key={secondsTens + "_top1"} className={styles["top"]}>
								{secondsTens}
							</div>
							<div key={secondsTens + "_top2"} className={styles["top_flip"]}>
								{secondsTens}
							</div>
							<div key={secondsTens + "_bottom1"} className={styles["bottom"]}>
								{secondsTens}
							</div>
							<div
								key={secondsTens + "_bottom2"}
								className={styles["bottom_flip"]}>
								{secondsTens}
							</div>
						</div>
						<div className={styles["flip_card"]}>
							<div key={secondsOnes + "_top1"} className={styles["top"]}>
								{secondsOnes}
							</div>
							<div key={secondsOnes + "_top2"} className={styles["top_flip"]}>
								{secondsOnes}
							</div>
							<div key={secondsOnes + "_bottom1"} className={styles["bottom"]}>
								{secondsOnes}
							</div>
							<div
								key={secondsOnes + "_bottom2"}
								className={styles["bottom_flip"]}>
								{secondsOnes}
							</div>
						</div>
					</div>
				</div>
			</section>
			{isExpired && (
				<section className="text-center">
					<h1 className="text-xl mb-4">Unfortunately, your time expired...</h1>
					<p className="mb-4">
						But don&apos;t worry, you still have a chance to get the discounts if
						you contact me now
					</p>
					<Link href="#contact" className="base-btn">
						Contact Me
					</Link>
				</section>
			)}
		</Fragment>
	);
};

export default CountDown;
