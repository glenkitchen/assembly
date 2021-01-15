import { Settings } from '@assembly/common/types';

type State = {
  settings: Settings;
};

export const state: State = {
  settings: {
    theme: 'dark',
    zenMode: false,
  },
};
