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
    header: {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'rgb(204, 204, 204)',
      activeBackgroundColor: colors.grays[500],
      activeColor: colors.white,
      borderColor: colors.grays[400],
    },
    editor: {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'rgb(204, 204, 204)',
      borderColor: colors.grays[400],
    },
    navigationBar: {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'rgb(204, 204, 204)',
      borderColor: colors.grays[400],
    },
    statusBar: {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'rgb(204, 204, 204)',
      borderColor: colors.grays[400],
    },
    button: {
      backgroundColor: 'rgb(9, 113, 241)',
      color: 'white',
      hoverBackground:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgb(9, 113, 241)',
      disabledColor: 'rgb(192, 192, 192)',
      secondaryBackgroundColor: colors.black, //TODO ...icon
      secondaryColor: 'rgb(192, 192, 192)',
      secondaryHoverBackground:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgb(45, 45, 45)',
    },
  },

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
