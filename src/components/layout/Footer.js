import styles from './Footer.module.scss';

const Footer = () => {
    
    return (
        <div className={styles['footer_container']}>
            <span>@ 2023. All Rights Reserved</span>
            <div className={styles['footer_social_icons']}>
                
            </div>
        </div>
    )
}


export default Footer;