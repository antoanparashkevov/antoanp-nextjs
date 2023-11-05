import Image from 'next/image';
import styles from './IntoSection.module.scss';

//static images
import CoverImage from '../../../public/images/cover_new.jpg';

//UI components
import { FilledButton } from "@/components/UI/BaseButton";

const IntroSection = () => {

    const HandleContactClick = () => {
        const footer = document.getElementById('footer-container');

        let scrollPx = (document.body.scrollHeight - footer.offsetHeight) - document.body.clientHeight;
        if ( footer && document.body && document.body.scrollHeight ) {

            window.scrollTo({
                top : scrollPx,
                left : 0,
                behavior : "smooth"
            })
        }
    }

    return (
        <section className={ styles['about_section'] }>
            <div className={ styles['about_section_main_content'] }>
                <p className={ styles['about_section_desc'] }>
                    Hi there, my name is Antoan and I’m a web designer and web development specialist (OR more simply said, I create top-tier websites for any type of business).
                    <br/><br/>
                    My goal is to create a remarkable and one-of-a-kind-looking website where people <span>on a global scale</span> can
                    learn and take advantage of your products and services. <br/><br/> You see, we live in times when the Internet is an
                    irreplaceable part of our daily existence and it can be a HUGE “problem-solver” for different areas
                    of our lives if used correctly.&nbsp;
                </p>
                <FilledButton
                    onClick={ HandleContactClick }
                    className={ styles['introduction_section_btn'] }
                >
                    Contact Me
                </FilledButton>
            </div>
            <div className={ styles['about_section_image'] }>
                <Image 
                    src={ CoverImage } 
                    alt='Cover Image'
                    placeholder='blur'
                    style={{objectFit: 'contain'}}
                    fill
                />
            </div>
        </section>
    )
}

export default IntroSection;