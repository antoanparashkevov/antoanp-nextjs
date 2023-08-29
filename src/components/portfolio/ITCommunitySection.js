import styles from './ITCommunitySection.module.scss';
import Image from 'next/image'

import ITCommunity from "../../../public/images/itcommunity.png";

const ITCommunitySection = () => {

    return (
        <section className={ styles['itcommunity_section'] }>
            <div className={ styles['itcommunity_section_main_content'] }>
                <h1 className={ styles['itcommunity_section_title'] }><span>IT Community</span> Job Board</h1>
                <div className={ styles['itcommunity_section_desc'] }>
                    <p>A <span>Full-Stack</span> web application built from scratch. IT Community is a <span>Job Board</span> web application that
                        makes it easier for the user to find their desired
                        job. It also helps companies find quality staff. </p>

                    <ul>
                        <li>
                            <p>
                                The source code is on my <span>GitHub Profile</span>:&nbsp; 
                                <a
                                    target="_blank"
                                    href="https://github.com/antoanparashkevov/it-community-react"
                                >
                                    IT Community Code
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Here you can find more about the <span>design</span>:&nbsp;
                                <a 
                                    target="_blank"
                                    href="https://www.figma.com/file/tqyxHF9RfEQyLEMCzFDvhz/it-community"
                                >
                                    IT Community Design
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                className={ styles['itcommunity_section_image'] }
                onClick={
                    (e)=> window.open(
                        'https://itcommunity.vercel.app',
                            '_blank'
                    )
                }
            >
                <Image 
                    src={ITCommunity}
                    alt='ITCommunity Image'
                />
            </div>
        </section>
    )
}

export default ITCommunitySection;