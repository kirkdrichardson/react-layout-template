// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import {web, tablet, mobile} from './../common/Style';


type Props = {||};

class Header extends React.Component<Props> {
    render() {
        return (
            <HeaderWrapper>
                
            </HeaderWrapper>
        );
    }
}


const HeaderWrapper = styled.div`
    border: 5px solid red;

    background-color: green;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 4;
    min-height: 100px;

`;


export default Header;