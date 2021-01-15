import { createOvermind, IAction, IConfig, IOnInitialize } from 'overmind';
import { createHook } from 'overmind-react';
import { merge, namespaced } from 'overmind/config';
import * as actions from './actions';
import * as effects from './effects';
import * as editor from './namespaces/editor';
import * as preferences from './namespaces/preferences';
import { onInitialize } from './onInitialize';
import { state } from './state';

export const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects,
  },
  namespaced({
    editor,
    preferences,
  })
);

export const overmind = createOvermind(config);

export const useOvermind = createHook<Config>();

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Config
  extends IConfig<{
    state: typeof config.state;
    actions: typeof config.actions;
    effects: typeof config.effects;
  }> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OnInitialize extends IOnInitialize<Config> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}
