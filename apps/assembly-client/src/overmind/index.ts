import { createOvermind, IConfig, IOnInitialize } from 'overmind';
import { merge, namespaced } from 'overmind/config';
import * as preferences from './namespaces/preferences';
import { state } from './state';
import { onInitialize } from './onInitialize';

export const config = merge(
  { onInitialize, state },
  namespaced({ preferences })
);

export const overmind = createOvermind(config);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Config
  extends IConfig<{
    state: typeof config.state;
    actions: typeof config.actions;
    effects: typeof config.effects;
  }> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OnInitialize extends IOnInitialize<Config> {}
