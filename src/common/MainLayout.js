import styled from 'styled-components';

// import Color from './common/Color';
import {web} from './Style';

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
  height: ${props => props.height ? props.height : web.headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 4;
`;

export const MainContent = styled.div`
border: 5px solid purple;

  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${web.bodyPadding}px;
  padding-top: ${web.headerHeight + web.bodyPadding}px;
  padding-left: ${web.sidebarWidth + web.bodyPadding}px;
  box-sizing: border-box;
  background-color: #222;
  color: white;
  font-size: 30px;
  z-index: 2;
`;

export const Sidebar = styled.div`
border: 5px solid blue;

  position: absolute;
  left: 0;
  top: ${web.headerHeight}px;
  bottom: 0;
  width: ${web.sidebarWidth}px;
  z-index: 3;
  box-sizing: border-box;
`;
