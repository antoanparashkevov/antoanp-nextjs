import styles from './WorkExperience.module.scss';
import Image from 'next/image';
import AboutMePic from '../../../public/images/about_pic.jpeg';

const WorkExperience = () => {

    return (
        <section className={ styles['work_experience_section'] }>
            <div className={ styles['work_experience_main_content'] }>
                <h1 className={ styles['work_experience_title'] }>Currently working as
                    a <span>Software Engineer</span> in a sport company</h1>
                <p className={ styles['work_experience_desc'] }>
                    The company gives me solid <span>software development knowledge</span> and how to work in a <span>real environment</span>.
                    We
                    use the latest technologies to provide our customers <span>good quality</span> and <span>reliable</span> products for their
                    businesses.
                </p>
            </div>
            <div className={ styles['work_experience_image'] }>
                <Image 
                    src={AboutMePic}
                    alt='AboutMePic'
                />
            </div>
        </section>
    )
}

export default WorkExperience;