// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import { media } from 'common/Breakpoints';
import {web, tablet, mobile} from 'common/Style';


type State = {
    open: boolean
};

class Sidebar extends React.Component<{}, State> {
    state = { open: false };

    toggleSidebar = (): void => {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }

    render() {
        const { open } = this.state;

        return (
            <div>
                <button onClick={this.toggleSidebar}>open</button>
                {open &&
                    <SidebarWrapper>
                        Nav elements here
                    </SidebarWrapper>
                }
            </div>
        );
    }
}

const SidebarWrapper = styled.div`
border: 5px solid blue;

  position: fixed;
  left: 0;
  top:  ${web.headerHeight}px;
  bottom: 0;
  width: ${web.sidebarWidth}px;
  z-index: 3;
  box-sizing: border-box;

  ${media.desktop`background: dodgerblue;`}
  
  ${media.tablet`
  background: mediumseagreen;
  top: ${tablet.headerHeight}px;
  `}
  
  
  ${media.mobile`
  background: palevioletred;
  top: ${mobile.headerHeight}px;
  
  `}
`;


export default Sidebar;