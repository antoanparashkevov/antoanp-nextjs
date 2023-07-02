import Image from 'next/image';
import styles from './Icon.module.scss';

const Icon = ({iconSrc, iconAlt, iconWidth, iconHeight}) => {
    return (
        <div className={styles['icon_container']}>
            <picture className={styles['icon_picture']}>
                <Image src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />
            </picture>
        </div>
    )
}

export default Icon;