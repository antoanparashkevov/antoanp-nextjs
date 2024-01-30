'use client';

import { useContext, useEffect, useRef, useState } from "react";
import styles from './CountDown.module.css';

//context
import CountContext from "@/context/count-context";


const CountDown = () => {
    const [countToDate, setCountToDate] = useState(new Date().setHours(new Date().getHours() + 48));
    const { setIsExpired } = useContext(CountContext);
    
    const previousTimeBetweenDatesInSeconds = useRef(0);
    
    const [hoursTens, setHoursTens] = useState(0);
    const [hoursOnes, setHoursOnes] = useState(0);
    
    const [minutesTens, setMinutesTens] = useState(0);
    const [minutesOnes, setMinutesOnes] = useState(0);
    
    const [secondsTens, setSecondsTens] = useState(0);
    const [secondsOnes, setSecondsOnes] = useState(0);
    
    //hours
    const flipTopHoursTensRef = useRef(null);
    const flipTopHoursOnesRef = useRef(null);
    
    const flipBottomHoursTensRef = useRef(null);
    const flipBottomHoursOnesRef = useRef(null);

    //minutes
    const flipTopMinutesTensRef = useRef(null);
    const flipTopMinutesOnesRef = useRef(null);
    
    const flipBottomMinutesTensRef = useRef(null);
    const flipBottomMinutesOnesRef = useRef(null);

    //seconds
    const flipTopSecondsTensRef = useRef(null);
    const flipTopSecondsOnesRef = useRef(null); 
    
    const flipBottomSecondsTensRef = useRef(null);
    const flipBottomSecondsOnesRef = useRef(null); 

    useEffect(() => {
        if( localStorage && typeof localStorage.getItem('d') === 'string' ) {
            let timestamp = Number(localStorage.getItem('d'));

            setCountToDate(
                new Date(Number(timestamp))
                    .setHours(
                        new Date(timestamp)
                            .getHours() + 48
                    )
            )
        } else {
            //now() is a static method that returns the number of milliseconds elapsed since the epoch, which is defined at the beginning of the 1 January 1970
            localStorage.setItem('d', Date.now().toString());
        }
    }, [])

    useEffect(() => {
        
        const intervalID = setInterval(() => {
            const currentDate = new Date();//returns current date in milliseconds
            
            //(countToDate - currentDate) returns the difference in milliseconds.
            //Since one second has 1000 milliseconds, if we divide (countToDate - currentDate) by 1000
            //we will have the seconds number
            const timeBetweenDatesInSeconds = Math.ceil((countToDate - currentDate) / 1000);

            //this will execute 1 time per second since previousTimeBetweenDatesInSeconds would be different from timeBetweenDatesInSeconds for every one second 
            if( previousTimeBetweenDatesInSeconds.current !== timeBetweenDatesInSeconds && timeBetweenDatesInSeconds > 0) {
                // console.log('1 second passed...')
                flipAllCards(timeBetweenDatesInSeconds);
            }
            
            if( timeBetweenDatesInSeconds <= 0 ) {
                flipAllCards(0);
                setIsExpired(true);
                clearInterval(intervalID);
            }
            
            previousTimeBetweenDatesInSeconds.current = timeBetweenDatesInSeconds
        }, 250);//1/4 from a second
        
        //cleanup function
        return () => clearInterval(intervalID)
    }, [countToDate, flipAllCards]);
    
    function flipAllCards(timeBetweenDates: number) {
        //timeBetweenDates is in seconds

        const seconds = timeBetweenDates % 60;//the exact remain seconds
        const minutes = Math.floor((timeBetweenDates / 60) % 60);//one minute has 60 seconds
        const hours = Math.floor(timeBetweenDates / 3600);//one hour has 3600 seconds

        // console.log('hours >>> ', hours, 'minutes >>> ', minutes, 'seconds >>> ', seconds)
        const newHoursTens = Math.floor(hours / 10);//example: 23 hours / 10 => 2.3 => Math.floor => 2
        const newHoursOnes = hours % 10;//example: 7 hours % 10 => 7 OR 23 hours % 10 => 3

        const newMinutesTens = Math.floor(minutes / 10);//the same as hoursTens
        const newMinutesOnes = minutes % 10;//the same as hoursOnes

        const newSecondsTens = Math.floor(seconds / 10);//the same as hoursTens
        const newSecondsOnes = seconds % 10;//the same as hoursOnes
        
        // console.log(newHoursTens, newHoursOnes, newMinutesTens, newMinutesOnes, newSecondsTens, newSecondsOnes)
        
        //hours
        flip(flipTopHoursTensRef.current, flipBottomHoursTensRef.current, newHoursTens, hoursTens, setHoursTens)
        flip(flipTopHoursOnesRef.current, flipBottomHoursOnesRef.current, newHoursOnes, hoursOnes, setHoursOnes)
        
        //minutes
        flip(flipTopMinutesTensRef.current, flipBottomMinutesTensRef.current, newMinutesTens, minutesTens, setMinutesTens)
        flip(flipTopMinutesOnesRef.current, flipBottomMinutesOnesRef.current, newMinutesOnes, minutesOnes, setMinutesOnes)
        
        //seconds
        flip(flipTopSecondsTensRef.current, flipBottomSecondsTensRef.current, newSecondsTens, secondsTens, setSecondsTens)
        flip(flipTopSecondsOnesRef.current, flipBottomSecondsOnesRef.current, newSecondsOnes, secondsOnes, setSecondsOnes)
        
    }
    
    const flip = (topFlip, bottomFlip, newNumber, toCompare, setFunc) => {
        setFunc(newNumber)
    }
    
    return (
        <section className={styles['count_down']}>
            <div className={styles['count_down_segment']}>
                <span>Hours</span>
                <div className={styles['count_down_flip_cards']}>
                    <div className={styles['flip_card']}>
                        <div key={hoursTens + '_top1'} className={styles['top']}>{hoursTens}</div>
                        <div key={hoursTens + '_top2'} className={styles['top_flip']} ref={flipTopHoursTensRef}>{hoursTens}</div>
                        <div key={hoursTens + '_bottom1'} className={styles['bottom']}>{hoursTens}</div>
                        <div key={hoursTens + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomHoursTensRef}>{hoursTens}</div>
                    </div>
                    <div className={styles['flip_card']} >
                        <div key={hoursOnes + '_top'} className={styles['top']}>{ hoursOnes }</div>
                        <div key={hoursOnes + '_top2'} className={styles['top_flip']} ref={flipTopHoursOnesRef}>{ hoursOnes }</div>
                        <div key={hoursOnes + '_bottom1'} className={styles['bottom']}>{ hoursOnes }</div>
                        <div key={hoursOnes + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomHoursOnesRef}>{ hoursOnes }</div>
                    </div>
                </div>
            </div>
            <div className={styles['count_down_segment']}>
                <span>Minutes</span>
                <div className={styles['count_down_flip_cards']}>
                    <div className={styles['flip_card']}>
                        <div key={minutesTens + '_top1'} className={styles['top']}>{ minutesTens }</div>
                        <div key={minutesTens + '_top2'} className={styles['top_flip']} ref={flipTopMinutesTensRef}>{ minutesTens }</div>
                        <div key={minutesTens + '_bottom1'} className={styles['bottom']}>{ minutesTens }</div>
                        <div key={minutesTens + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomMinutesTensRef}>{ minutesTens }</div>
                    </div>
                    <div className={styles['flip_card']}>
                        <div key={minutesOnes + '_top1'} className={styles['top']}>{ minutesOnes }</div>
                        <div key={minutesOnes + '_top2'} className={styles['top_flip']} ref={flipTopMinutesOnesRef}>{ minutesOnes }</div>
                        <div key={minutesOnes + '_bottom1'} className={styles['bottom']}>{ minutesOnes }</div>
                        <div key={minutesOnes + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomMinutesOnesRef}>{ minutesOnes }</div>
                    </div>
                </div>
            </div>
            <div className={styles['count_down_segment']}>
                <span>Seconds</span>
                <div className={styles['count_down_flip_cards']}>
                    <div className={styles['flip_card']}>
                        <div key={secondsTens + '_top1'} className={styles['top']}>{ secondsTens }</div>
                        <div key={secondsTens + '_top2'} className={styles['top_flip']} ref={flipTopSecondsTensRef}>{ secondsTens }</div>
                        <div key={secondsTens + '_bottom1'} className={styles['bottom']}>{ secondsTens }</div>
                        <div key={secondsTens + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomSecondsTensRef}>{ secondsTens }</div>
                    </div>
                    <div className={styles['flip_card']}>
                        <div key={secondsOnes + '_top1'} className={styles['top']}>{ secondsOnes }</div>
                        <div key={secondsOnes + '_top2'} className={styles['top_flip']} ref={flipTopSecondsOnesRef}>{ secondsOnes }</div>
                        <div key={secondsOnes + '_bottom1'} className={styles['bottom']}>{ secondsOnes }</div>
                        <div key={secondsOnes + '_bottom2'} className={styles['bottom_flip']} ref={flipBottomSecondsOnesRef}>{ secondsOnes }</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountDown;