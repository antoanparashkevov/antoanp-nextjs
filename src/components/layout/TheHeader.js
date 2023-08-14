import styles from './TheHeader.module.scss';
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from 'next/link';

//UI components
import { Button } from "@/components/UI/BaseButton";

const HamburgerBar = styled.span`
    display: block;
    cursor: pointer;
    background-color: #CECECE;
    height: 3px;
    width: 40px;
    border-radius: 10px;
`

export const CloseBar = styled(HamburgerBar)`
    border: 3px solid #E0E0E0;
    background-color: #E0E0E0;
    position: absolute;
    transform: rotate(-45deg);
    
    &:nth-child(2) {
        transform: rotate(45deg);
    }
`

const TheHeader = () => {
    const pathName = usePathname();
    const [activateBar, updateActivateBar] = useState(false);
    
    // console.log('pathName >>> ', pathName);
    
    const toggleNavbar = () => {
        updateActivateBar((prevState) => !prevState)
    }
    
    const chooseNavButton = () => {
        
        if(activateBar) {

            return (
                <div className={styles['close_bar_btn']}>
                    <CloseBar />
                    <CloseBar />
                </div>
            )
        } else {

            return (
                <>
                    <HamburgerBar />
                    <HamburgerBar />
                    <HamburgerBar />
                </>
            )
        }
    }
    
    return (
        <nav className={`${styles['navbar']} ${activateBar ? styles['navbar_mobile_height'] : ''}`}>
            <div className={styles['navbar_title']}>
                <Link href='/'>AntoanP</Link>
            </div>
            <div className={styles['toggle_buttons']} onClick={toggleNavbar}>
                {chooseNavButton()}
            </div>
            <div className={`${styles['navbar_links']} ${activateBar ? styles['activate_bar'] : ''}`}>
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