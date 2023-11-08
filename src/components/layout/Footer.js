import styles from './Footer.module.scss';

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={ styles['footer_container'] } id='footer-container'>
            <span>@ 2023. All Rights Reserved</span>
            <div className={ styles['footer_social_icons'] }>
                <a href='https://github.com/antoanparashkevov'><FaGithub size={ 48 }/></a>
                <a href="https://www.linkedin.com/in/antoanp"><FaLinkedin size={ 48 }/></a>
            </div>
        </div>
    )
}


export default Footer;