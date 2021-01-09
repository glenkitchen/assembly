// Styled System Theme keys https://styled-system.com/css
import { colors, sizes, space } from './design-language';

export const darkTheme = {
  //fontSizes,
  //fontWeights,
  space,
  sizes,
  //radii,
  colors: {
    ...colors,
    button: {
      backgroundColor: colors.black,
      color: 'rgb(192, 192, 192)',
      hoverBackground:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgb(45, 45, 45)',
      disabledColor: 'rgb(192, 192, 192)',
    },
    header: {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'rgb(204, 204, 204)',
      activeBackgroundColor: 'rgb(28, 32, 34)',
      activeColor: 'rgb(204, 204, 204)',
      bordercolor: colors.grays[400],
      menuDivider: colors.grays[400],
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
