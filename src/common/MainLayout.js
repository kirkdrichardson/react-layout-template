// @flow
import styled from 'styled-components';

import Color from 'common/Color';
import {web, tablet, mobile} from 'common/Style';
import { media } from 'common/Breakpoints';


export const DeviceEnums: {[DeviceEnumType]: DeviceEnumType} = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE'
};


// TODO - rewrite as styled components theme https://www.styled-components.com/docs/advanced


export const AppContainer = styled.div`
  min-height: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${Color.primaryBg};
  overflow: auto;
`;

export const MainContent = styled.main`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${props => props.device === DeviceEnums.MOBILE ? mobile.bodyPadding : web.bodyPadding}px;
  padding: ${web.headerHeight + web.bodyPadding}px ${web.bodyPadding}px;
  max-width: 1200px;
  box-sizing: border-box;
  color: ${Color.primaryText};
  font-size: 24px;
  z-index: 2;

  ${media.tablet`
  padding: ${tablet.headerHeight + tablet.bodyPadding}px ${tablet.bodyPadding}px;
  `}

  ${media.mobile`
  padding: ${mobile.headerHeight + mobile.bodyPadding}px ${mobile.bodyPadding}px;
  `}
`;
