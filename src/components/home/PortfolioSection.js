import styles from './PortfolioSection.module.scss';
import { useRouter } from 'next/router';

//data
import projectItems from "@/util/data/projectItems";

//components
import { FilledButton } from "@/components/UI/BaseButton";
import ScrollableListWrapper from "@/components/UI/ScrollableListWrapper";

const PortfolioSection = () => {
    const router = useRouter();

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