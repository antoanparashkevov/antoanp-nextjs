import styles from './PortfolioSection.module.scss';
import { useRouter } from 'next/router';

//components
import { FilledButton } from "@/components/UI/BaseButton";
import ScrollableListWrapper from "@/components/UI/ScrollableListWrapper";
import ITCommunity from "../../../public/images/itcommunity.png";
import FindFreelancers from "../../../public/images/findfreelancers.png";
import FindCoaches from "../../../public/images/findcoaches.png";

const PortfolioSection = () => {
    const router = useRouter();

    const projectItems = [
        {
            source: ITCommunity,
            name: 'ITCommunity',
            url: 'https://itcommunity.vercel.app/'
        },
        {
            source: FindFreelancers,
            name: 'FindFreelancers',
            url: 'https://findfreelancers.vercel.app/freelancers'
        },
        {
            source: FindCoaches,
            name: 'FindCoaches',
            url: 'https://find-coach-vue3.web.app/coaches'
        },

    ]
    
    return (
        <section className={styles['portfolio_section']}>
            <div className={styles['portfolio_section_main_content']}>
                <h1 className={styles['portfolio_section_title']}>My latest <span>Projects</span></h1>
                <p className={styles['portfolio_section_desc']}>Here are some of my latest projects to share with you.</p>
                <FilledButton 
                    className={styles['portfolio_section_btn']}
                    onClick={() => router.push('/portfolio')}
                >
                    Show More
                </FilledButton>
            </div>  
            <div className={styles['portfolio_section_main_desc']}>
                <ScrollableListWrapper listData={projectItems} />
            </div>
        </section>
    )
}

export default PortfolioSection;