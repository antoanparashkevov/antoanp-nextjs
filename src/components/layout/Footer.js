import styles from './Footer.module.scss';

import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa'

const Footer = () => {
    const anchorStyles = {
        textDecoration: 'none',
        color: 'inherit'
    }
    
    return (
            <div className={styles['footer_container']} id='footer-container'>
            <span>@ 2023. All Rights Reserved</span>
            <div className={styles['footer_social_icons']}>
                <a style={anchorStyles} href='https://github.com/antoanparashkevov'><FaGithub size={20} /></a>
                <a style={anchorStyles} href="https://www.linkedin.com/in/antoanp"><FaLinkedin size={20} /></a>
            </div>
        </div>
    )
}


export default Footer;