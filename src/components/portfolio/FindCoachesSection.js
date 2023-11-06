import styles from './FindCoachesSection.module.scss';
import Image from 'next/image'

import FindCoachesImage from "../../../public/images/findcoaches.png";

const FindCoachesSection = () => {

    return (
        <section className={ styles['findcoaches_section'] }>
            <div className={ styles['findcoaches_section_main_content'] }>
                <h1 className={ styles['findcoaches_section_title'] }><span>Find Coaches</span> Web App</h1>
                <div className={ styles['findcoaches_section_desc'] }>
                    <p>A <span>Front-End</span> web application using <span>Firebase</span> as a <span>BaaS</span> (Backend as a Service).
                        Easy-to-use app to quickly and conveniently find the right <span>coach</span> for you. Each authenticated
                        user can register as a coach too. Almost identical as the <span>Find a Freelancer</span> project, but written
                        on <span>VueJS</span> and <span>JavaScript</span>.</p>

                    <ul>
                        <li>
                            <p>
                                The source code is on my <span>GitHub Profile</span>:&nbsp;
                                <a
                                    target="_blank"
                                    href="https://github.com/antoanparashkevov/find-coaches-vue3"
                                >
                                    Find Coaches Code
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={ styles['findcoaches_section_image'] }
                onClick={
                    (e) => window.open(
                        'https://find-coach-vue3.web.app/coaches',
                        '_blank'
                    )
                }
            >
                <Image
                    src={ FindCoachesImage }
                    alt='FindCoaches Image'
                    placeholder='blur'
                />
            </div>
        </section>
    )
}

export default FindCoachesSection;