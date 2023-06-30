import { Fragment } from "react";
import styled from 'styled-components';

//layout components
import TheHeader from "@/components/layout/TheHeader";

//styled-components
const HeaderWrapper = styled.header`
    width: 100%;
`


export default function HomePage () {
    
  return (
    <Fragment>
        <HeaderWrapper>
            <TheHeader />
        </HeaderWrapper>
    </Fragment>
  )
}

