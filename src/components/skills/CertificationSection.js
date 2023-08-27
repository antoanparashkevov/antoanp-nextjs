import styles from './CertificationSection.module.scss';

import ITCommunity from '../../../public/images/itcommunity.png'

//components
import ListWrapper from "@/components/home/ListWrapper";

const CertificationSection = () => {
    
    const certificates = [
        // TODO replace with real certificates
        {
            source: ITCommunity,
            name: 'Google',
            url: 'https://google.com'
        }
    ]

    return (
        <section className={ styles['certification_section'] }>
            <div className={ styles['certification_section_main_content'] }>
                <h1 className={ styles['certification_section_title'] }>
                    Solid <span>JavaScript</span> and <span>Node JS</span> knowledge gained from a Software Academy
                </h1>
                <p className={ styles['certification_section_desc'] }>
                    I admit that I learned the most from the <span>real environment</span>, and not so much from the
                    theory and the
                    partial practices in the
                    academy. When developing a <span>real project</span> for a client, you face many obstacles. Only theory cannot
                    help you to solve all problems. But without theory you will not know how to describe the problem and
                    find a solution for it. You can see my <span>certificates</span> obtained during my studies at the <span>academy</span> on
                    this section.
                </p>
            </div>
            <div className={ styles['certification_section_certifications_list'] }>
                <ListWrapper listData={ certificates }/>
            </div>
        </section>
    )
}

export default CertificationSection;