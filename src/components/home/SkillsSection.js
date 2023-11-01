import styles from './SkillsSection.module.scss';



//static text
import { skillParts } from "@/util/data/skillParts";

//UI components
import Icon from "@/components/UI/Icon";
import Badge from "@/components/UI/Badge";

const SkillsSection = () => {

    return (
        <section className={ styles['skills_section'] }>
            <div className={ styles['skills_section_grid'] }>
                {
                    skillParts.map(skillPart => {
                        return (
                            <article key={skillPart.name} className={ styles['skills_section_grid_item'] }>
                                <div className={styles['skills_section_grid_item_icon']}>
                                    <Icon
                                        iconSrc={skillPart.iconSrc}
                                        iconAlt={skillPart.name}
                                        iconWidth={30}
                                        iconHeight={30}
                                    />
                                </div>
                                <header className={ styles['skills_section_grid_item_header'] }>{ skillPart.name }</header>
                                <p className={ styles['skills_section_grid_item_para'] }>
                                    {skillPart.description}
                                </p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SkillsSection;