import styles from './WorkExperience.module.scss';
import Image from 'next/image';
import MyPic from '../../../public/images/cover_new.jpg';

const WorkExperience = () => {

    return (
        <section className={ styles['work_experience_section'] }>
            <div className={ styles['work_experience_main_content'] }>
                <h1 className={ styles['work_experience_title'] }>Currently working as
                    a <span>Software Engineer</span> in a sports company</h1>
                <p className={ styles['work_experience_desc'] }>
                    I’m working in a sports company called Enetpulse for <span>2+ years</span> now as a
                    Software Engineer where I have
                    one of the <span>most crucial and responsible</span> tasks which is managing <span>over 40 different widgets</span> for variety types of sports. 
                    These widgets are used by <span>millions of users worldwide</span> and <span>a even single mistake</span> can be crucial.
                </p>
            </div>
            <div className={ styles['work_experience_image'] }>
                <Image
                    src={ MyPic }
                    alt='AboutMePic'
                    placeholder='blur'
                    style={ { objectFit : 'contain' } }
                    fill
                />
            </div>
        </section>
    )
}

export default WorkExperience;