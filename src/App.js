import React, { Component } from 'react';
// import styled from 'styled-components';
//
// import Color from './common/Color';
// import {web} from './common/Style';

import { AppContainer, Header, MainContent, Sidebar } from './common/MainLayout';

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
        <Sidebar />
        <MainContent>
          Here's some content
        </MainContent>
      </AppContainer>
    );
  }
}


export default App;
