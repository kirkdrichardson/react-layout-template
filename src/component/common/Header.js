// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Sidebar from 'component/common/Sidebar';

import {web, tablet, mobile} from 'common/Style';
import { media } from 'common/Breakpoints';

type Props = {||};


class Header extends React.Component<Props> {
    render() {
        return (
            <HeaderWrapper>
                <SidebarWrapper>
                    <Sidebar />
                </SidebarWrapper>
            </HeaderWrapper>
        );
    }
}


const HeaderWrapper = styled.div`
    border: 5px solid red;

    background: red;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    height: ${web.headerHeight}px;
    
    ${media.desktop`background: dodgerblue;`}
    
    ${media.tablet`
    background: mediumseagreen;
    height: ${tablet.headerHeight}px;
    `}
    
    
    ${media.mobile`
    background: palevioletred;
    height: ${mobile.headerHeight}px;
    
    `}
`;

const SidebarWrapper = styled.div`
    margin-right: auto;
    margin-left: 20px;
`;


export default Header;