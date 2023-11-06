import { useEffect, useRef, useState } from "react";

const countToDate = new Date().setHours(new Date().getHours() + 24);// we create a new Date which is 24 hours forward

const CountDown = () => {
    const previousTimeBetweenDatesInSeconds = useRef(0);
    
    const [hoursTens, setHoursTens] = useState(2);
    const [hoursOnes, setHoursOnes] = useState(4);
    
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
        // console.log('countToDate >>> ', countToDate)
        // console.log('currentDate >>> ', new Date())
        // console.log('the difference >>> ', countToDate - new Date())
        
        const intervalID = setInterval(() => {
            const currentDate = new Date();//returns current date in milliseconds
            
            //(countToDate - currentDate) returns the difference in milliseconds.
            //Since one second has 1000 milliseconds, if we divide (countToDate - currentDate) by 1000
            //we will have the seconds number
            const timeBetweenDatesInSeconds = Math.ceil((countToDate - currentDate) / 1000);
            
            if( previousTimeBetweenDatesInSeconds.current !== timeBetweenDatesInSeconds ) {
                console.log('1 second passed...')
                flipAllCards(timeBetweenDatesInSeconds)//this will execute 1 time per second
            }
            
            previousTimeBetweenDatesInSeconds.current = timeBetweenDatesInSeconds
        }, 250);//1/4 from a second
        
        //cleanup function
        return () => clearInterval(intervalID)
    }, []);
    
    const flipAllCards = (timeBetweenDates) => {
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
        
        console.log(newHoursTens, newHoursOnes, newMinutesTens, newMinutesOnes, newSecondsTens, newSecondsOnes)
        
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
        <section className='count_down'>
            <div className='count_down_segment'>
                <span>Hours</span>
                <div className='count_down_flip_cards'>
                    <div className='flip_card'>
                        <div key={hoursTens + '_top1'} className='top'>{hoursTens}</div>
                        <div key={hoursTens + '_top2'} className='top_flip' ref={flipTopHoursTensRef}>{hoursTens}</div>
                        <div key={hoursTens + '_bottom1'} className='bottom'>{hoursTens}</div>
                        <div key={hoursTens + '_bottom2'} className='bottom_flip' ref={flipBottomHoursTensRef}>{hoursTens}</div>
                    </div>
                    <div className='flip_card' >
                        <div key={hoursOnes + '_top'} className='top'>{ hoursOnes }</div>
                        <div key={hoursOnes + '_top2'} className='top_flip' ref={flipTopHoursOnesRef}>{ hoursOnes }</div>
                        <div key={hoursOnes + '_bottom1'} className='bottom'>{ hoursOnes }</div>
                        <div key={hoursOnes + '_bottom2'} className='bottom_flip' ref={flipBottomHoursOnesRef}>{ hoursOnes }</div>
                    </div>
                </div>
            </div>
            <div className='count_down_segment'>
                <span>Minutes</span>
                <div className='count_down_flip_cards'>
                    <div className='flip_card' >
                        <div key={minutesTens + '_top1'} className='top'>{ minutesTens }</div>
                        <div key={minutesTens + '_top2'} className='top_flip' ref={flipTopMinutesTensRef}>{ minutesTens }</div>
                        <div key={minutesTens + '_bottom1'} className='bottom'>{ minutesTens }</div>
                        <div key={minutesTens + '_bottom2'} className='bottom_flip' ref={flipBottomMinutesTensRef}>{ minutesTens }</div>
                    </div>
                    <div className='flip_card' >
                        <div key={minutesOnes + '_top1'} className='top'>{ minutesOnes }</div>
                        <div key={minutesOnes + '_top2'} className='top_flip' ref={flipTopMinutesOnesRef}>{ minutesOnes }</div>
                        <div key={minutesOnes + '_bottom1'} className='bottom'>{ minutesOnes }</div>
                        <div key={minutesOnes + '_bottom2'} className='bottom_flip' ref={flipBottomMinutesOnesRef}>{ minutesOnes }</div>
                    </div>
                </div>
            </div>
            <div className='count_down_segment'>
                <span>Seconds</span>
                <div className='count_down_flip_cards'>
                    <div className='flip_card' >
                        <div key={secondsTens + '_top1'} className='top'>{ secondsTens }</div>
                        <div key={secondsTens + '_top2'} className='top_flip' ref={flipTopSecondsTensRef}>{ secondsTens }</div>
                        <div key={secondsTens + '_bottom1'} className='bottom'>{ secondsTens }</div>
                        <div key={secondsTens + '_bottom2'} className='bottom_flip' ref={flipBottomSecondsTensRef}>{ secondsTens }</div>
                    </div>
                    <div className='flip_card' >
                        <div key={secondsOnes + '_top1'} className='top'>{ secondsOnes }</div>
                        <div key={secondsOnes + '_top2'} className='top_flip' ref={flipTopSecondsOnesRef}>{ secondsOnes }</div>
                        <div key={secondsOnes + '_bottom1'} className='bottom'>{ secondsOnes }</div>
                        <div key={secondsOnes + '_bottom2'} className='bottom_flip' ref={flipBottomSecondsOnesRef}>{ secondsOnes }</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountDown;