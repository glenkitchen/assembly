# Components

- Avoid building base components. Just use components from component libraries.
- Choose a component in this order of priority:

  - Use a [Material UI](https://material-ui.com) component. Material UI is the base component library.
  - Use a component from another library if Material UI does not provide the component or the Material UI component is not as useful as the third-party component. (Not just slightly less useful, but materially less useful.)
  - Use [Styled Components](https://styled-components.com/) to create components that are not provided by Material-UI or a third-party library. This should always be a last resort and only necessary for layout components or rare use cases.

# Themes

- Avoid building a theme solution. Just use [Material UI](https://material-ui.com) theming.

- Although Material UI provides the theming, the theme does not have to be styled as a Material UI theme. It can can also be styled with a non-Material UI look and feel. The available themes are:
  - Material UI Dark
  - Material UI Light
  - Assembly Dark
- The non-Material UI theme is implemented as a Material UI theme with overrides.

# Styles

- Use [Styled Components](https://styled-components.com/) to create base components not provided by Material UI or another third-party library.

- Use [Styled Components](https://styled-components.com/) to wrap a Material UI components or third-party component in a style. This only need to be done if the component needs a non-Material UI style that can't be implemented in the theme.

# Appendix. Implement the Material UI Theme Solution

Get the theme name from Overmind state, and pass it to a `makeTheme` function which:

- Calls `createMuiTheme` to create a customized theme object
- Assigns the theme object to the `MuiThemeProvider.theme` property

Use the Material UI `createMuiTheme` function to create a theme object. For the non-Material theme:

- Customize Material UI components with `styleOverrides`, `defaultProps` and theme variables.
- Customize non-Material UI components with custom theme variables.

Wrap the app in the Material UI `MuiThemeProvider` which provides the theme to the all components in the application.

# Appendix. Wrap a Material UI Component with a Styled Component (C)

- https://medium.com/sipios/use-styled-components-with-material-ui-react-e0759f9a15ce

# Appendix. Wrap an Ant Design Component with a Styled Component (D)

- https://gist.github.com/newswim/fa916c66477ddd5952f7d6548e6a0605

# Appendix. Component Listing

## [Ant Design](https://ant.design/) components

## Layout Components

# TODO

- Implement Material UI Theming
- Avatar
- Button
- IconButton
- Tooltip
- Typography
- Ant Design Menu
- CodesandBox Collapse
- Box
- Flex (Use Grid)
- FullScreen
- List/Tree
- Content
- Browser/JSON
