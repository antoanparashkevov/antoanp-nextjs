import Image from 'next/image';
import styles from './AboutSection.module.scss';

//UI components
import { FilledButton } from "@/components/UI/BaseButton";

const AboutSection = () => {

    return (
        <section className={ styles['about_section'] }>
            <div className={ styles['about_section_main_content'] }>
                <h1>I have <span>Web Development</span> Experience</h1>
                <p>Hello everyone, I am Antoan! I have been helping businesses to solve their problems by making a web
                    application of their choice.</p>
                <FilledButton>Contact Me</FilledButton>
            </div>
            <div className={ styles['about_section_image'] }>
                <Image src='/public/images/cover.jpeg' alt='Cover Image' width={ 350 } height={ 350 }/>
            </div>
        </section>
    )
}

export default AboutSection;