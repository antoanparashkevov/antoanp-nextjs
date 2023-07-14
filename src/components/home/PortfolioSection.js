import styles from './PortfolioSection.module.scss';
import { FilledButton } from "@/components/UI/BaseButton";

//components
import PortfolioList from "@/components/home/PortfolioList";

const PortfolioSection = () => {
    return (
        <section className={styles['portfolio_section']}>
            <div className={styles['portfolio_section_main_content']}>
                <h1 className={styles['portfolio_section_title']}>My latest <span>Projects</span></h1>
                <p className={styles['portfolio_section_desc']}>Here are some of my latest projects to share with you.</p>
                <FilledButton className={styles['portfolio_section_btn']}>Show More</FilledButton>
            </div>  
            <div className={styles['portfolio_section_main_desc']}>
                <PortfolioList />
            </div>
        </section>
    )
}

export default PortfolioSection;