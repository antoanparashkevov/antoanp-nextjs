import styles from "./FindFreelancerSection.module.scss"
import Image from "next/image";

import FindFreelancer from "../../../public/images/findfreelancers.png";

const FindFreelancerSection = () => {

    return (
        <section className={ styles['findfreelancer_section'] }>
            <div className={ styles['findfreelancer_section_main_content'] }>
                <h1 className={ styles['findfreelancer_section_title'] }><span>Find A Freelancer</span> Jobs Search Engine
                </h1>
                <div className={ styles['findfreelancer_section_desc'] }>
                    <p>A <span>Full-Stack</span> web application for easily finding <span>a freelancer</span> that
                        allows users to contact them or to
                        register themselves as a freelancer. With its minimalistic design, the application is easy to
                        manage and accessible. Written on <span>Angular</span> and <span>TypeScript</span>. Other
                        technologies are used such as <span>NodeJS</span> web server and <span>MongoDB</span> Database.</p>

                    <ul>
                        <li>
                            <p>
                                The source code is on my <span>GitHub Profile</span>:&nbsp;
                                <a
                                    target="_blank"
                                    href="https://github.com/antoanparashkevov/find-a-freelancer-angular"
                                >
                                    Find A Freelancer Code
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={ styles['findfreelancer_section_image'] }
                onClick={
                    (e) => window.open(
                        'https://findfreelancers.vercel.app',
                        '_blank'
                    )
                }
            >
                <Image
                    src={ FindFreelancer }
                    alt='FindFreelancer Image'
                    placeholder='blur'
                />
            </div>
        </section>
    )
}

export default FindFreelancerSection;