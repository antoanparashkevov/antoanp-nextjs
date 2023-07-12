import styles from "@/components/home/ContactSection.module.scss";

const ContactForm = () => {

    const formControlClasses = (hasError) => {
        return hasError ? `${styles['form_control']} invalid` : styles['form_control'];
    }
    
    const formSubmissionHandler = (event) => {
        console.log('submission...')
        
        event.preventDefault();
    }
    
    return (
        <form className={styles['contact_form']} onSubmit={ formSubmissionHandler }>
            <div className={ formControlClasses() }>

            </div>
            <div className={ formControlClasses() }>

            </div>
            <div className={ formControlClasses() }>

            </div>
        </form>
    )
}

export default ContactForm;