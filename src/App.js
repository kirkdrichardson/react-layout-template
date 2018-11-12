import React, { Component } from 'react';
import styled from 'styled-components';

import Color from './common/Color';
import {web} from './common/Style';

class App extends Component {
  state = {
    screen: {
      width: 1600,
      height: 900
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({screen: {
      width: window.innerWidth,
      height: window.innerHeight
    }});
}


  render() {
    console.log(this.state.screen)
    return (
      <AppContainer>
        <Header>Bubbles!</Header>
        <MainContent>
          Here's some content
        </MainContent>
      </AppContainer>
    );
  }
}



const AppContainer = styled.div`
border: 5px solid blue;

  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

const Header = styled.div`
border: 5px solid red;

  background-color: green;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: ${web.headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const MainContent = styled.div`
border: 5px solid purple;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${web.bodyPadding}px;
  padding-top: ${web.headerHeight + web.bodyPadding}px;
  box-sizing: border-box;
  background-color: #222;
  color: white;
  font-size: 30px;
`;


export default App;
