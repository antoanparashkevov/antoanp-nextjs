import styles from './BackendSection.module.scss';
import Image from 'next/image';

import NodeJS from '../../../public/images/nodejs.webp';


const BackendSection = () => {

    return (
        <section className={ styles['backend_section'] }>
            <div className={ styles['backend_section_main_content'] }>
                <h1 className={ styles['backend_section_title'] }>
                    My <span>Backend</span> solution would be <span>NodeJS</span>
                </h1>
                <p className={ styles['backend_section_desc'] }>
                    <span>One</span> language - <span>Two</span> environments. That&apos;s why I love JavaScript because
                    it can be executed
                    both <span>on the server</span> and <span>on the client</span>. <span>Express.js</span> is just a
                    <span>framework</span> for <span>NodeJS</span> which targets backend applications but I will use the
                    framework to build a <span>REST
                    API</span>. If you are wondering what exactly means REST API, this is an
                    <span>architecture (pattern)</span> for <span>client-server</span> communication over <span>HTTP</span>. 
                </p>
            </div>
            <div className={ styles['backend_section_image'] }>
                <Image 
                    src={NodeJS}
                    alt='NodeJS Image'
                />
            </div>
        </section>
    )
}

export default BackendSection;