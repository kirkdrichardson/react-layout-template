// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from 'common/Breakpoints';
import {web, tablet, mobile} from 'common/Style';
import Color from 'common/Color';


type Props = {
    routes: RouteType[]
};

type State = {
    open: boolean
};

const SidebarListItem = ({path, data}: {path: string, data: SidebarDataType}): React.Node => (
    <SidebarListItemWrapper>
        <StyledLink to={path}>
            <SidebarIcon className='material-icons'>{data.icon}</SidebarIcon>
            <span>{data.name}</span>
        </StyledLink>
    </SidebarListItemWrapper>
);


// used to toggle scroll

class Sidebar extends React.Component<Props, State> {
    state = { open: false };

    // add an event listener to autoclose sidebar when the sidebar is open
    componentDidUpdate(_: {}, prevState: State) {
        if (prevState.open !== this.state.open) {
            if (this.state.open) {
                document.addEventListener('click', this.closeSidebar);
            } else {
                document.removeEventListener('click', this.closeSidebar);
            }
        }
    }

    // sidebar should always remain mounted, but as a memory-leak preventing safety measure, remove any lingering event listener
    componentWillUnmount() {
        document.removeEventListener('click', this.closeSidebar);
    }

    // open & close methods are split for transitions & event listeners 
    closeSidebar = (): void => {
        if (this.state.open) {
            document.getElementsByTagName('main')[0].style.overflow = '';
            this.setState({ open: false });
        }
    }

    openSidebar = (): void => {
        document.getElementsByTagName('main')[0].style.overflow = 'hidden';
        this.setState({ open: true });
    }

    render() {
        const { open } = this.state;

        return (
            <div>

                <Button onClick={this.state.open ? this.closeSidebar : this.openSidebar}>
                    <TriggerIcon className="material-icons">view_module</TriggerIcon>
                </Button>

                {open &&
                    <SidebarWrapper>
                        <StyledList>
                            {this.props.routes.map(route =>
                                <>
                                    <SidebarListItem key={route.path} path={route.path} data={route.sidebar} />
                                    { route.path === '/' && <Divider />}
                                </>
                            )}
                        </StyledList>
                    </SidebarWrapper>
                }

                {open && <FixedPositionOverlay /> }
            </div>
        );
    }
}

const Button = styled.button`
    background: transparent;
    margin: 0;
    border: 0;
`;

const TriggerIcon = styled.i`
    font-size: 50px;
    color: ${Color.white};

    :hover {
        opacity: 0.8;
    }
`;

const SidebarWrapper = styled.div`
    background: ${Color.sidebarBg};
    position: fixed;
    left: 0;
    top:  ${web.headerHeight}px;
    bottom: 0;
    width: 300px;
    z-index: 3;
    box-sizing: border-box;

    ${media.tablet`
    top: ${tablet.headerHeight}px;
    `}

    ${media.mobile`
    top: ${mobile.headerHeight}px;
    `}
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
`;

const SidebarListItemWrapper = styled.li`
    color: ${Color.invertedText};
    font-size: 24px;
    font-weight: bold;
    display: flex;
`;

const Divider = styled.div`
    height: 1px;
    background: ${Color.borderLighter};
    margin: 18px 0;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 20px 20px;
    color: ${Color.invertedText};
    text-decoration: none;
    :visited {
        color: ${Color.invertedText};
    }
    :hover {
        background-color: ${Color.sidebarHover}
    }
`;

const SidebarIcon = styled.i`
    font-size: 40px;
    margin-right: 26px;
`;

const FixedPositionOverlay = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background: #222;
    opacity: 0.6;
    z-index: -99;

    top:  ${web.headerHeight}px;
     ${media.tablet`top: ${tablet.headerHeight}px;`}
    ${media.mobile`top: ${mobile.headerHeight}px;`}
`;


export default Sidebar;