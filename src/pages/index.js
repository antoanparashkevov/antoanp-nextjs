import { Fragment } from "react";
import styled from 'styled-components';

//layout components
import TheHeader from "@/components/layout/TheHeader";
import Footer from "@/components/layout/Footer";

//styled-components
const HeaderWrapper = styled.header`
    width: 100%;
`

const MainWrapper = styled.main`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
`

const FooterWrapper = styled.footer`
    display: flex;
    height: 80px;
    border: 1px solid #92929D;
`

export default function HomePage () {
    
  return (
    <Fragment>
        <HeaderWrapper>
            <TheHeader />
        </HeaderWrapper>
        <MainWrapper>
            test
        </MainWrapper>
        <FooterWrapper>
            <Footer />
        </FooterWrapper>
    </Fragment>
  )
}

