import styles from './ContactSection.module.scss';
import EmailBadge from '../../../public/images/email_badge.svg';

//UI components
import Badge from "@/components/UI/Badge";
import Icon from '@/components/UI/Icon';
import ContactForm from "@/components/home/ContactForm";

const ContactSection = () => {
    
    return (
        <section className={styles['contact_section']}>
            <div className={styles['contact_section_title']}>
                <h1>Let&apos;s discuss your <span>project</span></h1>
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
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;