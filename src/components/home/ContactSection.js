import styles from './ContactSection.module.scss';

//static images
import EmailBadge from '../../../public/icons/email_badge.svg';

//UI components
import Badge from "@/components/UI/Badge";
import Icon from '@/components/UI/Icon';
import ContactForm from "@/components/home/ContactForm";

const ContactSection = () => {

    return (
        <section className={ styles['contact_section'] }>
            <div className={ styles['contact_section_title'] }>
                <h1>Sign Up <span>NOW</span> And Let&apos;s Build Your <span>Dream-Looking</span> Website Together!
                </h1>
            </div>
            <div className={ styles['contact_section_main_content'] }>
                <div className={ styles['contact_section_badges'] }>
                    <div className={ styles['contact_section_email_badge'] }>
                        <Badge onClick={ () => window.location.href = 'mailto:antoanparashkevov@gmail.com' }>
                            <Icon iconSrc={ EmailBadge } iconAlt='Email'/>
                        </Badge>
                        <div className={ styles['contact_section_email_info'] }>
                            <span>Email me</span>
                            <a href="mailto:antoanparashkevov@gmail.com">
                                antoanparashkevov@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className={ styles['contact_section_contact_form'] }>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
