// Styled System Theme keys https://styled-system.com/css
import {
  colors,
  fontSizes,
  fontWeights,
  sizes,
  space,
  radii,
} from './design-language';

export const darkTheme = {
  colors: {
    ...colors,
    titleBar: {
      activeBackground: 'rgb(28, 32, 34)',
      activeForeground: 'rgb(204, 204, 204)',
      borderColor: 'rgb(45, 45, 45);',
    },
  },
  fontSizes,
  fontWeights,
  space,
  sizes,
  radii,

  fonts: {
    body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  borders: {
    none: 'none',
    thin: '1px solid',
  },
};
