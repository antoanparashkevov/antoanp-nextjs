import { useRef, useEffect } from "react";
import Image from 'next/image';
import styles from "@/components/UI/ScrollableListWrapper.module.scss";

const ScrollableListWrapper = ({ listData }) => {

    const unorderedListRef = useRef(null);

    const triggerScrolling = (e) => {
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

        unorderedElement.addEventListener('wheel', triggerScrolling, { passive : false })

        return () => {
            unorderedElement.removeEventListener('wheel', triggerScrolling)
        }
    }, [])


    return (
        <ul
            ref={ unorderedListRef }
            className={ styles['list_wrapper'] }
            role='list'
        >
            {
                listData.map(item => {
                    return (
                        <li key={ item.name } className={ styles['list_wrapper_item'] }>
                            <div 
                                onClick={ imageClickHandler.bind(this, item) }
                                className={ styles['list_wrapper_item_image'] }
                            >
                                <Image
                                    src={ item.source }
                                    alt={ item.name }
                                    placeholder='blur'
                                    style={ { objectFit : 'contain' } }
                                    fill
                                />
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ScrollableListWrapper;