import React, { Fragment } from "react";
import styles from './SkillsSection.module.scss';

//static text
import { skillParts } from "@/util/data/skillParts";

//static images
import MoneyBack from '../../../public/images/money_back.png';

//UI components
import Icon from "@/components/UI/Icon";
import Image from "next/image";
import CountDown from "@/components/UI/CountDown";

const SkillsSection = () => {

    return (
        <section className={ styles['skills_section'] }>
            <strong className={ styles['skills_section_main_intro'] }>
                Besides <span>building</span> your website from <span>SCRATCH</span>, you will also get:
            </strong>
            <div className={ styles['skills_section_grid'] }>
                {
                    skillParts.map(skillPart => {
                        return (
                            <article key={ skillPart.name } className={ styles['skills_section_grid_item'] }>
                                <div className={ styles['skills_section_grid_item_icon'] }>
                                    <Icon
                                        iconSrc={ skillPart.iconSrc }
                                        iconAlt={ skillPart.name }
                                        iconWidth={ 28 }
                                        iconHeight={ 28 }
                                    />
                                </div>
                                <header className={ styles['skills_section_grid_item_header'] }>
                                    { skillPart.name.map((element, index, nameArray) => {
                                        return (
                                            <Fragment key={ index }>
                                                { index % 2 === 0 ?
                                                    nameArray[index] :
                                                    <Fragment>
                                                        &nbsp;
                                                        { React.createElement('span', null, nameArray[index]) }
                                                        &nbsp;
                                                    </Fragment>
                                                }
                                            </Fragment>
                                        )
                                    }) }
                                </header>
                                <p className={ styles['skills_section_grid_item_para'] }>
                                    { skillPart.description.map((element, index, descriptionArray) => {
                                        return (
                                            <Fragment key={ index }>
                                                { index % 2 === 0 ?
                                                    descriptionArray[index] :
                                                    <Fragment>
                                                        &nbsp;
                                                        { React.createElement('span', null, descriptionArray[index]) }
                                                        &nbsp;
                                                    </Fragment>
                                                }
                                            </Fragment>
                                        )
                                    }) }
                                </p>
                            </article>
                        )
                    })
                }
            </div>
            <div className={ styles['skills_section_main_desc'] }>
                <CountDown/>
                <h1 className={ styles['skills_section_main_desc_title'] }>
                    <strong>
                        But wait, that’s not everything...
                    </strong>
                </h1>
                <p className={ styles['skills_section_main_desc_para'] }>If you sign up for a call with me over the next
                    24 hours you will also get <span><strong>2 SPECIAL BONUSES</strong></span> in addition to your website:</p>
                <ul>
                    <li className={ styles['skills_section_main_desc_list_item'] }>
                        <strong>
                            Bonus 1: <span>SEO Optimization</span> or <span>SEO</span> in short
                        </strong>
                        <p>
                            - Want to shine in the vast web galaxy? <span>Our SEO service is your</span> guiding star. <span>We ensure your website</span>&nbsp;
                            shows up at the top of search results. It&apos;s like having a spotlight on your website,
                            <span> attracting more visitors</span>.
                        </p>
                    </li>
                    <li className={ styles['skills_section_main_desc_list_item'] }>
                        <strong>
                            Bonus 2: <span>Responsive Design</span>
                        </strong>
                        <p>
                            - In the digital age, your website needs to be a <span>chameleon</span>. 
                            That&apos;s where responsive design <span>shines</span>. We ensure your website looks great on <span>desktops, tablets, and mobiles</span>,
                            giving users a fantastic experience no matter where they are.
                        </p>
                    </li>
                </ul>
                <div className={ styles['skills_section_main_outro'] }>
                    <Image
                        src={ MoneyBack }
                        alt='Money Back'
                        width={ 250 }
                        height={ 250 }
                        placeholder='blur'
                    />
                    <p>
                        And of course, If for some reason you are not satisfied with ANY of my services, you will get
                        a&nbsp;
                        <strong>100% refund</strong> of your money in the blink of an eye.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;