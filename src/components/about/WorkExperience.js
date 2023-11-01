import styles from './WorkExperience.module.scss';
import Image from 'next/image';
import AboutMePic from '../../../public/images/about_pic.jpeg';

const WorkExperience = () => {

    return (
        <section className={ styles['work_experience_section'] }>
            <div className={ styles['work_experience_main_content'] }>
                <h1 className={ styles['work_experience_title'] }>Currently working as
                    a <span>Software Engineer</span> in a sports company</h1>
                <p className={ styles['work_experience_desc'] }>
                    I’m working in a sports company called <span>Enetpulse</span> for <span>2+ years</span> as a <span>Software Engineer</span> where I support
                    over <span>40</span> different widgets. You can think of а widget as a part of a website that display statistics
                    for variety of sports. These widgets are used by <span>millions of users worldwide</span> and this makes my job
                    so responsible. Thanks to my diligence and finesse to detail, I received <span>very good feedback</span> from my
                    <span>coworkers</span> and my <span>boss</span>.
                </p>
            </div>
            <div className={ styles['work_experience_image'] }>
                <Image
                    src={ AboutMePic }
                    alt='AboutMePic'
                    placeholder='blur'
                    style={{objectFit: 'contain'}}
                    fill
                />
            </div>
        </section>
    )
}

export default WorkExperience;