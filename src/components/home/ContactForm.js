import styles from "@/components/home/ContactForm.module.scss";

//hooks
import useInput from "@/hooks/use-input";

//UI components
import { FilledButton } from "@/components/UI/BaseButton";

const ContactForm = () => {
    let formIsValid;
    
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        reset: emailReset,
        onChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler
    } = useInput(value => value.trim() !== '' && value.includes('@'))
    
    const {
        value: enteredBudget,
        isValid: budgetIsValid,
        hasError: budgetHasError,
        reset: budgetReset,
        onChangeHandler: budgetChangeHandler,
        onBlurHandler: budgetBlurHandler
    } = useInput(value => value.trim() !== '' && !isNaN(value) && Number(value) && Number(value) > 0)
    
    const {
        value: enteredMessage,
        isValid: messageIsValid,
        hasError: messageHasError,
        reset: messageReset,
        onChangeHandler: messageChangeHandler,
        onBlurHandler: messageBlurHandler
    } = useInput(value => value.trim() !== '' && value.length > 40)
    
    formIsValid = emailIsValid && budgetIsValid && messageIsValid;
    
    const formControlClasses = (hasError) => {
        return hasError ? `${styles['form_control']} invalid` : styles['form_control'];
    }
    
    const formSubmissionHandler = (event) => {
        console.log('submission...')
        
        event.preventDefault();
        
        if( formIsValid === false ) {
            return;
        }
        
        emailReset();
        budgetReset();
        messageReset();
        
        
    }
    
    return (
        <form className={styles['contact_form']} onSubmit={ formSubmissionHandler }>
            <div className={ formControlClasses(emailHasError) }>
                {emailHasError && <p>Please enter a valid non-empty email address!</p>}
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
            </div>
            <div className={ formControlClasses(budgetHasError) }>
                {budgetHasError && <p>Please enter a non-negative budget bigger than 0!</p>}
                <input 
                    type='number'
                    id="budget"
                    name="budget"
                    placeholder="Budget"
                    value={enteredBudget}
                    onChange={budgetChangeHandler}
                    onBlur={budgetBlurHandler}
                />
            </div><div className={ formControlClasses(messageHasError) }>
                {messageHasError && <p>Please enter a valid non-empty message with at least 40 characters!</p>}
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                />
            </div>
            <div className={styles['form_action']}>
                <FilledButton type='submit'>
                    Send
                </FilledButton>
            </div>
        </form>
    )
}

export default ContactForm;