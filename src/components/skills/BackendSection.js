import styles from './BackendSection.module.scss';
import Image from 'next/image';

//static images
import NodeJS from '../../../public/images/nodejs.webp';

const BackendSection = () => {

    return (
        <section className={ styles['backend_section'] }>
            <div className={ styles['backend_section_main_content'] }>
                <h1 className={ styles['backend_section_title'] }>
                    My <span>Backend</span> solution would be <span>NodeJS</span>
                </h1>
                <p className={ styles['backend_section_desc'] }>
                    NodeJS is <span>amazing</span> for building web serves and I will tell you why I use exactly this
                    approach in a second. It&apos;s the dynamic conductor that
                    enables <span>smooth communication</span> between servers and clients. NodeJS propels <span>real-time updates</span>,&nbsp;
                    <span>scalable server-side solutions</span>, and <span>blazing-fast performance</span>, making it
                    the driving force for robust, data-intensive, and effortlessly expandable web applications.
                </p>
            </div>
            <div className={ styles['backend_section_image'] }>
                <Image
                    src={ NodeJS }
                    alt='NodeJS Image'
                    placeholder='blur'
                    style={ { objectFit : 'contain' } }
                    fill
                />
            </div>
        </section>
    )
}

export default BackendSection;