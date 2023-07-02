import styles from './ContactSection.module.scss';
import EmailBadge from '../../../public/images/email_badge.svg';

//UI components
import Badge from "@/components/UI/Badge";
import Icon from '@/components/UI/Icon';

const ContactSection = () => {
    
    const formControlClasses = (hasError) => {
        return hasError ? `${styles['form_control']} invalid` : styles['form_control'];
    }
    return (
        <section className={styles['contact_section']}>
            <div className={styles['contact_section_title']}>
                <h1>Lets discuss your <span>project</span></h1>
            </div>
            <div className={styles['contact_section_main_content']}>
                <div className={styles['contact_section_badges']}>
                    <div className={styles['contact_section_email_badge']}>
                        <Badge>
                            <Icon iconSrc={EmailBadge} iconAlt='Email'/>
                        </Badge>
                        <div className={styles['contact_section_email_info']}>
                            <span>Email me</span>
                            <span>antoanparashkevov@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={styles['contact_section_contact_form']}>
                    {/*TODO form*/}
                    <form className={styles['contact_form']}>
                        <div className={ formControlClasses() }>
                            
                        </div>
                        <div className={ formControlClasses() }>
                            
                        </div>
                        <div className={ formControlClasses() }>
                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;