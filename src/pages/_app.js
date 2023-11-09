import { Fragment } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { Outfit } from "next/font/google";
import styled from "styled-components";

import '@/styles/globals.scss'

//font
const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '700'],
})

//static image
import Gradient from '../../public/images/gradient.svg';

//components
import TheHeader from "@/components/layout/TheHeader";
import Footer from "@/components/layout/Footer";

const ImageWrapper = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const HeaderWrapper = styled.header`
    width: 100%;
`

const MainWrapper = styled.main`
    display: flex;
    padding: 2rem 6rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    
    @media (max-width: 1000px) {
        padding: 2rem 1rem;
    }
`

const FooterWrapper = styled.footer`
    display: flex;
    min-height: 80px;
    border-top: 1px solid #92929D;
`

export default function App({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <title>Expert Web-Development Services</title>
                <meta 
                    name='description' 
                    content="Let's Create Your Dream-Looking Website"
                />
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            </Head>
            <ImageWrapper src={Gradient} alt='gradient' />
            <HeaderWrapper className={outfit.className}>
              <TheHeader />
            </HeaderWrapper>
            <MainWrapper className={outfit.className}>
              <Component {...pageProps} />
            </MainWrapper>
            <FooterWrapper className={outfit.className}>
              <Footer />
            </FooterWrapper>
        </Fragment>
    )
}
