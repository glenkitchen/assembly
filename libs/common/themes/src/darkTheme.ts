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
  fontSizes,
  fontWeights,
  space,
  sizes,
  radii,
  colors: {
    titleBar: {
      activeBackground: colors.grays[500],
      activeForeground: colors.white,
      inactiveBackground: 'rgb(28, 32, 34)',
      inactiveForeground: 'rgb(204, 204, 204)',
      border: 'rgb(45, 45, 45)',
      divider: colors.gray,
    },
  },

  // style prop functions
  menu: (active: boolean) => ({
    backgroundColor: active ? colors.grays[500] : 'rgb(28, 32, 34)',
    color: active ? colors.white : 'rgb(204, 204, 204)',
    fontSize: '0.8125rem',
  }),

  //TODO
  // fonts: {
  //   body: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  //   heading: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  // },
  // lineHeights: {
  //   body: 1.5,
  //   heading: 1.1,
  // },
  // borders: {
  //   none: 'none',
  //   thin: '1px solid',
  // },
};
