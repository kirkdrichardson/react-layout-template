// @flow

import { desaturate, lighten } from 'polished';

// https://flow.org/en/docs/types/objects/#toc-objects-as-maps

const colors: {[color_property: string]: string} = {
  red: 'red',
  green: '#93A8AC',
  beige: '#A59E8C',
  wood: '#66635B',
  eggshell: '#D7CEB2',
  blue: 'blue',
  martinique: '#3D3A57',

  white: '#fafafa',
  mediumGray: '#eee',
  darkGray: '#4C5760',
  darkGrayDesaturated: '#222',

  get headerBg() {
    return desaturate(0.1, this.martinique);
  },
  get border() {
    return this.darkGray;
  },
  get primaryBg() {
    return this.white;
  },
  get sidebarBg() {
    return this.martinique;
  },
  get sidebarHover() {
    return lighten(0.1, this.martinique);
  },
  get primaryText() {
    return this.darkGray;
  },
  get secondaryText() {
    return this.darkGray;
  },
  get invertedText() {
    return this.white;
  },
  get accent() {
    return this.green;
  }
};

export default colors;
