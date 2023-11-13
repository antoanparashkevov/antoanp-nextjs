import Image from 'next/image';
import styles from './IntroSection.module.scss';

//static images
import MyPic from '../../../public/images/about_pic.jpeg';

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
        <section className={ styles['intro_section'] }>
            <div className={ styles['intro_section_main_content'] }>
                <p className={ styles['intro_section_desc'] }>
                    Hi there, my name is Antoan and I’m a web development specialist (or more simply
                    said, I create <span>top-tier websites</span> for any type of business).
                    <br/>
                    <br/>
                    My goal is to create a remarkable and one-of-a-kind-looking website where people on a global scale can
                    learn and take advantage of your products and services. <br/><br/> You see, we live in times when
                    the Internet is an
                    irreplaceable part of our daily existence and it can be a huge “problem-solver” for different areas
                    of our lives if used correctly.&nbsp;
                    <br/>
                    <br/>
                    <strong>The same is true with your business.</strong>&nbsp;
                    Having a compelling well-ordered website can be the “game-changer” your enterprise needs in order to
                    attract lots of new customers and make an unthinkable amount of money.
                </p>
                <FilledButton
                    onClick={ HandleContactClick }
                    className={ styles['introduction_section_btn'] }
                >
                    Contact Me
                </FilledButton>
            </div>
            <div className={ styles['intro_section_image'] }>
                <Image
                    src={ MyPic }
                    alt='Cover Image'
                    placeholder='blur'
                    style={ { objectFit : 'contain' } }
                    fill
                />
            </div>
        </section>
    )
}

export default IntroSection;
