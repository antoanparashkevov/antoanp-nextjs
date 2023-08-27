import styles from "@/components/home/ListWrapper.module.scss";
import Image from 'next/image';
import { useRef } from "react";
import { useEffect } from "react";

const ListWrapper = ({ listData, className }) => {
    
    const unorderedListRef = useRef(null);
    
    const triggerScrolling = (e) => {
        // console.log('ev >>> ', e)
        // console.log('unorderedListRef.scrollLeft >>> ', unorderedListRef.current.scrollLeft)
        
        e.preventDefault();
        e.stopPropagation();
        
        unorderedListRef.current.scrollLeft += e.deltaY;
        
    }
    
    const imageClickHandler = (item) => {
        
        window.open(
            item.url,
            '_blank'
        );
        
    }
    
    useEffect(() => {
        
        const unorderedElement = unorderedListRef.current

        unorderedElement.addEventListener('wheel', triggerScrolling, { passive: false })
        
        return () => {
            unorderedElement.removeEventListener('wheel', triggerScrolling)
        }
    }, [])
    
    
    return (
        <ul 
            ref={unorderedListRef}
            className={`${styles['list_wrapper']} ${styles[className]}`} 
            role='list'
        >
            {
                listData.map( item => {
                    return (
                        <li key={item.name} className={ styles['list_wrapper_item'] }>
                            <div className={ styles['list_wrapper_item_image'] } onClick={imageClickHandler.bind(this,item)}>
                                <Image src={ item.source } alt={ item.name } width='350' />
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListWrapper;