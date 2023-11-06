import { Fragment, useCallback, useMemo, useState } from "react";
import styles from "@/components/home/ContactForm.module.scss";

//hooks
import useInput from "@/hooks/use-input";

//UI components
import { FilledButton } from "@/components/UI/BaseButton";
import BaseSpinner from "@/components/UI/BaseSpinner";
import Alert from "@/components/UI/Alert";

const ContactForm = () => {
    let formIsValid;

    const [ resolved, setResolved ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const {
        value : enteredEmail,
        isValid : emailIsValid,
        hasError : emailHasError,
        reset : emailReset,
        onChangeHandler : emailChangeHandler,
        onBlurHandler : emailBlurHandler
    } = useInput(value => value.trim() !== '' && value.includes('@'))

    const {
        value : enteredBudget,
        isValid : budgetIsValid,
        hasError : budgetHasError,
        reset : budgetReset,
        onChangeHandler : budgetChangeHandler,
        onBlurHandler : budgetBlurHandler
    } = useInput(value => value.trim() !== '' && !isNaN(value) && Number(value) && Number(value) > 0)

    const {
        value : enteredMessage,
        isValid : messageIsValid,
        hasError : messageHasError,
        reset : messageReset,
        onChangeHandler : messageChangeHandler,
        onBlurHandler : messageBlurHandler
    } = useInput(value => value.trim() !== '' && value.length > 40)

    formIsValid = useMemo(() => {
        return emailIsValid && budgetIsValid && messageIsValid
    }, [ emailIsValid, budgetIsValid, messageIsValid ]);

    const formControlClasses = (hasError) => {
        return hasError ? `${ styles['form_control'] } invalid` : styles['form_control'];
    }

    const postMessage = useCallback(async (dataToSubmit) => {
        try {
            setResolved(false);
            setError(null);
            setIsLoading(true)

            const response = await fetch(`${process.env['NEXT_PUBLIC_FIREBASE_URI']}/applications.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)//send the data in JSON format
            });

            if ( response.ok ) {
                setResolved(true)

                emailReset();
                budgetReset();
                messageReset();
            } else {
                throw new Error('Something went wrong, please try again later!')
            }
        } catch ( error ) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false)
    }, [ emailReset, budgetReset, messageReset ])

    const formSubmissionHandler = async (event) => {

        event.preventDefault();

        if ( formIsValid === false ) {
            return;
        }

        const timeWhenSend = new Date()

        const year = timeWhenSend.getFullYear();
        const month = timeWhenSend.getMonth() + 1;
        const dateOfMonth = timeWhenSend.getDate();
        const hours = timeWhenSend.getHours();
        const minutes = timeWhenSend.getMinutes();
        
        // console.log('enteredEmail >>> ', enteredEmail)
        // console.log('enteredBudget >>> ', enteredBudget)
        // console.log('enteredMessage >>> ', enteredMessage)
        // console.log('year >>> ', timeWhenSend.getFullYear())
        // console.log('month >>> ', timeWhenSend.getMonth() + 1)
        // console.log('date of month >>> ', timeWhenSend.getDate())
        // console.log('getHours >>> ', timeWhenSend.getHours())
        // console.log('minute >>> ', timeWhenSend.getMinutes())

        const dataToSubmit = {
            email : enteredEmail,
            budget : Number(enteredBudget),
            message : enteredMessage,
            date: `${year}y-${month}m-${dateOfMonth}d-${hours}h-${minutes}m`
        }
        
        await postMessage(dataToSubmit);
    }

    return (
        <Fragment>
            { isLoading && <BaseSpinner/> }
            { (error || resolved) &&
                <Alert alertStatus={ error ? 'error' : 'successful' }>
                    { error ?? 'Message was successfully sent!' }
                </Alert>
            }
            <form className={ styles['contact_form'] } onSubmit={ formSubmissionHandler }>
                <div className={ formControlClasses(emailHasError) }>
                    { emailHasError && <p>Please enter a valid non-empty email address!</p> }
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={ enteredEmail }
                        onChange={ emailChangeHandler }
                        onBlur={ emailBlurHandler }
                    />
                </div>
                <div className={ formControlClasses(budgetHasError) }>
                    { budgetHasError && <p>Please enter a non-negative budget bigger than 0!</p> }
                    <input
                        type='number'
                        id="budget"
                        name="budget"
                        placeholder="Budget"
                        value={ enteredBudget }
                        onChange={ budgetChangeHandler }
                        onBlur={ budgetBlurHandler }
                    />
                </div>
                <div className={ formControlClasses(messageHasError) }>
                    { messageHasError && <p>Please enter a valid non-empty message with at least 40 characters!</p> }
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={ enteredMessage }
                        onChange={ messageChangeHandler }
                        onBlur={ messageBlurHandler }
                    />
                </div>
                <div className={ styles['form_action'] }>
                    <FilledButton
                        type='submit'
                        disabled={ !formIsValid }
                    >
                        Send
                    </FilledButton>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm;