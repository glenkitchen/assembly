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
    ...colors,
    titleBar: {
      activeBackground: colors.grays[500],
      activeForeground: colors.white,
      inactiveBackground: 'rgb(28, 32, 34)', //
      inactiveForeground: 'rgb(204, 204, 204)', //
      // border: 'rgb(45, 45, 45)', //
      divider: colors.grays[400],
    },
    button: {
      background: 'rgb(17, 21, 24)',
      foreground: 'rgb(192, 192, 192)',
      //hoverBackground: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), ${uiColors.button.background}`,
      hoverBackground: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
    },
    secondaryButton: {
      //background: uiColors.input.background,
      //foreground: uiColors.input.foreground,
      //hoverBackground: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), ${uiColors.sideBar.border}`,
    },
    dangerButton: {
      background: colors.reds[300],
      foreground: 'white',
      //hoverBackground: `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), ${designLanguage.colors.reds[300]}`,
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
