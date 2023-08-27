import styles from './CertificationSection.module.scss';

const CertificationSection = () => {

    return (
        <section className={ styles['certification_section'] }>
            <div className={ styles['certification_section_main_content'] }>
                <h1 className={ styles['certification_section_title'] }>
                    Solid JavaScript and Node JS knowledge gained from a Software Academy
                </h1>
                <p className={ styles['certification_section_desc'] }>
                    I admit that I learned the most from the real environment, and not so much from the theory and the
                    partial practices in the
                    academy. When developing a real project for a client, you face many obstacles. Only theory cannot
                    help you to solve all problems. But without theory you will not know how to describe the problem and
                    find a solution for it. You can see my certificates obtained during my studies at the academy on
                    this section.
                </p>
            </div>
            <div className={ styles['certification_section_certifications_list'] }>

            </div>
        </section>
    )
}

export default CertificationSection;