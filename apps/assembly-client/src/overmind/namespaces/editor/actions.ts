import { Action } from '../..';

export const toggleNavigationBar: Action = ({ state }) => {
  state.editor.hideNavigationBar = !state.editor.hideNavigationBar;
};

export const toggleStatusBar: Action = ({ state }) => {
  state.editor.hideStatusBar = !state.editor.hideStatusBar;
};

export const setCurrentWorkspaceId: Action<{ id: string }> = (
  { state },
  { id }
) => {
  state.editor.currentWorkSpaceId = id;
};
