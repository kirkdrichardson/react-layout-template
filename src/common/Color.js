// @flow

// https://flow.org/en/docs/types/objects/#toc-objects-as-maps

const colors: {[color_property: string]: string} = {
  red: 'red',
  green: '#93A8AC',
  beige: '#A59E8C',
  wood: '#66635B',
  eggshell: '#D7CEB2',
  blue: 'blue',

  white: '#fafafa',
  mediumGray: '#eee',
  darkGray: '#4C5760',
  darkGrayDesaturated: '#222',

  get headerBg() {
    return this.eggshell;
  },
  get border() {
    return this.darkGray;
  },
  get primaryBg() {
    return this.white;
  },
  get sidebarBg() {
    return this.beige;
  },
  get primaryText() {
    return this.darkGray;
  },
  get secondaryText() {
    return this.darkGray;
  },
  get accent() {
    return this.green;
  }
};

module.exports = colors;
