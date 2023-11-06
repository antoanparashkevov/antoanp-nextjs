import Image from 'next/image';

const Icon = (
    {
        iconSrc,
        iconAlt,
        iconWidth,
        iconHeight,
        placeholder = 'empty', 
        fill = false
    }
) => {
    return (
        <div style={{position: 'relative'}}>
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