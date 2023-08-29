import styles from './ITCommunity.module.scss';

const ITCommunity = () => {

    return (
        <section className={ styles['itcommunity_section'] }>
            <div className={ styles['itcommunity_section_main_content'] }>
                <h1 className={ styles['itcommunity_section_title'] }><span>IT Community</span> Job Board</h1>
                <div className={ styles['itcommunity_section_desc'] }>
                    <p>A FullStack web application built from scratch. IT Community is a Job Board web application that
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
                        <p>Used Technologies:</p>
                    </ul>

                </div>
            </div>
            <div className={ styles['itcommunity_section_image'] }></div>
        </section>
    )
}

export default ITCommunity;