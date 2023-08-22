'use client';

import styles from './AboutPage.module.scss';
import Image from 'next/image';
import Diploma from '../../../public/images/diploma.png';

const AboutPage = () => {

    return (
        <section className={ styles['about_page_section'] }>
            <div className={ styles['about_page_main_content'] }>
                <h1 className={ styles['about_page_title'] }>
                    I&apos;m graduated from <span>Software University</span>
                </h1>
                <p className={ styles['about_page_desc'] }>
                    During my studies there, I learned both the <span>basic</span> concepts and much
                    more <span>advanced</span> techniques to
                    write better code, avoid errors and use modern technologies that improve the <span>User Interface (UI)</span> and <span>User Experience (UX)</span>.
                    I also
                    learned how to improve the <span>Search Engine Optimization (SEO)</span>, which is the 
                    <span> most
                    important thing</span> for one business to grow because it will dramatically <span>increase traffic to a site.</span>
                </p>
            </div>
            <div className={styles['about_page_image']}>
                <Image 
                    src={Diploma}
                    alt='Diploma'
                />
            </div>
        </section>
    )
}

export default AboutPage;