import styled from 'styled-components';
import { Fragment } from "react";

//layout components
import TheHeader from "@/components/layout/TheHeader";
import Footer from "@/components/layout/Footer";

//styled-components
const MainWrapper = styled.main`
    display: flex;
    padding: 16rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    border: 1px solid red;
`

const HeaderWrapper = styled.header`
    width: 100%;
`

const FooterWrapper = styled.footer`
    display: flex;
    height: 80px;
    border: 1px solid #92929D;
`

const Layout = ({children}) => {
    return (
        <Fragment>
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