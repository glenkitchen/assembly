import { merge, namespaced } from 'overmind/config';
import * as preferences from './namespaces/preferences';
import { state } from './state';

export const config = merge({ state }, namespaced({ preferences }));
