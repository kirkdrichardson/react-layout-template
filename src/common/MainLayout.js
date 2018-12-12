// @flow
import styled, {css} from 'styled-components';

// import Color from './common/Color';
import {web, tablet, mobile} from './Style';

export const DeviceEnums = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE'
};


// TODO - rewrite as styled components theme https://www.styled-components.com/docs/advanced


export const AppContainer = styled.div`
border: 5px solid blue;

  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const Header = styled.div`
border: 5px solid red;

  background-color: green;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 4;
  height: ${props => props.device === DeviceEnums.MOBILE ? mobile.headerHeight : web.headerHeight}px;

`;

// export const MobileHeader = styled(Header)`
//   height: ${mobile.headerHeight}
// `;


export const MainContent = styled.div`
border: 5px solid purple;

  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${props => props.device === DeviceEnums.MOBILE ? mobile.bodyPadding : web.bodyPadding}px;
  padding-top: ${web.headerHeight + web.bodyPadding}px;
  padding-left: ${props => props.device === DeviceEnums.DESKTOP ? web.sidebarWidth + web.bodyPadding : web.bodyPadding}px;
  box-sizing: border-box;
  background-color: #222;
  color: white;
  font-size: 30px;
  z-index: 2;
  ${props => {
    if (props.device) {
      if (props.device === DeviceEnums.DESKTOP) {
        console.warn(props.device)

        return css`
          background-color: 'red'
        `;
      }
    }
  }}
`;

export const Sidebar = styled.div`
border: 5px solid blue;

  position: absolute;
  left: 0;
  top:  ${web.headerHeight}px;
  bottom: 0;
  width: ${web.sidebarWidth}px;
  z-index: 3;
  box-sizing: border-box;
`;
