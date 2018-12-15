// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Sidebar from 'component/common/Sidebar';

import {web, tablet, mobile} from 'common/Style';
import { media } from 'common/Breakpoints';
import Color from 'common/Color';

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
    background: ${Color.headerBg};
    border-bottom: 1px solid ${Color.border};
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
    
    ${media.tablet`
    height: ${tablet.headerHeight}px;
    `}
    
    
    ${media.mobile`
    height: ${mobile.headerHeight}px;
    `}
`;

const SidebarWrapper = styled.div`
    margin-right: auto;
    margin-left: 20px;
`;


export default Header;