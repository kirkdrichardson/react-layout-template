import React, { Component } from 'react';
// import styled from 'styled-components';
//
// import Color from './common/Color';
import Style from './common/Style';
import { AppContainer, Header, MainContent, Sidebar } from './common/MainLayout';

const BreakPoint = {
  DESKTOP: 1600,
  TABLET: 800,
  MOBILE: 400
};

class App extends Component {
  state = {
    screenWidth: 1600,
    screenHeight: 900,
    style: Style.web
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.screenHeight !== this.state.screenHeight
//         || prevState.screenWidth !== this.state.screenWidth) {
//       const style = this.getStyle(this.state.screenWidth, this.state.screenHeight);
//
// console.warn('test')
// console.warn(style)
//       this.setState({style}, () => console.warn('test2'));
//     }
//   }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }

  getStyle = (w, h) => {
    console.log(w, h)
    if (w < BreakPoint.MOBILE) {
      return Style.mobile;
    } else if (w < BreakPoint.TABLET) {
      return Style.tablet;
    } else {
      return Style.DESKTOP;
    }
  }

  render() {
    // const { style } = this.state;
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
