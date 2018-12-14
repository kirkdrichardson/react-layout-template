// @flow
import styled, {css} from 'styled-components';

// import Color from './common/Color';
import {web, mobile} from 'common/Style';


export const DeviceEnums: {[DeviceEnumType]: DeviceEnumType} = {
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
        return css`
          background-color: 'red'
        `;
      }
    }
  }}
`;
