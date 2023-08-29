import styles from './CertificationSection.module.scss';

import ProgrammingBasics from '../../../public/images/certifications/programming_basics_certificate.png';
import ProgrammingFund from '../../../public/images/certifications/programming_fund_certificate.png';
import JSAdvanced from '../../../public/images/certifications/js_advanced_certificate.png';
import JSApps from '../../../public/images/certifications/js_apps_certificate.png';
import AngularCertification from '../../../public/images/certifications/angular_certificate.png';
import JSBackend from '../../../public/images/certifications/jsbackend_certificate.png';
import ReactCertification from '../../../public/images/certifications/reactjs_certificate.png';
import HTMLCSSCertification from '../../../public/images/certifications/html_css_certification.png';
import Diploma from '../../../public/images/diploma.png'

//components
import ScrollableListWrapper from "@/components/UI/ScrollableListWrapper";

const CertificationSection = () => {
    
    const certificates = [
        {
            source: ProgrammingBasics,
            name: 'programming_basics',
            url: 'https://softuni.bg/certificates/details/118034/c360885d'
        },
        {
            source: ProgrammingFund,
            name: 'programming_fundamentals',
            url: 'https://softuni.bg/certificates/details/129346/8988cd8f'
        },
        {
            source: JSAdvanced,
            name: 'programming_advanced',
            url: 'https://softuni.bg/certificates/details/136454/f5b4f51d'
        },
        {
            source: JSApps,
            name: 'js_apps',
            url: 'https://softuni.bg/certificates/details/139594/1d6af849'
        },
        {
            source: JSBackend,
            name: 'js_backend',
            url: 'https://softuni.bg/certificates/details/169830/1e2f6711'
        },
        {
            source: AngularCertification,
            name: 'angular',
            url: 'https://softuni.bg/certificates/details/153340/9fa54bae'
        },
        {
            source: HTMLCSSCertification,
            name: 'html_css',
            url: 'https://softuni.bg/certificates/details/163349/ee5c7527'
        },
        {
            source: ReactCertification,
            name: 'react',
            url: 'https://softuni.bg/certificates/details/168565/5d8d822a'
        },
        {
            source: Diploma,
            name: 'diploma',
            url: 'https://softuni.bg/certificates/details/171618/f81a3d56'
        },
    ]

    return (
        <section className={ styles['certification_section'] }>
            <div className={ styles['certification_section_main_content'] }>
                <h1 className={ styles['certification_section_title'] }>
                    <span>JavaScript</span> and <span>Node JS</span> knowledge
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
                <ScrollableListWrapper className='certification_section_certifications_list_wrapper' listData={ certificates }/>
            </div>
        </section>
    )
}

export default CertificationSection;