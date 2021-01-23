# Components

- Avoid building base components. Use pre-built components from component libraries.
- Choose a component in this order of priority:

  - Use a [Material UI](https://material-ui.com) component. Material UI is the base component, theming and styling solution.
  - Use a component from another library if Material UI does not provide the component or the Material UI component is not as useful as the third-party component. (Not just slightly less useful, but materially less useful.)
  - Use [Styled Components](https://styled-components.com/) to create components that are not provided by Material-UI or any other third-party library. Generally these should only be layout components. This should always be a last resort and only necessary for rare use cases.

# Themes

- Avoid building a theme solution. Use [Material UI](https://material-ui.com) as the base theming solution.

- Allow a tenant to use a [Material UI](https://material-ui.com) theme or a non-Material UI theme:
  - Material UI Dark
  - Material UI Light
  - Assembly Dark (Similar to CodeSandbox Dark)
- Customise a Material UI theme to implement a non-Material UI theme.

# Styles

- Use Styled Components to create base components not provided by Material UI or another third-party library.

- Use [Styled Components](https://styled-components.com/) to wrap a Material UI components or third-party component in a style. This only need to be done for a non-Material UI style that can't be implemented in the theme.

# Appendix. Implement Material UI Theme Solution

Use the Material UI `createMuiTheme` function to create a theme object:

- Use overrides to style Material UI components with a non-Material UI Style (A)
- Use custom theme properties to style Non-Material UI components with a non-Materal UI Style (B)

Wrap the app in the Material UI `MuiThemeProvider` which provides a theme to the all components in the application.

Get the theme name from Overmind, and pass it to a `makeTheme` function which:

- Customizes the theme by theme name
- Calls `createMuiTheme` to create a theme object
- Assigns the theme object to the `MuiThemeProvider.theme` property

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
- Ant Design Menu ()
- CodesandBox Collapse
- Box
- Flex (Use Grid)
- FullScreen
- List/Tree
- Content
- Browser/JSON
