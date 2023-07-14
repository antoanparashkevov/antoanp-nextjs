import styled from 'styled-components';
import { Fragment } from "react";
import Image from 'next/image';

//layout components
import TheHeader from "@/components/layout/TheHeader";
import Footer from "@/components/layout/Footer";

//gradient image
import Gradient from '../../../public/images/gradient.svg';

//styled-components
const ImageWrapper = styled(Image)`
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
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

const HeaderWrapper = styled.header`
    width: 100%;
`

const FooterWrapper = styled.footer`
    display: flex;
    min-height: 80px;
    border: 1px solid #92929D;
`

const Layout = ({children}) => {
    return (
        <Fragment>
            <ImageWrapper src={Gradient} alt='gradient'/>
            <HeaderWrapper>
                <TheHeader />
            </HeaderWrapper>
            <MainWrapper>
                {children}
            </MainWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </Fragment>
    )
}

export default Layout