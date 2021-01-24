# Components

Design Principles

- Avoid building base components. (We are not component authors). Use existing component libraries.
- Ensure consistent styling and theming even though we use components across different libararies.

Tech Stack

- [Material UI](https://material-ui.com)
- Miscellaneous third-party component libraries
- [Styled Components](https://styled-components.com/)
- [Styled System css prop](https://styled-system.com/css/)

Choose a component in this order of priority:

- Use Material UI as the base component library.
- Use a third-party component if Material UI does not provide the component or the Material UI component is not as useful as the third-party component. (Not just slightly less useful, but materially less useful)
- Create a custom component if there is no equivalent Material UI component or third-party component.

Style and theme components as follows:

- Apply styling by wrapping Material UI and third-party components with a Styled Component.
- Use Styled Components to create custom components.
- Apply theme variables to styles with the Styled System `css` prop.

# Appendix. Wrap a Material UI Component with a Styled Component (1)

- https://medium.com/sipios/use-styled-components-with-material-ui-react-e0759f9a15ce

# Appendix. Wrap an Ant Design Component with a Styled Component (2)

- https://gist.github.com/newswim/fa916c66477ddd5952f7d6548e6a0605

# TODO

- Box
- FullScreen (Use Grid) HERE
- Flex (Use Grid) FROM HERE

- Avatar
- Button
- IconButton
- Tooltip
- Typography
- Menu

- Ant Design Menu

- CodesandBox Collapse. Layout From Here
- List/Tree
- Content
- Browser/JSON

# Themes TODO FROM HERE (Still Using Styled Components Theme with CSS)

- Avoid building a theme solution. Just use [Material UI](https://material-ui.com) theming.

- Although Material UI provides the theming, the theme does not have to be styled as a Material UI theme. It can can also be styled with a non-Material UI look and feel. The available themes are:
  - Material UI Dark
  - Material UI Light
  - Assembly Dark
- The non-Material UI theme is implemented as a Material UI theme with overrides.

# Appendix. Implement the Material UI Theme Solution

Get the theme name from Overmind state, and pass it to a `makeTheme` function which:

- Calls `createMuiTheme` to create a customized theme object
- Assigns the theme object to the `MuiThemeProvider.theme` property

Use the Material UI `createMuiTheme` function to create a theme object. For the non-Material theme:

- Customize Material UI components with `styleOverrides`, `defaultProps` and theme variables.
- Customize non-Material UI components with custom theme variables.

Wrap the app in the Material UI `MuiThemeProvider` which provides the theme to the all components in the application.
