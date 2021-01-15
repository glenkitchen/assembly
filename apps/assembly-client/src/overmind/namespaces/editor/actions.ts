import { Action } from '../..';

export const toggleStatusBar: Action = ({ state }) => {
  state.editor.hideStatusBar = !state.editor.hideStatusBar;
};
