import styles from './TheHeader.module.scss';
import Link from 'next/link';
import { usePathname } from "next/navigation";

//UI components
import { Button } from "@/components/UI/BaseButton";

const TheHeader = () => {
    const pathName = usePathname();
    
    console.log('pathName >>> ', pathName);
    
    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar_title']}>
                <Link href='/'>AntoanP</Link>
            </div>
            <div className={styles['navbar_links']}>
                <ul role='list' className={styles['navbar_list']}>
                    <li className={styles['navbar_link']}>
                        <Link 
                            className={
                                pathName.startsWith('/about') ? styles['active'] : ''
                            }
                            href='/about'
                        >
                            About
                        </Link>
                    </li>  
                    <li className={styles['navbar_link']}>
                        <Link 
                            className={
                                pathName.startsWith('/skills') ? styles['active'] : ''
                            } 
                            href='/skills'
                        >
                            Skills
                        </Link>
                    </li> 
                    <li className={styles['navbar_link']}>
                        <Link 
                            className={
                                pathName.startsWith('/portfolio') ? styles['active'] : ''
                            } 
                            href='/portfolio'
                        >
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles['cv_button_wrapper']}>
                <Button>Download CV</Button>
            </div>
        </nav>
    )
}


export default TheHeader;