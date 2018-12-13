// @flow

import { css } from 'styled-components';


type SizeType = 'desktop' | 'tablet' | 'mobile';

const sizes: {[SizeType]: number} = {
    desktop: 992,
    tablet: 768,
    mobile: 576,
  };

  // Iterate through the sizes and create a media template
  export const media = Object.keys(sizes).reduce((acc, label: SizeType) => {
    acc[label] = (...args: Array<any>) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})

  
//   const Content = styled.div`
//     height: 3em;
//     width: 3em;
//     background: papayawhip;
  
//     /* Now we have our methods on media and can use them instead of raw queries */
//     ${media.desktop`background: dodgerblue;`}
//     ${media.tablet`background: mediumseagreen;`}
//     ${media.phone`background: palevioletred;`}
//   `;
  
//   render(
//     <Content />
//   );

