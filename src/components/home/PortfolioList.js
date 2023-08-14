import styles from "@/components/home/PortfolioList.module.scss";
import Image from 'next/image';
import { useRef } from "react";
import { useEffect } from "react";

//images
import ITCommunity from '../../../public/images/itcommunity.png'
import FindFreelancers from '../../../public/images/findfreelancers.png';
import FindCoaches from '../../../public/images/findcoaches.png';

const PortfolioList = () => {
    
    const unorderedListRef = useRef(null);
    
    const projectItems = [
        {
            source: ITCommunity,
            projectName: 'ITCommunity',
            projectUrl: 'https://itcommunity.vercel.app/'
        },
        {
            source: FindFreelancers,
            projectName: 'FindFreelancers',
            projectUrl: 'https://findfreelancers.vercel.app/freelancers'
        },
        {
            source: FindCoaches,
            projectName: 'FindCoaches',
            projectUrl: 'https://find-coach-vue3.web.app/coaches'
        },
        
    ]
    
    const triggerScrolling = (e) => {
        // console.log('ev >>> ', e)
        // console.log('unorderedListRef.scrollLeft >>> ', unorderedListRef.current.scrollLeft)
        
        e.preventDefault();
        e.stopPropagation();
        
        unorderedListRef.current.scrollLeft += e.deltaY;
        
    }
    
    const imageClickHandler = (project) => {
        
        window.open(
            project.projectUrl,
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
            className={styles['portfolio_section_list']} 
            role='list'
        >
            {
                projectItems.map( project => {
                    return (
                        <li key={project.projectName} className={ styles['portfolio_section_item'] }>
                            <div className={ styles['portfolio_section_item_image'] } onClick={imageClickHandler.bind(this,project)}>
                                <Image src={ project.source } alt={ project.projectName } width='350' />
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default PortfolioList;