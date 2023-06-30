import styles from './TheHeader.module.scss';
import Link from 'next/link';

//UI components
import CvButton from "@/components/UI/CvButton";

const TheHeader = () => {
    
    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar_links']}>
                <ul role='list' className={styles['navbar_list']}>
                    <li className={styles['navbar_link']}>
                        <Link className={styles['navbar_link_anchor']} href='/about'>About</Link>
                    </li>  
                    <li className={styles['navbar_link']}>
                        <Link className={styles['navbar_link_anchor']} href='/skills'>Skills</Link>
                    </li> 
                    <li className={styles['navbar_link']}>
                        <Link className={styles['navbar_link_anchor']} href='/portfolio'>Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['cv_button_wrapper']}>
                <CvButton>Download CV</CvButton>
            </div>
        </nav>
    )
}


export default TheHeader;