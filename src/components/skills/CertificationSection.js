import styles from './CertificationSection.module.scss';

//data
import certificates from "@/util/data/certificates";

//components
import ScrollableListWrapper from "@/components/UI/ScrollableListWrapper";

const CertificationSection = () => {

    return (
        <section className={ styles['certification_section'] }>
            <div className={ styles['certification_section_main_content'] }>
                <h1 className={ styles['certification_section_title'] }>
                    <span>JavaScript</span> and <span>Node JS</span> knowledge
                </h1>
                <p className={ styles['certification_section_desc'] }>
                    Think of <span>JavaScript</span> as the interactive tool in my kit that brings your website to live.
                    It&apos;s like the <span>energy source of the web</span>, allowing me to
                    create <span>interactive</span>, <span>responsive</span>, and <span>functional features</span> for
                    your site. Whether it&apos;s a user-friendly design, real-time updates, or forms that work perfectly
                    - <span>JavaScript</span> is the core of these dynamic elements.
                </p>
            </div>
            <div className={ styles['certification_section_certifications_list'] }>
                <ScrollableListWrapper listData={ certificates }/>
            </div>
        </section>
    )
}

export default CertificationSection;