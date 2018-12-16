// @flow

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/common/Header';
import Home from 'component/home/Home';
import Shapes from 'component/shapes/Shapes';
import Color from 'component/color/Color';
import Motion from 'component/motion/Motion';
import Systems from 'component/systems/Systems';
import NoMatchingRoute from 'component/error/NoMatchingRoute';

// import styled from 'styled-components';
//
// import Color from 'common/Color';
// import Style from 'common/Style';


import {
  DeviceEnums,
  AppContainer,
  MainContent
} from 'common/MainLayout';


type RouteType = {
  path: string,
  component: React.ElementType,
  exact: boolean
};

const routes: RouteType[] = [
  {
      path: '/',
      component: Home,
      exact: true
  },
  {
      path: '/shapes',
      component: Shapes,
      exact: true
  },
  {
      path: '/color',
      component: Color,
      exact: true
  },
  {
      path: '/motion',
      component: Motion,
      exact: true
  },
  {
      path: '/systems',
      component: Systems,
      exact: true
  }
];

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


class App extends React.Component<{}, State> {
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
    // const { device } = this.state;
    
    console.log(`w: ${this.state.screenWidth} || h: ${this.state.screenHeight}`);

    return (
        <AppContainer>
            <Header />
            <MainContent>
                <Switch>
                    {routes.map(route => 
                        <Route
                          key={route.path}
                          path={route.path}
                          component={route.component}
                          {...this.props}
                          exact={route.exact} />
                    )}
                <Route path='/' component={NoMatchingRoute} />
                </Switch>
            </MainContent>
        </AppContainer>        
    );
  }
}


export default App;
