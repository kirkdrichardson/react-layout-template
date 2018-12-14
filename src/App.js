// @flow

import React, { Component } from 'react';

import Header from './component/common/Header';

// import styled from 'styled-components';
//
// import Color from 'common/Color';
// import Style from 'common/Style';


import {
  DeviceEnums,
  AppContainer,
  MainContent
} from 'common/MainLayout';

// We modify the style at these breakpoints
const BreakPoint = {
  DESKTOP: 1600,
  TABLET: 800,
  MOBILE: 400
};

type State = {
  screenWidth: number,
  screenHeight: number,
  device: string // we default style to a Desktop layout
}


class App extends Component<{}, State> {
  state = {
    screenWidth: 1600,
    screenHeight: 900,
    device: DeviceEnums.DESKTOP // we default style to a Desktop layout
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // update device type if screen dimensions don't match the default
  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.screenHeight !== this.state.screenHeight
        || prevState.screenWidth !== this.state.screenWidth) {
     
      const device = this.getDevice(this.state.screenWidth, this.state.screenHeight);
      
      // safety check
      if (device) {
        this.setState({device});
      }
    }
  }

  updateWindowDimensions = (): void => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }

  getDevice = (w: number, h: number): string => {
    if (w <= BreakPoint.MOBILE) {
      return DeviceEnums.MOBILE;
    } else if (w <= BreakPoint.TABLET) {
      return DeviceEnums.TABLET;
    } else {
      return DeviceEnums.DESKTOP;
    }
  }

  render() {
    const { device } = this.state;
    
    console.log(`w: ${this.state.screenWidth} || h: ${this.state.screenHeight}`);
    
    return (
      <AppContainer>
        <Header />
        <MainContent device={device}>
          Here's some content
        </MainContent>
      </AppContainer>
    );
  }
}


export default App;
