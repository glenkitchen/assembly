# Assembly

CDD (Configuration-driven-development) with React

# Tech Stack

## Core Tech

- [Nx](https://nx.dev/latest/react/getting-started/getting-started) dev tools for monorepos
- [React](https://reactjs.org/docs/getting-started.html) JavaScript library for building user interfaces

## Styling and Themes

- [Styled Components](https://styled-components.com/) to style components with actual CSS in JavaScript
- [Theme UI](https://theme-ui.com/) for themes with constrained design tokens
- [Styled System](https://styled-system.com/) to write style objects with theme-aware Styled System shortcuts

## State Management

- [React Router v6](https://reacttraining.com/blog/react-router-v6-pre/) for urls
- Overmind for global client state
- React Query

# Appendix

## Nx Monorepo Cheatsheet

- `npx create-nx-workspace [assembly]`
- `yarn add @nrwl-react`
- `yarn nx generate @nrwl/react:app [name]`
- `yarn nx generate @nrwl/react:lib [name] --publishable`
- `yarn publish`

## React Prerequisites

- [React.lazy](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) for route based code splitting?
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/) for toasts
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) for Error Boundary

## Theming
