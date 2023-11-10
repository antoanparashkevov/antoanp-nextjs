import Image from "next/image";
import styles from './EducationSection.module.scss'

//static images
import Diploma from "../../../public/images/certifications/diploma.png";
import DiplomaEvent from '../../../public/images/diploma_pic.png'

const EducationSection = () => {

    const handleDiplomaClick = (event) => {
        event.preventDefault();

        window.open(
            'https://softuni.bg/certificates/details/171618/f81a3d56',
            '_blank'
        );
    }

    return (
        <section className={ styles['education_section'] }>
            <div className={ styles['education_section_main_content'] }>
                <h1 className={ styles['education_section_title'] }>
                    Graduated from <span>The №1 Software University in Bulgaria</span>
                </h1>
                <p className={ styles['education_section_desc'] }>
                    During my studies there, I had the amazing opportunity to learn from <span>top experts and
                    professors</span> with more than <span>10 years of experience</span> in the area. Besides mastering
                    the basics, I’ve
                    also learned <span>more advanced techniques</span> that will be the “secret sauce” when it comes to
                    attracting
                    new customers to your website and making tons of money from them.
                </p>
            </div>
            <div className={ styles['education_section_images'] }>
                <div className={ styles['education_section_diploma_event'] }>
                    <Image
                        src={ DiplomaEvent }
                        alt='Diploma'
                        placeholder='blur'
                        style={ { objectFit : 'contain' } }
                        fill
                    />
                </div>
                <div className={ styles['education_section_diploma'] }>
                    <Image
                        onClick={ handleDiplomaClick }
                        src={ Diploma }
                        alt='Diploma'
                        placeholder='blur'
                        style={ { objectFit : 'contain' } }
                        fill
                    />
                </div>
            </div>
        </section>
    )
}

export default EducationSection;
