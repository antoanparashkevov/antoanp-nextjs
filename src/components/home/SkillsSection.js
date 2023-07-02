import styles from './SkillsSection.module.scss';

import FrontEndIcon from '../../../public/images/diamond-outline.svg';
import BackEndIcon from '../../../public/images/pulse-outline.svg';

//UI components
import Icon from "@/components/UI/Icon";
import { FilledButton } from "@/components/UI/BaseButton";

const SkillsSection = () => {
    return (
        <section className={ styles['skills_section'] }>
            <div className={ styles['skills_section_main_content'] }>
                <h1 className={ styles['skills_section_title'] }>How can I help you?</h1>
                <p className={ styles['skills_section_desc'] }>We live in such times that almost everything becomes
                    available through the internet. Your business too! I can make a web application of your choice. Just
                    a few questions about what it should look like and done!</p>
                <FilledButton className={ styles['skills_section_btn'] }>Show More</FilledButton>
            </div>
            <div className={ styles['skills_section_desc'] }>
                <div className={ styles['skills_section_frontend_part'] }>
                    <div className={ styles['skills_section_frontend_part_icon'] }>
                        <Icon iconSrc={FrontEndIcon} iconAlt='Diamong' />
                    </div>
                    <div className={ styles['skills_section_frontend_part_title'] }>
                        <h3>
                            Frontend Part
                        </h3>
                    </div>
                    <div className={ styles['skills_section_frontend_part_desc'] }>
                            <span>
                                Create a user interface using the latest technologies. Input field validations, responsive design (both desktop and mobile view), animations and many more!
                            </span>
                    </div>
                </div>
                <div className={ styles['skills_section_backend_part'] }>
                    <div className={ styles['skills_section_backend_part_icon'] }>
                        <Icon iconSrc={BackEndIcon} iconAlt='Pulse'></Icon>
                    </div>
                    <div className={ styles['skills_section_backend_part_title'] }>
                        <h3>
                            Backend Part
                        </h3>
                    </div>
                    <div className={ styles['skills_section_backend_part_desc'] }>
                        <span>
                            Create a reliable server with user authentication (sign up, sign in, logout)  
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;