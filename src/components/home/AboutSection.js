import Image from 'next/image';
import styles from './AboutSection.module.scss';
import CoverImage from '../../../public/images/cover_without_bg.jpg';

//UI components
import { FilledButton } from "@/components/UI/BaseButton";

const AboutSection = () => {
    
    const HandleContactClick = () => {
       const footer = document.getElementById('footer-container');
        // console.log('document.body.scrollHeight', document.body.scrollHeight)
        // console.log('footer.offsetHeight', footer.offsetHeight)
        // console.log('document.body.scrollHeight - footer.offsetHeight', document.body.scrollHeight - footer.offsetHeight)
        
        let scrollPx = (document.body.scrollHeight - footer.offsetHeight) - document.body.clientHeight;
       if( footer && document.body && document.body.scrollHeight ) {

           window.scrollTo({
               top: scrollPx,
               left: 0,
               behavior: "smooth"
           })
       }
    }

    return (
        <section className={ styles['about_section'] }>
            <div className={ styles['about_section_main_content'] }>
                <h1 className={styles['about_section_title']}>Expert <span>Web-Design Services</span> For Your Business</h1>
                <p className={styles['about_section_desc']}>Hello everyone, I am Antoan! I have been helping businesses to solve their problems by making a web
                    application of their choice.</p>
                <FilledButton onClick={HandleContactClick} className={styles['about_section_btn']}>Contact Me</FilledButton>
            </div>
            <div className={ styles['about_section_image'] }>
                <Image src={CoverImage} alt='Cover Image'/>
            </div>
        </section>
    )
}

export default AboutSection;