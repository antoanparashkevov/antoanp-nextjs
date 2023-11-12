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
                    Step into the <span>future</span> of web development with <span>Next.js</span>,
                    where <span>innovation</span> meets <span>efficiency</span>. Picture
                    Next.js as the architectural marvel behind your web applications, providing
                    a <span>seamless</span>, <span>fast</span>, and&nbsp;
                    <span>responsive</span> experience for your users. What sets it apart? Next.js not only simplifies
                    the
                    complexities of server-side rendering and routing but also empowers your site with dynamic
                    functionality, making it a go-to choice for
                    building <span>modern</span> and <span>scalable</span> web applications.

                    In this digital landscape, where user experience is paramount, I integrate cutting-edge <span>font and
                    image optimization</span> techniques into your Next.js-powered
                    site. <span>Font optimization</span> ensures that
                    your
                    text is not only visually <span>appealing</span> but loads <span>swiftly</span>, contributing to an
                    overall enhanced reading
                    experience. Simultaneously, <span>image optimization</span> guarantees that your visuals
                    are <span>crisp</span> and <span>vibrant</span>&nbsp;
                    without compromising on load times, creating a visually stunning yet efficiently performing website.
                </p>
            </div>
            <div className={ styles['frontend_section_image'] }>
                <Image
                    src={ NextJSImg }
                    alt='NextJS Image'
                    placeholder='blur'
                    style={ { objectFit : 'contain' } }
                    fill
                />
            </div>
        </section>
    )
}

export default FrontendSection;