import Image from 'next/image';
import styles from './AboutSection.module.scss';
import CoverImage from '../../../public/images/cover_without_bg.jpg';

//UI components
import { FilledButton } from "@/components/UI/BaseButton";

const AboutSection = () => {

    return (
        <section className={ styles['about_section'] }>
            <div className={ styles['about_section_main_content'] }>
                <h1 className={styles['about_section_title']}>I have <span>Web Development</span> Experience</h1>
                <p className={styles['about_section_desc']}>Hello everyone, I am Antoan! I have been helping businesses to solve their problems by making a web
                    application of their choice.</p>
                <FilledButton className={styles['about_section_btn']}>Contact Me</FilledButton>
            </div>
            <div className={ styles['about_section_image'] }>
                <Image src={CoverImage} alt='Cover Image'/>
            </div>
        </section>
    )
}

export default AboutSection;