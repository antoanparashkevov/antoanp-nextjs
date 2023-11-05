import Image from 'next/image';
import styles from './Icon.module.scss';

const Icon = ({iconSrc, iconAlt, iconWidth, iconHeight, placeholder = 'empty', fill = false}) => {
    return (
        <div className={styles['icon_container']}>
            <Image 
                src={iconSrc} 
                alt={iconAlt} 
                width={iconWidth} 
                height={iconHeight} 
                placeholder={placeholder}
                fill={fill} 
            />
        </div>
    )
}

export default Icon;