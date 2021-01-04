# Assembly

CDD (Configuration-driven-development) with React

# Tech Stack

## Core Tech

- [Nx](https://nx.dev/latest/react/getting-started/getting-started) dev tools for monorepos
- [React](https://reactjs.org/docs/getting-started.html) JavaScript library for building user interfaces

## Styling and Themes

- [Styled Components](https://styled-components.com/) to style components with actual CSS in JavaScript
- [Theme UI](https://theme-ui.com/) for themes with constrained design tokens
- [Styled System](https://styled-system.com/) to write style objects with _theme-aware Styled System shortcuts_

## State Management

- React Router
- Overmind for global client state
- React Query

# Appendix

## Nx Monorepo Cheatsheet

- `npx create-nx-workspace [assembly]`
- `yarn add @nrwl-react`
- `yarn nx generate @nrwl/react:app [name]`
- `yarn nx generate @nrwl/react:lib [name] --publishable`
- `yarn publish`
