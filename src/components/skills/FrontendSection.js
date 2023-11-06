import styles from './FrontendSection.module.scss';
import Image from 'next/image';

//static images
import NextJSImg from '../../../public/images/nextjs.jpg';

const FrontendSection = () => {
    return (
        <section className={ styles['frontend_section'] }>
            <div className={ styles['frontend_section_main_content'] }>
                <h1 className={ styles['frontend_section_title'] }>
                    My <span>Frontend</span> solution would be <span>NextJS</span>
                </h1>
                <p className={ styles['frontend_section_desc'] }>
                    NextJS is an awesome tool for building web applications and I will tell you why in a second. Imagine
                    you have both worlds: <span>Single-Page application</span> plus
                    better <span>Search-Engine-Optimization</span>. This sounds
                    great. The user is able to navigate between pages without even reloading the page and your web
                    application will be more accessible by bringing search traffic to your site.
                    With <span>NextJS</span> everything is possible! That&apos;s why I chose this framework. One more
                    <span> advantage</span> is that we have both the <span>server code</span> and
                    the <span>client code</span> in the same project.
                </p>
            </div>
            <div className={ styles['frontend_section_image'] }>
                <Image 
                    src={NextJSImg}
                    alt='NextJS Image'
                    placeholder='blur'
                />
            </div>
        </section>
    )
}

export default FrontendSection;